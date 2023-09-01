import { airbnb, binance, coinbase, dropbox } from "../assets";
import style from "../style";
import { clients } from "../constants";
const Clients = () => (
  <div className={` flex justify-around flex-wrap`}>
    {clients.map((client) => (
      <img
        key={client.id}
        src={client.logo}
        className=" w-[150px] object-contain"
      />
    ))}
  </div>
);
export default Clients;
