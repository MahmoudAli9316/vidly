import React from "react";

const Like = ({ liked, onLiked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onLiked}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};
export default Like;
