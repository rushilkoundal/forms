import './App.css';
import RecoveryScreen from './Screen/RecoveryScreen';  
import SignInScreen from './Screen/SignInScreen';
import SignUpScreen from './Screen/SignUpScreen';

function App() {
  return (
    <div className="app">
      <SignUpScreen />
      <SignInScreen />
      <RecoveryScreen />
    </div>
  );
}

export default App;
