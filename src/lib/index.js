import {
  EmailAuthCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import{

//   ,
//   logInWithEmailAndPassword
// }
import { auth } from "../firebase";

export const createUser = (email, contraseña) => {
  //el console log es para ver si se cumple la promesa

  return createUserWithEmailAndPassword(auth, email, contraseña);
  console.log(createUserWithEmailAndPassword(auth, email, contraseña));
};

export const logIn = (email, contraseña) => {
  return signInWithEmailAndPassword(auth, email, contraseña);
};

// en este esrchivo van las funciones de crear, modificar y borrar post, dar like, iniciar sesión con google, comentarios
//las promesas se consumen en los otros archivos js
