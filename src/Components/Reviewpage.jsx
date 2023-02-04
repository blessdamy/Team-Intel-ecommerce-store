
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faStar, faHeart)



function Reviewpage() {
    return (
      <>
   
   <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Patient review form
              </h1>



<main className='flex justify-center items-center p-24 flex md:flex-row md:flex-wrap text bg-green-900 gap-x-12 pb-12 pt-12'>
      <section className=" bg-gray-50 text:bg-gray-900 w-1/3">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-0 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Review form for Service
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
      
      <div className="relative flex w-full">
      <label for="Sex" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
<select id="Sex" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Sex</option>
  <option value="US">Male</option>
  <option value="CA">Female</option>

</select>
      </div>
      
                  </div>
                  <div className='flex justify-center item-center'>
<ul className="flex items-center gap-x-1">
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <span className=" flex items-left text-gray-400 text-sm">(12)     </span>
</ul>
</div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          
                      </div>
                      
                        <div class="max-w-lg rounded-lg shadow-md shadow-blue-600/50">
  <form action="" class="w-full p-4">
    <div class="mb-2">
      <label for="comment" class="text-lg text-gray-600">Add a comment</label>
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


<section className=" bg-gray-50 text:bg-gray-900 w-1/3">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-0 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Review form for Doctors
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label for="Full Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text"  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required=""/>
                  </div>
                  <div>
                      <label for="Doctor Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text" name="Doctor Name" id="Doctor Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doctor Name" required=""/>
                  </div>
                  
                  <div>
      
      <div className="relative flex w-full">
      <label for="Sex" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
<select id="Sex" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Sex</option>
  <option value="1">Male</option>
  <option value="CA">Female</option>

</select>
      </div>
      
                  </div>
                  <div className='flex justify-center item-center'>
<ul className="flex items-center gap-x-1">
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <span className=" flex items-left text-gray-400 text-sm">(12)     </span>
</ul>
</div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          
                      </div>
                      
                        <div class="max-w-lg rounded-lg shadow-md shadow-blue-600/50">
  <form action="" class="w-full p-4">
    <div class="mb-2">
      <label for="comment" class="text-lg text-gray-600">Add a comment</label>
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
  
  export default Reviewpage;