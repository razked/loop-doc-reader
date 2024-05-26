import Logo from "@/ui/Logo";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo />
    </Box>
  );
};

export default Header;
