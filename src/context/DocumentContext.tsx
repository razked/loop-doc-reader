import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useDocumentData } from "@/hooks/useFetchDocumentData";
import { Document } from "@/types/types";

export type DocumentContextType = {
  documentData: Document | null;
  loading: boolean;
  setDocumentData: Dispatch<SetStateAction<Document | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  editMode: boolean;
  handleToggleEdit: () => void;
};

export const DocumentContext = createContext<DocumentContextType | null>(null);

export const DocumentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [documentData, setDocumentData] = useState<Document | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean>(false);

  // Fetch document data
  useDocumentData(setDocumentData, setLoading);

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <DocumentContext.Provider
      value={{
        documentData,
        loading,
        setDocumentData,
        setLoading,
        editMode,
        handleToggleEdit,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocumentContext = () => {
  const context = React.useContext(DocumentContext);
  if (!context) {
    throw new Error(
      "useDocumentContext must be used within a DocumentProvider"
    );
  }
  return context;
};
