import styled from "styled-components";
export const Button = styled("button")`
cursor: pointer;
  background: ${(props) => props.background || "#fff"};
  color: ${(props) => props.color || "#fff"};
  border: ${(props) => props.border || "2px solid #fff"};
  height: ${(props) => props.height || "2.5rem"};
  width: ${(props) => props.width || "10rem"};
  padding: ${(props) => props.padding || "10px"};
  display: flex;
  align-item: center;
  justify-content: center;
  font-weight: ${(props) => props.fontWeight || "bold"};
  gap: 1rem;
  font-size: ${(props) => props.fontSize || "1rem"};
  &:hover {
    background: ${(props) =>
      props.hoverbackground || "rgb(255, 199, 44)"} !important;
    color: ${(props) => props.hoverColor || "#fff"} !important;
    border: ${(props) => props.hoverBorder || "none"} !important;
  }
  @media (max-width: 768px) {
    width: ${(props) => props.mobileWidth || ""};
    height: ${(props) => props.mobileHeight || ""};
    font-size: ${(props) => props.mobileFontSize || "0.8rem"};
  }
`;
export const Text = styled.p`
font-size:${(props) => props.fontSize || "14px"}};
color: ${(props) => props.color || "#000000"};
font-weight: ${(props) => props.fontWeight || "#000000"};
width: ${(props) => props.width || "100%"};
height: ${(props) => props.height || ""};
text-align: ${(props) => props.textAlign || "left"};
cursor: ${(props) => props.cursor || ""};
margin: ${(props) => props.margin || "0"};
white-space: ${(props) => props.whiteSpace || "nowrap"};
&:hover {
  background: ${(props) => props.hoverbackground || ""} !important;
  color: ${(props) => props.hoverColor || ""} !important;
  border: ${(props) => props.hoverBorder || ""} !important;

}
@media (max-width: 1000px) {
 text-align:${(props) => props.mobileTextAlign || "left"};
 display: ${(props) => props.mobileDisplay || ""};
 width: ${(props) => props.mobileWidth || "100%"};
 height: ${(props) => props.mobileHeight || ""};
 font-size:${(props) => props.mobileFontSize || "1rem"}};
 white-space: ${(props) => props.mobileWhiteSpace || "normal"};
 margin: ${(props) => props.mobileMargin || "0"};
 gap: ${(props) => props.mobileGap || "0"};
}
`;
export const Flex = styled.div`
  display: flex;
  text-align: ${(props) => props.align || "left"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "start"};
  border-radius: ${(props) => props.borderRadius || "0"};
  gap: ${(props) => props.gap || "10px"};
  flex-wrap: ${(props) => props.wrap || ""};
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0px"};
  align-self: ${(props) => props.alignSelf || ""};
  height: ${(props) => props.height || ""};
  padding: ${(props) => props.padding || "0px"};
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.background || "transparent"};
  font-size: ${(props) => props.fontSize || "0.8rem"};
  font-weight: ${(props) => props.fontWeight || "500"};
  position: ${(props) => props.position || ""};
  @media (max-width: 768px) {
    margin: ${(props) => props.marginMobile || "0px"};
    flex-direction: ${(props) => props.directionMobile || "column"};
    align-items: ${(props) => props.alignItemsMobile || "center"};
    justify-content: ${(props) => props.justifyContentMobile || "center"};
    gap: ${(props) => props.gapMobile || "10px"};
    width: ${(props) => props.widthMobile || "100%"};
    height: ${(props) => props.heightMobile || ""};
    padding: ${(props) => props.paddingMobile || "0px"};
    font-size: ${(props) => props.fontSizeMobile || "0.8rem"};
    background: ${(props) => props.backgroundMobile || ""};
    flex-wrap: ${(props) => props.wrapMobile || ""};
  }
`;
