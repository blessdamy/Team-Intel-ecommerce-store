

import  Homepage from "./Components/Homepage";
import  Signup from "./Components/Signup";
import  Loginpage from "./Components/Loginpage";
import  Page from "./Components/Page";
import  Shoes from "./Components/Shoes";
import Reviewpage from "./Components/Reviewpage";
import Patientform from "./Components/Patientform";



function App() {
  return (
    <>
         <div className='text-center'>
         <Homepage/>
         <Signup/>
          <Loginpage/>
             <Page />
             <Shoes />
             <Reviewpage/>
             <Patientform/>
           
            
             

         </div>
    </>
   )
}

export default App;