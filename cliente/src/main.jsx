import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import UserProvider from "./components/UserContext";

console.log('React version:', React.version);
console.log('ReactDOM version:', ReactDOM.version);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  // </StrictMode>
)
