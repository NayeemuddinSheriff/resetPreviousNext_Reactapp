import './App.css';
import ResetPrevNext from './component/resetPreviousNext';

function App() {
  const array = [
    {'Book': 'The Secret', 'Author':'Rhonda Byrne'},
    {'Book': 'Rich Dad Poor Dad', 'Author':'Robert Kiyosaki'},
    {'Book': 'Things Fall Apart', 'Author':'Chinua Achebe'},
    {'Book': 'Fairy tales', 'Author':'Hans Christian Andersen'}
  ]

  return (
    <>
    <div className="App">
      <h3>PAGINATION APP</h3>
      <ResetPrevNext array={array} />
    </div>
    </>
  );
}

export default App;
