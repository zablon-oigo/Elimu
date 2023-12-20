export default function Button(props){
    return (
        <>
        <button className="bg-white py-3 px-6 rounded-full mt-4 outline outline-teal-500 font-semibold hover:outline-none hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-teal-700 hover:transition-all hover:text-white">
            {props.title}
        </button>
        </>
    )
}