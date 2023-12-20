import { HiArrowLongRight } from "react-icons/hi2";
export default function Card(props){
    return (
        <>
        <div className="flex flex-col items-center justify-between rounded-xl bg-white border-2 md:border-none transition-all duration-500 shadow-2xl hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <div className="max-w-sm px-6 py-4">
                <div className="">
                <img src={props.img} alt="" className="" />
            </div>
            <div>
                <div className="mt-4">
                    <h3 className="text-xl text-center mb-2">{props.title}</h3>
                    <p className="font-light  line-clamp-3 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita delectus quae non tempore deleniti ipsa ad laborum! Vero, laboriosam nemo.
                        
                      

                    </p>
                    <a href="" className="text-teal-500 inline-flex items-center">
                    readmore <HiArrowLongRight  size={30} />
                    </a>
                </div>
            </div>
                </div>
        </div>
        </>
    )
}