import {Routes, Route} from 'react-router-dom'
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/home";
import Login from '../../pages/login';
import SignUp from '../SignUp';
import My from '../../pages/My';
import Community from '../../pages/community';


const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/community' element={<Community />}/>
        <Route path='/gallery' element={<Home />}/>
        <Route path='/search-ah' element={<Home />}/>
        <Route path='/my' element={<My />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </MainLayout>
  )
}

export default App;
