import { 
    BrowserRouter,
    Routes, 
    Route,
  } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import AdminHomePage from '../Pages/AdminHomePage';
import ListTripPage from '../Pages/ListTripPage';
import AplicationFormPage from '../Pages/ApplicationFormPage';
import LoginPage from '../Pages/LoginPage';
import CreateTripPage from '../Pages/CreateTripPage';
import TripDetailsPage from '../Pages/TripDetailsPage';
import SignUpPage from '../Pages/SignUpPage';


const Rotas = () => {
    return <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/admin/home' element={<AdminHomePage/>}/>
              <Route path='/trips/list'element={<ListTripPage/>}/>
              <Route path='/trips/application' element={<AplicationFormPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
              <Route path='/admin/trips' element={<TripDetailsPage/>}/>
              <Route path='/admin/createUser' element={ <SignUpPage/> }/>
            </Routes>
          </BrowserRouter>
        </>
}
export default Rotas;