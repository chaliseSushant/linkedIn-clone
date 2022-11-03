import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/auth/Login';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { selectUser,login,logout } from './features/userSlice';
import { auth } from './firebase';

function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(()=>{
  auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      //user is logged in
      dispatch(login({
        email:userAuth.email,
        uid:userAuth.uid,
        displayName:userAuth.displayName,
        photoUrl:userAuth.photoUrl
      }))
    }
    else{
      dispatch(logout());
    }
  })
},[])
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* App Body */}
      {!user ? <Login/>:(
        <div className="app_body">
        <Sidebar/>
        <Feed/>
      </div>
      )}
      

    </div>
  );
}

export default App;
