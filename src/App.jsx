import React, { useEffect } from 'react'
import Lenis from 'lenis'
import './lenis.css'
import './index.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Designs from './pages/Designs';
import Shop from './pages/Shop';
import Navbar from './component/Navbar';


function App() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  });

  useGSAP(() =>{
    document.querySelectorAll(".elem").forEach(elem => {
      let image = elem.querySelector("img")
      let tl = gsap.timeline()
    
      let xTransform = gsap.utils.random(-100, 100);
      
      tl
      .set(image, {
        transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
      }, "start")
      .to(image, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }, "start")
      .to(elem, {
        xPercent: xTransform,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  })


  return (
    <div className="w-full font-['rejouice']">
    <div className="grid grid-cols-8 grid-rows-24 gap-[2px] bg-[#D8D2CD] overflow-hidden">
      <div className='absolute p-[20px]  px-[3vw] z-[999] navbar w-full text-white flex justify-between items-center'>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/design" element={<Designs />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "1", "--c": "3" }}><img className="w-[10vw] h-[10vw]" src="./image1.jpg" alt="Image1"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "1", "--c": "7" }}><img className="w-[10vw] h-[10vw]" src="./image2.jpg" alt="Image2"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "2", "--c": "2" }}><img className="w-[10vw] h-[10vw]" src="./image3.jpg" alt="Image3"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "2", "--c": "6" }}><img className="w-[10vw] h-[10vw]" src="./image4.jpg" alt="Image4"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "3", "--c": "4" }}><img className="w-[10vw] h-[10vw]" src="./image5.jpg" alt="Image5"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "3", "--c": "8" }}><img className="w-[10vw] h-[10vw]" src="./image6.jpg" alt="Image6"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "4", "--c": "1" }}><img className="w-[10vw] h-[10vw]" src="./image7.jpg" alt="Image7"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "4", "--c": "4" }}><img className="w-[10vw] h-[10vw]" src="./image8.jpg" alt="Image8"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "5", "--c": "2" }}><img className="w-[10vw] h-[10vw]" src="./image9.jpg" alt="Image9"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "5", "--c": "6" }}><img className="w-[10vw] h-[10vw]" src="./image10.jpg" alt="Image10"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "6", "--c": "3" }}><img className="w-[10vw] h-[10vw]" src="./image11.jpg" alt="Image11"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "6", "--c": "7" }}><img className="w-[10vw] h-[10vw]" src="./image12.jpg" alt="Image12"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "7", "--c": "5" }}><img className="w-[10vw] h-[10vw]" src="./image13.jpg" alt="Image13"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "7", "--c": "8" }}><img className="w-[10vw] h-[10vw]" src="./image14.jpg" alt="Image14"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "8", "--c": "1" }}><img className="w-[10vw] h-[10vw]" src="./image15.jpg" alt="Image15"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "8", "--c": "4" }}><img className="w-[10vw] h-[10vw]" src="./image16.jpg" alt="Image16"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "9", "--c": "2" }}><img className="w-[10vw] h-[10vw]" src="./image17.jpg" alt="Image17"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "9", "--c": "6" }}><img className="w-[10vw] h-[10vw]" src="./image18.jpg" alt="Image18"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "10", "--c": "3" }}><img className="w-[10vw] h-[10vw]" src="./image19.jpg" alt="Image19"/></div>
            <div className="elem col-span-1 row-span-1" style={{ "--r": "10", "--c": "7" }}><img className="w-[10vw] h-[10vw]" src="./image20.jpg" alt="Image20"/></div>
        </div>
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black">
            <h1 className="text-8xl uppercase mb-4 font-semibold">Thomas Vance
                <sup>&reg;</sup>
            </h1>
            <h2 className="text-5xl">並外れたファッション</h2>
    </div>
    <div className="w-full h-screen bg-[#C3BCBC] flex items-center justify-center text-black mx-auto py-[18vw] relative z-[999] text-center">
    <p className="text-[3vw] w-3/4 font-regular leading-[4.2rem] text-left">Thomas Vance is a clothing brand that embodies the essence of avant-garde fashion. With a focus on pushing boundaries and challenging the status quo, our designs are not just clothes, but a statement of individuality and self-expression &reg;</p>
</div>
</div>

  );
}

export default App
