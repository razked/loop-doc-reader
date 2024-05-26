import React, { useState } from "react";
import { TextField, Typography, Stack } from "@mui/material";
import { useDocumentContext } from "@/context/DocumentContext";

type EditableTitleProps = {
  title: string;
};

const EditableTitle: React.FC<EditableTitleProps> = ({ title }) => {
  const { editMode } = useDocumentContext();
  const [editedTitle, setEditedTitle] = useState(title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  return (
    <Stack direction="row" alignItems="center" width="100%">
      {editMode ? (
        <TextField
          value={editedTitle}
          onChange={handleTitleChange}
          fullWidth
          variant="standard"
        />
      ) : (
        <Typography variant="h6" fontWeight="bold">
          {editedTitle}
        </Typography>
      )}
    </Stack>
  );
};

export default EditableTitle;
