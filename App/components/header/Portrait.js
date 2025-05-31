const portraitL = new URL(
  "../../../assets/images/portrait-l.jpg",
  import.meta.url
);
const portraitL2x = new URL(
  "../../../assets/images/portrait-l@2x.jpg",
  import.meta.url
);
const portraitM = new URL(
  "../../../assets/images/portrait-m.png",
  import.meta.url
);
const portraitS = new URL(
  "../../../assets/images/portrait-s.png",
  import.meta.url
);
const portraitXS = new URL(
  "../../../assets/images/portrait-xs.jpg",
  import.meta.url
);
const portraitXS2x = new URL(
  "../../../assets/images/portrait-xs@2x.jpg",
  import.meta.url
);

const Portrait = () => {
  console.log("portraitL:", portraitL);
  console.log("portraitXS2x:", JSON.stringify(portraitXS2x));

  return (
    <>
      <picture className="flex no-print">
        <source
          srcSet={`${portraitXS} 1x, ${portraitXS2x} 2x`}
          media="(max-width: 443px)"
        />
        <source srcSet={`${portraitS} 1x`} media="(max-width: 600px)" />
        <source srcSet={`${portraitM} 1x`} media="(max-width: 881px)" />
        <source srcSet={`${portraitL} 1x, ${portraitL2x} 2x`} />
        <img src={portraitL} alt="Portrait" />
      </picture>
      <img
        src={portraitM.default || portraitM}
        alt="Portrait"
        className="only-print"
      />
    </>
  );
};

export default Portrait;
