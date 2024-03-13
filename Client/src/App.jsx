import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Homepage from "./Pages/HOME/HomePAge"; 
import "./App.css"; 

function App() {
  return (
    <Router> 
      <div className="centered-content"> 
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
