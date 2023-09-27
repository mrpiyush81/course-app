import React, { useState } from 'react'
import Card from './Card'
function Cards({courses,category}) {
 const [likedCourse,setlikedCourse]=useState([]);
  
function getalldata(){
let allcouses=[];
if(category==='All'){ 

  Object.values(courses).forEach(array=>{
    array.forEach(coursesData=>{
      allcouses.push(coursesData);
    })
  })
  return allcouses;
}
else{
  return courses[category]
}

}
if(category.empty){
  return(
    <div className="">"No data found"</div>
  )
}

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 mx-40 '>
      {
        getalldata().map((course)=>(
              <Card key={course.id} course={course} likedCourse={likedCourse} setlikedCourse={setlikedCourse}></Card>
        ))
        }
    </div>
  )
}

export default Cards
