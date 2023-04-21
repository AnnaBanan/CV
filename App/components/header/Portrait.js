import * as portraitL from "../../../assets/portrait-l.jpg";
import * as portraitL2x from "../../../assets/portrait-l@2x.jpg";
import * as portraitM from "../../../assets/portrait-m.png";
import * as portraitS from "../../../assets/portrait-s.png";
import * as portraitXS from "../../../assets/portrait-xs.jpg";
import * as portraitXS2x from "../../../assets/portrait-xs@2x.jpg";
import { useMediaQuery } from "../../utils/useMediaQuery";

const Portrait = () => {
  return (
    <>
      <picture className="flex no-print">
        <source
          srcSet={`${portraitXS} 1x, ${portraitXS2x} 2x`}
          media="(max-width: 443px)"
        />
        <source srcSet={portraitS} media="(max-width: 600px)" />
        <source srcSet={portraitM} media="(max-width: 881px)" />
        <source srcSet={`${portraitL} 1x, ${portraitL2x} 2x`} />
        <img src={portraitL} alt="Portrait" />
      </picture>
      <img src={portraitM} alt="Portrait" className="only-print" />
    </>
  );
};

export default Portrait;
