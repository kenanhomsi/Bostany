import { useState } from "react";
import { PiCoinVerticalFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { CloseBuyingCoinsPop } from "../../redux/Slices/PopUpSlice";

const BuyingCoinsPopUp = () => {
    const [chosenCoin, setChosenCoin] = useState('');
    const [Haschosen, setHaschosen] = useState(false);
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
        setHaschosen(true);
    }
    const HandleCancel = () => {
        setHaschosen(false);
        dispatch(CloseBuyingCoinsPop())
    }
    const handleBuying = () => {
        alert('buying ' + chosenCoin)
        setHaschosen(false);
        dispatch(CloseBuyingCoinsPop())
    }
    return (
        <div className="flex flex-col w-full gap-8 mt-2">
            <div className="  grid  gap-4  grid-cols-2">
                {CoinsList.map((ele, index) => (
                    <button onClick={() => handleClick(ele.price)}
                        className={`${chosenCoin === ele.price && ' !border-BaserPrimary'} flex border-2 !h-[104px] border-BaserSurface cursor-pointer items-center justify-center  text-xl font-medium text-BaserOnSurfase gap-3 rounded-2xl  py-2 px-4  bg-BaserSurface`} key={index}>
                        <span className="text-BaserPrimary text-3xl">{ele.icon}</span>
                        <p><span>{ele.price}</span> ر.س</p>
                    </button>
                ))}
            </div>
            <div className="w-full flex gap-4 px-4 border-t text-base border-[#938F94]/50 pt-5 ">
                <button onClick={handleBuying} disabled={!Haschosen} className={`${!Haschosen ? "bg-BaserPrimary/35 !text-dark/50 hover:bg-BaserPrimary/35" : "bg-BaserPrimary hover:bg-BaserPrimary"}  text-white rounded-full px-5 py-4 font-medium text-base   w-full`} >شراء</button>
                <button onClick={HandleCancel} className=" w-full rounded-full px-5 py-4 text-BaserPrimary font-medium text-base border-[#938F94]/50 border" >تم</button>
            </div>
        </div>
    )
}

export default BuyingCoinsPopUp