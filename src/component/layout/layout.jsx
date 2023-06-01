import styled from "styled-components";
import { SiderL } from "component/layout";

const LayoutStyled = styled.div`
  background-color: #caeae6;
  min-height: 100vh;
  display: flex;
  .right {
    float: right;
    width: 86%;
  }
`;
const ContentStyled = styled.div`
  margin-top: 10px;
  padding-right: 10px;
`;
const SideBarStyled = styled.div`
  float: left;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled>
        <SiderL></SiderL>
      </SideBarStyled>
      <div className="right">
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
