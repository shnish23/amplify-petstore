import './App.css';
import {
  Pets,
  NavBarHeader2
 } from './ui-components';
 
 function App() {
   const navbarOverrides = {
    "Add Pet":{
      style:{
        cursor: "pointer"
      },
      onClick: ()=>{
        alert("Hello")
      },
    }
   }
   return (
     <div className="App">
      <NavBarHeader2 width={"100%"} overrides={navbarOverrides} />
      <header className="App-header">
        <Pets />
      </header>
    </div>
  );
}

export default App;
