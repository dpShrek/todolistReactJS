import React, { Component } from "react";
import "./App.css";
import Header from "../header/header";
import Search from "../search/search";
import Filter from "../filter/filter";
import Todolist from "../todo-list/todo-list";
import AddItem from "../add-item/add-item";

export default class App extends Component {
  maxId = 100;

  state = {
    tododata: [
      this.createTodoItem("Выучить ReactJS"),
      this.createTodoItem("После того как понял, что не выучил, еще раз выучить"),
      this.createTodoItem("Проверить знания и понять что опять не выучил"),
      this.createTodoItem("Понять что нужно не учить, а понимать!"),
    ],
    term: '',
    filter:'all' //active, all, done
  };

  createTodoItem(info) {
    return {
      info,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  togleProperty(arr, id, propName) {
    let idx = arr.findIndex((el) => el.id === id);
    let oldItem = arr[idx];
    let newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  addNewTododata = (info) => {
    if (!info) return
    const newItem = this.createTodoItem(info);
    this.setState(({ tododata }) => {
      const newArr = [...tododata, newItem];

      return {
        tododata: newArr,
      };
    });
  };

  onTogleImportant = (id) => {
    this.setState(({ tododata }) => {
     
      return {
        tododata: this.togleProperty(tododata, id, "important")
      };
    });
  };

  onTogleDone = (id) => {
    this.setState(({ tododata }) => {
      return {
        tododata: this.togleProperty(tododata, id, "done")
      };
    });
  };

  onDeletetItem = (id) => {
    this.setState(({ tododata }) => {
      let idx = tododata.findIndex((el) => el.id === id);
      let before = tododata.slice(0, idx);
      let after = tododata.slice(idx + 1);
      let newTododata = [...before, ...after];
      return {
        tododata: newTododata,
      };
    });
  };

  search(item, term) {
    if (term.length === 0) {
      return item;
    }
    return item.filter ((item) => {
      return item.info.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  filter (item, filter) {
    switch (filter) {
      case 'all':
        return item;
      case 'active':
        return item.filter((item) => !item.done);
      case 'done':
        return item.filter((item) => item.done)
      default:
        return item;
    }
  }

  onSearchCheng = (term) => {
    this.setState({term})
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  render() {
    const { tododata, term, filter } = this.state;
    const visibleItem = this.filter(this.search(tododata, term),filter);
    let doneCounte = tododata.filter((el) => el.done).length;
    let doneMore = tododata.length - doneCounte;

    return (
      <div className="app">
        <Header 
          toDo={doneMore} 
          done={doneCounte} 
        />

        <div className="app-search-panel">

        <Search 
          onSearchCheng={this.onSearchCheng}
        />
        <Filter 
          filter={filter}
          onFilterChange={this.onFilterChange}
        />

        </div>

        <Todolist
          tododata={visibleItem}
          onDeleted={this.onDeletetItem}
          onTogleImportant={this.onTogleImportant}
          onTogleDone={this.onTogleDone}
        />
        <AddItem addNewItem={this.addNewTododata} />
      </div>
    );
  }
}
