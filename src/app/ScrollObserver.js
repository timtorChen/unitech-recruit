import React,{useEffect} from 'react';


// props.isIntersecting
// props.children
const ScrollObserver = ( props) => {
    
    useEffect(()=>{
        const options={
            threshold: 1.0
        }
        const callback=(entries)=>{
            entries.map(e=>{
                e.isIntersecting ? props.isIntersecting() : null
            })
        }

        const io = new IntersectionObserver(callback, options)
        io.observe(document.querySelector('#observer'))
    },[])


    return (
        <div id="observer">
            {props.children}
        </div>
    );
};

export default ScrollObserver;