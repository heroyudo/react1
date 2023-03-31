
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
  render (){
    return (
      <div className="App">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>Task List </h3>
          </div>
          <div className='list'>
            <TodoItem/>
          </div>
          <div className='input-form'>
            <FormInput/>
          </div>

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
