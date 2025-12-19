import Header from "./Header";
import StartSettings from "./StartSettings";

export default function StartScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <Header />
      <StartSettings />
    </div>
  );
}
