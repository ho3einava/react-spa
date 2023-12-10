import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from "./components/Header";
import Home from './Pages/Home';
import RouterPost from './Pages/Posts/RouterPost'
import RouterUser from './Pages/Users/RouterUser';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Users/*' element={<RouterUser />}/>
      <Route path='/Posts/*' element={<RouterPost />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
