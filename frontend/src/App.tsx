import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Books } from './pages/Books';
import { ReadingList } from './pages/ReadingList';
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Books/> },
      { path: 'reading-list', element: <ReadingList /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
