import SlideUp from '@components/Transitions/SlideRight';

export default function Cover() {
  return (
    <div className="bg-brand pt-32">
      <section className="container-center md:px-10 xl:px-40 pt-2 text-white py-32">
        <SlideUp>
          <div>
            <h1 className="py-4 text-center">Start your business today!</h1>
            <p className="py-4 text-center text-2xl">
              This document provides a guide to help with the important task of
              creating a business.
            </p>
            <div className="py-4 text-center">
              <button className="btn">Get Started</button>
            </div>
          </div>
        </SlideUp>
      </section>
    </div>
  );
}
