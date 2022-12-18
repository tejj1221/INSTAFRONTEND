import React from 'react';
import './App.css';
import{BrowserRouter,Route,Routes}from "react-router-dom"
import Upload from './componenst/upload';
 
import LandingPage from './landingpage/landingpage';
import PostView from './postview/postview';
 
function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/postview' element={<PostView/>}/>
        <Route path="/postview/upload" element={<Upload/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
 
export default App;