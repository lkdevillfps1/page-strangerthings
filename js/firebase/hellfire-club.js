
import app from './app.js'
import { getFirestore,collection, addDoc  } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'



export async function SubscribeToHellfireClub(subscription){
   const db = getFirestore (app)
   const  hellfireclubCollection = collection (db, 'helfire-clube')
   const docRef = await addDoc (hellfireclubCollection, subscription)
   return docRef.id
}

// conectando a um banco de dados//