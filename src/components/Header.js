import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../StateManagement/userSlice";
import { HEADER_IMAGE } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.user.value);
  return (
    <header>
      {/* <h1>Header</h1>
      <h1>{selector}</h1>
      <button onClick={() => dispatch(addUser())}>Increment</button> */}
      <img className="img-logo" src={HEADER_IMAGE} alt="logo"/>
    </header>
  );
};

export default Header;
