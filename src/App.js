import React from 'react';
import {BrowserRouter} from "react-router-dom";
import MainLayout from './components/MainLayout';

function App() {
   return (
      <div>
         <BrowserRouter>
             <MainLayout />
             <div>hi</div>
         </BrowserRouter>
      </div>
   );
}


export default App;
