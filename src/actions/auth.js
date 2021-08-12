import { types } from "../types/types";
import { firebase, googleProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2'

export const startLoginEmailPass = (email, password) => {
  return (dispatch) => {
    dispatch( startLoading() )
    firebase.auth().signInWithEmailAndPassword( email, password )
      .then(({ user }) => {
        dispatch(
          login( user.uid, user.displayName)
        );
        dispatch( finishLoading() );
      })
      .catch(( error ) => {
        dispatch( finishLoading() )
        console.log(error);
        Swal.fire('Error', error.message, 'error')
      })
  }
}

export const startGoogleLogin = () => {
  return(dispatch) => {
    firebase.auth().signInWithPopup( googleProvider )
      .then( ({ user }) => {
        dispatch(
          login( user.uid, user.displayName)
        )
      })
  }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
      uid,
      displayName
    }
});

export const startRegisterEmail = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword( email, password)
    .then( async ({ user }) => {
      await user.updateProfile({ displayName: name })
      //console.log(user)
      dispatch(
        login( user.uid, user.displayName)
      )
    })
    .catch( error => {
      Swal.fire('Error', error.message, 'error')
    })
  }
}

export const startLogout = () => {
  return async( dispatch ) => {
    await firebase.auth().signOut();
    dispatch( logout() )
  }
}

export const logout = () => ({
  type: types.logout
})





