import {
  Apps,
  Articles,
  Footer,
  Header,
  Hero,
  Services,
  Testimonials,
} from "./_components";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Apps />
      <Testimonials />
      <Articles />
    </div>
  );
}

{
  /* <div style={{ fontWeight: "300" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
        quaerat.
      </div>
      <div style={{ fontWeight: "400" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
        quaerat.
      </div>
      <div style={{ fontWeight: "700" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
        quaerat.
      </div> */
}
