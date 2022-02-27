import './App.css';
import { ToastContainer } from "react-toastify";
import Students from './components/Students/students';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Students />
    </div>
  );
}

export default App;
