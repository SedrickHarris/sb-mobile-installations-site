/** A site navigation destination. */
export interface NavItem {
  readonly label: string;
  readonly href: string;
}

/** A footer column. `items` may be empty when the column is text only. */
export interface FooterColumn {
  readonly heading: string;
  readonly items: readonly NavItem[];
  /** Plain text lines rendered above any links. Used by the company column. */
  readonly lines?: readonly string[];
}
