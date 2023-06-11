import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Wayfarers lomo actually marfa vape food truck, pug neutral milk
            hotel DIY messenger bag unicorn pok pok sustainable +1 ugh. Unicorn
            hammock offal single-origin coffee, street art pour-over austin
            franzen migas iPhone. Vibecession helvetica synth etsy, poutine XOXO
            vaporware shabby chic. Portland retro hoodie tilde solarpunk
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
