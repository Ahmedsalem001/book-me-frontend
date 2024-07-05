
import Image from "next/image";
import signUp from "@/public/sign-up.jpg";
import logo from "@/public/logo2.svg";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-row h-screen max-sm:justify-center max-sm:items-center">
      <div className="w-[50%] px-20 py-5 max-sm:px-6 max-sm:w-full">
        <Link href={"/"} className="max-sm:flex max-sm:items-center max-sm:justify-center"><Image src={logo} alt="logo" /></Link>
        <h1 className="text-5xl text-[#292F33] mt-14 max-sm:text-3xl max-sm:text-center" >Create your account</h1>
        <form className=" flex flex-col gap-6 ">
      <p className="text-xl text-[#00000087] mt-5 ml-3 mb-9 max-sm:text-center max-sm:ml-0">
          Already a member?{" "}
          <Link href={"/sign-in"} className="text-[#756AB6] ml-1">
            {" "}
            Login
          </Link>
        </p>
      <div className="h-[80px] flex justify-between gap-10 max-sm:gap-3">
        <div className="bg-[#F7F8F8] h-full flex-1 py-4 px-6 rounded-3xl w-[250px] max-sm:w-[40%] flex flex-col justify-center " >
          <label className="text-[#00000040] text-xl" htmlFor="first">First name</label>
          <input id="first" className="bg-transparent focus:outline-none text-[#999999]  text-2xl" type="text" />
        </div>
        <div className="bg-[#F7F8F8] h-full flex-1 py-4 px-6 rounded-3xl w-[250px] max-sm:w-[40%] flex flex-col justify-center">
          <label className="text-[#00000040] text-xl" htmlFor="last">last name</label>
          <input id="last" className="bg-transparent focus:outline-none text-[#999999] text-2xl" type="text" />
        </div>
      </div>
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
      <button className='py-2 px-4 bg-[#756AB6] text-white rounded-xl mt-8 w-48 mx-auto text-xl'>Create account</button>
    </form>
      </div>
      <div className="w-[50%] flex justify-center items-center max-sm:hidden">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src={signUp}
            alt="signup"
            className="object-cover "
            width={500}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
