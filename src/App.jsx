import { Button } from './components/';
import { AppRouter } from './router';

function App() {
  return (
    <div className="center-item">
      <AppRouter />
      <Button onClick={() => alert('Hello world!')}>Click me</Button>
    </div>
  );
}

export default App;
