import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";

export default function Home(props) {
  return (
    <div>
      <div className="first" data-scroll-section>
        <div className="container">
          <div data-scroll data-scroll-speed="4" data-scroll-position="top">
            <h1>Front-end Developer</h1>
          </div>
          <h2>
            <span data-scroll data-scroll-delay="0.15" data-scroll-speed="3">
              S
            </span>
            <span data-scroll data-scroll-delay="0.20" data-scroll-speed="3">
              O
            </span>
            <span data-scroll data-scroll-delay="0.25" data-scroll-speed="3">
              S
            </span>
            <span data-scroll data-scroll-delay="0.30" data-scroll-speed="3">
              A
            </span>
          </h2>
        </div>
      </div>
      <div data-scroll-section className="second">
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end front-end
          </h1>
        </div>
        <div
          className="sliding-titles"
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        >
          <h1>
            front-end front-end front-end front-end front-end front-end
            front-end front-end front-end front-end front-end front-end
          </h1>
        </div>
      </div>
      <div data-scroll-section className="third">
        <div className="container">
          {RichText.asText(props.home.data.presentation)}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const home = await client.getSingle("homepage", {});
  return {
    props: {
      home,
    },
  };
}
