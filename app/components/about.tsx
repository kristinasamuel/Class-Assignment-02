// import images from next
import Image from "next/image";
//  create  about section for our website
export default function AboutSection() {
  return (
    <>
      {/* installation process */}
      <div className="flex flex-col text-center items-center justify-center mt-8 ">
        <h3 className="text-3xl font-bold mb-4"> Installation of Next.js</h3>
        <div className="bg-gray-300 p-2 rounded-lg w-full md:w-1/2 mt-5 ">
          <p className="text-2xl font-bold italic mt-5"> Commands</p>
          <p className="text-sm mt-5 mb-2 ">
            To create next project:
            <span className="font-bold italic">npx create-next-app@latest</span>
          </p>
          <p>
            To run your project:
            <span className="font-bold italic"> npm run dev</span>
          </p>
          <p className="mt-3 text-sm  ">
            Your Next.js project is now ready to use! You can start building
            dynamic and fast web applications with Next.js. Visit
            "http://localhost:3000" to see your application in action.
          </p>
        </div>
        {/* Add image*/}
        <div className="mt-10 mb-5">
          <Image src="/images/image.jpg" height={300} width={500} alt="Next" />
        </div>
      </div>
    </>
  );
}
