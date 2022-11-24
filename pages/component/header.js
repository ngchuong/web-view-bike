import { useState } from "react";
import { styled, TextField } from "@mui/material";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const Container = styled("div")`
  width: 100%;
  height: 180px;

  background-color: #f7a4a4;
`;

const Cont = styled("div")``;

const WrapSearch = styled("div")`
  margin: 10px;
`;
const Header = () => {
  const [txtSearch, setTxtSearch] = useState("");

  return (
    <Container>
      <Cont>
        <div>OKXE</div>
        <div>
          <WrapSearch>
            <TextField
              fullWidth
              size="small"
              // label="Please input"
              placeholder="Nhập xe bạn muốn tìm"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={txtSearch}
              onChange={(event) => setTxtSearch(event.target.value)}
            />
          </WrapSearch>
        </div>
      </Cont>
    </Container>
  );
};

export default Header;
