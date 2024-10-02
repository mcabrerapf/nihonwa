import React, { useEffect, useRef } from 'react';

function LoadMore({
  callback,
  limit,
  listLength,
}) {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (limit >= listLength) return;
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
  }, [limit]);

  if (limit >= listLength) return null;

  return (
    <div ref={targetRef} className="load-more" />
  );
}

export default LoadMore;
