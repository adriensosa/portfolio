import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";

const About = (props) => {
  return (
    <section className="about-section" data-scroll-section>
      <div data-scroll className="container fadeIn">
        <h1>about</h1>
        <div>
          <h2>
            senior developer <br />
            e-commerce specialist
          </h2>
          <p>
            Hi, I'm Adrien. I'm a front-end developer with 8+ years experience.{" "}
            <br />
            I love graphic design and visual arts. Working everyday to bring
            user interfaces to life to give users a delightful and seamless
            experiences.
            <br /> <br />
            I have been working over the past few years on ecommerce projetcs,
            which has became one of my most valuable area of expertise. Huge fan
            of Shopify which is definitely a powerful service to deliver online
            stores. Great option for merchants, amazing tool for developers.
            <br />
            <br />I appreciate building websites on my own as a freelance
            developer. I also lead stunning e-commerce projects with BlackSwan,
            a brilliant and friendly web agency based in Paris.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

export async function getStaticProps() {
  const home = await client.getSingle("homepage", {});
  return {
    props: {
      home,
    },
  };
}
