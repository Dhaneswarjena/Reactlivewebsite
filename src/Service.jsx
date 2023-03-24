import React from 'react';
import Card from './Card'
import Carddta from './Carddta'
const Service=()=>{
return(<>
<div className='container-fluid'>
<div className='row'>
           <div className='col-10 mx-auto'>
           <div className='my-5'>
                <h1 className='text-center'>Our Service</h1>
            </div>
           </div>
          </div>
          </div>
    <div className='container-fluid mb-5'>
        <div className='row'>
           <div className='col-10 mx-auto'>
             <div className='row gy-3'>
             
             {
              Carddta.map((val,ind)=>{
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title}/>
              })
             }
              </div>
           </div>
        </div>
    </div>
</>)
}
export default Service;