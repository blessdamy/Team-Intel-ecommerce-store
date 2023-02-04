import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faStar, faHeart)



function Patientform() {
    return (
      <>
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Patient complaint form</h1>
      <main className='flex justify-center items-center p-24 flex md:flex-row md:flex-wrap text bg-green-900 gap-x-12 pb-12 pt-12'>
      <section className=" bg-gray-50 text:bg-gray-900 w-1/3">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-0 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Patient's demographic data
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label for="Full Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text"  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required=""/>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.mail" required=""/>
                  </div>
                  <div>
                      <label for="Age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="number" name="Age" id="Age" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required=""/>
                  </div>
                  
                  <div>
      <div className="relative flex w-full">
      <label for="Sex" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <select id="Sex" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Sex</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
</select>
      </div>
      </div>
      <div>
                      <label for="Residence" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text" name="Residence" id="Residence" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Residence" required=""/>
                  </div>
                 
                  <div>
                      <label for="Income" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="number" name="Income" id="Income" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Income" required=""/>
                  </div>
                  <div>
      <div className="relative flex w-full">
      <label for="Medical insurance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <select id="Medical insurance" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Medical insurance</option>
  <option value="1">Yes</option>
  <option value="2">No</option>
</select>
      </div>
      </div>
              </form>
          </div>
      </div>
</section>


<section className=" bg-gray-50 text:bg-gray-900 w-1/3">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-0 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Patient's medical data
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
            
              <div>
      <div className="relative flex w-full">
      <label for="Drug allergy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <select id="Drug allergy" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
  <option selected>Drug allergy</option>
  <option value="1">Yes</option>
  <option value="2">No</option>
</select>
      </div>
      </div>
                  
                  <div>
      <div className="relative flex w-full">
      <label for="Diabetes Mellitus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <select id="Diabetes Mellitus" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
  <option selected>Diabetes Mellitus</option>
  <option value="1">Yes</option>
  <option value="2">No</option>
</select>
      </div>
      </div>
       
      <div>
      <div className="relative flex w-full">
      <label for="Hypertesnion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <select id="Hypertesnion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
  <option selected>Hypertesnion</option>
  <option value="1">Yes</option>
  <option value="2">No</option>
</select>
      </div>
      </div>
       
      <div>
      <div className="relative flex w-full">
      <label for="Rehumatoid arthritis" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <select id="Rehumatoid arthritis" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
  <option selected>Rehumatoid arthritis</option>
  <option value="1">Yes</option>
  <option value="2">No</option>
</select>
      </div>
      </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          
                      </div>
                      
                        <div class="max-w-lg rounded-lg shadow-md shadow-blue-600/50">
  <form action="" class="w-full p-4">
    <div class="mb-2">
      <label for="comment" class="text-lg text-gray-600">Add your medical complaint</label>
      <textarea
        class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
        name="comment"
        placeholder=""></textarea>
    </div>
    
    <div className='inline-flex'>
    <button className="flex font-semibold text-sm bg-white hover:bg-red-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">Cancel</button>
    <button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">Submit</button>
    </div>
  </form>
</div>
                  </div>
                 
                  
              </form>
          </div>
      </div>

</section>


    
 


</main>


      

      </>
    );
  }
  
  export default Patientform;