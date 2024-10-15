// create a Document Page
// import icons from react library
import { SiVercel } from "react-icons/si";
// import header section
import HeaderSection from "../header";

export default function DocumentPage() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-green-300 to-slate-300 min-h-screen">
      {/* use header component in our page*/}
      <HeaderSection />
      <div className="text-center mt-5">
        <h3 className="flex items-center justify-center text-3xl font-semibold">
          Vercel <SiVercel className="w-12 h-12 ml-2" />
        </h3>
        <p className="text-2xl font-semibold italic mt-5">
          Deploy Your Project in Seconds with Vercel.
        </p>
        {/* define the process of deployment  on vercel */}
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center p-2 gap-4 mt-5">
          <div className="text-black bg-white w-full mb-4 p-4 mx-auto rounded-lg space-y-1  ">
           {/* How to create on vercel */}
            <h2 className="text-xl font-semibold mb-2  ">
              Create Vercel Account
            </h2>
            <p>1.Go to Vercel's website.</p>
            <p className="">2.Sign up using GitHub or email.</p>
          </div>
            {/*how to connect repository*/}
          <div className="bg-white w-full p-4 mx-auto text-black rounded-lg mb-4 space-y-1">
            <h2 className="text-xl mb-4 font-semibold">
              Connect Your Repository to Vercel
            </h2>
            <p>1.After signing in to Vercel, click on New Project.</p>
            <p >
              2.Select the repository you want to deploy from GitHub.
            </p>

            <p >
              3.Vercel will automatically detect your Next.js project.
            </p>
            <p >4.Click on Deploy.</p>
          </div>
           {/* deploy process */}
          <div className="bg-white w-full  p-4 rounded-lg mx-auto space-y-1 ">
            <h2 className="text-xl font-semibold mb-4">Deployment Process</h2>
            <p>
              Vercel handles the build and deployment process for your Next.js
              project.
            </p>
            <p >
              2.The deployment process usually takes a minute or two.
            </p>
            <p className="italic font-semibold">
              After deployment is complete, you'll be given a URL to access your
              live project.
            </p>
          </div>
        </div>
        {/* Wishing Message */}
        <div className="text-center justify-center mt-5 mb-5 space-y-4">
          <h1 className="text-xl font-semibold">
            🚀 Best of luck with your Next.js project! 😊
          </h1>
          <p className="text-lg font-semibold">
            🌟 Keep learning and growing! 📚 💻
          </p>
        </div>
      </div>
    </div>
  );
}
