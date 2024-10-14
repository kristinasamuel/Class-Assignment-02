// create a Document Page
// import icons from react library
import { SiVercel } from "react-icons/si";
// import header section
import HeaderSection from "../header";

export default function DocumentPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* use header component in our page*/}
      <HeaderSection />
      <div className="mt-5 text-center ">
        <h3 className="flex items-center justify-center text-3xl font-semibold">
          Vercel <SiVercel className="w-12 h-12 ml-2" />
        </h3>

        <p className="text-2xl italic font-semibold mt-5">
          Deploy Your Project in Seconds with Vercel.
        </p>
        {/* define the process of deployment  on vercel */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-2 items-center justify-center mt-5">
          <div className="bg-sky-300 w-full mb-4 p-4 mx-auto rounded-lg  text-black ">
           {/* How to create on vercel */}
            <h2 className="text-xl mb-2 font-semibold ">
              Create Vercel Account
            </h2>
            <p>1.Go to Vercel's website.</p>
            <p className="mt-2">2.Sign up using GitHub, Google, or email.</p>
          </div>
            {/*how to connect repository*/}
          <div className="bg-sky-300 w-full p-4 mx-auto text-black  rounded-lg mb-4 ">
            <h2 className="text-xl mb-4 font-semibold">
              Connect Your Repository to Vercel
            </h2>
            <p>1.After signing in to Vercel, click on New Project.</p>
            <p className="mt-2">
              2.Select the repository you want to deploy from GitHub.
            </p>

            <p className="mt-2">
              3.Vercel will automatically detect your Next.js project.
            </p>
            <p className="mt-2">4.Click on Deploy.</p>
          </div>
           {/* deploy process */}
          <div className="bg-sky-300 w-full  p-4 rounded-lg mx-auto ">
            <h2 className="text-xl font-semibold mb-4">Deployment Process</h2>
            <p>
              Vercel handles the build and deployment process for your Next.js
              project.
            </p>
            <p className="mt-2">
              2.The deployment process usually takes a minute or two.
            </p>
            <p className="italic mt-4 font-semibold">
              After deployment is complete, you'll be given a URL to access your
              live project.
            </p>
          </div>
        </div>
        {/* Wishing Message */}
        <div className="text-center justify-center mt-5 mb-5">
          <h1 className="text-xl font-semibold">
            🚀 Best of luck with your Next.js project! 😊
          </h1>
          <p className="text-lg mt-3 font-semibold">
            🌟 Keep learning and growing! 📚 💻
          </p>
        </div>
      </div>
    </div>
  );
}
