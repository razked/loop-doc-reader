import React from "react";
import Paper, { PaperProps } from "@mui/material/Paper";

const AppPaper: React.FC<PaperProps> = ({ children, style, ...rest }) => {
  return (
    <Paper
      sx={{
        padding: 3,
        borderRadius: "10px",
        boxShadow:
          "0px 0px 2px 0px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)", // Custom box shadow
        ...style,
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
};

export default AppPaper;
