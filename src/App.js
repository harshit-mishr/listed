
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboardd';
import SignIn from './pages/SignIn/SignIn';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={ <Dashboard/>} />
        ...
      </Routes>
    </div>
  );
}

export default App;