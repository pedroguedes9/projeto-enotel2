type Props = {
    imageSrc: string
}
const Days = (props: Props) => {
    return (
        <div className={`bg-[url('${props.imageSrc}')] h-24 w-24`}>
            Oi
        </div>
    )
}
export default Days