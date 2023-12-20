import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import smith from '../assets/smith.jpg'
import johndoe from '../assets/johndoe.jpg'
import janedoe from '../assets/janedoe.jpg'
export default function Reviews() {
    
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center  ">
           <Heading title1="Our" title2="Reviews"/>
           <div className="flex flex-col  items-center md:flex-row  mt-5">
            <ReviewCard img={smith} name='Peter Smith'/>
            <ReviewCard img={johndoe} name='John Doe'/>
            <ReviewCard img={janedoe} name='Jane Doe'/>

           </div>
        </div>
    )
}