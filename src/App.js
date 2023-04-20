import './App.css';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Score from './pages/Score';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/score',
    element: <Score />,
  },
]);
function App() {
  return (
    <div className="bg-game-primary font-valo tracking-wider min-w-[100vw] min-h-[100vh] relative">
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
