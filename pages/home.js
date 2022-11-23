import { styled } from "@mui/material";

import ListItem from "./component/list-item";

import WomenBike from "./data/woman-bike.json";
import MenBike from "./data/men-bike.json";

const MergeData = [...WomenBike.data, ...MenBike.data];

console.log("%chome.js line:11 MergeData", "color: #007acc;", MergeData);
const Container = styled("div")``;

const HomePage = () => {
  return (
    <div style={{ width: "100%" }}>
      <ListItem data={MergeData} />
    </div>
  );
};

export default HomePage;
