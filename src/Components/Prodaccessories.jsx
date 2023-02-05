import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faStar, faHeart)
// fa-star

function Prodaccessories() {
    return (
      <>
<title>Accessories</title>
<body className="bg-green-50">
<section className="bg-green-50">
<ul className="flex items-center gap-x-12 pb-12 pt-12">
    <li className="ml-[135px]">
<a href="/">
<button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
Type 
</button>
</a>
</li>
    <li>
    <a href="/">
<button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
Price
</button>
</a>
</li>
    <li>
      <a href="/">
<button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
Review
</button>
</a>
</li>
    <li>
      <a href="/">
<button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
Offer 
</button>
</a>
</li>

<li className="ml-[480px]">
      <a href="/">
<button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
Sort by 
</button>
</a>
</li>
</ul>

{/* <li className="ml-[600px]">
<a href="/">
<button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
Sort by 
</button>
</a>
</li> */}
  <div>
<div >
<h1 className=" ml-12 flex items-left text-lg font-bold truncate capitalize">Accessories For You </h1>
<div className=" grid-cols-3 p-6 space-y-0 bg-green-50 lg:space-y-0 lg:grid lg:gap-0 lg:grid-rows-2 lg:gap-y-12 ">
<div className=" rounded-md flex justify-center items-center bg-gray-200 ">
    <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
      <button className= " bg-gray-100 mt-4 ml-[105px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
      <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
      </button>
<a href="/">
    <img  className="ml-12 object-right h-48 w-48 object-hover " src="./img/Lens.png" alt="" />
</a>

<div className="px-4 py-3">
  <span className="inline-flex">
<p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize "> LV Lens Platinum </p>
<p className=" ml-[90px] flex items-right text-lg font-bold truncate capitalize "> <span className=" line-through line-through-double">N</span>30,000 </p>
</span>
<span className=" flex items-left text-gray-400 text-xs">
Brand perfect product you will love     </span>

<div>
<ul className="flex items-center gap-x-1">
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <span className=" flex items-left text-gray-400 text-sm">(12)     </span>
</ul>
</div>
<button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
Add to Cart 
</button>

</div>
    </div>
</div>

<div className="flex justify-center items-center bg-gray-200  min-h-screen">
    <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
      <button className= " bg-gray-100 mt-4 ml-[115px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
      <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
      </button>
<a href="/">
    <img  className="ml-14 object-right h-48 w-48 object-hover " src="./img/hair clip.png" alt="" />
</a>

<div className="px-4 py-3">
  <span className="inline-flex">
<p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize ">Hair Clip- Bronze </p>
<p className=" ml-[50px] flex items-right text-lg font-bold truncate capitalize "><span className=" line-through line-through-double">N</span>15,000 </p>
</span>
<span className=" flex items-left text-gray-400 text-xs">
Brand perfect product you will love     </span>

<div>
<ul className="flex items-center gap-x-1">
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-gray-300" icon={faStar} size="x" color="yellow" /></li>
    <span className=" flex items-left text-gray-400 text-sm">(10)     </span>
</ul>
</div>
<button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
Add to Cart 
</button>

</div>
    </div>
</div>


<div className="flex justify-center items-center bg-gray-200  min-h-screen">
    <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
      <button className= " bg-gray-100 mt-4 ml-[105px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
      <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
      </button>
<a href="/">
    <img  className="ml-12 object-right h-48 w-48 object-hover " src="./img/Scrunchies.png" alt="" />
</a>

<div className="px-4 py-3">
  <span className="inline-flex">
<p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize "> Ribbon Set Varieties </p>
<p className=" ml-[8px] flex items-right text-lg font-bold truncate capitalize "><span className=" line-through line-through-double">N</span>10,000 </p>
</span>
<span className=" flex items-left text-gray-400 text-xs">
Brand perfect product you will love     </span>

<div>
<ul className="flex items-center gap-x-1">
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <span className=" flex items-left text-gray-400 text-sm">(20)     </span>
</ul>
</div>
<button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
Add to Cart 
</button>

</div>
    </div>
</div>

<div className="flex justify-center items-center bg-gray-200 min-h-screen">
    <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
      <button className= " bg-gray-100 mt-4 ml-[105px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
      <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
      </button>
<a href="/">
    <img  className="ml-12 object-right h-48 object-hover " src="./img/Fedora hat.png" alt="" />
</a>

<div className="px-4 py-3">
  <span className="inline-flex">
<p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize "> Fedora hat</p>
<p className=" ml-[70px] flex items-right text-lg font-bold truncate capitalize "><span className=" line-through line-through-double">N</span>29,000 </p>
</span>
<span className=" flex items-left text-gray-400 text-xs">
Brand perfect product you will love     </span>

<div>
<ul className="flex items-center gap-x-1">
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-gray-300" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-gray-300" icon={faStar} size="x" color="yellow" /></li>
    <span className=" flex items-left text-gray-400 text-sm">(6)     </span>
</ul>
</div>
<button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
Add to Cart 
</button>


</div>
    </div>
</div>


<div className="flex justify-center items-center bg-gray-200 min-h-screen">
    <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
      <button className= " bg-gray-100 mt-4 ml-[120px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
      <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
      </button>
<a href="/">
    <img  className="ml-20 object-right h-48 w-48 object-hover " src="./img/Gucci Frame.png" alt="" />
</a>

<div className="px-4 py-3">
  <span className="inline-flex">
<p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize ">Gucci Frame </p>
<p className=" ml-[60px] flex items-right text-lg font-bold truncate capitalize "> <span className=" line-through line-through-double">N</span>$25,000 </p>
</span>
<span className=" flex items-left text-gray-400 text-xs">
Brand perfect product you will love     </span>

<div>
<ul className="flex items-center gap-x-1">
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <span className=" flex items-left text-gray-400 text-sm">(25)     </span>
</ul>
</div>
<button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
Add to Cart 
</button>

</div>
    </div>
</div>

<div className="flex justify-center items-center bg-gray-200 min-h-screen">
    <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
      <button className= " bg-gray-100 mt-4 ml-[105px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
      <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
      </button>
<a href="/">
    <img  className="ml-16 object-right h-48 w-48 object-hover " src="./img/Ribbon.png" alt="" />
</a>

<div className="px-4 py-3">
  <span className="inline-flex">
<p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize "> Ankara Hairband </p>
<p className=" ml-[40px] flex items-right text-lg font-bold truncate capitalize "><span className=" line-through line-through-double">N</span>10,000 </p>
</span>
<span className=" flex items-left text-gray-400 text-xs">
Brand perfect product you will love     </span>

<div>
<ul className="flex items-center gap-x-1">
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
    <span className=" flex items-left text-gray-400 text-sm">(18)     </span>
</ul>
</div>
<button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
Add to Cart 
</button>

</div>
    </div>
</div>

<div className="ml-[515px] justify-center items-center">
<a href="/">
<button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
Load more ...
</button>
</a>
</div>

</div>
</div>
</div>
</section>
</body>
      </>
    );
  }
  
  // export default Prodaccessories;