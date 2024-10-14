"use client";

//  About section of the website
// import images from next images
import Image from "next/image";
// export default function of about section
export default function AboutSection() {
  return (
    <div className="flex flex-col text-center justify-center items-center mt-5 p-4">
      {/* installation process of next.js */}
      <h2 className="text-3xl font-bold"> Installation of Next.js</h2>
      <div className="bg-white p-2 rounded-lg w-full md:w-1/2 mt-5">
        <p className="text-2xl font-bold italic"> Commands</p>
        <p className="text-sm mb-2">
          To create next project:{" "}
          <span className="font-semibold italic">
            npx create-next-app@latest{" "}
          </span>
        </p>
        <p>
          To run your project:
          <span className="font-bold italic"> npm run dev</span>{" "}
        </p>
      </div>
      <div className="mt-6">
        <Image src="/images/image.jpg" height={300} width={400} alt="Next" />
      </div>
    </div>
  );
}
