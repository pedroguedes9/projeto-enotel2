"use client"

import { useState } from "react"

const tripDate = new Date(2025, 11, 5)
const totalWaitingDays = 295
const totalWaitingHours = totalWaitingDays * 24
const totalTimestamp = tripDate.getTime()
const msPerHour = 60 * 60 * 1000
let daysLeft
let pctCountdown
let hoursLeft


const updateCountdown = () => {
    
    const [currentDate, setCurrentDate] = useState()


}



const Counter = () => {
    return (
        <div className="h-[43%] w-9/12 bg-neutral-500/30 rounded-3xl backdrop-blur-sm border flex flex-col items-center gap-[10%] "  >
            <div className=" w-full h-15 bg-neutral-200/30 backdrop-blur-3xl border rounded-3xl self-start flex justify-center items-center   ">
                <h1 className="text-3xl font-bold text-black">Enotel Countdown</h1>
            </div>
            <div className="w-full flex flex-col items-center gap-20">
                <div className="w-[90%] h-[3vh] bg-blue-900/70 rounded-4xl border-4" >
                    <div className=" w-full h-full bg-amber-300 rounded-4xl "></div>
                </div>
                <p>X concluído</p>
            </div>
            

            <p className="text-black font-semibold">Faltam 14 dias para a viagem</p>
            <p className=" text-black mt-auto font-semibold">05/12/2025</p>
        </div>
    )

}
export default Counter