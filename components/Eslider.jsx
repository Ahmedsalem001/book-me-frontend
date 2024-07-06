"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import next from "../public/next.svg";
import prev from "../public/prev.svg";
import Image from "next/image";
import Link from "next/link";
function Eslider({ data }) {
  const SampleNextArrow = ({ className, style, onClick }) => {
    return (
      <Image
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        src={next}
        width={32}
        height={32}
        alt="next"
      />
    );
  };

  const SamplePrevArrow = ({ className, style, onClick }) => {
    return (
      <Image
        className={className}
        style={{ ...style }}
        onClick={onClick}
        src={prev}
        width={32}
        height={32}
        alt="prev"
      />
    );
  };
  const x = window.matchMedia("(max-width: 700px)")
  const breakpoint = (x) => x.matches ? 1 : 6;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: breakpoint(x),
    slidesToScroll: 3,
    arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map(({ title, _id, bookimg }) => {
          const url =
            "https://additional-aurie-demo-project-book-me-f546ac8a.koyeb.app/uploads/";
          return (
            <Link className="w-fit" href={`/books/${_id}`}>
              <Card key={_id} title={title} srcImg={url + bookimg} Slider />
            </Link>
          )
        })}
      </Slider>
    </div>
  );
}

export default Eslider;
