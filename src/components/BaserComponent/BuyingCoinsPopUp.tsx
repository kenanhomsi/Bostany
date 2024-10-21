import { Button } from "flowbite-react"
import { useState } from "react";
import { PiCoinVerticalFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { CloseBuyingCoinsPop } from "../../redux/Slices/PopUpSlice";

const BuyingCoinsPopUp = () => {
    const [chosenCoin, setChosenCoin] = useState('');
    const dispatch = useDispatch();
    const CoinsList = [
        {
            icon: <PiCoinVerticalFill />,
            price: '10'
        },
        {
            icon: <PiCoinVerticalFill />,
            price: '20'
        },
        {
            icon: <PiCoinVerticalFill />,
            price: '30'
        },
        {
            icon: <PiCoinVerticalFill />,
            price: '40'
        },
        {
            icon: <PiCoinVerticalFill />,
            price: '50'
        },
        {
            icon: <PiCoinVerticalFill />,
            price: '60'
        },
    ]
    const handleClick = (price: string) => {
        setChosenCoin(price)
    }
    const HandleCancel = () => {
        dispatch(CloseBuyingCoinsPop())
    }
    const handleBuying = () => {
        alert('buying ' + chosenCoin)
        dispatch(CloseBuyingCoinsPop())
    }
    return (
        <div className="flex flex-col w-full gap-5">
            <div className="  grid  gap-3  grid-cols-2">
                {CoinsList.map((ele, index) => (
                    <button onClick={() => handleClick(ele.price)}
                        className={`${chosenCoin === ele.price && ' !border-BaserPrimary'} flex border-2 border-BaserSurface cursor-pointer items-center justify-center  text-xl font-medium text-BaserOnSurfase gap-3 rounded-2xl  p-4  bg-BaserSurface`} key={index}>
                        <span className="text-BaserPrimary">{ele.icon}</span>
                        <p><span>{ele.price}</span> ر.س</p>
                    </button>
                ))}
            </div>
            <div className="w-full flex gap-5 px-4 border-t border-[#938F94] pt-5 ">
                <Button onClick={handleBuying} className="bg-BaserPrimary text-white rounded-full hover:!bg-BaserFoshiy w-full" >شراء</Button>
                <Button onClick={HandleCancel} className=" w-full rounded-full" color="light">تم</Button>
            </div>
        </div>
    )
}

export default BuyingCoinsPopUp