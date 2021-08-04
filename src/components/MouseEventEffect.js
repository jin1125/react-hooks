import React, { useEffect, useState } from "react";

function MouseEventEffect() {
  console.log('MouseEventEffectが呼ばれました');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('useEffctが呼ばれました');
    window.addEventListener("mousemove", getMousePosition);
    return()=>{
      window.removeEventListener("mousemove", getMousePosition);
      }
  },[]);

  return (
    <div>
      <ul>
        <li>x: {x}</li>
        <li>y: {y}</li>
      </ul>
    </div>
  );
}

export default MouseEventEffect;
