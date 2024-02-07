import React from "react";
import {
  ContentSolution,
  AutoScrollHeader1,
  AutoScrollHeader2,
  IndustriesAutoScroll,
  Approch,
  PowerCreativity,
  Preloader,
  Form,
  Footer,
  HeaderBanner,
  Navbar,
  Numbers,
  CreativeCrew,
  OurServices,
  CTAButton,
  Testimonials,
  PortFolio2,
  Form2,
  Contact,
  Features,
} from "../../Components/Layout";
import {
  head1,
  head2,
  head3,
  head4,
  head5,
  head6,
  head7,
  head8,
  sec1,
  sec2,
  sec3,
  sec4,
  sec5,
  sec6,
  sec7,
  sec8,
  sec9,
  ind1,
  ind2,
  ind3,
  ind4,
  ind5,
  ind6,
  ind7,
  ind8,
  ind9,
  ind10,
  ind11,
  ind12,
  ind13,
  ind14,
  ind15,
  ind16,
  sw1,
  sw2,
  sw3,
  sw4,
  sw5,
  sw6,
  sw7,
  sw8,
  sw9,
  sw10,
  sw11,
  sw12,
} from "../../assets/images";

const App = () => {
  const images = [
    head1,
    head2,
    head3,
    head4,
    head5,
    head6,
    sec1,
    head7,
    head8,

    sec4,
    sec5,
    sec2,
    sec6,
    sec7,
    sec3,
    sec8,
    sec9,
  ];

  const images3 = [
    ind1,
    ind2,
    ind3,
    ind4,
    ind5,
    ind6,
    ind7,
    ind8,
    ind9,
    ind10,
    ind11,
    ind12,
    ind13,
    ind14,
    ind15,
    ind16,
  ];
  const images4 = [
    sw1,
    sw2,
    sw3,
    sw4,
    sw5,
    sw6,
    sw7,
    sw8,
    sw9,
    sw10,
    sw11,
    sw12,
  ];
  return (
    <div>
      <Navbar />
      <HeaderBanner />
      <OurServices />
      <PortFolio2 />
      <Approch />
      <AutoScrollHeader1 images={images} />
      <Numbers />
      <Features />
      <IndustriesAutoScroll />
      <CreativeCrew />
      <Testimonials />
      <Contact />

      {/* <CTAButton /> */}
      <Footer />

      {/* <Form2 /> */}
    </div>
  );
};

export default App;
