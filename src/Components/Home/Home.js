import React, { useEffect, useState } from 'react';
import Course from '../Course/Course'
import './Home.css'


const Home = () =>{
    const [courses, setCourses] = useState([]);
    useEffect(() =>{
        fetch('./Data.JSON')
        .then(res => res.json())
        .then (data => setCourses(data.slice(0,4)))
    } ,[])
    return(
        <div>
            <h1 className='w-50 mx-auto'>Our Subjects For Learners</h1>
           <div className='container'>
           {
                 courses.map(course => <Course key={course.name} course={course}></Course>)
            }
           </div>
            </div>

    );
};


export default Home;