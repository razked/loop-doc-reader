import React from "react";
import { QuoteContent } from "@/types/types";
import { Typography, Box } from "@mui/material";

const QuoteBlock: React.FC<{ content: QuoteContent }> = ({ content }) => {
  return (
    <Box>
      <Typography variant="body1" fontStyle="italic">
        {`"${content}"`}
      </Typography>
    </Box>
  );
};

export default QuoteBlock;
