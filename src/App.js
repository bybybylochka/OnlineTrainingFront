import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./components/auth/login/Login";
import MainPage from "./components/main-page/MainPage";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {me} from "./reducers/authReducer";
import {PrivateStudentRoute} from "./routes/PrivateStudentRoute";
import StudentAccount from "./components/student-account/StudentAccount";
import Registration from "./components/auth/registration/Registration";
import {RestrictedRoute} from "./routes/RestrictedRoute";

function App() {
    const role = useSelector((state)=>state.auth.role);
    const isAuth = useSelector((state)=>state.auth.isAuth);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(me());
    }, []);
    return (
      <BrowserRouter>
          <div>
              <Header/>
              <Routes>
                  <Route path='/' element={<MainPage/>}/>
                  <Route path='/login'
                         element={<RestrictedRoute isAuth={isAuth}><Login/></RestrictedRoute>}/>
                  <Route path='/register'
                         element={<RestrictedRoute isAuth={isAuth}><Registration/></RestrictedRoute>}/>
                  <Route path='/student-account'
                         element={<PrivateStudentRoute role={role} isAuth={isAuth}><StudentAccount/></PrivateStudentRoute>}/>
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
