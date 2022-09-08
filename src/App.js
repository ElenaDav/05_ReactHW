import Message from './Message';
import './App.css';


function App() {
  const name = 'Elena';

  return (
    <div>
      <Message name = {name} />
    </div>
  );
}

export default App;