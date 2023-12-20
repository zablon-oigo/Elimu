import Button from "../layout/Button";
import Heading from "../layout/Heading";
import contact from "../assets/contact.png";
export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 ">
            <Heading title1="Contact" title2="Us"/>
            <div className="flex flex-col-reverse md:flex-row justify-between w-full">
                <div className="w-full md:w-2/5  pt-10 ">
                <form action="#" className="">
                    <label htmlFor="" className="text-xl font-light my-2">Your Name</label>
                    <input type="text" placeholder="Name" className="px-6 py-3 rounded-xl border border-gray-700 w-full block"/><br/>
                    <label htmlFor="" className="text-xl font-light my-2">Your Email</label>
                    <input type="email" placeholder="Email" className="px-6 py-3 rounded-xl border border-gray-700 w-full block"/><br/>
                    <label htmlFor="" className="text-xl font-light my-2">Your Message</label>
                    <textarea placeholder="Message" className="w-full px-12 py-12 rounded-xl block border border-gray-700"/>
                    <Button title="Send Message" className="w-full mt-4"/>
                </form>
                </div>
                <div className="w-full md:w-2/4 ">
                <img src={contact} alt="" className="" />
                </div>
            </div>
       
        </div>
    );
}