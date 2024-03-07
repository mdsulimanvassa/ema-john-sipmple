import React, { useContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signOut,
 signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserContex } from '../../App';
import { auth } from './firebase.config'; 
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  const history = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
  const handleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      const {displayName, photoURL, email, password} = result.user;
      const isSignInedUser ={
        isSignedIn: true,
        name: displayName,
        email: email,
        password: password,
        photo: photoURL
      }
      setUser(isSignInedUser);
      // history(from);
      setLoggedInUser(isSignInedUser);
    })
    .catch(error => {
      console.log(error);
    })

  }
  const handleSignOut = () => {
    const auth = getAuth();
      signOut(auth).then(() =>{
      const signInOutUser = {
        isSignedIn: false,
        name: '',
        email:'',
        photo: '',
        error: '', 
        success: false
      };
      setUser(signInOutUser)
    })
    .catch(error => {
      console.log(error)
    })
  }
  const handleBlur = (e) => {
    var isFromValid = true;
    if(e.target.name === 'email'){
      isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
    };
    if(e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const isPasswordNumber = /\d{1}/.test(e.target.value);
      isFromValid = isPasswordValid && isPasswordNumber;
    };
    if(isFromValid){
      const newUserAddress = {...user};
      newUserAddress[e.target.name] = e.target.value;
      setUser(newUserAddress);
    };
  }
  const handleSubmit  = (e) => {
    if(newUser.user.email && user.password){
      const auth = getAuth();
   createUserWithEmailAndPassword(auth, user.email, user.password)
  .then(res => {
    const newUserInfo ={...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    setLoggedInUser(newUserInfo);
    updateUserName(user.name);
  })
  .catch((error) => {
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
  });

    }

    if(!newUser && user.email && user.password){
      const auth = getAuth();
   signInWithEmailAndPassword(auth, user.email, user.password)
  .then(res => {
    const newUserInfo ={...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    setUser(newUserInfo);
    setLoggedInUser(newUserInfo);
    history(from);
    console.log(res.user)
  })
  .catch((error) => {
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
  });
    }
    e.preventDefault();

  }
  const updateUserName = name => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      console.log('create a successfully ')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div style = {{textAlign: 'center'}}>
      {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign out</button> :
        <button onClick={handleSignin}>Sign in</button>
      }
      {
        user.isSignedIn && <div>
          <p>wilcome {user.name}</p>
          <p>your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      }
      <h1>Our oun Authentication</h1>
      <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id="" />
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input name='name' type="text"  onBlur={handleBlur} placeholder='Your name' required/>}
        <br />
        <input type="text" name='email' onBlur={handleBlur} placeholder='Your Email address' required/>
        <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder='Yuor Password' required/>
        <br />
        <input type="submit" value={newUser? 'Sign Up' : 'Sign In'} />
      </form>
      <p style={{color:'red'}}>{user.error}</p>
      {
        user.success && <p style={{color:'green'}}>User {newUser ?'created' : 'Logged In'} Successfully</p>
      }
      <Outlet/>
    </div>
    
  );
}

export default Login;
