import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password );
    }

    const signInWithGoogle = ()=> {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updataUserProfile = (displayName, photoURL) => {

        return updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
    }



    const authInfo = {
        user, 
        loading,
        createUser,
        signInWithEmail,
        signOutUser,
        updataUserProfile,
        signInWithGoogle,


    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;