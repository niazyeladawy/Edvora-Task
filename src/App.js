import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NearestRides from './components/NearestRides/NearestRides';
import PastRides from './components/PastRides/PastRides';
import UpcomingRides from './components/UpcomingRides/UpcomingRides';
import Header from './Header/Header';


function App() {

  return (

    <div className="App">
      
        <Header />
        <Navbar />
        <Routes>
          <Route path='/nearestrides' element={<NearestRides />} />
          <Route path='/upcomingrides' element={<UpcomingRides />} />
          <Route path='/pastrides' element={<PastRides />} />
          <Route path='/' element={<Navigate to="nearestrides" />} />
        </Routes>
      

    </div>
  );
}

export default App;
