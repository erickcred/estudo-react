import Sidebar from "./components/Sidebar";
import Tasks from "./pages/Task/Tasks";

function App() {
  return (
    <main className="flex gap-4 overflow-hidden">
      <Sidebar />
      <Tasks />
    </main>
  );
}

export default App;
