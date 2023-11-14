import { Carousel } from "../Carousel/Carousel";
const heroItems = [
  {
    img: "https://i.imgur.com/GAGCHqf.jpg",
    name: "Air60 V2",
    desc: "60% layout, 100% freedom.",
  },
  {
    img: "https://i.imgur.com/x1Kx6SK.jpg",
    name: "Air75 V2",
    desc: "The fastest and the slimmest QMK/VIA keyboard on the planet.",
  },
  {
    img: "https://i.imgur.com/MfUpJmH.jpg",
    name: "Field 75",
    desc: "Everyday is a field day.",
  },
];
export const Hero = () => {
  //fetch hero items there
  return (
    <section>
      <Carousel items={heroItems} />
    </section>
  );
};
