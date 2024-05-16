import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { MediaEditing } from './pages/MediaEditing';


function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/media_editing" element={<MediaEditing />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
