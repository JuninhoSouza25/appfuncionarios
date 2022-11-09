import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const apiKey = "AIzaSyA-T0gj8IjK1ncga9DMSkegT_rLGDGnzPo";
const authDomain = "halloween-mhedica-gallery.firebaseapp.com";
const projectId = "halloween-mhedica-gallery";
const storageBucket = "halloween-mhedica-gallery.appspot.com";
const messagingSenderId = "126107013532";
const appId = "1:126107013532:web:4aec0537fc135e0ea8b859";

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId:appId
  };

  const firebaseApp = initializeApp(firebaseConfig)

  export const storage = getStorage(firebaseApp)