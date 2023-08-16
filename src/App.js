import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contract from './Pages/Contract/Contract';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Review from './Pages/Reviews/Review';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinments from './Pages/Dashboard/MyAppoinments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyUsers from './Pages/Dashboard/MyUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctors from './Pages/Dashboard/AddDoctors';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>}
        ></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}
        >
          <Route index element={<MyAppoinments />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='history' element={<MyHistory />}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <MyUsers />
            </RequireAdmin>
          }></Route>
          <Route path='addDoctors' element={<AddDoctors />}></Route>
          <Route path='manageDoctors' element={<ManageDoctor />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
        </Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='reviews' element={<Review />}></Route>
        <Route path='contract' element={<Contract />}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
