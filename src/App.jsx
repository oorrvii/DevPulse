import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App(){
  return(
   <BrowserRouter>
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
            </div>
      </BrowserRouter>
  )
}
export default App;