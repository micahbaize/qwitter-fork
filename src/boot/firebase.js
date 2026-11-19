// TESTING NOTIFICATIONS
import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

export default boot(async ({ app }) => {
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig)

  // Initialize Authentication
  const auth = getAuth(firebaseApp)

  // Initialize Firestore
  const db = getFirestore(firebaseApp)

  // Make Firebase services available globally
  app.config.globalProperties.$auth = auth
  app.config.globalProperties.$db = db
})
