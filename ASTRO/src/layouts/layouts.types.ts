import type { MarkdownLayoutProps } from "astro";

export type Props = MarkdownLayoutProps<{
  title: string;
  pubDate: string;
  description: string;
  author: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
  file: string;
  url: string;
  [key: string]: any;
}>;
