import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Database from './Database';
import Protected from './protectedroute';
import { QueryClient,QueryClientProvider } from 'react-query';
import Error from './error';
import { Navigate} from 'react-router-dom';

const router = createBrowserRouter([{
  path : '/',
  element : <App/>, 
  index : true, 
},
 {
  path : '/database', 
  element : <Database/>, 
  errorElement : <Error/>
 },
 {
  path : '/protected', 
  element : (  
        <Protected/>
), 
  errorElement : <div>Protected</div>
 },
 { 
   path : '*',
   element : <div>Are you lost?</div>,
 }
]);

const queryClent = new QueryClient()
export const LoginState =  createContext()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClent}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

