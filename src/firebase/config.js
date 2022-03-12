import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { ref, } from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyBjQ1RyB1_cT6L_irXudEEj7EP-ePfD9b0",
    authDomain: "el-games-6eb78.firebaseapp.com",
    projectId: "el-games-6eb78",
    storageBucket: "el-games-6eb78.appspot.com",
    messagingSenderId: "19243222163",
    appId: "1:19243222163:web:0cdf3f548e2c22024e7966"
  };


firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const aboutCollection = db.collection('abouts')


export { projectAuth,  timestamp,projectFirestore }

export const createAbout = about =>{
  return aboutCollection.add(about)
}
export const getAbout = async id =>{
  const about = await aboutCollection.doc(id).get()
  return about.exists ? about.data() : null
}

export const updateAbout = (id,about) =>{
  return aboutCollection.doc(id).update(about)
}

export const deleteAbout = id =>{
  return aboutCollection.doc(id).delete()
}

export const useLoadAbouts = () =>{
  const abouts = ref([])
   aboutCollection.onSnapshot(snapshot =>{
    abouts.value =snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }))
  })
  
  return abouts 
}