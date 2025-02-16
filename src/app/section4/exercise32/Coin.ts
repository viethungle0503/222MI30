import { ICoinTime } from "./Coin_time";
import { ICoinBPI } from "./Coin_bpi";
export default interface ICoin {
  time: ICoinTime;
  disclaimer: string;
  chartName: string;
  bpi: ICoinBPI;
}
