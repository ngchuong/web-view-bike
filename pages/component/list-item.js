import { styled, Grid } from "@mui/system";

import Image from "next/image";
const Container = styled("div")`
  width: 100%;
`;

const Cont = styled("div")`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;

const WrapItem = styled("div")`
  /* width: 100%; */
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 4px 2px;

  width: 32%;
  height: auto;

  cursor: pointer;
`;

const ImgCont = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 180px;
    max-width: 100%;
    height: 200px;
  }
`;

const Item = styled("div")`
  padding: 5px;
`;

const ItemName = styled("div")`
  font-weight: 600;
  margin-bottom: 5px;
`;

const ItemPrice = styled("div")`
  font-size: 13px;
`;

const ListItem = ({ data }) => {
  return (
    <Container>
      <Cont>
        {data.map((item, index) => {
          return (
            <WrapItem key={`${item.name}_${index}`}>
              <ImgCont>
                {/* <Image
                  loader={"public/images"}
                  src="xe.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                /> */}
                <img src="/images/xe.jpg" alt="#" />
              </ImgCont>
              <Item>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{`Giá gốc: ${item.price}đ`}</ItemPrice>
                <ItemPrice>{`Giá ra biển: ${item.fullPrice}đ`}</ItemPrice>
              </Item>
            </WrapItem>
          );
        })}
      </Cont>
    </Container>
  );
};

export default ListItem;
