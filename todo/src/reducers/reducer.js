export const initialState = {
  todoList: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Wash Dishes',
      completed: false,
      id: 389298758
    },
    {
      item: 'Do Laundry',
      completed: false,
      id: 38929875
    }        
  ]
}

export const reducer = (state, action) => {
  let newItem = {
    item: action.payload,
    completed: false,
    id: Date.now()
  }

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todoList: [...state.todoList, newItem]
      }
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        todoList: state.todoList.map(task => {
          if (action.payload.id === task.id) {
            return {
              ...task,
              completed: !task.completed
            }
          } else {
            return task;
          }
        })
      }
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todoList: state.todoList.filter(task =>!task.completed)
      }
    default:
      return state;
  }
}