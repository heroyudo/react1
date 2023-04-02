
import './App.css';
// import Header from "./Header"
// import List from './component/List';
// import List1 from './component/List1';
// import Button from './component/Button';
// import Testing1 from './component/Testing1';

import React from 'react';
import FormInput from './component/FormInput';
import TodoItem from './component/TodoItem';
import logo from './logo.svg';
import EditModal from './component/EditModal';

class App extends React.Component {
  // state = {
  //   dosen: {
  //       name: "Hero",
  //       prodi : "Informatika"    
  //   },
  //   mahasiswa: {
  //       name: "Agus",
  //       prodi : "Informatika"    
  //   },
  //   books : ["book1","book2","book3"]
  // }

  state ={
    todos: [
      {
        id:1,
        title: "reading a book"
      },
      {
        id:2,
        title : "workout training"
      }
    ],
    isEdit : false,
    editData : {
      id : "",
      title : ""
    }
  }

  update = () => {
    const {id, title} = this.state.editData
    const newData = {id, title }
    const newTodos = this.state.todos
    newTodos.splice((id-1), 1, newData)
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData : {
        id : "",
        title : ""
      }
    })
  }


  setTitle = e => {
    this.setState({
      editData : {
        ...this.state.editData,
        title: e.target.value 
      }
    })
  }

  openModal = (id, data) => {
    this.setState({
      isEdit : true,
      editData : {
        id,
        title: data
      }
    })
  }

  closeModal = () => {
    this.setState({
      isEdit : false
    })
  }

  deleteTask = id => {
    this.setState({
      todos : this.state.todos.filter(item => item.id != id)
    })
  }

  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id : id + 1 ,
      title : data
    }
    this.setState({
      todos : [...this.state.todos, newData]
    })
  }

  render (){ 
    const {todos} =this.state; 
    return (
      <div className="app">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>Task List </h3>
          </div>
          <div className='list'>
            {todos.map(item=>
            <TodoItem 
              key={item.id} 
              todo={item} 
              del={this.deleteTask} 
              open={this.openModal}

            />
            )}

          </div>
          <div className='input-form'>
            <FormInput add={this.addTask}/>
          </div>
          <EditModal 
            edit={this.state.isEdit} 
            close={this.closeModal} 
            change={this.setTitle}
            data ={this.state.editData}
            update={this.update}
            />

      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <List1 name="Yudo" alamat="Mojokerto"/>
//     </div>
//   );
// }





export default App;
