import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import FormComponent from './Example/FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tự học React JS
        </p>

        <FormComponent />

      </header>
    </div>
  );
}

export default App;
