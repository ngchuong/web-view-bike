import { styled, TextField } from "@mui/material";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const Container = styled("div")`
  width: 100%;
  height: 200px;

  background-color: #f7a4a4;
`;

const Cont = styled("div")`

`;

const Header = () => {
  return (
    <Container>
      <Cont>
        <div>OKXE</div>
        <div>
          <div>
            <TextField
              label="With normal TextField"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </Cont>
    </Container>
  );
};

export default Header;
