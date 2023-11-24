import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp({"projectId":"testcifo01","appId":"1:615577967112:web:a29daf48e65aaffb820fbd","storageBucket":"testcifo01.appspot.com","apiKey":"AIzaSyDw82D8pnvYAjf_1AQ2AXWZdkIv_onSNws","authDomain":"testcifo01.firebaseapp.com","messagingSenderId":"615577967112"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"testcifo01","appId":"1:615577967112:web:a29daf48e65aaffb820fbd","storageBucket":"testcifo01.appspot.com","apiKey":"AIzaSyDw82D8pnvYAjf_1AQ2AXWZdkIv_onSNws","authDomain":"testcifo01.firebaseapp.com","messagingSenderId":"615577967112"}))),
      importProvidersFrom(provideAuth(() => getAuth()))
    ]
};
