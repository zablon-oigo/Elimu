export default function Heading(props){
    return (
        <>
        <h3 className="text-4xl font-bold mb-6">{props.title1}    <span className="text-teal-500">{props.title2}</span>
        </h3>
        </>
    )
}