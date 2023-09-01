import style from "../style";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => (
  <section
    className={`${style.flexCenter} ${style.paddingY} ${style.marginY} flex-col`}
  >
    <div
      className={`flex md:flex-row flex-col justify-evenly   items-center w-[100%]  pb-[80px]`}
    >
      <h2 className={`${style.heading2}`}>
        What people are <br className="sm:block hidden " /> saying about us
      </h2>
      ``
      <p className={`${style.paragraph} max-w-[450px]  `}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="w-[100%]">
      <FeedbackCard />
    </div>
  </section>
);

export default Testimonials;
