"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from "react"

const tripDate = new Date(2025, 11, 5)
const totalWaitingDays = 295
const totalWaitingHours = totalWaitingDays * 24
const tripTimeStamp = tripDate.getTime()
const msPerHour = 60 * 60 * 1000
let daysLeft: number
let pctCountdown:string
let hoursLeft:number


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
        <div className="h-[43%] w-9/12 bg-neutral-500/80 rounded-3xl backdrop-blur-xs border flex flex-col items-center gap-[10%] shadow-2xl transition-transform duration-300 ease-in-out will-change-transform hover:scale-105"  >
            <div className="flex items-center self-start justify-center w-full border h-15 bg-neutral-200/30 backdrop-blur-3xl rounded-3xl">
                <h1 className="text-2xl md:text-5xl  font-bold text-black text-shadow-title">Enotel Countdown</h1>
            </div>
            <div className="flex flex-col items-center w-full gap-10 md:gap-20">
                <div className="w-[90%] h-[3vh] rounded-4xl border-4" >
                    <div className="h-full rounded-full animate-gradient-move bg-[linear-gradient(90deg,green_0%,green_45%,blue_50%,blue_55%,green_60%,green_100%)] bg-size-[300%_100%] transition-[width] duration-500 ease-in " style={{width: `${pctCountdown}%`}} ></div>
                </div>
                <p className="text-xl md:text-4xl font-semibold text-white text-shadow-xl font-mono">{pctCountdown}% concluído<FontAwesomeIcon icon={faCircleNotch} spin size='xs' className='ml-1'/></p>
            </div>
            

            <p className=" md:text-2xl font-semibold text-black">
                {daysLeft === 1 && (
                    <>
                        <FontAwesomeIcon icon={faSuitcaseRolling} />
                        A viagem chegou!! 🎉
                    </>
                )}
                {daysLeft === 0 && (
                    <>
                        <FontAwesomeIcon icon={faSuitcaseRolling} />
                        Falta 1 dia para a viagem 🎉
                    </>
                )}
                {daysLeft > 1 && (
                    <>
                        <FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" />
                        Faltam {daysLeft} dias para a viagem
                    </>
                )}
                </p>
            <p className="mt-auto font-semibold text-black "><FontAwesomeIcon icon={faCalendarDays} />05/12/2025</p>
        </div>
    )

}
export default Counter