import React from "react";
// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  // const location = useLocation();
  const account = useSelector((state) => state.user);

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {/* {location.pathname === '/' && <Button color={props.showAddBtn ? 'Red' : 'Green'} 
                text={props.showAddBtn ? 'Close' : 'Add'} 
                path={props.showAddBtn ? '/add' : '/'}
                onClick={props.onAdd}/>} */}
      {account.user &&
        <Button
          colorbtn={props.showAddBtn ? "btn-close" : "btn"}
          text={props.showAddBtn ? "Close" : "Add"}
          path={props.showAddBtn ? "/tasks" : "/add"}
          onClick={props.onAdd}
        />
      }
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
