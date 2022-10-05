import "./seat.css"
import {React,useEffect,useState}from 'react'
import axios from "axios"
import { toast} from 'react-toastify';
//import { Form } from "formik"
//import {useEffect} from "react-router-dom"




function SeatOrder() {

const ini=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]

const bli=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]


const col=["A","B","C","D","E","F","G","H","I","j","k"]
const row=[1,2,3,4,5,6,7,8,9,10]
const [seat,setseat]=useState([])
const [change,setChange]=useState([])
const [fin,setFin]=useState([])
const [email,setEmail]=useState([])
const [name,setName]=useState([])
const[blink,setBlink]=useState([])

//main rough double press


//const avi=[{seat:[1,2,3,4]},{seat:[11,12,13,14]},{seat:[21,22,23,24,25]}]


  let aaa=async()=>{

    await axios.get("https://ticketbackend.onrender.com/api/data/getmails",{headers:{'mm':`${JSON.parse(localStorage.getItem("mm"))}`}})
    .then(res=>{
      let avi=res.data
      avi.forEach((ss,m)=>{
        for(let i=0;i<ss.seat.length;i++)
      {
        ini[ss.seat[i]-1]=ss.seat[i]
        bli[ss.seat[i]-1]=ss.seat[i]
      }

    
      })
      setseat([...ini])
      setBlink([...bli])
    })
    .catch(err=>{console.log(err.response.data)})
  }
  //console.log(bli)

 
 //let bbb=()=>{

 //}
  
let a=[]
let im=-1
let e=-1
var em=[]



//--------------------------------------------------------------------------------------------------------
  const fast=(opp)=>{
    
if(blink[opp]==="")
{
    if (ini[opp]==="")
    {
     im++
a[im]=opp+1
    }

  setChange([...change,opp])
}
  
}

useEffect(()=>{re()},[change])

var emp=[]
const re=()=>{
  for(let i=0;i<change.length;i++)
  {
     let m=change[i]
     let count=1
      for(let j=i+1;j<=change.length;j++)
      {
        if(m===change[j])  
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

 
for(let i=0;i<emp.length;i++)
{
    if(emp[i]%2!==0 && emp[i]!==-1)
    {
     e++   
        em[e]=change[i]+1
    }
    
}


for(let i=0;i<em.length;i++)
{
ini[em[i]-1]=em[i]
}
setFin([...em])
aaa()

//console.log(ini)
//console.log(change)
//  console.log(emp)
 // console.log(em)
  
}


//-------------------------------------------------------------------------

 const submit=async()=>{
  let tickets={email:email,name:name.split(" "),seat:fin}
  await axios.post("https://ticketbackend.onrender.com/api/compose/mail",tickets,{headers:{'mm':`${JSON.parse(localStorage.getItem("mm"))}`}})
  .then(res=> {
    toast.success("sucessfully registered!",{
    position:toast.POSITION.TOP_CENTER
  })
})

  .catch(err=>{console.log(err.response.data) 
  }
)
a=[]
emp=[]
em=[]
im=-1
await setChange([])

console.log(tickets)
//console.log(em)

//console.log(ini)



 }



useEffect(()=>{aaa()},[])


/*{

avi[avi.length]={seat:[...fin]}
a=[]
emp=[]
em=[]
im=-1
await setChange([])






  fin.map((g,j)=>{return   <div required className="select" type="text">{g}
  </div>})
}*/



  return (
    <div className='vis'>
      <form>
      <div><label for="email">EMAIL</label><input required className="email" type="email" placeholder="entire your mail" onChange={(e)=>{setEmail(e.target.value)}} input/></div>
      
      <div className="display">
        <label for="name">NAME</label>
      <textarea required className="names" type="text" placeholder="enter list of names with spaces" onChange={(e)=>{setName(e.target.value)}}>
        </textarea>
        </div>
        </form>
      <div className="good">{
  fin.map((g,j)=>{return   <div required className="select" type="text">{g}
  </div>})}</div>
        
       
        
      
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
 {return ( val==="" ?<div className='seat' key={opp} onClick={()=>fast(opp)} > </div>:<div onClick={()=>fast(opp)} className='seat1' key={opp} >
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