import Footer from "./components/Footer";
import Header from "./components/Header";
import Screen from "./components/Screen";
import './App.css';

function App() {
  return (
    <div className="container principal">
      <Header/>
      <main>
        <Screen/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
