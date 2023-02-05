import React from "react";
import ProductPage from "./Components/ProductPage";
import { Routes, Route} from "react-router-dom";
import PaymentPage from "./Components/PaymentPage";

function App() {
  return (

    
         <div >
             <ProductPage/>
             <Routes>
                <Route path="./PaymentPage.jsx" element={<PaymentPage/>}></Route>
             </Routes>
         </div>
    
   )
}

export default App