import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Create from './Pages/blog/Create';
import BlogDetails from './Pages/blog/BlogDetails';
import Navbar from './Pages/Home/Navbar';
import NotFound from "./Pages/Fetch/NotFound";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
          <Route exact path='/' element={<Home />} />
              <Route path='/create' element={<Create/>} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
