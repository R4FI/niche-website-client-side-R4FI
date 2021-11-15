import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "firebase/auth";
import {getIdToken, GoogleAuthProvider,updateProfile, signInWithPopup} from "firebase/auth";


initializeFirebase();

const useFirebase =()=>{
  const [error] = useState("")
 const [user,setUser] = useState({});
 const [isLoading,setisLoading] = useState(true);
 const [admin,setAdmin] = useState(false);
 const [token,setToken] = useState('');
 const auth = getAuth();

 const registerUser = (email,password,name,history)=>{
     setisLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const newUser = {email,displayName:name};
      setUser(newUser);
        saveUser(email,name,'POST');
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        
      }).catch((error) => {

      });
      

      history.replace('/');
        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
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
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
  })
  .finally(()=>setisLoading(false)) ;
    }



//  setup google log in
const googleProvider = new GoogleAuthProvider();

      //user SIGN IN with google 
      const signInUsingGoogle = () => {
        setisLoading(true);
       return signInWithPopup(auth, googleProvider)
        .then((result)=>{
          const user = result.user;
          saveUser(user.email,user.displayName,'PUT');
        })
        .catch((error)=>{

        })

    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user);
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              })
            } 
            else {
              setUser({})
            }
            setisLoading(false);
          });
          return () => unSubscribe;
     },[auth])

     useEffect(()=>{
       fetch(`https://sleepy-hamlet-47496.herokuapp.com/users/${user.email}`)
       .then(res => res.json())
       .then(data=>setAdmin(data.admin))

     },[user.email])


    const logout = () => {
      setisLoading(true);
      signOut(auth).then(() => {
         
      }).catch((error) => {
        
      })
          .finally(() => setisLoading(false));
  }
 const saveUser = (email,displayName,method)=>{
    const user = {email,displayName}
    fetch ('https://sleepy-hamlet-47496.herokuapp.com/users',{
      method : method,
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })

    .then()
 }
  

 return{
     user,
     admin,
     token,
     error,
     isLoading,
    registerUser,
    signInUsingGoogle,
    loginUser,
    logout,

 }


}

export default useFirebase;