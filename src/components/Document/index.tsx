import { useMemo } from "react";
import { useDocumentContext } from "@/context/DocumentContext";
import DocumentSkeleton from "@/ui/DocumentSkeleton";
import { Grid, Box, Typography, Stack, IconButton } from "@mui/material";
import {
  Block,
  BLOCK_TYPES,
  TextContent,
  ImageContent,
  QuoteContent,
  TableContent,
  CollapseContent,
  HtmlContent,
  ContainerContent,
} from "@/types/types";
import sortBy from "lodash/sortBy";
import capitalize from "lodash/capitalize";

import TextBlock from "@/components/Document/blocks/TextBlock";
import ImageBlock from "@/components/Document/blocks/ImageBlock";
import QuoteBlock from "@/components/Document/blocks/QuoteBlock";
import HtmlBlock from "@/components/Document/blocks/htmlBlock";
import TableBlock from "@/components/Document/blocks/TableBlock";
import ContainerBlock from "./blocks/ContainerBlock";
import CollapseBlock from "./blocks/CollapseBlock";
import AppPaper from "@/ui/AppPapper";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const index = () => {
  const { loading, documentData, handleToggleEdit, editMode } =
    useDocumentContext();

  const sortedBlocks: Block[] = useMemo(
    () => sortBy(documentData?.blocks, "order"),
    [documentData?.blocks]
  );

  if (loading) {
    return <DocumentSkeleton />;
  }

  const renderBlock = (block: Block) => {
    let renderedBlock = null;

    switch (block.type) {
      case BLOCK_TYPES.TEXT:
        renderedBlock = <TextBlock {...(block.content as TextContent)} />;
        break;
      case BLOCK_TYPES.IMAGE:
        renderedBlock = <ImageBlock {...(block.content as ImageContent)} />;
        break;
      case BLOCK_TYPES.QUOTE:
        renderedBlock = <QuoteBlock content={block.content as QuoteContent} />;
        break;
      case BLOCK_TYPES.HTML:
        renderedBlock = <HtmlBlock content={block.content as HtmlContent} />;
        break;
      case BLOCK_TYPES.TABLE:
        renderedBlock = <TableBlock {...(block.content as TableContent)} />;
        break;
      case BLOCK_TYPES.CONTAINER:
        const containerContent = block.content as ContainerContent;
        const sortedContainerBlocks = sortBy(containerContent, "order");
        renderedBlock = (
          <ContainerBlock
            content={sortedContainerBlocks}
            renderBlock={renderBlock}
          />
        );
        break;
      case BLOCK_TYPES.COLLAPSE:
        renderedBlock = (
          <CollapseBlock
            blocks={block.content as CollapseContent}
            renderBlock={renderBlock}
          />
        );
        break;
      default:
        break;
    }

    if (renderedBlock && ![BLOCK_TYPES.CONTAINER].includes(block.type)) {
      return (
        <Box>
          <Typography variant="subtitle2" fontWeight="bold" color="primary">
            {capitalize(block.type)}
          </Typography>
          <Box border={1} borderColor="divider" borderRadius={1} p={2}>
            {renderedBlock}
          </Box>
        </Box>
      );
    }

    return renderedBlock;
  };

  return (
    <AppPaper style={{ position: "relative" }}>
      <Stack>
        <IconButton
          onClick={handleToggleEdit}
          sx={{ position: "absolute", top: 4, right: 4 }}
        >
          {editMode ? (
            <SaveIcon fontSize="small" />
          ) : (
            <EditIcon fontSize="small" />
          )}
        </IconButton>
      </Stack>
      <Grid container spacing={2}>
        {sortedBlocks.map((block, index) => (
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
    </AppPaper>
  );
};

export default index;
