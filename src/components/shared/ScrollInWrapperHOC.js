import { useInView } from 'react-intersection-observer';

const ScrollInWrapperHOC = ({ Component, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  };

  return (
    <Component ref={ref} style={style}>
      {children}
    </Component>
  );
};

export default ScrollInWrapperHOC;
