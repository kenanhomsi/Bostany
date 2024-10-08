import { useState } from "react"
import InterNumberStep from "./InterNumberStep"
import OTPStep from "./OTPStep"
import CompleteProfile from "./CompleteProfile";

const RegisterPage = () => {
    const [stepNum, setstepNum] = useState(1);
    return (
        <div className="flex  h-full ">
            {
                stepNum === 1 && <InterNumberStep setStep={setstepNum} />
            }
            {
                stepNum === 2 && <OTPStep setStep={setstepNum} />
            }
            {
                stepNum === 3 && <CompleteProfile />
            }

        </div>
    )
}

export default RegisterPage