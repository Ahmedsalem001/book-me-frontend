import Card from "@/components/Card"
import Image from "next/image";
import searchIcon from "@/public/searchIcon.svg"
const page = async () => {
  const books = await fetch(
    `https://additional-aurie-demo-project-book-me-f546ac8a.koyeb.app/api/books?page=1&limit=50`
  ).then((res) => res.json());
  return (
    <main className="py-20 px-24 max-sm:px-6 flex flex-col gap-12">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-6">
        <h1 className="text-4xl">Books</h1>
        <div  className="flex border-2 border-[#756AB6] rounded-xl overflow-hidden items-center px-3 py-1 cursor-pointer" id="search">
        <Image src={searchIcon} alt="search" width={30} height={30}/>
        <input name="searsh" type="text" placeholder="Search" className="placeholder:text-[#756AB6] pl-2 focus:outline-none"/>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-10 max-sm:flex-col max-sm:justify-center max-sm:items-center">{
        books?.data?.map((book: {bookimg: string , title: string , _id: string}) => (
          <Card Slider={false} key={book?.title} srcImg={`https://additional-aurie-demo-project-book-me-f546ac8a.koyeb.app/uploads/${book?.bookimg}`} title={book?.title} bookId={book?._id} /> 
        ))
      }</div>
    </main>
  )
}

export default page