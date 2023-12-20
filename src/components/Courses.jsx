import Card from "../layout/CoursesCard";
import Heading from "../layout/Heading";
import web from "../assets/web.png";
import android from "../assets/android.png";
import ios from "../assets/ios.png";
import graphic from "../assets/graphic.png";
export default function Courses() { 
    return (
        <div className="min-h-screen flex flex-col items-center  md:px-32 px-5 my-10">
           <Heading title1="Our" title2="Courses"/>
           <div className="flex flex-wrap justify-center gap-5 mt-6">
            <Card title="Web Development" img={web}/>
            <Card title="Android Development" img={android}/>
            <Card title="IOS Development" img={ios}/>
            <Card title="Graphic Design" img={graphic}/>
           </div>
        </div>
    )
}