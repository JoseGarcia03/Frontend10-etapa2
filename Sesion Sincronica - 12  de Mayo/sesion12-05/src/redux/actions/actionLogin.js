import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db, facebook } from "../../firebase/firebaseConfig"
import { loginTypes } from "../types/loginTypes";

export const registerUsr = ({ nombre, email, contrasenia }) => {
    return async( dispatch ) => {
        const auth = getAuth();
        try {
            const newUsr = await createUserWithEmailAndPassword( auth , email, contrasenia )
            const results = await setDoc(doc(collection(db,"usuarios"),newUsr.user.uid),{
                nombre,
                email
            })
            alert("usuario registrado exitosamente")
            dispatch( register( newUsr.user.uid, nombre, email ) )
        } catch ( err ) {
            alert("El email ya esta en uso")
        }        
    };
}

const register = ( id, nombre, email) => {
    return {
        type: loginTypes.register,
        payload: { id, nombre, email }
    }
}

// Inicio de sesion con facebook

export const loginFacebookAsync = ( ) => {
    return ( dispatch ) => {
        const auth = getAuth();
        signInWithPopup( auth, facebook)
        .then( (usr ) => console.log(usr))
    }
}