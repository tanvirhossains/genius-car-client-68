import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Home from "./Pages/Home/Home/Home"
import Notfound from './Pages/Home/Home/Notfound/Notfound';
import Login from './Pages/Home/Login/Login';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Home/Register/Register';
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth';
import Checkout from './Pages/CheakOut/Checkout/Checkout';
import AddService from './Pages/Home/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';
import { ToastContainer } from 'react-toastify';
import Orders from './Pages/Home/Home/Orders/Orders';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={

          <Home></Home>
        }>
        </Route>
        <Route path='/home' element={

          <Home></Home>

        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/serviceDetail/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
           <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
