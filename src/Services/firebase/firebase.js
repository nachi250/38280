// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { collection, getDocs } from 'firebase/firestore'
//import { useEffect, useState } from 'react';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLwnYtCgz0r3giPiaGivkaUjB9AoHqdI8",
  authDomain: "project-4154741091797587699.firebaseapp.com",
  projectId: "project-4154741091797587699",
  storageBucket: "project-4154741091797587699.appspot.com",
  messagingSenderId: "667208273815",
  appId: "1:667208273815:web:aa03da4acb0dfa228d3ed2"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app) 



/*const Firebase = () => {

  const [products, setProducts] = useState([])

  useEffect(()=> { 
    const db = getFirestore() 


    getDocs(collection(db, 'items')).then((snapshot) => {
      const items = snapshot.docs.map(doc =>{
        return {id: doc.id, ...doc.data()}
      })
      setProducts(items)
      console.log('items', items)
    })

  }, [])

}*/



