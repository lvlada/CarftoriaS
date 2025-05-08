import { Button } from './components/ui/Button/Button';

function App() {
  return (
    <div className="center-item">
      Hello world
      <Button onClick={() => alert('Hello world!')}>Click me</Button>
    </div>
  );
}

export default App;
