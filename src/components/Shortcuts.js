import React from 'react'
import {SocialIcon} from 'react-social-icons'

const slides = [
  {
    id:1,
    url: 'https://google.com'
  },
  {
    id:2,
    url: 'https://facebook.com'
  },
  {
    id:3,
    url: 'https://twitter.com'
  },
  {
    id:4,
    url: 'https://instagram.com'
  },
  {
    id:5,
    url: 'https://linkedin.com'
  },
  {
    id:6,
    url: 'https://spotify.com'
  },
  {
    id:7,
    url: 'https://github.com'
  },
  {
    id:8,
    url: 'https://youtube.com'
  },
]

function Shortcuts() {
  return (
    
    <div className="flex flex-row flex-wrap justify-evenly space-x-2 w-80 text-xl">

     
        {slides.map((slide) => ( 
        <div  key={slide.id} className='pb-8 text-white cursor-pointer'>
          <SocialIcon bgColor='' fgColor='white' url={slide.url} />
          </div>
        ))}

    
  </div>
  )
}

export default Shortcuts