import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <div
    className={`mt-[100px] flex justify-between flex-wrap  items-center px-[50px] py-[60px] rounded-[20px] bg-black-gradient`}
  >
    <div>
      <h2 className={`${styles.heading2}   `}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <Button styles={"mt-5"} />
  </div>
);
export default CTA;
