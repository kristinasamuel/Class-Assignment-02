// header section
// import next.js icon from react library
import { SiNextdotjs } from "react-icons/si";
// impoirt links from nextlinks
import Link from "next/link";

//  export default function of header function
export default function HeaderSection() {
  // jsx return 
  return (
    <>
    {/* header of the page */}
    <header className=" bg-gray-400 w-full h-16 flex items-center"> 
      {/* give styling to next.js logo */}
        <SiNextdotjs className="text-black h-6 w-6 mr-2 ml-2" /> 
            <h1 className="text-black italic text-xl font-semibold">Next.Js</h1> 
            {/* list items give specific font ,style*/}
            <ul className="flex flex-grow space-x-2 justify-center items-center uppercase" >
                <li className="font-medium hover:underline"> <Link href={"/"}>home </Link></li>
                <li className="font-medium hover:underline"> <Link href={"/components/document"}>Document</Link></li>
            </ul>
    </header>
    </>
  )
}
