import { BrowserRouter as Router } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
