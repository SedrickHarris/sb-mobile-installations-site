import { Inter, Rajdhani } from "next/font/google";

/**
 * Body face. Approved 2026-09-18, replacing the prior zero-cost system-font
 * decision. See 21-design-system.md section 27a.
 */
export const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/** Heading face. Condensed and geometric, kept visually distinct from body. */
export const headingFont = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});
