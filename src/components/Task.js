import React from "react";

function Task({ task, onDelete }) {
  const { text, category } = task || { text: "", category: "" };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
