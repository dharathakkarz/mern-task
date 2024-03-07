import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from  "./components/Navbar";
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import NoteState from './context/notes/NoteState';
import Alertfile from './components/Alertfile';


function App() {
  return (
    <>
<NoteState>
      <Router>
        <Navbar/>
       <Alertfile message="this is alert using props" />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      </NoteState>



    </>
  );
}

export default App;
