import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

 class App extends Component {
	constructor(props){
		super(props);
		 this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
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
    const newTodo = {description: this.state.newToDoDescription, isCompleted: false}; //create new todo
    this.setState({ todos: [...this.state.todos, newTodo], newToDoDescription: ''}); //add new todo
  }

  handleChange(e) {
    this.setState (
      {newToDoDescription : e.target.value}
    )
  }

   render() {
     return (
       <div className="App">
        <ul>
           { this.state.todos.map( (todo, index) => 
             <ToDo key={ index } 
             //step 2 pass the handler as a prop
             ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete ={ () => this.toggleComplete(index)} />
           )}
         </ul>
         {/* we need to add form here for new input */} 
           <form onSubmit ={(e) => this.handleSubmit(e)}> {/* arrow function to handle browser event data passed to the form */}
           <input type='text' value={this.state.newToDoDescription} onChange={(e) => this.handleChange(e)} />
           <input type='submit' />
         </form>
       </div>
     );
   }
 }

 export default App;