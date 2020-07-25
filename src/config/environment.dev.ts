import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyDN9yOnDelAF6KNBQBhUa-PcsFt1VEYyKc',
    authDomain: 'euphorius-dd594.firebaseapp.com',
    databaseURL: 'https://euphorius-dd594.firebaseio.com',
    projectId: 'euphorius-dd594',
    storageBucket: 'euphorius-dd594.appspot.com',
    messagingSenderId: '494188991174',
    appId: '1:494188991174:web:7c238ad567078352f0fdc7',
    measurementId: 'G-JQJGGMBEKM'
    // apiKey: 'AIzaSyAHOZ7rWGDODCwJMB3WIt63CAIa90qI-jg',
    // authDomain: 'test-4515a.firebaseapp.com',
    // databaseURL: 'https://test-4515a.firebaseio.com',
    // projectId: 'test-4515a',
    // storageBucket: 'test-4515a.appspot.com',
    // messagingSenderId: '964743099489'
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'Euphorius',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
