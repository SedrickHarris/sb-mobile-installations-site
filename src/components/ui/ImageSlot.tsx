import type { HubImageSlot } from "@/data/site/services-hub-images";

export type ImageSlotMode =
  | "image"
  | "decorative-fallback"
  | "development-placeholder";

interface ImageSlotProps {
  readonly slot: HubImageSlot;
  /**
   * Load the image eagerly. Only meaningful in `image` mode, and only for an
   * image that is the real above-the-fold LCP candidate. The fallback modes
   * never render an `img`, so they never preload or prioritise anything.
   */
  readonly priority?: boolean;
  /**
   * Render nothing unless an approved image exists. For optional thumbnails
   * where a row of identical decorative panels would look worse than none.
   */
  readonly omitFallback?: boolean;
  readonly className?: string;
}

/**
 * Which of the three renderings a slot gets.
 *
 * - `image`: an approved file is supplied.
 * - `development-placeholder`: no file, local development only. Shows the
 *   slot id so a designer can see what belongs there. Never in production.
 * - `decorative-fallback`: no file, production. An intentional navy panel
 *   with a route or grid motif. No slot label, no fake photo, no fake
 *   dashboard, no map.
 */
export function resolveImageSlotMode(slot: HubImageSlot): ImageSlotMode {
  if (slot.src) return "image";
  return process.env.NODE_ENV === "development"
    ? "development-placeholder"
    : "decorative-fallback";
}

/**
 * Image position with reserved dimensions, so supplying the real file later
 * changes no layout (no layout shift). See docs/24-performance-budget.md.
 */
export function ImageSlot({
  slot,
  priority = false,
  omitFallback = false,
  className = "",
}: ImageSlotProps) {
  const mode = resolveImageSlotMode(slot);
  if (omitFallback && mode !== "image") return null;

  const frame = `w-full overflow-hidden rounded-[var(--radius-lg)] ${className}`;
  const style = { aspectRatio: slot.aspectRatio };

  if (mode === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={slot.src}
        alt={slot.alt}
        width={slot.width}
        height={slot.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`${frame} h-auto object-cover`}
        style={style}
      />
    );
  }

  if (mode === "development-placeholder") {
    return (
      <div
        data-image-slot={slot.slotId}
        className={`${frame} grid place-items-center border-2 border-dashed border-border bg-surface-subtle p-6 text-center text-[length:var(--text-small)] text-ink-muted`}
        style={style}
      >
        <span>
          <strong className="block text-ink">{slot.slotId}</strong>
          {slot.role}
          <span className="mt-2 block">
            {slot.aspectRatio} - development only
          </span>
        </span>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      data-tone="dark"
      className={`${frame} border border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)]`}
      style={style}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        fill="none"
        focusable="false"
      >
        {slot.fallback === "route" ? <RouteMotif /> : <GridMotif />}
      </svg>
    </div>
  );
}

/** Two connected routes with node points. Abstract; implies no geography. */
function RouteMotif() {
  return (
    <g stroke="var(--color-accent-blue)" strokeLinecap="round" strokeLinejoin="round">
      <path d="M-10 220 C 70 220, 90 120, 170 120 S 280 200, 410 90" strokeWidth="2" opacity="0.55" />
      <path d="M-10 270 C 90 270, 120 190, 210 190 S 330 250, 410 170" strokeWidth="1.5" opacity="0.3" />
      <g fill="var(--color-surface-dark-raised)" strokeWidth="2" opacity="0.9">
        <circle cx="170" cy="120" r="6" />
        <circle cx="290" cy="196" r="6" />
        <circle cx="90" cy="180" r="4" opacity="0.7" />
      </g>
    </g>
  );
}

/** A quiet dot grid with a few emphasized points. */
function GridMotif() {
  const cols = 11;
  const rows = 8;
  const dots = [];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const emphasized = (r * 7 + c * 3) % 13 === 0;
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={20 + c * 36}
          cy={22 + r * 36}
          r={emphasized ? 3.5 : 1.75}
          fill="var(--color-accent-blue)"
          opacity={emphasized ? 0.75 : 0.28}
        />,
      );
    }
  }
  return <g>{dots}</g>;
}
