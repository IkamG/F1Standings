import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA00imITo9H25Idg4W6tI6CuqgERCZqdao",
  authDomain: "f1stats-4053d.firebaseapp.com",
  projectId: "f1stats-4053d",
  storageBucket: "f1stats-4053d.appspot.com",
  messagingSenderId: "267778717279",
  appId: "1:267778717279:web:ba613a327fd117a9174dea",
  measurementId: "G-PMWNDZDBFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
