import React from 'react'
import Masonry from 'react-masonry-css'
const PortCard = ({portlists}) => {

    
  return (
    <Masonry breakpointCols={4} className='masnrygrd' columnClassName="masnrygrdclm"  >{portlists.map((item , index)=><img key={index} src={item} alt={item}/>) }</Masonry>
  )
}

export default PortCard