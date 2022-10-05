import React from 'react'
import '../App.css';
import Headers from '../header/Headers';
import Image from '../image/image';
import SeatOrder from "../seat"

function Ticket() {
  return (
    <div className="Appa">
<Headers/>
      <Image/>
      <SeatOrder/>
      
    </div>
  )
}

export default Ticket