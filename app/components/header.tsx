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
    <header className="flex items-center bg-gray-500 w-full h-16 "> 
      {/* give styling to next.js logo */}
        <SiNextdotjs className="text-black h-6 w-6 mr-2 ml-2" /> 
            <h1 className="text-black text-xl font-semibold italic">Next.Js</h1> 
            {/* list items give specific font ,style*/}
            <ul className="flex flex-grow justify-center items-center text-white uppercase space-x-2" >
                <li className="font-medium hover:underline"> <Link href={"/"}>home </Link></li>
                <li className="font-medium hover:underline"> <Link href={"/components/document"}>Document</Link></li>
            </ul>
    </header>
    </>
  )
}
