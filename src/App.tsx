import "./App.css";
import ThemeToggleButton from "./componnets/DarkModeToggle";


function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
   
      <div className="max-w-6xl mx-auto min-h-screen px-6 py-4 flex flex-col">
 
        <nav className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">vite-boilerplate</div>
          <ThemeToggleButton />
        </nav>

      
        <main className="flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Ready to use Vite + Tailwind boilerplate
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            with Dark Mode enabled 
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
