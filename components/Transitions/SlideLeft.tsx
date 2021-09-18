import { Transition } from '@headlessui/react';

type Props = {
  show?: boolean;
  children: React.ReactNode;
};

export default function SlideUp({ show = true, children }: Props) {
  return (
    <Transition
      show={show}
      enter="transform transition ease-in-out duration-1000"
      enterFrom="opacity-0 translate-x-24"
      enterTo="opacity-100 translate-x-0"
      leave="transform transition ease-in-out duration-1000"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-24"
    >
      {children}
    </Transition>
  );
}
