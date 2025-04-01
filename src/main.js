import { createApp } from 'vue'; // Import the function to create a Vue 3 app
import App from './App.vue'; // Import the root App component
import { store } from './store/store.js'; // Import the Vuex store

createApp(App) // Create the Vue app instance
  .use(store) // Use the Vuex store in the app
  .mount('#app'); // Mount the app to the DOM element with the id 'app'

