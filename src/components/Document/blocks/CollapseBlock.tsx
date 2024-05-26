import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { Block, CollapseContent } from "@/types/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditableTitle from "./EditableTitle";
import { useDocumentContext } from "@/context/DocumentContext";

type CollapseBlockProps = {
  blocks: CollapseContent;
  renderBlock: (block: Block) => React.ReactNode;
};

const CollapseBlock: React.FC<CollapseBlockProps> = ({
  blocks,
  renderBlock,
}) => {
  const { title, content } = blocks;
  const { editMode } = useDocumentContext();
  const [expanded, setExpanded] = useState(true);

  return (
    <Accordion
      sx={{
        boxShadow: "none",
      }}
      expanded={editMode ? true : expanded}
      onChange={(_, expanded) => setExpanded(expanded)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <EditableTitle title={title} />
      </AccordionSummary>
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapseBlock;
