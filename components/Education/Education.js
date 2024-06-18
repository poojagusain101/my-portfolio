import React from 'react'

import './Education.css'

const Education = () => {
    return (
        <div className='education' id='education'>
            <h2 className='heading-edu'>Education</h2>

            <div className='timeline-items'>
            <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">
                        2019
                    </div>
                    <div className="timeline-content">
                        <h3><b>Class 10th</b></h3>
                        <p><b>St. Mary's School, Chandigarh</b><br></br>(2018-2019)<br></br>97.8%
                        </p>
                    </div>
                </div>

                
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">
                        2021
                    </div>
                    <div className="timeline-content">
                        <h3><b>Class 12th</b></h3>
                        <p><b>Govt. Model Sr. Sec. School, Chandigarh</b><br></br>(2020-2021)<br></br>92.8%
                        </p>


                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">
                        2025
                    </div>
                    <div className="timeline-content">
                        <h3><b>University</b></h3>
                        <p><b>Punjab Engineering College, Chandigarh</b><br></br>B.Tech in Electrical Engineering<br></br>(Minor in Computer Science Engineering)
                        </p>


                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">
                        2024
                    </div>
                    <div className="timeline-content">
                        <h3><b>Internship</b></h3>
                        <p><b>(CSIR-CSIO)</b><br></br>Was assigned a Machine Learning project named AI-Vehicle Assistant which is a solution that makes use of machine learning algorithms to boost driving
                            enjoyment and vehicle efficiency.<br></br>
                            Analyzed car's OBD data and implemented various machine learning algorithms, compared
                            their accuracy and prediction time to find the best model suitable for building the assistant.
                        </p>

                    </div>
                </div>

               


               
            </div>
            <div className='topBlur' />
            <div className='bottomBlur' />
        </div>
    )
}

export default Education
