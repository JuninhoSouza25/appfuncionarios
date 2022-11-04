import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA-T0gj8IjK1ncga9DMSkegT_rLGDGnzPo",
    authDomain: "halloween-mhedica-gallery.firebaseapp.com",
    projectId:"halloween-mhedica-gallery",
    storageBucket: "halloween-mhedica-gallery.appspot.com",
    messagingSenderId: "126107013532",
    appId: "1:126107013532:web:4aec0537fc135e0ea8b859"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  export const storage = getStorage(firebaseApp)