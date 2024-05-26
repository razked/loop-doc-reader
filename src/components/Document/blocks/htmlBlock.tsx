import React from "react";
import { HtmlContent } from "@/types/types";

const HtmlBlock: React.FC<{ content: HtmlContent }> = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlBlock;
