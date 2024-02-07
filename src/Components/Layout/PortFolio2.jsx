// TagComponent.js
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import {
  indImage1,
  indImage2,
  indImage3,
  indImage4,
  indImage5,
  indImage6,
  indImage7,
  indImage8,
  indImage9,
  fp1,
  fp2,
  fp3,
  fp4,
  fp5,
  fp6,
  fp7,
  fp8,
  fp9,
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  f9,
  e1,
  e2,
  e3,
  e4,
  e5,
  e6,
  e7,
  e8,
  e9,
  p1,
  p2,
  p3,
  PhotoAP1,
  PhotoAP2,
  PhotoAP3,
  PhotoAP4,
  PhotoAP5,
  PhotoAP6,
  PhotoAP7,
  PhotoAP8,
  PhotoAP9,
  PIP1,
  PIP2,
  PIP3,
  PIP4,
  PIP5,
  PIP6,
  LIP1,
  LIP2,
  LIP3,
  LIP4,
  LIP5,
  LIP6,
  PPP1,
  PPP2,
  PPP3,
  PPP4,
  PPP5,
  PPP6,
  FIP1,
  FIP2,
  FIP3,
  FIP4,
  FIP5,
  FIP6,
  EIP1,
  EIP2,
  EIP3,
  EIP4,
  EIP5,
  EIP6,
  EIP7,
  EIP8,
  EIP9,
  FPP1,
  FPP2,
  FPP3,
  FPP4,
  FPP5,
  FPP6,
  FPP7,
  FPP8,
  FPP9,
} from "../../assets/images";

