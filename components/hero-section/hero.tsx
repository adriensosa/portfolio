import Image from "next/image";
import { PixelsBg } from "./pixel-bg";
import heroSticker from "./sticker.png";
import { LabelTags, LabelUXUI } from "./Labels";

const Hero = (params) => {
  return (
    <div className="first hero-section" data-scroll-section>
      <div className="container">
        <h1 data-scroll data-scroll-speed="4" data-scroll-position="top">
          <span>ADRIEN SOSA</span>
        </h1>
        <h2 data-scroll data-scroll-speed="3" data-scroll-position="top">
          <span>
            <extended>Fr</extended>
            <wide>o</wide>
            <extended>nt-end</extended>
          </span>
          <span>
            <extended>Devel</extended>
            <wide>o</wide>
            <extended>per</extended>
          </span>
        </h2>
        <div
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="top"
          className="hero-section__labels-wrapper"
        >
          <span>
            <LabelTags delay={1} />
          </span>
          <span>
            <LabelUXUI delay={1.3} />
          </span>
        </div>
      </div>
      <PixelsBg />
      <div className="hero-sticker__wrapper">
        <Image
          data-scroll
          style={{ "--delay": "1.2s" }}
          className="hero-sticker__img fadeIn"
          src={heroSticker}
          alt="Front-end sticker"
        />
      </div>
    </div>
  );
};

export default Hero;
