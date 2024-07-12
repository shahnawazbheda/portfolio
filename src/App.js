import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Project from './Components/Project';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
