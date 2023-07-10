import './App.css';
import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import TodoListItem from '../todo-list-item/todo-list-item';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <ItemStatusFilter />
      <TodoListItem />
    </div>
  );
}

export default App;
