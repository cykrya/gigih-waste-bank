import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from './components/Header/header';
import SideBar from './components/SideBar/sidebar';
import Test1 from './pages/test1';
import Test2 from './pages/test2';
import Test3 from './pages/test3';
import Test4 from './pages/test4';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
      <Router>
      <SideBar />
        <Routes>
          <Route exact path="/" element={<Test1 />} />
          <Route exact path="/test2" element={<Test2 />} />
          <Route exact path="/test3" element={<Test3 />} />
          <Route exact path="/test4" element={<Test4 />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
