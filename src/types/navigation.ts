/** A site navigation destination. */
export interface NavItem {
  readonly label: string;
  readonly href: string;
}

/** A footer navigation column. */
export interface FooterColumn {
  readonly heading: string;
  readonly items: readonly NavItem[];
}
