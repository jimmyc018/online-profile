import React, { useEffect, useRef, useState } from "react";

interface IProp {
  children: React.ReactNode,
  id?: string;
  className?: string;
}

const AnimateOnScrollComp = ({ children, id, className }: IProp) => {
  const containerRef: any = useRef(null);
  const [ isVisible, setIsVisible ] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [ entry ] = entries;
    setIsVisible(entry.isIntersecting);
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
  })

  return (
    <section ref={containerRef} id={id} className={`fade-in ${isVisible ? 'fade-in--appear' : ''} ${className}`}>
      { children }
    </section>
  );
};

export default AnimateOnScrollComp;
