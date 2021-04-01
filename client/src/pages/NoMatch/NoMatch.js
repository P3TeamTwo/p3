import React from "react";
import error from "../../images/404.png";

function NoMatch() {
  return (
    <div>
            <h1>We can't find this for you but don't let that stop you from finding yourself.</h1>
              <img src={error} alt="404 message"></img>
    </div>
  )
}
export default NoMatch;