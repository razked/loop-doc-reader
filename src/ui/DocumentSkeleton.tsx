import React from "react";
import Skeleton from "@mui/material/Skeleton";
import AppPaper from "./AppPapper";

const DocumentSkeleton: React.FC = () => {
  return (
    <AppPaper>
      <Skeleton variant="text" width="100%" height={150} />

      <div style={{ display: "flex" }}>
        <Skeleton variant="text" width="50%" height={150} />
        <Skeleton variant="text" width="50%" height={150} />
      </div>

      <Skeleton variant="text" width="100%" height={150} />

      <Skeleton variant="text" width="100%" height={150} />
    </AppPaper>
  );
};

export default DocumentSkeleton;
