import { CSSProperties } from "react";

export const backGroundImg: CSSProperties = {
  backgroundImage: `url(/homestay2.png)`,
  height: "50vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  borderEndEndRadius: "50px",
  borderEndStartRadius: "50px",
  zIndex: 500,
  position: "relative",
  overflow: "hidden",
};

export const backGroundImgText: CSSProperties = {
  fontSize: "5vw",
  color: "white",
  paddingLeft: "50px",
  paddingTop: "200px",
  whiteSpace: "nowrap",
};

export const backGroundImgContent: CSSProperties = {
  fontSize: "2vw",
  fontWeight: "bold",
  color: "beige",
  paddingLeft: "50px",
  paddingTop: "20px",
  zIndex: 1040,
  position: "absolute",
  whiteSpace: "nowrap",
};

export const navStyle: CSSProperties = {
  zIndex: 900,
  bottom: 40,
  width: "100%",
  backgroundColor: "#D28A7C",
  borderRadius: "10px 10px 10px 10px",
  height: "90px",
  margin: "0 auto",
};

export const navBarBrand: CSSProperties = {
  fontSize: "40px",
  color: "brown",
  fontWeight: "bolder",
};

export const navBarContent: CSSProperties = {
  fontSize: "25px",
  color: "brown",
  fontWeight: "bold",
};

export const navBarSwitchAndDropDownStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const switchSize: CSSProperties = {
  width: "50px",
  height: "30px",
};

export const navBarSwitchAndDropDwonFont: CSSProperties = {
  color: "#FFFFFF",
  fontWeight: "bold",
};

export const navBarSwitchAndDropDownItemFont: CSSProperties = {
  color: "white",
  fontWeight: "bold",
};
