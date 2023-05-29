import "./App.css";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import data from "./Components/data";

function App() {
  const cardElement = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Nav />
      <Hero />
      <section className="card-list">{cardElement}</section>
    </div>
  );
}

export default App;
