import React from "react";
// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "./Button";
import { CircularProgress } from "@material-ui/core";

const Header = (props) => {
  // const location = useLocation();
  const account = useSelector((state) => state.user);
  const registerState = useSelector((state) => state.register);

  return (
    <header className="header">
      <h1>
        {props.title}{" "}
        { (account.loading || registerState.loading) && (
          <CircularProgress
            style={{ color: "rgb(88, 88, 88)" }}
            size={"1.5rem"}
          />
        )}
      </h1>
      {/* {location.pathname === '/' && <Button color={props.showAddBtn ? 'Red' : 'Green'} 
                text={props.showAddBtn ? 'Close' : 'Add'} 
                path={props.showAddBtn ? '/add' : '/'}
                onClick={props.onAdd}/>} */}
      {account.user && (
        <Button
          colorbtn={props.showAddBtn ? "btn-close" : "btn"}
          text={props.showAddBtn ? "Close" : "Add"}
          path={props.showAddBtn ? "/tasks" : "/add"}
          onClick={props.onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
