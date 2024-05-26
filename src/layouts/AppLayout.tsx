import { ReactNode } from "react";
import Box from "@mui/system/Box";
import AppHeader from "@/components/Header";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", width: "100%", position: "relative" }}>
      <Box
        className="app-layout"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeightheight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Box
          height="60px"
          className="app-header"
          sx={{
            pr: 3,
            pl: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <AppHeader />
        </Box>

        <Box
          component="main"
          sx={{
            p: 3,
            height: "max-content",
            width: "100%",
          }}
          className="app-body"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
