import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

 class App extends Component {
	constructor(props){
    super(props);
     this.state = {
       todos: [],
      newToDoDescription: ''
     };
  }
  //step 1 : create the handler in parent component
  toggleComplete(index) {
    //create a new array of todos using the slice() method
    const todos = this.state.todos.slice();
    const todo = todos[index]; //get the todo of interest based on the index
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos:todos}) // assign the state back to the original
  }

  handleSubmit(e) {
    e.preventDefault(); //used to prevent default behavior
    //do not allow the user to create empty to do items
    if(!this.state.newToDoDescription) return;
    let item = this.state.todos.filter(item => item.description === this.state.newToDoDescription);
    if(item.length === 0)
    {
      const newTodo = {description: this.state.newToDoDescription, isCompleted: false}; //create new todo
      this.setState({ todos: [...this.state.todos, newTodo], newToDoDescription: ''}); //add new todo
    }
  }

  handleChange(e) {
    this.setState (
      {newToDoDescription : e.target.value}
    )
  }

  deleteTodo(index) {
    this.setState({todos:this.state.todos.filter(item => item.description !== this.state.todos[index].description)});
}

   render() {
     return (
       <div className="App">
        <ul>
           { this.state.todos.map( (todo, index) => 
             <ToDo key={ index } 
             //step 2 pass the handler as a prop
             ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete ={ () => this.toggleComplete(index)} deleteItem={ () => this.deleteTodo(index)} />
           )}
         </ul>
         {/* we need to add form here for new input */} 
           <form onSubmit ={(e) => this.handleSubmit(e)}> {/* arrow function to handle browser event data passed to the form */}
           <input type='text' value={this.state.newToDoDescription} onChange={(e) => this.handleChange(e)} /><p></p>
           <input type='submit' />
         </form>
       </div>
     );
   }
 }

 export default App;