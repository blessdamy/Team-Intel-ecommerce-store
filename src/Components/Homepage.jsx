
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faStar, faHeart)
// fa-star


function Homepage() {
    return (
      <>
      <section className="bg-white">
<ul className="flex items-center gap-x-12 pb-12 pt-12">
    <li className="ml-[135px]"><a href="/"><button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">Home </button></a></li>
    <li><a href="/"><button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-egray-300 mt-2">About</button></a></li>
    <li><a href="/"><button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">Staff</button></a></li>
    <li><a href="/"><button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">Others</button></a></li>
    <li className="ml-[280px]"><a href="/"><button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">Login/ Create an account </button></a></li>
</ul>

<img className='' src="" alt="" />
</section>
      </>
    );
  }
  
  export default Homepage;