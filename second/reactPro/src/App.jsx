import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponents from "./components/ConditionalComponents";
import Message from "./components/message";
import Counter from "./components/Counter";
import Form from "./components/form";
function App() {
  const seatNumbers = [1, 4, 7];
  const person = {
    name: "Ahmed",
    message: "Hi there!",
    emoji: "👋",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      {/* <Hello person={person} />
      <Fruits />
      <Message /> */}
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

export default App;
