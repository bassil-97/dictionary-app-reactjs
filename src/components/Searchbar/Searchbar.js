import { SearchbarWrapper, SearchbarInput } from "./SearchbarStyles";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({ handleUserInput }) => {
  return (
    <SearchbarWrapper>
      <SearchbarInput onChange={handleUserInput} />
      <span>
        <SearchIcon />
      </span>
    </SearchbarWrapper>
  );
};

export default Searchbar;
