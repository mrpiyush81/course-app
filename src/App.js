import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {toast } from 'react-toastify';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import {filterData,apiUrl} from './components/data'

function App() {

const [courses,setcourses]=useState(null);
const [spinner,setspinner]=useState(true);
const [category,setcategory]=useState(filterData[0].title)
const [error, setError] = useState(null);

async function getData(){

setspinner(true);
try{
   let respose=await fetch(apiUrl);
   let output= await respose.json();
   setcourses(output.data);
   console.log(output.data);
}
catch{
  toast.error("network issues") 
  setError({ status: 404, message: 'Not Found' });
}

setspinner(false);
}

useEffect(()=>{
  getData();
},[])

if (error && error.status === 404) {
  return(
  <div className="">404</div>
  )
}

  return (
    <div className='min-h-screen flex flex-col bg-slate-500 '>
         <div>
          <Navbar></Navbar>
         </div>
         <div className=' '>
         <div>
          <Filter  filterata={filterData} setcategory={setcategory} category={category}></Filter>
         </div>
         <div className='w-11/12 max-w[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap'>{
           spinner?<Spinner/>:<Cards courses={courses} category={category} />
          }
          </div>
         </div>
    </div>
  )
}

export default App

