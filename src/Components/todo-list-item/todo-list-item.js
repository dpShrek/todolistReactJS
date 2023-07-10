import './todo-list-item.css';

function TodoListItem() {
  return (
    <div className="App">
    
      <ul class="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span className='text-uppercase text-center'>Тема 12345</span>
          <button type="button" className="btn btn-primary">Primary</button>
        </li> 
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>

    </div>
  );
}

export default TodoListItem;
