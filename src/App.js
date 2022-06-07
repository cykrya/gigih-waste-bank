import './App.css';


import Header from './components/Header/header';
import SideBar from './components/SideBar/sidebar';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
      <SideBar />
      </div>
    </div>
  );
}

export default App;
