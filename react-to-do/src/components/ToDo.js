import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       <li>
     <input type="checkbox" checked={ this.props.isCompleted } onChange={this.props.toggleComplete} />
	   <span>{ this.props.description }</span>
     <input type='submit' value='Delete' disabled ={!this.props.isCompleted} onClick={(e) => this.props.deleteItem(e)} /> {/* use an anonymous function here for the delete button wire up to the deletetodo */}
	   </li>
     );
   }
 } 

 export default ToDo;