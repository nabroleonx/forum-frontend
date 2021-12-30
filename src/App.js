// import "./App.css";
import "./index.css";
import { ClockIcon } from "@heroicons/react/outline";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="inline-flex items-center text-cyan-600 border py-1 px-2 border-transparent bg-cyan-50 rounded-md">
        <ClockIcon className="h-8 w-8 text-cyan-600 pr-1" />{" "}
        <span className="font-medium">2 mins</span>
      </div>
    </div>
  );
}

export default App;
