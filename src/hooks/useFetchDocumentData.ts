import { useEffect } from "react";
import { Document } from "@/types/types";

export const useDocumentData = (
  setDocumentData: (data: Document | null) => void,
  setLoading: (loading: boolean) => void
) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const documentJsonPath = "/document.json";
        const documentJsonUrl = new URL(documentJsonPath, import.meta.url);

        const response = await fetch(documentJsonUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch document data");
        }
        const data = await response.json();
        setDocumentData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching document data:", error);
      }
    };
    fetchData();
  }, [setDocumentData, setLoading]);
};
