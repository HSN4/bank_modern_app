import { people01, people02, people03, quotes } from "../assets";

import { feedback } from "../constants";
import styles from "../style";

const FeedbackCard = () => (
  <section className={`flex justify-between   flex-wrap `}>
    {feedback.map((card) => (
      <div
        key={card.id}
        className={`feedback-card p-10  h-[380px] flex justify-between items-start flex-col rounded-[16px]`}
      >
        <img src={quotes} alt="quotes" className="mb-10" />
        <p className="text-white max-w-[280px] font-poppins text-[18px] leading-8 ">
          {card.content}
        </p>
        <div className={`${styles.flexCenter} gap-4`}>
          <img src={card.img} alt="img" className="w-[48px] h-[48px]" />
          <div>
            <h2 className="text-white font-poppins text-[20px] ">
              {card.name}
            </h2>
            <p className=" text-dimWhite  font-poppins text-[16px]  ">
              {card.title}
            </p>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default FeedbackCard;
