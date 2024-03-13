import React, { useState } from 'react'
import img1 from "../Images/Ellipse 1.png"

import { FaListUl } from "react-icons/fa6";
import { FaRegIdCard } from "react-icons/fa";
function Sidebar({ChangeTggle2,ChangeTggle}) {
    
  return (
    <div className='mt-4 m-auto flex flex-col justify-center'>
    <div class="flex flex-col items-center bg-white w-80 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-white-800 
    justify-center
    mt-4
    ">
            <img class="object-cover  rounded-t-lg h-96 md:h-auto md:w-20 md:rounded-none md:rounded-s-lg" src={img1} alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">Hii Reader</h5>
                <p class="mb-3 font-normal text-black-700 dark:text-black-400">Here’s your News!</p>
            </div>
        </div>
    <div class="  items-center bg-white w-80 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-white-800 
    justify-center
    mt-4
    ">
           <h1 className='text-xl font-extrabold'>View List</h1>
           
           <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 
           justify-center
           p-4
           ">
  <li class="me-2 bg-Toglebac rounded-xl">
        <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-Toglebac-100 "
        onClick={ChangeTggle2}
        >
            <FaRegIdCard size={28}/>
        </a>
    </li>
    <li class="me-2 bg-Toglebac rounded-xl">
        <a href="#"  class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 "
        onClick={ChangeTggle}
        >
            <FaListUl size={28}/>
        </a>
    </li>
    
  
</ul>
        </div>


    <div class="  items-center bg-white w-80 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-white-800 
    justify-center
    mt-4
    p-4
    ">
           <h1 className='text-xl font-extrabold'>Have a Feedback?</h1>
           
          <div className='w-1/2 h-20 rounded-xl flex justify-center items-center m-auto bg-Toglebac mt-4 '>
           <h2>We Are Listning</h2>
          </div>
        </div>

        



        
    </div>
  )
}

export default Sidebar
