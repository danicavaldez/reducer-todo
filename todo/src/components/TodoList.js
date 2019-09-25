import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer.js'
import Todo from './Todo.js'

const TodoList = () => {
  const [newItem, setNewItem] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  
  const handleChanges = e => {
    setNewItem(e.target.value);
  };

  const toggleCompleted = value => {
    return dispatch({type: 'TOGGLE_COMPLETED', payload: value})
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED'})
  }

  return (
    <div>
      <div>
        <form 
          onSubmit={e => {
            e.preventDefault();
            dispatch({ type: 'ADD_ITEM', payload: newItem })
            setNewItem('')
          }} 
        >
          <input
            className="itemInput"
            type="text"
            name="newItem"
            value={newItem}
            onChange={handleChanges}
          />
          <button>Add</button>
          <button onClick ={clearCompleted}>Clear</button>
        </form>  
      </div>  
      <div>
        {state.todoList.map(currentValue => {
          return <Todo 
                    task={currentValue} 
                    key={currentValue.id} 
                    toggle={() => { toggleCompleted(currentValue) }} 
                  />
        })}
      </div>
    </div>
  )
}

export default TodoList;