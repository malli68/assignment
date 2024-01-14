import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../StateManagement/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.user.value);
  return (
    <div>
      <h1>Header</h1>
      <h1>{selector}</h1>
      <button onClick={() => dispatch(addUser())}>Increment</button>
    </div>
  );
};

export default Header;
