import React from "react";
import { withRouter } from "react-router-dom";
function Home() {
  return (
    <>
      <h1>Home page</h1>
      <div className="center">Login to access to profile and dashboard!</div>
    </>
  );
}
export default withRouter(Home);
