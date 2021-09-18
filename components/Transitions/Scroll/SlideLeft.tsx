import { useState, useRef } from 'react';
import SlideLeft from '@components/Transitions/SlideLeft';
import useTriggerOnScroll from '@hooks/useTriggerOnScroll';

type Props = {
  children: React.ReactNode;
};

export default function ScrollSlideLeft({ children }: Props) {
  const el = useRef();
  const [show, setShow] = useState<boolean>(false);
  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  });
  return (
    <div ref={el}>
      <SlideLeft show={show}>{children}</SlideLeft>
    </div>
  );
}
