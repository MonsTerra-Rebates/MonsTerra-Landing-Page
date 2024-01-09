import React, {useState, useEffect} from "react";
import Ryan from '../assets/RyanZhuHeadshot.jpg';
import Hasith from '../assets/SampleHeadshotHasith.jpg';
import Evan from '../assets/SampleHeadshotEvan.jpg';
import Ray from '../assets/SampleHeadshotRay.png';
import './ImgPanelCss.css';
import { transition } from "@chakra-ui/react";
const ImgPanel = () =>{
    const Texts = [
        "Hello my name is Hasith, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
        "Hello my name is Ray, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
        "Hello my name is Evan, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
        "Hello my name is Ryan, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    ]
    

    const [activeDiv, setActiveDiv] = useState(0);

    const handleDivClick = (index) => {
        setActiveDiv(index);
    };
    const divText = Texts[activeDiv]


    const [value, setValue] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    
    const bezier = (val) =>{
        return 3*(((val/100)**2)*(3-2*val/100)+1/3)
    }

    useEffect(() => {
        console.log(transitioning)
        let timer;
        
        if (!transitioning && value !== 100) {
        // Reset value to 0 when the hook is triggered again
        setValue(0);
        } 
        if (value === 100){
            setTransitioning(false)
        }
            
            // Smoothly increase the value to 100
        timer = setTimeout(() => {
            setValue(prevValue => Math.min(prevValue + 1, 100));
        }, bezier(value)); // Adjust timing for the smooth transition (in milliseconds)
        
        
        

        return () => {
        // Clear the timeout when the component unmounts or when useEffect runs again
        clearTimeout(timer);
        };
    }, [value, transitioning]);

    // Function to trigger the transition


    useEffect(() => {
        setTransitioning(true)
        setValue(0)

    }, [activeDiv]);
    return (
        <>
        <div className="temp">
        <div className="images-container">
            
            <div
                className={`hasith-container${activeDiv === 0 ? '-active' : ''}`}
                onClick={() => handleDivClick(0)}
            >
                <img src={Hasith} alt="" className={`headshot${activeDiv === 0 ? '-active' : ''}`}/>
            </div>
            <div
                className={`ray-container${activeDiv === 1 ? '-active' : ''}`}
                onClick={() => handleDivClick(1)}
            >
                <img src={Ray} alt="" className={`headshot${activeDiv === 1 ? '-active' : ''}`}/>
            </div>
            <div
                className={`evan-container${activeDiv === 2 ? '-active' : ''}`}
                onClick={() => handleDivClick(2)}
            >
                <img src={Evan} alt="" className={`headshot${activeDiv === 2 ? '-active' : ''}`}/>
            </div>
            <div
                className={`ryan-container${activeDiv === 3 ? '-active' : ''}`}
                onClick={() => handleDivClick(3)}
            >
                <img src={Ryan} alt="" className={`headshot${activeDiv === 3 ? '-active' : ''}`}/>
            </div>
            
        </div>
        </div>

        <div className="member-text-container">
            <div className="member-text" style={{transform: `translateY(${((value-25)/1920) * 100}vw)`, opacity:`${value/100}`}}>
            <p >
                {divText}{`TEST ${value}`}
                </p>
            </div>
        </div>
        </>
    );
}

export default ImgPanel;