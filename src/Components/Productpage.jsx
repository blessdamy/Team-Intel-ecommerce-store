// // import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// library.add(faStar, faHeart)
// // fa-star

// function Productpage() {
//     return (
//       <>
// <title>bags</title>
// <body className="bg-green-50">
// <section className="bg-green-50">
// <ul className="flex items-center gap-x-12 pb-12 pt-12">
//     <li className="ml-[135px]">
// <a href="/">
// <button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
// Type 
// </button>
// </a>
// </li>
//     <li>
//     <a href="/">
// <button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
// Price
// </button>
// </a>
// </li>
//     <li>
//       <a href="/">
// <button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
// Review
// </button>
// </a>
// </li>
//     <li>
//       <a href="/">
// <button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
// Offer 
// </button>
// </a>
// </li>

// <li className="ml-[480px]">
//       <a href="/">
// <button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
// Sort by 
// </button>
// </a>
// </li>
// </ul>

// {/* <li className="ml-[600px]">
// <a href="/">
// <button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
// Sort by 
// </button>
// </a>
// </li> */}
//   <div>
// <div >
// <h1 className=" ml-12 flex items-left text-lg font-bold truncate capitalize">A Purse to Be hold </h1>
// <div className=" grid-cols-3 p-6 space-y-0 bg-green-50 lg:space-y-0 lg:grid lg:gap-0 lg:grid-rows-2 lg:gap-y-12 ">
// <div className=" rounded-md flex justify-center items-center bg-gray-200 ">
//     <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
//       <button className= " bg-gray-100 mt-4 ml-[105px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
//       <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
//       </button>
// <a href="/">
//     <img  className="ml-12 object-right h-48 w-48 object-hover " src="./assets/Gucci-red.png" alt="" />
// </a>

// <div className="px-4 py-3">
//   <span className="inline-flex">
// <p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize "> Gucci Hat </p>
// <p className=" ml-[90px] flex items-right text-lg font-bold truncate capitalize "> <span className=" line-through line-through-double">N</span>50,000 </p>
// </span>
// <span className=" flex items-left text-gray-400 text-xs">
// Brand perfect product you will love     </span>

// <div>
// <ul className="flex items-center gap-x-1">
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <span className=" flex items-left text-gray-400 text-sm">(12)     </span>
// </ul>
// </div>
// <button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
// Add to Cart 
// </button>

// </div>
//     </div>
// </div>

// <div className="flex justify-center items-center bg-gray-200  min-h-screen">
//     <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
//       <button className= " bg-gray-100 mt-4 ml-[115px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
//       <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
//       </button>
// <a href="/">
//     <img  className="ml-14 object-right h-48 w-48 object-hover " src="./assets/Totes-blackberry.png" alt="" />
// </a>

// <div className="px-4 py-3">
//   <span className="inline-flex">
// <p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize "> Totes blackberry </p>
// <p className=" ml-[50px] flex items-right text-lg font-bold truncate capitalize "><span className=" line-through line-through-double">N</span>15,000 </p>
// </span>
// <span className=" flex items-left text-gray-400 text-xs">
// Brand perfect product you will love     </span>

// <div>
// <ul className="flex items-center gap-x-1">
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-gray-300" icon={faStar} size="x" color="yellow" /></li>
//     <span className=" flex items-left text-gray-400 text-sm">(10)     </span>
// </ul>
// </div>
// <button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
// Add to Cart 
// </button>

// </div>
//     </div>
// </div>


// <div className="flex justify-center items-center bg-gray-200  min-h-screen">
//     <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
//       <button className= " bg-gray-100 mt-4 ml-[105px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
//       <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
//       </button>
// <a href="/">
//     <img  className="ml-12 object-right h-48 w-48 object-hover " src="./assets/Hermes blast Orange.png" alt="" />
// </a>

// <div className="px-4 py-3">
//   <span className="inline-flex">
// <p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize "> Hermes blast Orange </p>
// <p className=" ml-[8px] flex items-right text-lg font-bold truncate capitalize "><span className=" line-through line-through-double">N</span>25,000 </p>
// </span>
// <span className=" flex items-left text-gray-400 text-xs">
// Brand perfect product you will love     </span>

