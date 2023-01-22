import { StyledHeader, ThemeToggle, HeaderSection } from "./HeaderStyles";
import { useGlobalContext } from "../../context/context";
import { useTheme } from "styled-components";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = () => {
  const { theme, toggleTheme } = useGlobalContext();
  const { colors } = useTheme();

  return (
    <StyledHeader>
      <HeaderSection>
        <AutoStoriesOutlinedIcon fontSize="large" sx={{ color: "lightgray" }} />
        <h2>My Dictionary</h2>
      </HeaderSection>
      <ThemeToggle onClick={toggleTheme}>
        {theme === "light" && (
          <DarkModeOutlinedIcon
            fontSize="large"
            sx={{ color: colors.toggleBtn }}
          />
        )}
        {theme === "dark" && (
          <LightModeOutlinedIcon
            fontSize="large"
            sx={{ color: colors.toggleBtn }}
          />
        )}
      </ThemeToggle>
    </StyledHeader>
  );
};

export default Header;
