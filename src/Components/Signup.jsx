import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faStar, faHeart)

function Signup() {
    return (
      <>
      <main className='flex justify-center items-center p-24 flex md:flex-row md:flex-wrap text bg-green-900 gap-x-12 pb-12 pt-12'>
     <section className=" ml-0 bg-gray-50 text:bg-gray-900 w-1/4">
      <div className=" bl-0 ml-0 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="ml-12 p-6 space-y-4 md:space-y-6 sm:p-6">

      <a href className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
      <img className="mt-0  ml-0 object-right h-96 w-[350px] object-hover " src="./assets/girl.jpg" alt="" />  
      </a>
      </div>
      </div>
      </section>

      <section className=" bg-gray-50 text:bg-gray-900 w-1/3">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-0 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label for="First name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text"  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First name" required=""/>
                  </div>
                  <div>
                      <label for="Last name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text"  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last name" required=""/>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.mail" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="password" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          
                      </div>
                  </div>
                 
                  <button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">Submit</button>

                  
                  
                  
              </form>
          </div>
      </div>
</section>


      <section className=" bg-gray-50 text:bg-gray-900 w-1/3">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-0 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Login
              </h1>
              <form class="space-y-6 md:space-y-8" action="#">
                <div>
                      <label for="Full name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text"  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required=""/>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.mail" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="password" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                        
                      </div>
                      <a href className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                      
                  </div>
                  <div>
                  <button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create an account</a>
                  </p>
                  </div>
                 
              </form>
          </div>
      </div>
</section>

</main>






      

      </>
    );
  }
  
  export default Signup;