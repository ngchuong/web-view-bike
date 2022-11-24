import { useState, useMemo } from "react";
import { styled, Pagination, TextField, Box } from "@mui/material";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import ListItem from "./component/list-item";

import WomenBike from "./data/woman-bike.json";
import MenBike from "./data/men-bike.json";

const Container = styled("div")`
  background-color: #fff;
  width: 100%;

  padding: 10px;
`;

const WrapSearch = styled("div")`
  /* margin: 10px; */
  margin: 10px 0 20px 0;
`;

// const Cont = styled("div")`
//   /* width: 100%; */
//   background-color: #fff;
//   padding: 10px;
// `;

const TitleList = styled("div")`
  font-weight: 600;
  font-size: 15px;

  margin-top: 10px;
  margin-bottom: 10px;
`;
const WrapPagination = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

const HomePage = () => {
  const [txtSearch, setTxtSearch] = useState("");
  const [page, setPage] = useState(1);
  const size = 10;

  const totalData = useMemo(() => {
    const all = [...MenBike.data, ...WomenBike.data];

    if (txtSearch) {
      const lowerTxt = txtSearch.toLowerCase();
      return all.filter(
        (el, index) =>
          el.branch.toLowerCase().includes(lowerTxt) || el.name.toLowerCase().includes(lowerTxt)
      );
    }
    return all;
  }, [txtSearch]);

  const listBike = useMemo(() => {
    return totalData.slice((page - 1) * size, page * size);
  }, [page, size, totalData]);

  const onChangePage = (e, value) => {
    setPage((cur) => value);
  };

  return (
    <Container>
      <WrapSearch>
        <Box sx={{ fontWeight: 600, fontSize: "15px" }} mb={2}>
          Tìm kiếm xe
        </Box>
        <TextField
          fullWidth
          size="small"
          // label="Please input"
          placeholder="Nhập xe bạn muốn tìm"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <IconButton> */}
                <SearchIcon />
                {/* </IconButton> */}
              </InputAdornment>
            ),
          }}
          value={txtSearch}
          onChange={(event) => setTxtSearch(event.target.value)}
        />
      </WrapSearch>
      <TitleList>Danh sách xe</TitleList>
      <ListItem data={listBike} />
      <WrapPagination>
        <Pagination
          color="primary"
          count={Math.ceil(totalData.length / size)}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={onChangePage}
        />
      </WrapPagination>
    </Container>
  );
};

export default HomePage;
