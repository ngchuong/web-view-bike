import { styled } from "@mui/material";

import ListItem from "./component/list-item";

import WomenBike from "./data/woman-bike.json";
import MenBike from "./data/men-bike.json";

const MergeData = [...MenBike.data, ...WomenBike.data];

const Container = styled("div")`
  /* background-color: #f3f3f3; */
  width: 100%;
`;

// const Cont = styled("div")`
//   /* width: 100%; */
//   background-color: #fff;
//   padding: 10px;
// `;

const TitleList = styled("div")`
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const HomePage = () => {
  return (
    <Container>
        <TitleList>Danh sách xe</TitleList>
        <ListItem data={MergeData} />
    </Container>
  );
};

export default HomePage;
