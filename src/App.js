import "./App.css";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Card
        img="./katie-zaferes.png"
        rating={5.0}
        reviewCount={6}
        country=".RSA"
        title="Life Lesson with katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
