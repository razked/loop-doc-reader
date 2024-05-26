import React from "react";
import { TextContent } from "@/types/types";
import { Typography, Stack } from "@mui/material";
import EditableTitle from "./EditableTitle";

const TextBlock: React.FC<TextContent> = ({ title, content }) => {
  return (
    <Stack width="100%">
      <EditableTitle title={title} />

      <Typography variant="body1">{content}</Typography>
    </Stack>
  );
};

export default TextBlock;
