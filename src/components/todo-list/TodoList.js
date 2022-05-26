
import React from 'react';
import Todo from '../todo/Todo';
import Button from '../button/Button';
import Input from '../input/Input';
function TodoList() {
  //Define a state variable
  const [todos, setTodos] = React.useState([ { id: 1, text: 'Learn React', completed: true } ]);
  const [value, setValue] = React.useState('');

  const addTodo = () => {
    setTodos(prevState => [...prevState, { id: prevState.length + 1, text: value, completed: false }]);
    setValue('');
  }
  return (
    <div data-testid='todo-list'>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <Input value={value} onChange={setValue}/>
        <Button addTodo={addTodo} />
      </div>
      {todos.map(todo => (
        <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </div>
  );
}

export default TodoList;
