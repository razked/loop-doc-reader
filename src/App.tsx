import AppLayout from "@/layouts/AppLayout";
import { DocumentProvider } from "./context/DocumentContext";
import Document from "@/components/Document";

function App() {
  return (
    <AppLayout>
      <DocumentProvider>
        <Document />
      </DocumentProvider>
    </AppLayout>
  );
}

export default App;
