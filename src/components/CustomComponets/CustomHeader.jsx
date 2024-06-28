import React from "react";

function CustomHeader(props) {
  const {
    images,
    LeftTitile,
    rightTitle,
    centerTitle,
    onPressMenu,
    isVisible = true,
  } = props;
  return (
    <div>
      {isVisible && (
        <>
          <div></div>
          <div></div>
          <div></div>
        </>
      )}
    </div>
  );
}

export default CustomHeader;
