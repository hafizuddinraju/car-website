import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthDataContext   = createContext();
const auth = getAuth(app)
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [sign , setSign] = useState({})
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const profileUpdate = async(Profile) =>{
        setLoading(true)
        return await updateProfile(auth.currentUser, Profile)
    }

    const googleLogin = (Provider)=>{
        setLoading(true)
        return signInWithPopup(auth, Provider)
    }
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentuser)=>{
            setUser(currentuser);
            setLoading(false)
        })
        return () => {
            unsubcribe();
        }
    },[sign])
    const authinfo = {user,logout,userLogin, loading, createUser, profileUpdate, setSign, googleLogin }
    return (
        <AuthDataContext.Provider value={authinfo}>
           {children} 
        </AuthDataContext.Provider>
    );
};

export default AuthContext;