import React from 'react'
import {Box} from '@mui/material'
import { BsTagFill,  BsTag} from 'react-icons/bs';
import { AiFillStar, } from 'react-icons/ai';
import './Card.css'
export const Card= ({
  img='',
  name='',
  imbd='',
  year='',
  id=null,
  isArchive=false,
  onClick=()=>{}
  
}) => {
  return (
    <Box className='card_container'>
      <Box>
          <img  className='img' src={img} alt={name}/>
          <Box className='archive' onClick={()=>{onClick()}}>
            {isArchive ?  <BsTagFill />: <BsTag />}
          </Box>
      </Box>
      <Box className='details' display='flex' justifyContent={'space-between'}>
          <Box>{name}{year}</Box>
          <Box className='imbd'>
          <AiFillStar className='star-icon' />
          <span> {imbd}  </span>
          </Box>
      </Box>
    </Box>
  )
}
