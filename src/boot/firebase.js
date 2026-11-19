import { boot } from 'quasar/app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAaBbB1234567890abcdefghijklmno',
  authDomain: 'qwitter-app.firebaseapp.com',
  projectId: 'qwitter-app',
  storageBucket: 'qwitter-app.appspot.com',
  messagingSenderId: '123456789',
  appId: '1:123456789:web:abcdef1234567890'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export default boot(({ app }) => {
  // do something with app
})
