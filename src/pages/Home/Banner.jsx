import React, { useRef } from 'react';
import gsap from 'gsap';

export const Banner = () => {
    const logo = useRef(null);
    const logobox = useRef(null);

    function moveLogo(x, y) {
        gsap.to(logobox.current, {
            transform: `rotateX(${y}deg) rotateY(${x}deg)`,
            ease: "power2.out",
            duration: 2
        });
    }

    const MouseMoving = (e) => {
        let x = e.clientX;
        let y = e.clientY;

        let rect = logo.current.getBoundingClientRect();

        // Calculate xvalue and yvalue
        let xvalue = Math.round(-(rect.x - x + 300) / 10);
        let yvalue = Math.round((rect.y - y + 300) / 10);

        // Limit xvalue to ±30
        xvalue = Math.max(-30, Math.min(60, xvalue));

        moveLogo(xvalue, yvalue);
    };

    return (
        <div onMouseMove={MouseMoving} className='banner_wrapper'>
            <div className='banner' ref={logo}>

                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
                <div className="blob blob-4"></div>
                <div className='logo' ref={logobox}>
                    <div className='logo_img'>
                        <img src="/images/dvinaywhitelogo.svg"></img>
                    </div>
                </div>


                <div className='banner_heading'>
                    <h1>
                        Vinay Dangodra
                    </h1>
                    <span>
                        -Full Stack Developer
                    </span>
                </div>
            </div>
        </div>
    );
};