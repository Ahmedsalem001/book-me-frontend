
import Image from "next/image";
import signIn from "@/public/sign-in.jpg";
import logo from "@/public/logo2.svg";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-row h-screen max-sm:items-center ">
      <div className="w-[50%] px-20 py-5 max-sm:w-full max-sm:px-6 max-sm:items-center">
        <Link className="max-sm:flex max-sm:items-center max-sm:justify-center" href={"/"}><Image src={logo} alt="logo" /></Link>
        <h1 className="text-5xl text-[#292F33] mt-14 max-sm:text-3xl text-center">Welcome back</h1>
        
        <form className=" flex flex-col gap-6 mt-12">
      <div className=" flex flex-col gap-6 ">
        <div className="bg-[#F7F8F8] w-full flex-1 py-4 px-6 rounded-3xl flex flex-col justify-center h-[70px]">
          <label className="text-[#00000040] text-xl" htmlFor="mail">E-mail</label>
          <input id="mail" className="bg-transparent focus:outline-none text-[#999999] text-2xl" type="email" />
        </div>
        <div className="bg-[#F7F8F8] w-full flex-1 py-4 px-6 rounded-3xl flex flex-col justify-center h-[70px]">
          <label className="text-[#00000040] text-xl" htmlFor="pass">Password</label>
          <input id="pass" className="bg-transparent focus:outline-none text-[#999999] text-2xl" type="password" />
        </div>
        </div>
        <p className="text-xl text-[#00000087] mt-3 ml-3 mb-9">
        Dn’t have an account? {" "}
          <Link href={"/sign-up"} className="text-[#756AB6] ml-1">
            {" "}
            signup
          </Link>
        </p>
      <button className='py-2 px-4 bg-[#756AB6] text-white rounded-xl w-48 mx-auto text-xl'>Create account</button>
    </form>
      </div>
      <div className="w-[50%] flex justify-center items-center max-sm:hidden">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src={signIn}
            alt="signup"
            height={700}
    
          />
        </div>
      </div>
    </main>
  );
};

export default page;
