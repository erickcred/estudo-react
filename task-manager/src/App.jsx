import { Toaster } from "sonner";

import Sidebar from "./components/Sidebar";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <>
      <main className="flex gap-4 overflow-hidden">
        <Sidebar />
        <Tasks />
      </main>

      <Toaster
        position="top-left"
        expand={false}
        closeButton
        duration={5000}
        toastOptions={{
          style: {
            color: "#35383e",
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;
