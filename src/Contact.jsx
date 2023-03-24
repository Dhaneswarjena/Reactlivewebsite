import React, { useState } from 'react';

const Contact=()=>{
   const [item,setitem]=useState({
      fullname:'',
      email:'',
      mobile:'',
      Comment:''
   });

   const inputval=(event)=>{
       const {name,value}=event.target;
       setitem((oldval)=>{
         return{
            ...oldval,
            [name]:value,
         }
       })
   }  
   const detailshow=(e)=>{
      e.preventDefault();
      setitem("");
      alert(`${item.fullname},${item.email},${item.mobile},${item.Comment}`)
   }
 
return(<>
<div className='container-fluid'>
<div className='row'>
           <div className='col-10 mx-auto'>
           <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
           </div>
          </div>
          </div>
   <div className='container-fluid'>
        <div className='row'>
           <div className='col-10 mx-auto'>
             <div className="row">
             <div className="col-md-6 col-10 mx-auto" id="formdiv">
             <form>
             <div className="mb-3">
                 <label htmlFor="exampleFormControlInput11" className="form-label">Enter full Name</label>
                  <input type="text" className="form-control" name="fullname" value={item.fullname}  onChange={inputval} placeholder="Enter your Name" />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" name="email" value={item.email} onChange={inputval} placeholder="name@example.com" />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="exampleFormControlInput13" className="form-label">Enter phone number</label>
                  <input type="number" className="form-control" name="mobile" value={item.mobile} onChange={inputval} placeholder="Enter Mobile Number" />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message </label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='add coment here...' rows="3" name="Comment" value={item.Comment} onChange={inputval}></textarea>
                  </div>
                  <button type="button" className="btn btn-success" onClick={detailshow}>Submit</button>
             </form>
             
             </div>
            
             </div>
           </div>
        </div>
    </div>
</>)
}
export default Contact;