import Application from "./components/application/Application";
import CounterTwo from "./components/counter-two/CounterTwo";
import Counter from "./components/counter/Counter";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={['HTML', 'CSS']} /> */}
      {/* <Counter /> */}
      <CounterTwo count={1} />
    </div>
  );
}

export default App;
