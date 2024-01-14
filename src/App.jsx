import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import TaskBoard from "./Components/Tasks/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <HeroSection />
        <TaskBoard />
      </div>

      <Footer />
    </>
  );
}

export default App;
