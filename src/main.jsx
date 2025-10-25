import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// The Provider component from the react-redux library enables all components in the application to access the Redux store
import { Provider } from 'react-redux'
// The Redux store is imported from the store.js file, which holds the application's state using the reducer defined in CartSlice.jsx
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The App component is wrapped with the Provider component, with the Redux store passed as a prop */}
    {/* This allows all components in the app to access and interact with the global state managed by Redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
