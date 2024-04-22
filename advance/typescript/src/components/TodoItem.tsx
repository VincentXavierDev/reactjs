import React from "react";

const TodoItem: React.FC<{text: string}> = (props) => {
  return <>{props.text}</>;
};

export default TodoItem;
