import React, { useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { TweenMax, TimelineMax, Power3 } from 'gsap';

const YourComponent = () => {
  const ease = Power3.easeInOut;

  const tweenSplitSection = new TimelineMax();
  tweenSplitSection.add([
    TweenMax.fromTo(".deck1 .bg.top", 0.5, 
      {
        x: 0,
        ease: ease
      },
      {
        xPercent: -100,
        ease: ease
      }),
    TweenMax.fromTo(".deck1 .bg.bottom", 0.5, 
      {
        xPercent: 0,
        ease: ease
      },
      {
        xPercent: 100,
        ease: ease
      })
  ]);

  useEffect(() => {
    // Your other useEffect code here
  }, []);

  return (
    <div>
      <Controller>
        <Scene duration="25%" pin=".deck1">
          {(progress, event) => {
            tweenSplitSection.progress(progress);
            return (
              <div className="deck1">
                asasas
              </div>
            );
          }}
        </Scene>
      </Controller>
    </div>
  );
};

export default YourComponent;
