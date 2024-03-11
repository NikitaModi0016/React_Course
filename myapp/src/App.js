import './App.css';
import About from './screens/About.js';
import Register from './screens/Register.js'
import UseStateHook from './screens/UseStateHook.js';
import UserList from './screens/UserList.js'
function App() {
  return (
    
    <div className="App">
      <UseStateHook/>
      <Register/>
     <h1>Hello Nikita!</h1>
     <h1>UserList</h1>
     <UserList/>
     <About name='Doll' 
     description='Girl' 
     price={98.2}/>
     <About name='teddy Bear' 
     description='Panda' 
     price={85.4}/>
     <About name='Tiger Toy' 
     description='Animal' 
     price={95.6}/>
    </div>

  );
}

export default App;
