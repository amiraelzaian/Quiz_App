import StartScreen from "./components/StartScreen";
import Theme from "./components/Theme";
import Footer from "./components/Footer";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#EEF2FF] to-[#e8dbfe]">
      <Theme />
      {/* <StartScreen /> */}
      {/* <QuizScreen /> */}
      <ResultScreen />
      <Footer />
    </div>
  );
}

export default App;
