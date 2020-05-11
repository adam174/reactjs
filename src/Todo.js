import React, { Component } from 'react';
import './App.scss';

class Todo extends Component {
  state = { 
    heading : "Liste des choses à faire - ToDoList",
    items: [
     {text : "Déposer les enfants à l'école", done:false},
     {text : "Faire les courses", done:false},
     {text : "Faire le ménage", done:false}
    ]
  
  }
  handleClick(e) {
    e.item.done = !(e.item.done !== false)
   this.setState({"done":e.item.done})
    console.log(e.item);
   }
  render() { 
    return ( 
      <div className="container">
      <div className="row">
        <div className="col-md-7 offset-2">  
          <ul>
          {this.state.items.map(item => (
            <li className={item.done.toString()} key={item.text} onClick={() => this.handleClick({item})}>{item.text}</li>
          ))}
        </ul>
        </div>
      </div>
    </div>
     );
  }
}
 

export default Todo;
