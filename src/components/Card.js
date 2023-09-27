import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import {toast } from 'react-toastify';
function Card(props) {
  let course=props.course;
  let setlikedCourse=props.setlikedCourse;
  let likedCourse=props.likedCourse;

  function clickHandler(){
       if(likedCourse.includes(course.id)){
        setlikedCourse((prev)=> prev.filter((cid)=>(cid !== course.id)))
        toast.warning('Like Removed') ;
       }
       else{
            if(likedCourse.length ===0){
              setlikedCourse([course.id]);
            }
            else{
              setlikedCourse((prev)=>[...prev,course.id])
            }
            toast.success("Like Successfully") 
       }
  }

  return (

    <div className='w-[300px] bg-gray-900 bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative '>
          <img src={course.image.url} alt="" />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
          <button className='' onClick={clickHandler}>
            { likedCourse.includes(course.id) ?<FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem"/>
}
          </button> 
        </div>
        </div>
        <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
          <p className='text-white mt-2 '>{course.description}</p>
        </div>
    </div>

  )
}

export default Card
