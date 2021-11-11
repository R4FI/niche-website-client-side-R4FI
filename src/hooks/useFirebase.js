import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "firebase/auth";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";


initializeFirebase();

const useFirebase =()=>{
  const [error] = useState("")
 const [user,setUser] = useState({});
 const [isLoading,setisLoading] = useState(true);
 const auth = getAuth();

 const registerUser = (email,password,name,history)=>{
     setisLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(()=>setisLoading(false));
 }

    const loginUser = (email,password,location,history) =>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location.state?.from || '/';
    history.replace(destination);
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  .finally(()=>setisLoading(false)) ;
    }



//  setup google log in
const googleProvider = new GoogleAuthProvider();

      //user SIGN IN with google 
      const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user);
              
            } 
            else {
              setUser({})
            }
            setisLoading(false);
          });
          return () => unSubscribe;
     },[])



    const logout = () => {
      // setIsLoading(true);
      signOut(auth).then(() => {
         
      }).catch((error) => {
        
      })
          .finally(() => setisLoading(false));
  }
 
 return{
     user,
     error,
     isLoading,
    registerUser,
    signInUsingGoogle,
    loginUser,
    logout,

 }


}

export default useFirebase;