import React from 'react'
import SideBar from './SideBar'


const DashBoardM = () => {
  
  return (
    <div style={{ height: '100vh', overflowY: 'auto', overflow: 'hidden' }}>
      <div className='row'>
        <div className='col'>
        <section>
            <SideBar/>
        </section>
        </div>
        
      </div>
       
        
      
    </div>
  )
}

export default DashBoardM
