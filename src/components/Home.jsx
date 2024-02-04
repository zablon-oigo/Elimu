import { Link } from "react-scroll";
import Button from "../layout/Button";
import img from "../assets/hero.png";
export default function Home() {
    return (
        <>
        <div className="min-h-[70vh] flex flex-col-reverse md:justify-between md:flex-row items-center md:mx-32 mx-5 mt-10">
                 <div className="">
                 <h2 className="mb-4 md:text-5xl  text-3xl leading-tight text-center md:text-start">Knowledge with <span className="text-teal-500">Elimu</span></h2>
        
        <p className="text-lg font-light mb-4">
            Elimu is your gateway to a world of limitless learning possibilities.
            Whether youre a beginner or an expert, our platform has something for everyone.
            With a wide range of courses, tutorials, and educational resources, youll find exactly what you need.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500} className="flex justify-center md:justify-start items-center">
            <Button title="Get Started"/>
        </Link>
                 </div>
                 <div className="">
                    <img src={img} alt="" className="" />
                 </div>
    </div>
        </>
    )
}