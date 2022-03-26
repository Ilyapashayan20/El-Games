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
const aboutCollection = db.collection('abouts')
const postsCollection = db.collection('posts').orderBy('createdAt').limit(3)
const timestamp = firebase.firestore.FieldValue.serverTimestamp




export { projectAuth,  timestamp,projectFirestore , }


export const useLoadPosts = () =>{
  const posts = ref([])
   postsCollection.onSnapshot(snapshot =>{
    posts.value =snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }))
  })
  
  return posts 
}

// --

export const createAbout = about =>{
  return aboutCollection.add(about)
}
export const getAbout = async id =>{
  const about = await aboutCollection.doc(id).get()
  return about.exists ? about.data() : null
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