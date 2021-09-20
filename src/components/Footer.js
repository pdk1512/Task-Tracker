import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store";
import { useHistory } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';

const Footer = ({ onClick }) => {
  const account = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const clickLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  return (
    <>
      {account.user != null && (
        <div className="btn-logout">
          <button onClick={clickLogout} className="btn">
            Logout <FiLogOut />
          </button>
        </div>
      )}
      <footer>
        <p style={{color:'rgb(88, 88, 88)'}}>Copyright &copy; 2021</p>
        <Link to="/about" onClick={onClick}>
          About
        </Link>
        <br />
      </footer>
    </>
  );
};

export default Footer;
