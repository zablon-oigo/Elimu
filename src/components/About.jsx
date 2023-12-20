import { Link } from "react-scroll";
import Button from "../layout/Button";
import about from "../assets/about.png";
import Heading from "../layout/Heading";

export default function About() {
    return (
        <>
        <div className="md:min-h-screen flex flex-col md:flex-row items-center gap-5 md:mx-32 mx-5 ">
            <div className="w-full md:w-2/4">
            <img src={about} alt="" className="" />
            </div>
            <div className="w-full md:w-2/4 ">
               <Heading title1="About" title2="Us"/>
                <p className="text-lg font-light mb-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, odit iure suscipit ipsum id consequuntur debitis cupiditate asperiores inventore quod sequi vero aperiam ullam autem. Reprehenderit, incidunt commodi iste maxime consectetur tenetur deserunt magnam minus necessitatibus fugiat! Minima, modi qui.
                </p>
                <Link spy={true} to="contact" smooth={true} duration={500} className=""/>
                <Button title="Contact"/>
            </div>
        </div>
        </>
    );
}