const Modal = ({ isOpen, onClose, children, render }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed zIndex bg-opacity-10 top-0 left-0 w-full   h-full flex items-center justify-center">
          <div
            className="absolute w-full  h-full bg-black bg-opacity-25"
            onClick={onClose}
          ></div>
          <div className="z-50   flex items-start lg:p-4 rounded ">
            {children || (render && render())}
            <button className=" -mt-12 lg:-mt-5" onClick={onClose}>
              <span aria-hidden="true" className="text-[40px]  text-white">
                ×
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const TagComponent = () => {
  const [selectedTag, setSelectedTag] = useState("Videography");
  const [selectedSubtag, setSelectedSubtag] = useState("All");
  const [visibleVideos, setVisibleVideos] = useState(6);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setIsModalOpen(true);
    setSelectedVideoIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoIndex(null);
  };

  const subtags = {
    Videography: [
      "All",
      "Product Videos",
      "Brand Videos",
      "Digital Ads",
      "Animation & Motion Graphics",
      "Social Media Videos",
      "Explainer Videos",
      "Corporate Films",
      "Live or Virtual Events Filming",
      "Influencer Marketing Videos",
    ],
    Photography: [
      "All",
      "Industrial Photography",
      "Lifestyle Photography",
      "Product Photography",
      "Food Photography",
      "E-Commerce Photography",
      "Fashion Photography",
    ],
    // Audio: [
    //   "All",
    //   "Music Production",
    //   "Composition",
    //   "Song Writing",
    //   "Jingle Production",
    //   "Voice Over",
    //   "Mixing Master",
    //   "Background Score",
    // ],
  };

  const contentBySubtag = {
    Videography: {
      All: [
        {
          title: "Swarovski",
          videoUrl:
            "https://www.youtube.com/embed/JLBsWSkugho?si=_xGsMoPxLvTcocWW",
        },
        {
          title: "Puma ",
          videoUrl:
            "https://www.youtube.com/embed/gyWE1W1WcMo?si=wguJOPgEZqD0PqA8",
        },
        {
          title: "Pepperfry ",
          videoUrl:
            "https://www.youtube.com/embed/ie0v1g3-jow?si=UE5l-I_BOXWDcFv6",
        },
        {
          title: "Click Studio ",
          videoUrl:
            "https://www.youtube.com/embed/-7DpxE8sAW4?si=sYpomtloztsURuMs",
        },
        {
          title: "Skechers",
          videoUrl:
            "https://www.youtube.com/embed/--mFE3ZbFXM?si=_d38a5HDHxc6uLHJ",
        },
        {
          title: "Vivo",
          videoUrl:
            "https://www.youtube.com/embed/vMw3USNmiAw?si=j7chF2RuIPF9WKpf",
        },
        {
          title: "Nexa",
          videoUrl:
            "https://www.youtube.com/embed/qZoFSaU1_os?si=i6a7DJU80HiGzG5Y",
        },
        {
          title: "Orient ",
          videoUrl:
            "https://www.youtube.com/embed/b55DdUInARQ?si=0rCt9rQjPeY6kk_D",
        },
        {
          title: "Addverb ",
          videoUrl:
            "https://www.youtube.com/embed/1ht3mpNXN88?si=WqGgSnNuWUehbBFk",
        },
        {
          title: "Xebia Academia ",
          videoUrl:
            "https://www.youtube.com/embed/eapyKX-_erM?si=li-nK_Hy2MsKhWjc",
        },
        {
          title: "Successive Tech",
          videoUrl:
            "https://www.youtube.com/embed/aARCoqbBVbk?si=InSYDoGvmdcS_q-3",
        },
        {
          title: "Mélange Digital ",
          videoUrl:
            "https://www.youtube.com/embed/xmoZepORbQM?si=O9plaJqRLE_QmZo-",
        },

        // {
        //   title: "Puma - Beauty & Fashion",
        //   videoUrl:
        //     "https://www.youtube.com/embed/SgvDVYv3JUU?si=_IW6Vs_5AsosEZGU",
        // },

        // {
        //   title: "Skechers- Beauty & Fashion",
        //   videoUrl:
        //     "https://www.youtube.com/embed/QBeEA4_Fsak?si=_Bic_ULDcNtjiyze",
        // },

        {
          title: "Pepperfry",
          videoUrl:
            "https://www.youtube.com/embed/X_s9Ap--QCc?si=J7wjeofdOXAJjNFp",
        },
        {
          title: "Taj ",
          videoUrl:
            "https://www.youtube.com/embed/PhMTAIYgL9s?si=V5pjJ-SSNvfUrGb1",
        },
        {
          title: "IIFL ",
          videoUrl: "https://youtube.com/embed/b294qldYrVo?si=Kr_75tp0BSVLTz2U",
        },
        {
          title: "IIFL",
          videoUrl: "https://youtube.com/embed/Y0IKGtu7m4A?si=ECAUpKl75fRBldqA",
        },
        {
          title: "Yumme",
          videoUrl: "https://youtube.com/embed/Y4ucclmoyME?si=7gxNcHIyoQEKTT_V",
        },
        {
          title: "Kalon",
          videoUrl: "https://youtube.com/embed/n7En3o1tZyg?si=Bhw2_mgWcU-j7_rN",
        },
        {
          title: "Wolfman",
          videoUrl: "https://youtube.com/embed/RqwYlnmv4cM?si=kxYDCq0ZNHWiYsSi",
        },
        {
          title: "Arq Mithai",
          videoUrl: "https://youtube.com/embed/EcUeX4p3FeQ?si=BMwB8gGB9o2wcvNV",
        },
        {
          title: "Hills & Dales",
          videoUrl:
            "https://www.youtube.com/embed/bEU8rp7yO-Q?si=fiNuwpFzFUw-bdoC",
        },
        {
          title: "Gauhar Khan",
          videoUrl:
            "https://www.youtube.com/embed/-GqnW0de-XQ?si=9Bxn-LZq0ciEZ4N4",
        },
        {
          title: "Diajio",
          videoUrl: "https://youtube.com/embed/xBwinKmlqGg?si=Se6N0hRzYn0UHUly",
        },
        {
          title: "Sony",
          videoUrl:
            "https://www.youtube.com/embed/ZOUouAJSrNk?si=mSnb60w268FmAs4t",
        },
        {
          title: "Sony",
          videoUrl:
            "https://www.youtube.com/embed/cPSYrwgXKOw?si=OeuaLxFuYAUIJSg0",
        },
        {
          title: "Arq Mithai",
          videoUrl: "https://youtube.com/embed/O-IHFdpwsgs?si=DRnC4IFPqvULH_Bc",
        },
        {
          title: "HCL",
          videoUrl:
            "https://www.youtube.com/embed/jtktd1FCZGI?si=_1F1wtj6-3SrrKZ4",
        },
        {
          title: "Logimat",
          videoUrl:
            "https://www.youtube.com/embed/YY7aIG1SXRU?si=aZPannYaqFlkYiYc",
        },
        {
          title: "Addverb",
          videoUrl:
            "https://www.youtube.com/embed/tkAobLwg9rk?si=Pe01DRkNAFY0sqaB",
        },
        {
          title: "BMW",
          videoUrl:
            "https://www.youtube.com/embed/5V2FnNrJYRc?si=ewLZ9UyU4rKkPt_2",
        },
        {
          title: "BMW",
          videoUrl:
            "https://www.youtube.com/embed/BXcbEIWPDXY?si=uTNqd2rnh_CnUTlx",
        },
        {
          title: "DevTheory",
          videoUrl:
            "https://www.youtube.com/embed/4q51P-bbb4Q?si=5YYTXTLCl1Uu0MSO",
        },
        {
          title: "Abbott",
          videoUrl:
            "https://www.youtube.com/embed/PXju0Axo13g?si=3hdkGigdLxgMnmmh",
        },
        {
          title: "Addverb",
          videoUrl:
            "https://www.youtube.com/embed/qBhzAu8SOb0?si=dE3HXqsDx899sRTl",
        },
        {
          title: "Lenskart",
          videoUrl:
            "https://www.youtube.com/embed/E_BMi5MPsI8?si=a4uqSXLQJ-rBFb_O",
        },
        {
          title: "Xebia",
          videoUrl:
            "https://www.youtube.com/embed/Nhy20uAkthk?si=ub-oISAPs8cicdi6",
        },
        // {
        //   title: "StatusNeo - Software & Technology",
        //   videoUrl:
        //     "https://www.youtube.com/embed/CVyoTvC39o8?si=mpFNrkrJui-UCERE",
        // },
        // {
        //   title: "StatusNeo -Software & Technology",
        //   videoUrl:
        //     "https://www.youtube.com/embed/U0c7RRqAW8w?si=7wHIER-R04JxnRTR",
        // },
      ],
      "Product Videos": [
        {
          title: "Orient",
          videoUrl:
            "https://www.youtube.com/embed/b55DdUInARQ?si=0rCt9rQjPeY6kk_D",
        },
        {
          title: "Vivo",
          videoUrl:
            "https://www.youtube.com/embed/vMw3USNmiAw?si=HYZauOMU2TIwzfkP",
        },
        {
          title: "Nexa",
          videoUrl:
            "https://www.youtube.com/embed/qZoFSaU1_os?si=i6a7DJU80HiGzG5Y",
        },
        {
          title: "Xebia Academia",
          videoUrl:
            "https://www.youtube.com/embed/eapyKX-_erM?si=li-nK_Hy2MsKhWjc",
        },
      ],
      "Brand Videos": [
        {
          title: "Click Studio",
          videoUrl:
            "https://www.youtube.com/embed/-7DpxE8sAW4?si=sYpomtloztsURuMs",
        },
        {
          title: "Addverb",
          videoUrl:
            "https://www.youtube.com/embed/1ht3mpNXN88?si=WqGgSnNuWUehbBFk",
        },
        {
          title: "Successive Tech",
          videoUrl:
            "https://www.youtube.com/embed/aARCoqbBVbk?si=InSYDoGvmdcS_q-3",
        },
        {
          title: "Mélange Digital",
          videoUrl:
            "https://www.youtube.com/embed/xmoZepORbQM?si=O9plaJqRLE_QmZo-",
        },
      ],
      "Digital Ads": [
        {
          title: "Puma",
          videoUrl:
            "https://www.youtube.com/embed/gyWE1W1WcMo?si=wguJOPgEZqD0PqA8",
        },
        // {
        //   title: "Puma",
        //   videoUrl:
        //     "https://www.youtube.com/embed/SgvDVYv3JUU?si=_IW6Vs_5AsosEZGU",
        // },
        // {
        //   title: "Skechers",
        //   videoUrl:
        //     "https://www.youtube.com/embed/--mFE3ZbFXM?si=_d38a5HDHxc6uLHJ",
        // },
        {
          title: "Skechers",
          videoUrl:
            "https://www.youtube.com/embed/QBeEA4_Fsak?si=_Bic_ULDcNtjiyze",
        },
        {
          title: "Vivo",
          videoUrl:
            "https://www.youtube.com/embed/vMw3USNmiAw?si=j7chF2RuIPF9WKpf",
        },
        {
          title: "Swarvoski",
          videoUrl:
            "https://www.youtube.com/embed/JLBsWSkugho?si=_xGsMoPxLvTcocWW",
        },
        {
          title: "Pepperfry",
          videoUrl:
            "https://www.youtube.com/embed/ie0v1g3-jow?si=UE5l-I_BOXWDcFv6",
        },
        // {
        //   title: "Pepperfry",
        //   videoUrl:
        //     "https://www.youtube.com/embed/X_s9Ap--QCc?si=J7wjeofdOXAJjNFp",
        // },
      ],
      "Animation & Motion Graphics": [
        {
          title: "Taj",
          videoUrl:
            "https://www.youtube.com/embed/PhMTAIYgL9s?si=V5pjJ-SSNvfUrGb1",
        },
        {
          title: "HCL",
          videoUrl:
            "https://www.youtube.com/embed/jtktd1FCZGI?si=_1F1wtj6-3SrrKZ4",
        },
        // {
        //   title: "IIFL",
        //   videoUrl: "https://youtube.com/embed/b294qldYrVo?si=Kr_75tp0BSVLTz2U",
        // },
        {
          title: "IIFL",
          videoUrl: "https://youtube.com/embed/Y0IKGtu7m4A?si=ECAUpKl75fRBldqA",
        },
      ],
      "Social Media Videos": [
        {
          title: "Yumme",
          videoUrl: "https://youtube.com/embed/Y4ucclmoyME?si=7gxNcHIyoQEKTT_V",
        },
        {
          title: "Kalon",
          videoUrl: "https://youtube.com/embed/n7En3o1tZyg?si=Bhw2_mgWcU-j7_rN",
        },
        {
          title: "Wolfman",
          videoUrl: "https://youtube.com/embed/RqwYlnmv4cM?si=kxYDCq0ZNHWiYsSi",
        },
        {
          title: "Arq Mithai",
          videoUrl: "https://youtube.com/embed/EcUeX4p3FeQ?si=BMwB8gGB9o2wcvNV",
        },
      ],
      "Explainer Videos": [
        {
          title: "Sony",
          videoUrl:
            "https://www.youtube.com/embed/ZOUouAJSrNk?si=mSnb60w268FmAs4t",
        },
        // {
        //   title: "Sony",
        //   videoUrl:
        //     "https://www.youtube.com/embed/cPSYrwgXKOw?si=OeuaLxFuYAUIJSg0",
        // },
        {
          title: "Arq Mithai",
          videoUrl: "https://youtube.com/embed/O-IHFdpwsgs?si=DRnC4IFPqvULH_Bc",
        },
        {
          title: "HCL",
          videoUrl:
            "https://www.youtube.com/embed/jtktd1FCZGI?si=_1F1wtj6-3SrrKZ4",
        },
      ],
      "Corporate Films": [
        {
          title: "Lenskart",
          videoUrl:
            "https://www.youtube.com/embed/E_BMi5MPsI8?si=a4uqSXLQJ-rBFb_O",
        },
        {
          title: "Abbott",
          videoUrl:
            "https://www.youtube.com/embed/PXju0Axo13g?si=3hdkGigdLxgMnmmh",
        },
        {
          title: "Addverb",
          videoUrl:
            "https://www.youtube.com/embed/qBhzAu8SOb0?si=dE3HXqsDx899sRTl",
        },

        {
          title: "Xebia",
          videoUrl:
            "https://www.youtube.com/embed/Nhy20uAkthk?si=ub-oISAPs8cicdi6",
        },
      ],
      "Live or Virtual Events Filming": [
        {
          title: "BMW",
          videoUrl:
            "https://www.youtube.com/embed/5V2FnNrJYRc?si=ewLZ9UyU4rKkPt_2",
        },
        {
          title: "Logimat",
          videoUrl:
            "https://www.youtube.com/embed/YY7aIG1SXRU?si=aZPannYaqFlkYiYc",
        },
        {
          title: "Addverb",
          videoUrl:
            "https://www.youtube.com/embed/tkAobLwg9rk?si=Pe01DRkNAFY0sqaB",
        },

        {
          title: "BMW",
          videoUrl:
            "https://www.youtube.com/embed/BXcbEIWPDXY?si=uTNqd2rnh_CnUTlx",
        },
        {
          title: "DevTheory",
          videoUrl:
            "https://www.youtube.com/embed/4q51P-bbb4Q?si=5YYTXTLCl1Uu0MSO",
        },
      ],
      "Influencer Marketing Videos": [
        {
          title: "Hills & Dales",
          videoUrl:
            "https://www.youtube.com/embed/bEU8rp7yO-Q?si=fiNuwpFzFUw-bdoC",
        },
        {
          title: "Gauhar Khan",
          videoUrl:
            "https://www.youtube.com/embed/-GqnW0de-XQ?si=9Bxn-LZq0ciEZ4N4",
        },
        {
          title: "Diajio",
          videoUrl: "https://youtube.com/embed/xBwinKmlqGg?si=Se6N0hRzYn0UHUly",
        },
      ],
    },
    Photography: {
      All: [
        {
          title: "Sony",
          videoUrl: PhotoAP1,
          industry: "Product Photography",
        },
        {
          title: "Earth Raga",
          videoUrl: PhotoAP7,
          industry: "Product Photography",
        },
        {
          title: "Kardo",
          videoUrl: PhotoAP2,
          industry: "E-commerce Photography",
        },
        {
          title: "Me & K",
          videoUrl: PhotoAP3,
          industry: "Fashion Photography",
        },
        {
          title: "Arq Mithai",
          videoUrl: PhotoAP4,
          industry: "Food Photography",
        },
        {
          title: "Kalon",
          videoUrl: PhotoAP5,
          industry: "Lifestyle Photography",
        },
        {
          title: "Lenskart",
          videoUrl: PhotoAP6,
          industry: "Industrial Photography",
        },

        {
          title: "Ray Ethnic",
          videoUrl: PhotoAP8,
          industry: "E-commerce Photography",
        },
        {
          title: "Anjum Bhardwaj",
          videoUrl: PhotoAP9,
          industry: "E-commerce Photography",
        },
      ],
      "Industrial Photography": [
        {
          title: "Lenskart",
          videoUrl: PIP1,
          // industry: "Product Photography",
        },
        {
          title: "Addverb",
          videoUrl: PIP2,
          // industry: "E-commerce Photography",
        },
        {
          title: "Lenskart",
          videoUrl: PIP4,
          // industry: "Fashion Photography",
        },
        {
          title: "Addverb",
          videoUrl: PIP3,
          // industry: "Food Photography",
        },
        {
          title: "Lenskart",
          videoUrl: PIP5,
          // industry: "Lifestyle Photography",
        },
        {
          title: "Addverb",
          videoUrl: PIP6,
          // industry: "Industrial Photography",
        },
      ],
      "Lifestyle Photography": [
        {
          title: "Cult Fitness",
          videoUrl: LIP1,
          // industry: "Product Photography",
        },
        {
          title: "Kalon",
          videoUrl: LIP2,
          // industry: "E-commerce Photography",
        },
        {
          title: "Cult Fitness",
          videoUrl: LIP3,
          // industry: "Fashion Photography",
        },
        {
          title: "Kalon",
          videoUrl: LIP4,
          // industry: "Food Photography",
        },
        {
          title: "Cult Fitness",
          videoUrl: LIP5,
          // industry: "Lifestyle Photography",
        },
        {
          title: "Kalon",
          videoUrl: LIP6,
          // industry: "Industrial Photography",
        },
      ],
      "Product Photography": [
        {
          title: "Kalon",
          videoUrl: PPP4,
          // industry: "Food Photography",
        },
        {
          title: "Blenders Pride",
          videoUrl: PPP3,
          // industry: "Fashion Photography",
        },
        {
          title: "Sony",
          videoUrl: PPP1,
          // industry: "Product Photography",
        },
        {
          title: "Earth Raga",
          videoUrl: PPP2,
          // industry: "E-commerce Photography",
        },

        {
          title: "Auff Beat",
          videoUrl: PPP5,
          // industry: "Lifestyle Photography",
        },
        {
          title: "Kalon",
          videoUrl: PPP6,
          // industry: "Industrial Photography",
        },
      ],
      "Food Photography": [
        {
          title: "Yumme",
          videoUrl: FIP1,
          // industry: "Product Photography",
        },
        {
          title: "Arq Mithai",
          videoUrl: FIP2,
          // industry: "E-commerce Photography",
        },
        {
          title: "Kalon",
          videoUrl: FIP3,
          // industry: "Fashion Photography",
        },
        {
          title: "Arq Mithai",
          videoUrl: FIP4,
          // industry: "Food Photography",
        },
        {
          title: "Yumme",
          videoUrl: FIP5,
          // industry: "Lifestyle Photography",
        },
        {
          title: "Arq Mithai",
          videoUrl: FIP6,
          // industry: "Industrial Photography",
        },
      ],
      "E-Commerce Photography": [
        {
          title: "Duds",
          videoUrl: EIP1,
          // industry: "Product Photography",
        },
        {
          title: "Ray Ethnic",
          videoUrl: EIP2,
          // industry: "E-commerce Photography",
        },
        {
          title: "Kardo",
          videoUrl: EIP3,
          // industry: "Fashion Photography",
        },
        {
          title: "Archives",
          videoUrl: EIP4,
          // industry: "Food Photography",
        },
        {
          title: "Duds",
          videoUrl: EIP5,
          // industry: "Lifestyle Photography",
        },
        {
          title: "Indigo",
          videoUrl: EIP6,
          // industry: "Industrial Photography",
        },
        {
          title: "Kardo",
          videoUrl: EIP7,
          // industry: "Product Photography",
        },
        {
          title: "Festive Collections",
          videoUrl: EIP8,
          // industry: "E-commerce Photography",
        },
        {
          title: "Kardo",
          videoUrl: EIP9,
          // industry: "E-commerce Photography",
        },
      ],
      "Fashion Photography": [
        {
          title: "Dea",
          videoUrl: FPP1,
          // industry: "Product Photography",
        },
        {
          title: "Me & K",
          videoUrl: FPP2,
          // industry: "E-commerce Photography",
        },
        {
          title: "Festive Collections",
          videoUrl: FPP3,
          // industry: "Fashion Photography",
        },
        {
          title: "Me & K",
          videoUrl: FPP4,
          // industry: "Food Photography",
        },
        {
          title: "Kardo",
          videoUrl: FPP5,
          // industry: "Lifestyle Photography",
        },
        {
          title: "Anjum Bhardwaj",
          videoUrl: FPP6,
          // industry: "Industrial Photography",
        },
        {
          title: "Festive Collections",
          videoUrl: FPP7,
          // industry: "Product Photography",
        },
        {
          title: "Ray Ethnic",
          videoUrl: FPP8,
          // industry: "E-commerce Photography",
        },
        {
          title: "Kardo",
          videoUrl: FPP9,
          // industry: "E-commerce Photography",
        },
      ],
      // ... add content for other subtags in Photography
    },
  };

  const [props, set] = useSpring(() => ({
    left: 0,
  }));

  const bind = useGesture({
    onDrag: ({ delta: [x] }) => {
      const index = tabs.indexOf(selectedTag);
      const nextIndex =
        x > 0 ? Math.min(index + 1, tabs.length - 1) : Math.max(index - 1, 0);
      setSelectedTag(tabs[nextIndex]);
    },
    onDragEnd: () => {
      // Implement any additional logic on drag end if needed
    },
  });

  const loadMore = () => {
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 6);
  };

  const viewLess = () => {
    setVisibleVideos((prevVisibleVideos) => Math.max(prevVisibleVideos - 6, 6));
  };

  return (
    <div id="portfolio" className="px-4 pb-4 lg:px-4 mt-5 lg:mt-20">
      <div className="text-center text-[#000] headings mb-5 lg:mb-10">
        <span className="text-[36px] lg:text-5xl font-semibold leading-[56px]">
          Our{" "}
        </span>
        <span className="text-[36px] lg:text-5xl font-semibold leading-[56px]">
          Portfolio
        </span>
      </div>
      <div className="flex items-center font-nunito text-[16px] lg:text-[18px]  font-semibold justify-center space-x-3 lg:space-x-10 ">
        {Object.keys(subtags).map((tag) => (
          <button
            key={tag}
            className={`px-4 rounded-full py-2 ${
              selectedTag === tag
                ? "border border-blue-400  multiverse-text"
                : "border border-gray-200 text-gray-500"
            }`}
            onClick={() => {
              setSelectedTag(tag);
              setSelectedSubtag("All");
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="my-5 lg:my-10">
        {/* <h2 className="text-xl font-bold ">{selectedTag} Subtags:</h2> */}
        <ul className=" flex flex-col  lg:space-y-5 font-nunito text-[12px] lg:text-[16px] font-medium justify-center space-x-0 lg:space-x-20  max-container  items-center lg:pl-4 mt-2">
          <div className="hidden lg:flex space-x-4 text-center lg:text-left lg:space-x-10">
            {subtags[selectedTag].slice(0, 5).map((subtag) => (
              <div>
                <div
                  key={subtag}
                  className={`cursor-pointer flex ${
                    selectedSubtag === subtag ? " multiverse-text3  " : ""
                  }`}
                  onClick={() => setSelectedSubtag(subtag)}
                >
                  {subtag}
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex space-x-4 text-center lg:text-left lg:space-x-10">
            {subtags[selectedTag].slice(5, 11).map((subtag) => (
              <div
                key={subtag}
                className={`cursor-pointer flex list-none ${
                  selectedSubtag === subtag ? "multiverse-text3 underline" : ""
                }`}
                onClick={() => setSelectedSubtag(subtag)}
              >
                {subtag}
              </div>
            ))}
          </div>
          <div className="flex items-center lg:hidden w-[100%] overflow-x-scroll space-x-4 text-center whitespace-nowrap lg:text-left ">
            {subtags[selectedTag].map((subtag) => (
              <div
                key={subtag}
                className={`cursor-pointer font-semibold text-[16px] flex list-none ${
                  selectedSubtag === subtag
                    ? "multiverse-text border-2  border-[#d940ff] py-1 px-2 rounded-[20px]"
                    : ""
                }`}
                onClick={() => setSelectedSubtag(subtag)}
              >
                {subtag}
              </div>
            ))}
          </div>
        </ul>
      </div>

      <div className="lg:mb-5 max-container grid grid-cols-1 lg:grid-cols-3 lg:gap-x-5 gap-y-5 lg:gap-y-10 lg:px-[100px]">
        {contentBySubtag[selectedTag][selectedSubtag]
          .slice(0, visibleVideos)
          .map((video, index) => (
            <div className="mb-4 w-full lg:w-[350px]" key={index}>
              {selectedTag === "Videography" ? (
                // Render video with modal
                <div className="relative group overflow-hidden rounded-[20px]">
                  <iframe
                    width="100%"
                    height="370"
                    src={video.videoUrl}
                    title={video.title}
                    allowFullScreen
                    frameBorder="0"
                    className="rounded-[20px] transition-transform transform group-hover:scale-105 cursor-pointer"
                  ></iframe>
                  <div
                    onClick={() => openModal(index)}
                    className="absolute  left-0 bottom-0 w-full h-full bg-black bg-opacity-50 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer"
                  >
                    <p className="p-2 flex flex-col font-nunito font-semibold text-[24px] absolute left-4 bottom-4">
                      {video.title}
                      <span className="font-nunito mt-2 text-base">
                        {video.industry}
                      </span>
                    </p>
                  </div>
                </div>
              ) : (
                // Render image with modal
                <div className="relative group overflow-hidden rounded-[20px]">
                  <img
                    src={video.videoUrl}
                    alt=""
                    className="w-full lg:w-[350px] transition-transform transform group-hover:scale-105 "
                  />
                  <div className="absolute left-0 bottom-0 w-full h-full bg-black bg-opacity-50 text-white opacity-0 transition-opacity group-hover:opacity-100 ">
                    <p className="p-2 flex flex-col font-nunito font-semibold text-[24px]  absolute left-4 bottom-4">
                      {video.title}
                      <span className="font-nunito mt-2 text-base">
                        {video.industry}
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {/* Modal component */}
              <Modal
                isOpen={isModalOpen}
                className="zIndex"
                onClose={closeModal}
              >
                {/* Place your video iframe or video player component here */}
                {selectedVideoIndex !== null && (
                  <iframe
                    width="860"
                    height="500"
                    src={
                      contentBySubtag[selectedTag][selectedSubtag][
                        selectedVideoIndex
                      ].videoUrl
                    }
                    title={
                      contentBySubtag[selectedTag][selectedSubtag][
                        selectedVideoIndex
                      ].title
                    }
                    allowFullScreen
                    className="aspect-video scale-75 xs:scale-100 lg:scale-100 lg:h-[500px] w-[300px] lg:w-[860px]"
                    frameBorder="0"
                  ></iframe>
                )}
              </Modal>
            </div>
          ))}
      </div>
      <div className="flex lg:mb-20 justify-center font-nunito items-center w-full">
        <div>
          {visibleVideos <
            contentBySubtag[selectedTag][selectedSubtag].length && (
            <button
              className="rounded-full border border-[#dd94ff] font-semibold bg-transparent multiverse-text4 hover:border-black transition-all px-4 py-2 mt-4"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </div>
        <div className="flex font-nunito items-end">
          {visibleVideos > 6 && (
            <button
              className="rounded-full border border-[#dd94ff] font-semibold bg-transparent multiverse-text4 hover:border-black transition-all px-4 py-2 mt-4  h-10 ml-2"
              onClick={viewLess}
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagComponent;
