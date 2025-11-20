import { Children, ReactNode } from "react"

type Props = {
    imageSrc: string
    type?: "corner-top" | "corner-bottom"
    children?: ReactNode 
}
const type = {
    cornerTop: "rounded-t-xl" ,
    cornerBottom: "rounded-b-xl" 
}
const Days = (props: Props) => {
    return (
        <div
            className={`max-w-4xl h-screen bg-center mx-auto snap-center bg-cover bg-no-repeat border-2 shadow-black shadow-xl bg-fixed flex flex-col items-center justify-center
                    ${props.type === "corner-top" && type.cornerTop}
                    ${props.type === "corner-bottom" && type.cornerBottom}
                `}
            style={{backgroundImage: `url(${props.imageSrc})`}}
        >
            {props.children}
        </div>
    )
}
export default Days
