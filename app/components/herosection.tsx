import Image from "next/image";
// hero section of the website
export default function HeroSectionpage() {
  return (
    <>
      {/* Next.js introduction*/}
      <div className="flex flex-col items-center justify-center min-h-screen mt-10 p-6 ">
        <div className="p-6 bg-white rounded shadow-lg text-center w-full md:w-1/2">
          {/*  heading  give styling ,font size */}
          <h1 className=" text-3xl font-bold"> Next.js</h1>

          <h3 className="text-2xl font-bold italic">
            The Future of Web Development
          </h3>
          <p className="text-xl mt-4">
            Start your journey into the world of Next.js with us!
          </p>
          <p className="text-sm mt-4 inline-flex">
            Next.js is a powerful React framework that enables developers to
            build fast, scalable web applications with features like server-side
            rendering and static site generation and API routes
          </p>
        </div>
        {/* installation process */}
        <div className=" text-center justify-center mt-6">
          <h2 className="text-3xl font-bold mt-10"> Installation of Next.js</h2>
          <div className="bg-white p-2 rounded-lg w-full md:w-1/2 mt-5 ">
            <p className="text-2xl font-bold italic"> Commands</p>
            <p className="text-sm mb-2">
              To create next project:
              <span className="font-semibold italic">
                npx create-next-app@latest
              </span>
            </p>
            <p>
              To run your project:
              <span className="font-bold italic"> npm run dev</span>
            </p>
            <p className="mt-3 text-sm ">
             
              Your Next.js project is now ready to use! You can start building
              dynamic and fast web applications with Next.js. Visit
              "http://localhost:3000" to see your application in action.
            </p>
          </div>
          {/* Add image*/}
          <div className="mt-10 mb-5">
            <Image
              src="/images/image.jpg"
              height={300}
              width={500}
              alt="Next"
            />
          </div>
        </div>
      </div>
    </>
  );
}
