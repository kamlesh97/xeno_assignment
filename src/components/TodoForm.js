import React, { useState,useRef,useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
    const inputRef=useRef(null)

    useEffect(()=>{inputRef.current.focus()})
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        className='text'
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          ref={inputRef}
    />
        <button className='addbutton'>add</button>
      </form>
    </div>
  );
}

export default TodoForm;
