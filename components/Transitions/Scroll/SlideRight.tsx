import { useState, useRef } from 'react';
import SlideRight from '@components/Transitions/SlideRight';
import useTriggerOnScroll from '@hooks/useTriggerOnScroll';

type Props = {
  children: React.ReactNode;
};

export default function ScrollSlideRight({ children }: Props) {
  const el = useRef();
  const [show, setShow] = useState<boolean>(false);
  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  });
  return (
    <div ref={el}>
      <SlideRight show={show}>{children}</SlideRight>
    </div>
  );
}
