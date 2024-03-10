import AddTodo from './components/AddTodo.jsx'
import AppName from './components/AppName.jsx'
import TodoItem from './components/TodoItem.jsx';
function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <AddTodo/>
     <TodoItem/>
    </center>
  );
}

export default App;
