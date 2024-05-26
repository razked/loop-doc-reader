import React from "react";
import { ImageContent } from "@/types/types";
import { Typography, Box } from "@mui/material";

const ImageBlock: React.FC<ImageContent> = ({ url, caption, alt }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "200px", // Adjust the height as needed
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          padding: "8px",
        }}
      >
        {caption ?? alt}
      </Typography>
    </Box>
  );
};

export default ImageBlock;
