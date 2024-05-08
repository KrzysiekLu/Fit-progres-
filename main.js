// const CLIENT_ID = '995752855987-6tlebufls2leskh6vpnqn2gmfp9sl8fk.apps.googleusercontent.com';

// // Funkcja do autoryzacji użytkownika
// function authenticate() {
//   return gapi.auth2.getAuthInstance()
//     .signIn({ scope: 'https://www.googleapis.com/auth/fitness.activity.read' })
//     .then(function() { console.log('Uwierzytelniono!'); })
//     .catch(function(error) { console.error('Błąd uwierzytelniania:', error); });
// }

// // Funkcja do inicjalizacji klienta Google API
// function initClient() {
//   gapi.client.init({
//     'apiKey': 'YOUR_API_KEY',
//     'clientId': CLIENT_ID,
//     'scope': 'https://www.googleapis.com/auth/fitness.activity.read',
//     'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/fitness/v1/rest']
//   }).then(function () {
//     console.log('Klient Google API zainicjalizowany!');
//     authenticate(); // Autoryzuj użytkownika po inicjalizacji klienta
//   }).catch(function(error) {
//     console.error('Błąd inicjalizacji klienta Google API:', error);
//   });
// }

// // Funkcja do załadowania klienta Google API
// function loadClient() {
//   gapi.load('client:auth2', initClient);
// }
const config = {
  myVariable: process.env.YOUR_API_KEY
};
console.log(config);
