// import logo from './logo.svg';
// import './App.css';
// import React from 'react';

// function App() {

 
//   let username = "Sanyu Paul Reddy"
//   return (
//     <div className="App">
//       <h1>Malla Reddy University</h1>
//       <p>p-tag</p>
//       {username} <br></br>
//       {500*100}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// class App extends React.Components{
//   render(){
//      return(
//       <div>
//         <h1>Class Components</h1>
//       </div>
//      )}
// }

// const App=()=>{
//   return (
//     <h1>Arrow functional Components</h1>
//   )
// }
// export default App;

// import React from "react";

// class App extends React.Component{
//   render(){
//     return(
//     <h1>Class Component</h1>
//     )
//   }
// };
// export default App
// import React from 'react';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Footer from './components/Footer';

// class App extends React.Component{
//   render(){
//     return(
//       <div className="App">
//         <div className='App1'><h1>App.js</h1></div>
//         <Navbar/>
//         <Main/>
//         <Sidebar1/>
//         <Sidebar2/>
//         <Footer/>
//       </div>
//     )
//   }
// }
// export default App;
// import React, { Component } from "react";
// import CBCPropEX1 from "./components/CBCPropEX1";

// export default class App extends Component{
//   render(){
//     return(
//       <div>
//         <hr>
//         </hr>
//         <CBCPropEX1
//         username="Sanyu"
//         age={19}
//         hobbies={["Swimming","Cricket","Music"]}
//         address={{city:"Hyderabad", area:"Kukatpally"}}
//         sendFun={function(){alert("Hi Sanyu")}}/>
//       </div>
//     )
//   }
// }
// import React from 'react'
// import PropsChildrenex from './components/PropsChildrenex'
// import SubChildProps from './components/SubChildProps'
// const App = () => {
//   return (
//     <div>
//       <PropsChildrenex username="Sanyu" company="Meta">
//         <h1>This data is passing as a props children to child Component</h1>
//        <SubChildProps child1="Hello" child2="How are you"/> 
//       </PropsChildrenex>
       
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { Child1 } from './components/Child1';

// const App = (props) => {
//   return (
//     <div>App
//       <Child1 Name="Sanyu App"/>
//     </div>
//   )
// }

// export default App;
// import React from "react";
// import CBCStateEx from './components/CBCStateEx';

// const App=()=>{
//   return(
//     <div>
//       <CBCStateEx/>
//     </div>
//   )

// }
// export default App;

// import React from 'react';
// import FuctionalComponents from '.src/components/FuctionalComponents';

// const App = () => {
//   return (
//     <div>
//     <FuctionalComponents 
//       clg='MRU' city="Hyderabad"
//     />  
//     </div>
//   );
// };

// export default App;


// import React from "react";
// // import UseEffectEx from './components/UseEffectEx';
// import RefExample from "./components/RefExample";

// const App=()=>{
//   return(
//     <div>
     
//       <RefExample/>
//     </div>
//   )

// }
// export default App;

// import React from 'react';
// // import Logo from './components/Logo';
// // import Menu from './components/Menu';
// import Navbar from './components/Navbar';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Classrooms from './pages/Classrooms';
// import Assesments from './pages/Assesments';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import PageNotFound from './pages/PageNotFound';
// import MyAccount from './pages/MyAccount';
// import Profile from './pages/Profile';
// const App =() => {
//     return (
//         <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classrooms' element={<Classrooms/>}/>
//             <Route path='/assesments' element={<Assesments/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}>
//             <Route path='/profile/myaccount' element={<MyAccount/>}/>
//             <Route path='/profile/mysetting' element={<MyAccount/>}/>
//             </Route>
//             <Route path='*' element={<PageNotFound/>}/>
            

//         </Routes>
//       </BrowserRouter>
//     );
// };

// export default App;

import React from 'react'
import FormExample from './components/FormExample'

const App = () => {
  return (
    <div>
      <FormExample/>
    </div>
  )
}

export default App