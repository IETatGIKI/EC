import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Main.css';
import { motion } from "framer-motion"
const Main = () => {
    const [click, setclick] = useState(-1);
    console.log(click);
    const totalCards = 10; // Total number of cards to navigate through

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowRight':
                if (click < totalCards) setClick(click => click + 1); // Go to the next card
                break;
            case 'ArrowLeft':
                if (click > -1) setClick(click => click - 1); // Go to the previous card
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        // Add event listener for keydown
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [click]);
    return (
        <>
            <Navbar />
            <motion.div className="container main_border text-white p-5"
                variants={{
                    hidden: { rotateY: 180, opacity: 0 },
                    show: { rotateY: 0, opacity: 1 },
                }}
                initial="hidden"
                animate="show"
                transition={{
                    duration: 1,
                }}
            >
                <div id='crd' className="container crd p-0 m-0">
                    <div className="row p-3 m-1">
                        <div className={`a${click} ${click === 0 ? 'col-md-4' : 'd-none'} col-md-4 p-0 even`}>
                        </div>
                        <div className={`a${click} ${click === 1 ? 'col-md-4' : 'd-none'} col-md-4 p-0 odd`}>
                        </div>
                        <div className={`a${click} ${click === 2 ? 'col-md-4' : 'd-none'} col-md-4 p-0 even`}>
                        </div>
                        <div className={`a${click} ${click === 3 ? 'col-md-4' : 'd-none'} col-md-4 p-0 odd`}>
                        </div>
                        <div className={`a${click} ${click === 4 ? 'col-md-4' : 'd-none'} col-md-4 p-0 even`}>
                        </div>
                        <div className={`a${click} ${click === 5 ? 'col-md-4' : 'd-none'} col-md-4 p-0 odd`}>
                        </div>
                        <div className={`a${click} ${click === 6 ? 'col-md-4' : 'd-none'} col-md-4 p-0 even`}>
                        </div>
                        <div className={`a${click} ${click === 7 ? 'col-md-4' : 'd-none'} col-md-4 p-0 odd`}>
                        </div>
                        <div className={`a${click} ${click === 8 ? 'col-md-4' : 'd-none'} col-md-4 p-0 even`}>
                        </div>
                        <div className={`a${click} ${click === 9 ? 'col-md-4' : 'd-none'} col-md-4 p-0 odd`}>
                        </div>
                        <div className={`a${click} ${click === 10 ? 'col-md-4' : 'd-none'} col-md-4 p-0 odd`}>
                        </div>
                        <div className={`${click === -1 ? 'col-md-12' : 'd-none'} one p-0`}>
                            <h1 className=''>IET</h1>
                            <h5 className='h5-one'>The institute of engineering and technology</h5><br /><br /><br />
                            <h3 className=''>" INTRODUCTION OF OUR EXECUTIVE COUNCIL"</h3>
                        </div>
                        <div className={`${click === 0 ? 'col-md-8' : 'd-none'} one p-0`}>
                            <h1 className='h1-one'>PRESIDENT:</h1>
                            <h5 className='h5-one'>MOHAMMAD HARIS</h5><br /><br /><br />
                            <h3 className='p-one'>" Baqi jesy apki marzi "</h3>
                        </div>
                        <div className={`${click === 1 ? 'col-md-8' : 'd-none'} two`}>
                            <h1 className='h1-one'>EVENT COORDINATOR:</h1>
                            <h5 className='h5-one'>HUSSAIN AHMED VIRK:</h5><br />
                            <h3 className='p-one'>" CHEEN TAPAK DUM DUM "</h3>
                        </div>
                        <div className={`${click === 2 ? 'col-md-8' : 'd-none'} three`}>
                            <h1 className='h1-one'>GENERAL SECRETARY:</h1>
                            <h5 className='h5-one'>AMMAD SHAHID:</h5><br />
                            <h3 className='p-one'>" MEETING MEIN NA AY TO DIRECT TERMINATION "</h3>
                        </div>
                        <div className={`${click === 3 ? 'col-md-8' : 'd-none'} four`}>
                            <h1 className='h1-one'>VICE PRESIDENT:</h1>
                            <h5 className='h5-one'>MURTAZA SAEED:</h5><br />
                            <h3 className='p-one'>"YOU SHOULD KNOW BETTER"</h3>
                        </div>
                        <div className={`${click === 4 ? 'col-md-8' : 'd-none'} five`}>
                            <h1 className='h1-one'>COORDINATOR INTRA:</h1>
                            <h5 className='h5-one'>ARBAB ASLAM:</h5><br />
                            <h3 className='p-one'>" GIKI OLX JOIN KARLENA " </h3>
                        </div>
                        <div className={`${click === 5 ? 'col-md-8' : 'd-none'} six`}>
                            <h1 className='h1-one'>COORDINATOR EXTERNAL:</h1>
                            <h5 className='h5-one'>M.UMER FAROOQ:</h5><br />
                            <h3 className='p-one'>"Dream big, act small, and stay humble."</h3>
                        </div>
                        <div className={`${click === 6 ? 'col-md-8' : 'd-none'} seven`}>
                            <h1 className='h1-one'>TRESURER:</h1>
                            <h5 className='h5-one'>ZAFIR SALAHUDDIN:</h5><br />
                            <h3 className='p-one'>"Your only limit is you."</h3>
                        </div>
                        <div className={`${click === 7 ? 'col-md-8' : 'd-none'} eight`}>
                            <h1 className='h1-one'>DIRECTOR LIASON :</h1>
                            <h5 className='h5-one'>KOMAL JAVAID:</h5><br />
                            <h3 className='p-one'>"Shine your light, even on the darkest days."</h3>
                        </div>
                        <div className={`${click === 8 ? 'col-md-8' : 'd-none'} nine`}>
                            <h1 className='h1-one'>DIRECTOR GIS:</h1>
                            <h5 className='h5-one'>M.KAMIL AYUB:</h5><br />
                            <h3 className='p-one'>" YOU ONLY LOOSE WHEN YOU GIVE UP "</h3>
                        </div>
                        <div className={`${click === 9 ? 'col-md-8' : 'd-none'} ten`}>
                            <h1 className='h1-one m-0 mb-1'>DIRECTOR GENERAL:</h1>
                            <h5 className='h5-one m-0'>MOHAMMAD TALHA:</h5><br />
                            <h3 className='p-one p-0 m-0'>"SCENE BAS 2 HE HAIN : <br /> (Good scene aur bad scene) "</h3>
                        </div>
                        <div className={`${click === 10 ? 'col-md-8' : 'd-none'} ten`}>
                            <h1 className='h1-one m-0 mb-1'>EXECUTIVE MEMBER:</h1>
                            <h5 className='h5-one m-0'>EMAN ANJUM:</h5><br />
                            <h3 className='p-one p-0 m-0 w-75'>"KEEP IT REAL KEEP IT KIND"</h3>
                        </div>
                    </div>
                    <div className="container row d-flex justify-content-between">
                        <div className=" d-flex align-items-end justify-content-start">
                            <button onClick={() => { if (click !== -1 || click > -1 && click < 10) { setclick(click - 1) } }} className='buttonleft'>
                                <i className="fa-solid fa-arrow-left" style={{ color: "#ffffff", }}></i>
                            </button>
                        </div>
                        <div className=" d-flex align-items-end justify-content-end">
                            <button onClick={() => { if (click === -1 || click > -1 && click < 10) setclick(click + 1) }} className='buttonright'>
                                <i className="fa-solid fa-arrow-right" style={{ color: "#ffffff", }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Main
