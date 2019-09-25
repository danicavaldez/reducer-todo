import React from 'react';

const Todo = props => {
  return (
    <div 
      className={`item${(props.task.completed) ? " completed" : ""}`}
      onClick={props.toggle}
    >
      <h2>{props.task.item}</h2>
      {console.log(props.task)}
    </div>
  )
}

export default Todo;