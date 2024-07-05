import Image from "next/image";
import Link from "next/link";

export default ({
  srcImg,
  title,
  bookId,
}: {
  srcImg: string;
  title: string;
  bookId: string;
}) => {
  return (
    <div className="w-[225px] max-sm:w-[260px] rounded-2xl shadow-2xl shadow-[#0000005c] overflow-hidden">
      <Link href={`/books/${bookId}`} className="flex flex-col items-center">
        <Image src={srcImg} alt={title} width={225} height={330} />
        <div className="h-[80px] p-4 flex flex-col gap-2 justify-between">
          <h1 className="text-lg ">{title}</h1>
          <div className="flex justify-between ">
            <span className="text-[#0000007A]">19.9$</span>
            <button className="px-5 bg-[#756AB6] text-white rounded-md">
              view
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
