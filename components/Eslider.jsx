"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import next from "../public/next.svg";
import prev from "../public/prev.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  
  const [width, setWidth] = useState(() => {
    if (typeof window === "undefined") {
      return { width: 0 };
    }
    return window.innerWidth;
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const breakpoint = (width) => {
    if (width < 768) {
      return 1;
    } else if (width < 992) {
      return 2;
    } else {
      return 6;
    }
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: breakpoint(width),
    slidesToScroll: breakpoint(width),
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
