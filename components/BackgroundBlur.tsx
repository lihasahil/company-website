import React from "react";

const BackgroundBlur: React.FC = () => {
  return (
    <>
      {/* Purple Top Right */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: "1016px",
          height: "1016px",
          left: "calc(50% + 537px - 508px)",
          top: "-468px",
          background: "#3C0071",
          opacity: 0.25,
          filter: "blur(257px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Blue Left */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: "1159px",
          height: "1254px",
          left: "calc(50% - 783.5px - 579.5px)",
          top: "-482px",
          background: "#0048FF",
          opacity: 0.12,
          filter: "blur(257px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Bottom Right */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: "1159px",
          height: "1254px",
          left: "calc(50% + 937.5px - 579.5px)",
          top: "712px",
          background: "#4D00FF",
          opacity: 0.12,
          filter: "blur(257px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default BackgroundBlur;
