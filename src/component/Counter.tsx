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
        <div className="h-[43%] w-9/12 bg-neutral-500/80 rounded-3xl backdrop-blur-xs border flex flex-col items-center gap-[10%] shadow-2xl"  >
            <div className=" w-full h-15 bg-neutral-200/30 backdrop-blur-3xl border rounded-3xl self-start flex justify-center items-center   ">
                <h1 className="text-3xl font-bold text-black text-shadow-title">Enotel Countdown</h1>
            </div>
            <div className="w-full flex flex-col items-center gap-20">
                <div className="w-[90%] h-[3vh] bg-blue-900/70 rounded-4xl border-4" >
                    <div className=" h-full bg-amber-300 rounded-4xl" style={{width: `${pctCountdown}%`}} ></div>
                </div>
                <p className="text-white text-shadow-xl font-semibold text-3xl font-sans">{pctCountdown}% concluído<FontAwesomeIcon icon={faCircleNotch} spin size='xs' className='ml-1'/></p>
            </div>
            

            <p className="text-black font-semibold text-xl">
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
            <p className=" text-black mt-auto font-semibold"><FontAwesomeIcon icon={faCalendarDays} />05/12/2025</p>
        </div>
    )

}
export default Counter