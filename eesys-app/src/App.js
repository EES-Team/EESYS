import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ہاں جی جاتکو!!!
        </p>
       <div>
       <ol>
             <li>Create HTML structure.</li>
             <li>Create navigation</li>
             <li>Read : https://logrocket.com/</li>
             <li>Read : Next.js : https://nextjs.org/</li>
            </ol>
       </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
   
    </div>
  );
}

export default App;
