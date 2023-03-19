import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import "../Styles/Home.css";

const Home = () => {
     
//     const [offset, setOffset] = useState(0);

    
//     useEffect(() => {
//         let stars=document.getElementsByClassName("stars");
// let moon=document.getElementsByClassName("moon");
// let mountains=document.getElementsByClassName("mountains");
// let man=document.getElementsByClassName("man");
//         const onScroll = () => {setOffset(window.pageYOffset);
            
//             stars.style.left=offset*0.25+"px";
//             moon.style.top=offset*1.05+"px"
//         };
        
//         window.removeEventListener('scroll', onScroll);
//         window.addEventListener('scroll', onScroll, { passive: true });
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);



  return (
    <>
    <Navbar/>
    <section >
        <img src="https://i.postimg.cc/C19R7WQM/stars.png" className='stars' alt="stars" />
        <img src="https://i.postimg.cc/C5yKkbRz/moon.png" className='moon' alt="moon" />
        <h2 className='logo_home'>E-CAMP</h2>
        <img src="https://i.postimg.cc/gcvz1XwH/mountains-behind.png" className='mountains' alt="mountains" />
        <img src="https://i.postimg.cc/26Qs9WHq/man.png" className='man' alt="man" />
    </section>
    <div className='about_us'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, repellendus optio accusamus sed saepe reprehenderit accusantium, excepturi vero, hic odio sint et! A magnam porro sed odit fugiat est facilis.
      Tempora delectus sapiente id quas fuga amet accusamus ipsa iusto velit adipisci non perspiciatis nulla, ratione facere possimus obcaecati asperiores minus. Ducimus consequuntur pariatur aliquid fugit rem accusantium, dicta officiis?
      Modi sapiente soluta consectetur perferendis? Pariatur, quas odit voluptatum similique nisi libero fugiat earum necessitatibus nemo perferendis deleniti soluta ad quae harum modi. Consectetur hic impedit, in eum nesciunt molestiae!
    </div>
    </>
  )
}

export default Home