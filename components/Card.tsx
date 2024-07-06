"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default ({
  srcImg,
  title,
  bookId,
  Slider,
}: {
  srcImg: string;
  title: string;
  bookId: string;
  Slider: boolean;
}) => {
  const [hoverd, setHoverd] = useState(false);
  return (
    <div
      className={`w-[225px] max-sm:w-fit m-auto rounded-2xl ${
        !Slider && "shadow-2xl w-[190px]"
      }   shadow-[#0000005c] overflow-hidden z-10`}
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
    >
      {Slider && (
        <>
          <Image
            src={srcImg}
            alt={title}
            width={225}
            height={330}
            className={`w-[200px] required:h-[300] rounded-xl`}
          />
          <div
            className={`hoverd h-[80px] p-4 flex flex-col gap-2 justify-between ${
              Slider && "hidden"
            } ${hoverd && "block"}`}
          >
            <h1 className="text-lg ">{title}</h1>
            <div className="flex justify-between ">
              <span className="text-[#0000007A]">19.9$</span>
              <button className="px-5 bg-[#756AB6] text-white rounded-md">
                view
              </button>
            </div>
          </div>
        </>
      )}
      {!Slider && (
        <Link
          href={`/books/${bookId}`}
          className="flex flex-col items-center justify-center w-fit"
        >
          <Image
            src={srcImg}
            alt={title}
            width={225}
            height={330}
            className={`${Slider && "w-[200px] required:h-[300]"} rounded-xl`}
          />
          <div
            className={`hoverd h-[80px] p-4 flex flex-col gap-2 justify-between ${
              Slider && "hidden"
            } ${hoverd && "block"}`}
          >
            <h1 className="text-lg ">{title}</h1>
            <div className="flex justify-between ">
              <span className="text-[#0000007A]">19.9$</span>
              <button className="px-5 bg-[#756AB6] text-white rounded-md">
                view
              </button>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};
