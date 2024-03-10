import React, { useEffect, useRef } from 'react';

function LoadMore({
  callback,
  itemsLength,
  allItemsLength,
}) {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (itemsLength >= allItemsLength) return;
            callback();
          }
        });
      },
      { threshold: 0.5 },
    );

    const targetElement = targetRef.current;
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [itemsLength]);

  if (itemsLength >= allItemsLength) return null;

  return (
    <div ref={targetRef} className="load-more" />
  );
}

export default LoadMore;
