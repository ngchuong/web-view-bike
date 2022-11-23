import { styled } from "@mui/material";

const Container = styled("div")`
  width: 100%;
  background-color: #eff5f5;
`;

const Cont = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const SubDiv = styled("div")`
  width: 50%;
  margin-right: 10px;
`;

const MainLabel = styled("div")`
  font-size: 15px;
  font-weight: 600;
`;

const Content = styled("div")`
  font-size: 12px;
`;

const Footer = () => {
  return (
    <Container>
      <Cont>
        <SubDiv>
          <MainLabel>Công ty TNHH OKXE Việt Nam</MainLabel>
          <Content>
            Hà Nội: Tòa nhà Sao Mai - Tầng 11, số 19 Lê Văn Lương, P. Nhân
            Chính, Q. Thanh Xuân. Điện thoại: (024) 73 077 889
          </Content>
        </SubDiv>
        <SubDiv>
          <MainLabel>HỖ TRỢ KHÁCH HÀNG</MainLabel>
          <Content>Hotline: 1900 636 135 (9:00 - 21:00)</Content>
        </SubDiv>
      </Cont>
    </Container>
  );
};

export default Footer;
