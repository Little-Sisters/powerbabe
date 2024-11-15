import { createRoot } from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import './theme/App.css';

const container = document.getElementById('root');
const root = createRoot(container!);

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<App />} />),
);

root.render(<RouterProvider router={router} />);
