export default function ReviewCard(props) {
    
    return (
        <>
        <div className="w-full md:max-w-[600px] bg-white  p-4">
            <div className="bg-gray-100 md:p-4 p-20 border-2 border-gray-300 md:border-none rounded shadow-md hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex items-center justify-center flex-col">
                <img src={props.img} alt="" className="mb-2 rounded-full ring-2 ring-teal-500 h-[60px] w-[60px] md:h-[100px] md:w-[100px]" />
                <p className="text-lg font-light mb-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempora animi sint blanditiis ad consequuntur vitae, repellat quod nam quos.</p>
                <p className="text-xl font-semibold text-gray-600">{props.name}</p>
            </div>
        </div>
        </>
    )
}