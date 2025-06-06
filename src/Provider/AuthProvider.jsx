import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebas/firebas.init';
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  }

  const singInOut = () => {
    setUser(null)
    return signOut(auth)
  }

  const updateUserProfile = (updateData) => {
    return updateProfile (auth.currentUser, updateData)
  }
  
  const gamerInfo = {
    user,
    createUser,
    setUser,
    logInUser,
    googleSignIn,
    singInOut,
    loading,
    updateUserProfile
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  },[])
    
  return (
    <AuthContext.Provider value={gamerInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;