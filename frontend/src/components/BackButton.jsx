import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BackButton = ({ destination = '/'}) => { //prop received, if not it is initialized as default '/'
  return (
    <div className='flex'> 
        <Link
         to={destination}
         className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
        >
            <BsArrowLeft className='text-2xl'/>
        </Link>
    </div>
  )
} 

export default BackButton  