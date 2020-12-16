import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="Line"></div>
      <div className="FooterContent">
        <div>
          <span style={{ fontSize: "14px" }}>
            <span
              style={{
                fontSize: "34px",
                verticalAlign: "middle",
                marginRight: "10px",
              }}
            >
              ©
            </span>{" "}
            ELITE SRL | REG.IMPR.PD/C.F./P.I. INTRASTAT IT 04342350289 -{" "}
          </span>
          <span className="Privacy">PRIVACY POLICY</span>
        </div>
        <div style={{ color: "white", cursor: "pointer", marginTop: "20px" }}>
          M. Sakhelashvili
        </div>
      </div>
    </div>
  );
};

export default Footer;