// <div>
// <ul className="flex items-center gap-x-1">
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <span className=" flex items-left text-gray-400 text-sm">(20)     </span>
// </ul>
// </div>
// <button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
// Add to Cart 
// </button>

// </div>
//     </div>
// </div>

// <div className="flex justify-center items-center bg-gray-200 min-h-screen">
//     <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
//       <button className= " bg-gray-100 mt-4 ml-[105px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
//       <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
//       </button>
// <a href="/">
//     <img  className="ml-24 object-right h-48 object-hover " src="./assets/Gucci-yellow.png" alt="" />
// </a>

// <div className="px-4 py-3">
//   <span className="inline-flex">
// <p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize "> Gucci-yellow </p>
// <p className=" ml-[70px] flex items-right text-lg font-bold truncate capitalize "><span className=" line-through line-through-double">N</span>45000 </p>
// </span>
// <span className=" flex items-left text-gray-400 text-xs">
// Brand perfect product you will love     </span>

// <div>
// <ul className="flex items-center gap-x-1">
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-gray-300" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-gray-300" icon={faStar} size="x" color="yellow" /></li>
//     <span className=" flex items-left text-gray-400 text-sm">(6)     </span>
// </ul>
// </div>
// <button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
// Add to Cart 
// </button>


// </div>
//     </div>
// </div>


// <div className="flex justify-center items-center bg-gray-200 min-h-screen">
//     <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
//       <button className= " bg-gray-100 mt-4 ml-[120px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
//       <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
//       </button>
// <a href="/">
//     <img  className="ml-20 object-right h-48 w-48 object-hover " src="./assets/pinky-backpack.png" alt="" />
// </a>

// <div className="px-4 py-3">
//   <span className="inline-flex">
// <p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize ">pinky-backpack </p>
// <p className=" ml-[60px] flex items-right text-lg font-bold truncate capitalize "> <span className=" line-through line-through-double">N</span>$13000 </p>
// </span>
// <span className=" flex items-left text-gray-400 text-xs">
// Brand perfect product you will love     </span>

// <div>
// <ul className="flex items-center gap-x-1">
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <span className=" flex items-left text-gray-400 text-sm">(25)     </span>
// </ul>
// </div>
// <button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
// Add to Cart 
// </button>

// </div>
//     </div>
// </div>

// <div className="flex justify-center items-center bg-gray-200 min-h-screen">
//     <div className="rounded-xl bg-white shadow-md hover:scale-105 duration-300">
//       <button className= " bg-gray-100 mt-4 ml-[105px] rounded-full absolute w-[30px] h-[30px] border-2 border-gray-100 ">
//       <FontAwesomeIcon className=" hover:text-red-500 fa-sm text-red-300" icon={faHeart}  />
//       </button>
// <a href="/">
//     <img  className="ml-16 object-right h-48 w-48 object-hover " src="./assets/crossbag-yellow.png" alt="" />
// </a>

// <div className="px-4 py-3">
//   <span className="inline-flex">
// <p className="mr-[49px] flex items-left text-lg font-bold truncate capitalize "> crossbag yellow </p>
// <p className=" ml-[40px] flex items-right text-lg font-bold truncate capitalize "><span className=" line-through line-through-double">N</span>32,000 </p>
// </span>
// <span className=" flex items-left text-gray-400 text-xs">
// Brand perfect product you will love     </span>

// <div>
// <ul className="flex items-center gap-x-1">
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <li><FontAwesomeIcon className="text-green-600" icon={faStar} size="x" color="yellow" /></li>
//     <span className=" flex items-left text-gray-400 text-sm">(18)     </span>
// </ul>
// </div>
// <button className="flex font-semibold text-sm bg-white hover:bg-green-900 hover:text-white text-neutral-800 py-1 px-4 rounded-full border-2 border-gray-300 mt-2">
// Add to Cart 
// </button>

// </div>
//     </div>
// </div>

// <div className="ml-[515px] justify-center items-center">
// <a href="/">
// <button className="flex flex-nowrap font-semibold text-sm bg-gray-300 hover:bg-green-900 hover:text-white text-green-900 py-1 px-8 whitespace-nowrap rounded-md border-2 border-gray-300 mt-2">
// Load more ...
// </button>
// </a>
// </div>

// </div>
// </div>
// </div>
// </section>
// </body>
//       </>
//     );
//   }
  
//   export default Productpage;