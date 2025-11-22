"use client"

import { useEffect, useState } from "react"

const tripDate = new Date(2025, 11, 5)
const totalWaitingDays = 295
const totalWaitingHours = totalWaitingDays * 24
const tripTimeStamp = tripDate.getTime()
const totalTimestamp = tripDate.getTime()
const msPerHour = 60 * 60 * 1000
let daysLeft
let pctCountdown
let hoursLeft


const Counter = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    let currentTimeStamp = currentDate.getTime()
    hoursLeft = Math.ceil((tripTimeStamp - currentTimeStamp) / msPerHour)
    daysLeft = Math.ceil(hoursLeft / 24)
    pctCountdown = Math.max(0, Math.min(100,
         ((totalWaitingHours - hoursLeft) / totalWaitingHours * 100)
    )). toFixed(2)

    return (
        <div className="h-[43%] w-9/12 bg-neutral-500/30 rounded-3xl backdrop-blur-sm border flex flex-col items-center gap-[10%] "  >
            <div className=" w-full h-15 bg-neutral-200/30 backdrop-blur-3xl border rounded-3xl self-start flex justify-center items-center   ">
                <h1 className="text-3xl font-bold text-black">Enotel Countdown</h1>
            </div>
            <div className="w-full flex flex-col items-center gap-20">
                <div className="w-[90%] h-[3vh] bg-blue-900/70 rounded-4xl border-4" >
                    <div className=" h-full bg-amber-300 rounded-4xl" style={{width: `${pctCountdown}%`}} ></div>
                </div>
                <p className="text-white text-shadow-xl font-semibold text-3xl ">{pctCountdown}% concluído</p>
            </div>
            

            <p className="text-black font-semibold text-xl">
                {daysLeft === 1 && `Falta ${daysLeft} dia para a viagem\u{1F389}`}
                {daysLeft === 0 && `A viagem chegou!!\u{1F389}`}
                {daysLeft > 1 && `Faltam ${daysLeft} dias para a viagem`}
                </p>
            <p className=" text-black mt-auto font-semibold">05/12/2025</p>
        </div>
    )

}
export default Counter