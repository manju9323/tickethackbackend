import "./App.css"
import {React,useEffect,useState}from 'react'
//import {useEffect} from "react-router-dom"




function SeatOrder() {

const ini=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]


const col=["A","B","C","D","E","F","G","H","I"]
const row=[1,2,3,4,5,6,7,8,9,10]
const [seat,setseat]=useState([])

const avi=[{seat:[1,2,3,4]},{seat:[11,12,13,14]},{seat:[21,22,23,24,25]}]


  let aaa=()=>{
    avi.forEach((ss,m)=>{
    for(let i=0;i<ss.seat.length;i++)
  {
    ini[ss.seat[i]-1]=ss.seat[i]
  }
  })
  setseat([...ini])
  console.log(ini)
  }
  
 let a=[]
 let im=-1



  const fast=(opp)=>{
  
    if (ini[opp]==="")
    {
      im++
a[im]=opp+1
ini[opp]=opp
//ini[opp]=<div className="redy"></div>
    }
    
   else
    {
      im++
a[im]=opp+1
ini[opp]=""
//ini[opp]=<div className="greeny"></div>
    }
aaa()
   console.log(opp)
  }
  



 const submit=()=>{
avi[avi.length]={seat:[...a]}

console.log(avi)
console.log(a)
a=[]
im=-1
aaa()
 }



useEffect(()=>{aaa()},[])


  return (
    <div className='vis'>
      <div>
        <label for="name">Name</label>
      <input id="name" type="text">
        </input>
        </div>
<div className='visual'>
    <div className='containrow'>  {row.map((val,i)=>
 {return (<div className='row' key={i}>{val}</div>
 )})}</div>
  


<div className='containcol'>

    <div className='column'>
    {col.map((val,i)=>
 {return (<div className='col' key={i}>{val}</div>
 )})}
    </div>
<div className='container'> 

{seat.map((val,opp)=>
 {return ( val==="" ?<div className='seat' key={opp} onClick={()=>fast(opp)} > </div>:<div className='seat1' key={opp} >
    </div>)}
  )
}

</div>
</div>
</div>

<button  className="seatsubmit" type="submit" onClick={submit}>Submit</button>

    </div>
    
  )
}
export default SeatOrder



/*
const fast=(opp)=>{
    
  if(seat[opp]===""){
    if (ini[opp]==="")
    {
     im++
a[im]=opp+1
//ini[opp]=opp
//ini[opp]=<div className="redy"></div>
    }
    
 //if(ini[opp]!=="")
   // {
    //  im++
    //  a[im]=opp+1
 //     ini[opp]=opp
//ini[opp]=<div className="greeny"></div>
   // }

  }

  for(let i=0;i<a.length;i++)
  {
     let m=a[i]
     let count=1
      for(let j=i+1;j<=a.length;j++)
      {
        if(m===a[j])  
        {
            count++
            emp[j]=-1
        }
          
          if(emp[i]!==-1)
          {
              emp[i]=count
          }
      }
  }

let re=-1
for(let i=0;i<emp.length;i++)
{
    if(emp[i]%2!==0 && emp[i]!==-1)
    {
     re++   
        em[re]=a[i]
    }
    
}

for(let i=0;i<em.length;i++)
{
ini[i]=em[i]
}
aaa()
  }
  console.log(em)*/