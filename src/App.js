import './App.css';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Score from './pages/Score';
import Play from './pages/Play';
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
  {
    path: '/play',
    element: <Play />,
  },
]);
function App() {
  return (
    <div className="bg-[rgb(49,46,43)]  font-valo tracking-wider min-w-[100vw] min-h-[100vh] relative">
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

// game: {
//   DEFAULT: 'rgb(39,37,34)',
//   primary: 'rgb(49,46,43)',
//   secondary: 'rgb(127,166,80)',
// },
// text: {
//   DEFAULT: '#FFFFFF',
// },
// buttons: {
//   DEFAULT: 'rgb(65,65,65)',
//   primary: 'rgb(65,60,55)',
// },
