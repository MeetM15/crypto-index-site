import Marquee from "react-fast-marquee";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
const PriceBar = ({ coinsData }) => {
  return (
    <Marquee className="w-full h-20 bg-secondary" gradient={false}>
      {coinsData &&
        coinsData.map((coin, index) => {
          return (
            <div key={index} className="flex py-7 ml-8 items-center">
              <img src={coin.image} alt="" className="h-6" />
              <div className="text-textBlue text-sm font-medium ml-2">
                {coin.name}
              </div>
              <div className="text-textBlue text-sm font-medium ml-2">
                ({coin.symbol.toUpperCase()})
              </div>
              <div className="text-black text-xs font-bold ml-2.5">
                ${coin.current_price}
              </div>
              <div
                className={`flex items-center justify-center text-xs font-bold ml-2.5 ${
                  coin.price_change_percentage_24h < 0
                    ? "text-loss"
                    : "text-profit"
                }`}>
                {coin.price_change_percentage_24h < 0 ? (
                  <ImArrowDown className="text-loss h-2 mr-0.5" />
                ) : (
                  <ImArrowUp className="text-profit h-2 mr-0.5" />
                )}
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </div>
            </div>
          );
        })}
    </Marquee>
  );
};

export default PriceBar;
