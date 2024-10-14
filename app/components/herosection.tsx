import Image from "next/image";
// hero section of the website
export default function HeroSectionpage() {
  return (
    <>
      {/* Next.js introduction*/}
      <div className="flex flex-col items-center justify-center mt-10 p-6 ">
        <div className="p-6 bg-white rounded shadow-lg text-center w-full md:w-1/2">
          {/*  heading  give styling ,font size */}
          <h1 className=" text-3xl font-bold"> Next.js</h1>
          <h2 className="text-2xl font-bold italic">
            The Future of Web Development
          </h2>
          <p className="text-xl mt-4">
            Start your journey into the world of Next.js with us!
          </p>
          <p className="text-sm mt-4 ">
            Next.js is a powerful React framework that enables developers to
            build fast, scalable web applications with features like server-side
            rendering,static site generation and API routes
          </p>
        </div>
      </div>
    </>
  );
}
