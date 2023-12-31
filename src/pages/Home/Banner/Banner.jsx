import img1 from "../../../../public/images/banner/1.jpg";
import img2 from "../../../../public/images/banner/2.jpg";
import img3 from "../../../../public/images/banner/3.jpg";
import img4 from "../../../../public/images/banner/4.jpg";
import img5 from "../../../../public/images/banner/5.jpg";
import img6 from "../../../../public/images/banner/6.jpg";
import BannerItem from "../BannerItem/BannerItem";
import "./Banner.css";
export default function Banner() {
  const bannerData = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: img6,
      prev: 5,
      id: 6,
      next: 1,
    },
  ];
  return (
    <div className="max-w-6xl	mx-auto">
      <div className="carousel h-3/4 w-full ">
        {bannerData.map((slide) => (
          <BannerItem key={slide.id} slide={slide}></BannerItem>
        ))}
      </div>
    </div>
  );
}
