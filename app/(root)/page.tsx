import Hero from "@/components/Hero";
import Eslider from "@/components/Eslider";
import lef from "@/public/lefs.jpg";
import Image from "next/image";
import searchIcon from "@/public/searchIcon.svg";
import history from "@/public/history.jpg";
import literature from "@/public/literature.jpg";
import novelsw from "@/public/novels.jpg";
import since from "@/public/since.jpg";
import Twobooks from "@/public/2books.svg";
import contact from "@/public/contact.svg";
import Link from "next/link";
import { pacifico } from "@/app/fonts";
export default async function Home() {
  const books = await fetch(
    `https://additional-aurie-demo-project-book-me-f546ac8a.koyeb.app/api/books?page=1&limit=12`
  ).then((res) => res.json());
  const mpreVooks = await fetch(
    `https://additional-aurie-demo-project-book-me-f546ac8a.koyeb.app/api/books?page=2&limit=12&skip=12`
  ).then((res) => res.json());
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <section className="w-screen px-24 py-20 flex flex-col gap-20 max-sm:px-6">
        <div>
          <div className="flex flex-row justify-between mb-16">
            <h1 className="text-2xl">Top Of This Week</h1>
            <button className="text-[#756AB6]">View All {"----->"}</button>
          </div>
          <Eslider data={books?.data} />
        </div>
        <div>
          <div className="flex flex-row justify-between mb-16">
            <h1 className="text-2xl">Recommended for you</h1>
            <button className="text-[#756AB6]">View All {"----->"}</button>
          </div>
          <Eslider data={mpreVooks?.data} />
        </div>
      </section>
      <section className="h-[600px] bg-[#FFE5E580] flex max-sm:text-center">
        <div className="w-[50%] h-full flex justify-center items-center max-sm:w-full">
          <div className="px-28 flex flex-col items-center max-sm:px-6">
            <h1 className="text-5xl max-sm:text-4xl">The Most Viewed Book</h1>
            <p className="text-[#0000007A] pt-5 pl-4">
              Lorem ipsum dolor sit amet consectetur. Non amet suspendisse a ac
              porta porttitor tempus neque. Bibendum a id tristique vitae .
            </p>
            <button className="bg-[#756AB6] py-2 px-16 w-fit text-white rounded-lg mt-20 text-xl">
              view book
            </button>
          </div>
        </div>
        <div className="w-[50%] h-full flex justify-end max-sm:hidden">
          <Image src={lef} alt="lef" height={600} className="h-full" />
        </div>
      </section>
      <section className="h-[150vh] py-20 px-24 max-sm:px-6 max-sm:w-full max-sm:h-fit">
        <div className="text-center">
          <h1 className="text-5xl max-sm:text-4xl">Categories</h1>
          <p className="text-2xl text-[#00000087] mt-7 mb-20 max-sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Vel curabitur vitae in .
          </p>
        </div>
        <div className="grid grid-cols-12 grid-rows-6 gap-7 h-[70%] max-sm:flex max-sm:flex-col">
          <div className="col-span-4 row-span-6  bg-[#FFE5E5] rounded-2xl p-10 flex flex-col items-center gap-14">
            <div
              className="flex border-2 border-[#756AB6] rounded-xl overflow-hidden items-center px-3 py-1 cursor-pointer"
              id="search"
            >
              <Image src={searchIcon} alt="search" width={30} height={30} />
              <input
                name="searsh"
                type="text"
                placeholder="Search"
                className="placeholder:text-[#756AB6] pl-2 focus:outline-none bg-transparent h-full w-full"
              />
            </div>
            <div className="text-left w-full text-4xl leading-snug">
              <h1>All</h1>
              <h1>Novels</h1>
              <h1>History</h1>
              <h1>literature</h1>
              <h1>science</h1>
            </div>
            <button className="bg-[#756AB6] py-2 px-16 w-fit text-white rounded-lg mt-20 text-xl">
              Explore
            </button>
          </div>
          <div className="col-span-4 row-span-3 col-start-5 max-sm:h-[300px] rounded-2xl relative flex items-end justify-center text-center overflow-hidden ">
            <Image
              src={novelsw}
              alt="novels"
              className="!w-full h-full absolute -z-10"
            />
            <div>
              <h1 className="text-5xl text-white ">Novels</h1>
              <button className="bg-[#756AB6] py-2 px-16 w-fit text-white rounded-lg mt-6 mb-8 text-xl">
                Explore
              </button>
            </div>
          </div>
          <div className="col-span-4 row-span-3 col-start-9  max-sm:h-[300px] rounded-2xl relative flex items-end justify-center text-center overflow-hidden">
            <Image
              src={history}
              alt="novels"
              className="!w-full h-full absolute -z-10"
            />
            <div>
              <h1 className="text-5xl text-white ">history</h1>
              <button className="bg-[#756AB6] py-2 px-16 w-fit text-white rounded-lg mt-6 mb-8 text-xl">
                Explore
              </button>
            </div>
          </div>
          <div className="col-span-4 row-span-3 col-start-5  max-sm:h-[300px] row-start-4 rounded-2xl relative flex items-end justify-center text-center overflow-hidden">
            <Image
              src={literature}
              alt="novels"
              className="!w-full h-full absolute -z-10"
            />
            <div>
              <h1 className="text-5xl text-white ">literature</h1>
              <button className="bg-[#756AB6] py-2 px-16 w-fit text-white rounded-lg mt-6 mb-8 text-xl">
                Explore
              </button>
            </div>
          </div>
          <div className="col-span-4 row-span-3 col-start-9  max-sm:h-[300px] row-start-4 relative flex items-end justify-center text-center overflow-hidden rounded-2xl">
            <Image
              src={since}
              alt="novelsw"
              className="w-full -bottom-28 absolute -z-10 "
            />
            <div>
              <h1 className="text-5xl text-white ">since</h1>
              <button className="bg-[#756AB6] py-2 px-16 w-fit text-white rounded-lg mt-6 mb-8 text-xl">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[600px] bg-[#FFE5E580] flex p-20 max-sm:px-6 max-sm:text-center">
        <div className="w-[50%] max-sm:w-full h-full flex justify-center items-center">
          <div className="px-28 flex flex-col items-center max-sm:px-6">
            <h1 className="text-5xl ">
              Welcome To{" "}
              <span className={`text-[#756AB6] text-4xl ${pacifico.className}`}>
                Book Me
              </span>
            </h1>
            <p className="text-[#0000007A] pt-5 ">
              Lorem ipsum dolor sit amet consectetur. Non amet suspendisse a ac
              porta porttitor tempus neque. Bibendum a id tristique vitae .
            </p>
            <div className="flex justify-between w-full max-sm:px-10">
              <button className="bg-[#756AB6] py-2 px-12 max-sm:px-4 w-fit max-sm:text-base text-white rounded-lg mt-20 text-xl">
                view book
              </button>
              <Link
                href={"/sign-in"}
                className="border-[#756AB6] border-[2px]  py-2  px-12 max-sm:px-4 w-fit text-[#756AB6] rounded-lg mt-20 text-xl max-sm:text-base"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full flex max-sm:hidden">
          <Image src={Twobooks} alt="lef" className="h-full !w-full " />
        </div>
      </section>
      <section id="contact" className="h-screen flex px-10 my-20 justify-between max-sm:flex-col max-sm:my-10 max-sm:px-2 max-sm:items-center max-sm:justify-center ">
          <div className="w-[50%] h-full flex flex-1 max-sm:hidden">
            <Image src={contact} alt="lef" className="h-full !w-full" />
          </div>
          <div className="px-28 max-sm:px-2 flex flex-col items-center flex-1 ">
          <h1 className="text-5xl text-center leading-loose max-sm:text-3xl">Contact Us</h1>
          <p className="text-2xl text-center max-sm:text-lg max-sm:mt-5">let us know how to help you </p>
          <form className="w-full p-10 flex flex-col gap-8 max-sm:w-full max-sm:p-2 max-sm:mt-28">
            <div className="flex flex-col gap-4" >
              <label className="text-3xl max-sm:text-xl" htmlFor="name">Name</label>
              <input className="px-3 py-4 border-[2px] border-[#756AB6] rounded-2xl focus:outline-none" placeholder="Enter your full name" type="text" id="name" />
            </div>
            <div className="flex flex-col gap-4"> 
              <label className="text-3xl max-sm:text-xl" htmlFor="email">Email</label>
              <input className="px-3 py-4 border-[2px] border-[#756AB6] rounded-2xl focus:outline-none" placeholder="drazsara0@gmail.com" id="email" type="email" />
            </div>
            <div className="flex flex-col gap-4 ">
              <label className="text-3xl max-sm:text-lg" htmlFor="message">Message</label>
              <textarea className="px-3 py-4 border-[2px] border-[#756AB6] rounded-2xl focus:outline-none" placeholder="your message........." id="message"/>
            </div>
            <button  className="bg-[#756AB6] py-2 px-16 w-fit text-white rounded-lg text-xl m-auto">
              Send Message
            </button>
          </form>
          </div>
      </section>
    </main>
  );
}
