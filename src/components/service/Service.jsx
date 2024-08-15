import React from 'react'
import './Service.css'
import theme from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'
function Service() {
  return (
    <div id='service' className='services'>
        <div className="services-title">
            <h1>My Service</h1>
            <img src={theme} alt="" />
        </div>
        <div className="service-container">
            {
                Services_Data.map((Service ,index)=>{
                    return <div key= {index} className="service-formate">
                        <h3>{Service.s_no}</h3>
                        <h2>{Service.s_name}</h2>
                        <p>{Service.s_desc}</p>
                        <div className='service-readmore'>
                            <p>Read More</p>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                })
            }
        </div>
      
    </div>
  )
}

export default Service
