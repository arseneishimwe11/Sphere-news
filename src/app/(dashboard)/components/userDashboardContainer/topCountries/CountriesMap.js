import WorldMap from "react-svg-worldmap";
import { useState, useEffect } from "react";
export default function CountriesMap(props) {
  const { rows } = props;
  const data = rows.map((row) => (
    { country: row.shortCountryName, value: row.views }
  ));

  // const [isMobile, setIsMobile] = useState(false);
  // const firstWidth = window.innerWidth;
  // console.log("firstWidth", firstWidth);
  // const [isMobile, setIsMobile] = useState(firstWidth > 950 ? false : true);
  const [isMobile, setIsMobile] = useState('sm');
  useEffect(() => {
    const firstWidth = window.innerWidth;
    let size = '';
    if (firstWidth > 1280) {
      size = 'lg';
    } else if (firstWidth > 500) {
      size = 'md';
    } else {
      size = 'sm';
    }
    setIsMobile(size);
    const handleMediaChange = () => {
      // setIsMobile(window.matchMedia("(max-width: 1280px)").matches);
      const firstWidth = window.innerWidth;
      let size = '';
      if (firstWidth > 1280) {
        size = 'lg';
      } else if (firstWidth > 500) {
        size = 'md';
      } else {
        size = 'sm';
      }
      setIsMobile(size);
    };

    window.addEventListener("resize", handleMediaChange);

    return () => {
      window.removeEventListener("resize", handleMediaChange);
    };
  }, []);

  return (
    <div className="App">
      <WorldMap
        color="blue"
        value-suffix="people"
        size={isMobile}
        data={data}
      />
    </div>
  );
}