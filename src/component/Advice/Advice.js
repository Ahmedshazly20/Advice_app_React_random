import axios from 'axios';
import React,{useState,useEffect} from 'react'
import'./Advice.css'


 function Advice() {
     
    const[advice, setAdvice]=useState();
    const[id,setid]= useState(1);

useEffect(()=>{
            axios.get(`https://api.adviceslip.com/advice`).then((res)=>{
                setAdvice(res.data.slip.advice);
                
            }).catch((err)=>{console.log(err);})
    
        },[id])
    
 



    return (
        <div  className="advice-styled">
            <div className="overlays d-flex align-items-center  justify-content-center  ">
            <div className="data col-md-12  ">
                 <h2 className="text-center  " key={id}>{advice}</h2>
                 <div className="col-md-12 d-flex align-items-cente justify-content-center mt-5 ">
                 <button onClick={(e)=>setid(Math.random()*20000) } className="btn btn-primary text-center  "> GIVE ME ADVICE! </button>

                 </div>
                 
             </div>
            </div>
           
           
        </div>
    )
}
export default Advice;