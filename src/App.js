import profileImage from './IMG/mypic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My React App </h1>
      <h2> Author: Anthony Peters </h2>
        <img src={profileImage} alt="cat" />
      </div>
  );
}

export default App;
