import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContex } from '../../App';

const PrivatRoute = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContex);

    if(!loggedInUser) {
        return loggedInUser ? children : <Navigate replace to="/login" />
  }
  else{
    return children;
  }
 }
export default PrivatRoute;