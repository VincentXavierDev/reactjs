import React, { useRef } from "react";

// React.FormEvent là sự kiện submit của form
// React.MouseEvent là sự kiện click,...
const NewTodo:React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  // Muốn xem kiểu của thẻ lên gg tìm input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  // Tìm thông tin interface
  const todoTextRef = useRef<HTMLInputElement>(null);
  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextRef.current?.value;
    if (!enteredText) return;
    props.onAddTodo(enteredText)
  };
  return (
    <form onSubmit={submitHandle}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
