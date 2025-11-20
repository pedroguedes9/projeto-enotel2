type Props = {
    imageSrc: string
    type?: "corner-top" | "corner-bottom"
}
const type = {
    cornerTop: "rounded-t-xl" ,
    cornerBottom: "rounded-b-xl" 
}
const Days = (props: Props) => {
    return (
        <div
            className={`max-w-5xl h-screen bg-center mx-auto snap-center bg-cover bg-no-repeat border-2 shadow-black shadow-xl bg-fixed 
                    ${props.type === "corner-top" && type.cornerTop}
                    ${props.type === "corner-bottom" && type.cornerBottom}
                `}
            style={{backgroundImage: `url(${props.imageSrc})`}}
        >
        </div>
    )
}
export default Days
