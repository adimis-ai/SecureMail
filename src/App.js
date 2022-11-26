import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/LoginButton';
import Navbar from './Components/Navbar'

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className=''>
           <LoginButton />
        </div>
      ) :
        <div className=''>
            <Navbar />
        </div>
        }
    </div>
  );
}

export default App;