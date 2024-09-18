import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';

export default function App() {
  const router = createBrowserRouter([{
      path: "/",
      element: <HomePage />
  },{
      path: "/news",
      element: <NewsPage />
  },]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}