import logo from './logo.svg';
import Profile from './profile/Profile.js'


import './App.css';
function App() {
  const handleName = fullName => alert(fullName)
  return (
    <div className="App">
 
      <Profile fullName =" Adam Baroudi" bio="go my code" profession="software developper" handleName ={handleName} age = "29"><img src={logo}/> </Profile>
    </div>
  );
}


export default App;
