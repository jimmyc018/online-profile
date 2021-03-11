import React, { useEffect, useRef, useState } from 'react';

import './AnimateOnScrollComp.scss';

export enum AnimationDirection {
  Up,
  Down,
  Left,
  Right
}

export interface AnimateOnScrollProp {
  children: React.ReactNode;
  id?: string;
  className?: string;
  direction?: AnimationDirection;
}

const AnimateOnScrollComp = ({
  children,
  id,
  className,
  direction = AnimationDirection.Up
}: AnimateOnScrollProp) => {
  const containerRef: any = useRef(null);
  const [ isVisible, setIsVisible ] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [ entry ] = entries;
    setIsVisible(entry.isIntersecting);
  }

  let animationDirection;

  switch(direction) {
    case AnimationDirection.Up:
      animationDirection = 'fade-in--up';
      break;
    case AnimationDirection.Down:
      animationDirection = 'fade-in--down';
      break;
    case AnimationDirection.Left:
      animationDirection = 'fade-in--left';
      break;
    case AnimationDirection.Right:
      animationDirection = 'fade-in--right';
      break;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction);
    const currentContainerRef = containerRef.current;

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }
    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    }
  });

  return (
    <section
      ref={containerRef}
      id={id}
      className={`fade-in ${animationDirection} ${isVisible ? 'fade-in--appear' : ''} ${className}`}
    >
      { children }
    </section>
  );
};

export default AnimateOnScrollComp;
