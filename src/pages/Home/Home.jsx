import React, { useEffect } from 'react';
import { Banner } from './Banner';
import './Home.css';
import { Skills } from './Skills';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { Education } from './Education';
import { Work } from './Work';
import { Contact } from './Contact';
import MazeGame from '../../components/MazeGame/MazeGame';



function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timelines = [];
    const svg = document.querySelector('.svg-path-container svg');
    const path = svg.querySelector('path');
    const pathLength = path.getTotalLength();

    gsap.set(path, { strokeDasharray: pathLength });

    gsap.fromTo(
      path,
      {
        strokeDashoffset: pathLength,
      },
      {
        strokeDashoffset: 0,
        // duration: 3,
        ease: 'none',
        scrollTrigger: {
          trigger: svg,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      }
    );



    const initializeTimelines = () => {


      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '5% bottom',
            end: '10% bottom',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }).fromTo(
          '.moving-screen',
          {
            transformOrigin: 'left 10%',
            opacity: 0,
            transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',

          },
          {
            transformOrigin: 'left 10%',
            transform: 'rotateY(5deg) translateX(0px)',
            duration: 1,
            opacity: 1,
          }
        )
      );

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '10% top',
            end: '10% top',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }).to('.moving-screen', {
          transformOrigin: 'left top',
          transform: 'rotateY(5deg)',
          duration: 1,
        })
      );

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '10% top',
            end: '20% top',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }).to('.moving-screen', {
          transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',
          duration: 1,
        })
      );

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '20% top',
            end: '40% top',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }).to('.moving-screen', {
          transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',
          duration: 1,
        })
      );

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '40% top',
            end: '60% top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).to('.moving-screen', {
          transformOrigin: 'right bottom',
          transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',
          duration: 1,
        })
      );

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '60% top',
            end: '80% top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).to('.moving-screen', {
          transform: 'rotateY(-10deg) translateX(calc(30vw - 2.5rem))',
          duration: 1,
        })
      );


      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '80% top',
            end: '100% top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).to('.moving-screen', {
          transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',
          duration: 1,
        })
      );
      setTimeout(() => {
        ScrollTrigger.refresh(); // Refresh ScrollTrigger after initialization
      }, 100);
    };

    initializeTimelines();

    return () => {
      // Clean up GSAP timelines and scroll triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      timelines.forEach(tl => tl.kill());
    };
  }, [location]); // Re-run the effect on route change

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh(); // Refresh scroll trigger on window resize
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='homepage'>
      <Banner />
      <div className='moving-screen-wrapper p-5'>

        <div className='moving-screen'>
          <Skills />
          <Education />
          <Work />
          <Contact />
        </div>
        <div className='svg-path-container'>
        <svg viewBox="0 0 1002 2553" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
          d="M949.874 1C949.874 1 1064.87 68 949.874 195C834.874 322 134.392 129.5 16.8914 371.5C-100.609 613.5 472.027 650.5 472.027 755.5C472.027 860.5 472.027 1296 472.027 1356C472.027 1416 243.391 1442 73.3907 1582.5C-96.6093 1723 217.891 2552.5 217.891 2552.5" 
          stroke="#126019" 
          strokeWidth={3}
          />
        </svg>

        </div>

      </div>
      <div style={{ height: '100vh', position: 'relative' }}>

        <MazeGame />
      </div>
    </div>
  );
}

export default Home;
