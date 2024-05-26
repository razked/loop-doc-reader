export const BLOCK_TYPES = {
  TEXT: "text",
  IMAGE: "image",
  QUOTE: "quote",
  HTML: "html",
  TABLE: "table",
  COLLAPSE: "collapse",
  CONTAINER: "container",
};

export type TextContent = {
  title: string;
  content: string;
};

export type ImageContent = {
  url: string;
  caption: string;
  alt: string;
};

export type QuoteContent = {
  content: string;
};

export type TableContent = {
  headers: string[];
  rows: string[][];
};

export type CollapseContent = {
  title: string;
  content: Block[];
};

export type HtmlContent = {
  content: string;
};

export type Block = {
  type: keyof typeof BLOCK_TYPES;
  content:
    | TextContent
    | ImageContent
    | QuoteContent
    | TableContent
    | CollapseContent
    | HtmlContent
    | ContainerContent;
  width: number;
  order: number;
};

export type ContainerContent = Block[];

export type Document = {
  blocks: Block[];
};
