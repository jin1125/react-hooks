import React,{useContext} from "react";
import { UserContext } from "../App";

function ComponentF() {
  const user = useContext(UserContext);
  
  return (
    <div>
      <div>{user.name}</div>
    </div>
  );
}

export default ComponentF;
