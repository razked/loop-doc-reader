import React from "react";
import { Block } from "@/types/types";
import { Grid } from "@mui/material";

type ContainerBlockProps = {
  content: Block[];
  renderBlock: (block: Block) => React.ReactNode;
};

const ContainerBlock: React.FC<ContainerBlockProps> = ({
  content,
  renderBlock,
}) => {
  return (
    <Grid container spacing={2}>
      {content.map((block, index) => (
        <Grid
          item
          key={`${block.order}-${index}-${block.type}`}
          xs={12}
          md={block.width}
          className={`document-block-type-${block.type}`}
        >
          {renderBlock(block)}
        </Grid>
      ))}
    </Grid>
  );
};

export default ContainerBlock;
