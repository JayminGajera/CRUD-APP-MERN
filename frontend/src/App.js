import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Form from './components/Form';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-record' element={<Form/>} />
        <Route path='/:id' element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
