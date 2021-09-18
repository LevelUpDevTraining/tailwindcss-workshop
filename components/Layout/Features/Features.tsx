import SlideLeft from '@components/Transitions/Scroll/SlideLeft';
import SlideRight from '@components/Transitions/Scroll/SlideRight';

export default function Features() {
  return (
    <section className="content-center md:px-10 xl:px-40 py-12">
      <h2 className="text-center pb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 py-8">
        <div className="text-center">Feature 1</div>
        <div className="h-32">
          <SlideLeft>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              consequuntur animi dolorum sed illo repellendus, ad maxime. Soluta
              exercitationem placeat laboriosam illum quas ad sed ab tenetur
              maxime, doloribus perferendis.
            </p>
          </SlideLeft>
        </div>
      </div>
      <div className="h-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 py-8">
        <div className="h-32">
          <SlideRight>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              consequuntur animi dolorum sed illo repellendus, ad maxime. Soluta
              exercitationem placeat laboriosam illum quas ad sed ab tenetur
              maxime, doloribus perferendis.
            </p>
          </SlideRight>
        </div>
        <div className="text-center">Feature 2</div>
      </div>
    </section>
  );
}
