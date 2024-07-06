import Image from "next/image";
import Rating from "@mui/material/Rating";
import { bookdata, comments } from "@/constants/bookdata"
import logo from "@/public/logo2.svg";
import { navLinks, contacts } from "@/constants";
import Link from "next/link";

import likenotlike from "@/public/likenotlike.svg"
import Eslider from "@/components/Eslider";
export default async function Page({ params }: { params: { id: string } }) {
  const book = await fetch(
    `https://additional-aurie-demo-project-book-me-f546ac8a.koyeb.app/api/books/${params.id}`
  ).then((res) => res.json());
  const books = await fetch(
    `https://additional-aurie-demo-project-book-me-f546ac8a.koyeb.app/api/books?page=1&limit=12`
  ).then((res) => res.json());
  console.log(params.id);
  const { title, desc, bookimg } = book?.data;
  return (
    <>
    <main className="h-fit w-screen max-sm:px-6 px-24 flex flex-col py-20 gap-16 ">
      <div className="flex gap-16 max-sm:flex-col">
      <div >
        <Image
          src={`https://additional-aurie-demo-project-book-me-f546ac8a.koyeb.app/uploads/${bookimg}`}
          width={525}
          height={500}
          alt="bookimg"
          quality={100}
          className="w-[500px]"
        />
      </div>
      <div className="flex flex-col gap-14 flex-1 max-sm:text-center">
        <div className="flex gap-16 items-center max-sm:flex-col justify-between">
          <div className="flex flex-col gap-6 max-sm:items-center">
            <h1 className="text-5xl max-sm:text-3xl ">{title}</h1>
            <p className="text-[#00000087] text-3xl max-sm:text-xl">by: abraham verghase</p>
            <Rating name="simple-controlled" size="large"/>
          </div>
          <div>
          <button className="bg-[#AC87C5] px-7 py-3 rounded-md text-white" >add to my list</button>
          </div>
        </div>
        <div className="flex flex-col gap-9 w-[600px] max-sm:w-full">
          <h2 className="text-3xl">characteristics</h2>
          {
            bookdata.map((item) => (
              <div key={item} className="flex gap-6 justify-between text-2xl text-[#292F33BF]">
                <span>{item.split(":")[0]}</span>
                <span className="text-[#00000040]">{item.split(":")[1]}</span>
              </div>
            ))
          }
        </div>
        <div >
          <h1 className="text-3xl">About the outher</h1>
          <p className="mt-6 text-[#00000087] w-[500px] max-sm:w-full">Lorem ipsum dolor sit amet consectetur. Gravida et faucibus egestas mauris tincidunt risus eget justo lorem. Tincidunt fringilla quis mi nec ipsum ut sodales. Nec risus id diam congue condimentum enim.</p>
        </div>
        <div >
          <h1 className="text-3xl">About the book</h1>
          <p className="mt-6 text-[#00000087] w-[500px] max-sm:w-full">{desc}</p>
        </div>
        <div className="w-[650px] flex flex-col gap-6 max-sm:w-full" >
          <h1 className="text-3xl">Reviews</h1>
          <button className="bg-[#AC87C5] px-7 py-1 rounded-md text-white w-full text-2xl">write a review</button>
          <div className="flex flex-col gap-6">
            {
              comments.map((comment) => (
                <div key={comment.name} className="border-2 border-solid border-[#E0AED0] rounded-2xl py-4 px-6 flex justify-between max-sm:flex-col max-sm:items-center gap-4" >
                  <div className="flex flex-col gap-2 w-[400px] max-sm:w-full  max-sm:text-left">
                    <h1 className="text-2xl max-sm:text-xl">{comment.name}</h1>
                    <span>{comment.date}</span>
                    <p>{comment.comment}</p>
                  </div>
                  <div className="flex flex-col justify-between max-sm:gap-4 max-sm:items-center">
                    <Rating  name="read-only" value={4} readOnly className="text-[#756AB6]" />
                    <Image src={likenotlike} width={70} height={30} alt="like"/>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      </div>
    </main>
    </>
  );
}
