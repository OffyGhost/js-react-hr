import React, { Fragment } from "react";

const NotFound = props => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle" />
        Page Not Found
      </h1>
      <p className="large"> Sorry, this page is not exist. ERROR 404</p>
    </Fragment>
  );
};

export default NotFound;
