import { OpenBst10Time } from '@/redux/Slices/PopUpSlice';
import { useState, useEffect } from 'react';
import { PiClockCountdownFill } from "react-icons/pi";
import { useDispatch } from 'react-redux';

const CountdownTimer = ({ timeFromApi }: { timeFromApi: number }) => {
    const [time, setTime] = useState(timeFromApi);
    const dispatch = useDispatch();
    useEffect(() => {
        let countdownInterval: string | number | NodeJS.Timeout | undefined;

        if (time > 0) {
            countdownInterval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(countdownInterval);
    }, [time]);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };
    const handleClick = () => {
        dispatch(OpenBst10Time())
    }
    return (
        <div onClick={handleClick} className="flex w-[165px] px-5 py-3 absolute cursor-pointer left-[37%] items-center gap-3 bg-BostanyPrimary rounded-full border-none ">
            <div className="  flex gap-4 items-center">
                <PiClockCountdownFill className=' text-[22px]  text-white' />
                <div className=' text-base font-medium text-white'>{formatTime(time)}</div>
            </div>
            {time === 0 && <div style={{ color: 'red', marginTop: '20px' }}>Time's up!</div>}
        </div>
    );
};

export default CountdownTimer;