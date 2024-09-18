import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import { HomePage } from './pages/HomePage';
import { Page1Page } from './pages/Page1Page';

export default function App() {
  const router = createBrowserRouter([{
      path: "/",
      element: <HomePage />
  },{
      path: "/page1",
      element: <Page1Page />
  },]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}