import { useEffect, useState } from "react";
import SliderImg from "../../assets/images/jean-vella-AMUXeE7Y2Vc-unsplash 1.png";
import SliderImg2 from "../../assets/images/Characters.png";
import SliderImg3 from "../../assets/images/Clone X 1.png";
import "./home.scss";
const Home = () => {
  const [slider, setSlider] = useState(0);
  const data = [
    {
      id: 0,
      img: SliderImg,
    },
    {
      img: SliderImg2,
      id: 1,
    },
    {
      img: SliderImg3,
      id: 2,
    },
  ];
  useEffect(() => {
    if (slider < 0) {
      setSlider(data.length - 1);
    }
    if (slider >= data.length) {
      setSlider(0);
    }
  }, [slider]);
  console.log(data.length);
  console.log(slider, "slider");

  return (
    <>
      <div className="home">
        <button
          onClick={() => setSlider(slider - 1)}
          className="navigation-btn-prev"
        >
          prev
        </button>
        {data.map((value, key) => (
          <div
            className={value.id === slider ? "slider active" : "slider"}
            key={key}
          >
            <h1>{value.id + 1}</h1>
            <img className="slider-img" src={value.img} alt="" />
          </div>
        ))}
        <button
          onClick={() => setSlider(slider + 1)}
          className="navigation-btn-next"
        >
          next
        </button>
      </div>
    </>
  );
};
export default Home;
