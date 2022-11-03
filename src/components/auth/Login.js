import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase'
import './Login.css'

function Login() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [profilePic,setProfilePic] = useState("");
    const dispatch = useDispatch()

    const register = ()=>{
        if(!name){
            return alert("Please enter a full name");
        }
        auth.createUserWithEmailAndPassword(email,password)
            .then((userAuth)=>{
                userAuth.user.updateProfile({
                    displayName:name,
                    photoURL:profilePic
                })
                .then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.uid,
                        displayName:name,
                        photoURL:profilePic
                    }))
                })
            }).catch(error=>alert(error))
    }
    const loginToApp = (e) =>{
        e.preventDefault();
    }
    return (
        <div className="login">
            <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG34.png" alt=""/>
            <form action="">
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name required if registering"/>
                <input type="text" value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)"/>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit">Sign In</button>
            </form>
            <p>Not a member?
                <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
