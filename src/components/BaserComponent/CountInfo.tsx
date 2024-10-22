import { useEffect, useRef, useState } from "react";
import { ProfileData } from "../../utils/data";
import { PiPlusLight } from "react-icons/pi";
import CountrySelect from "../WebsiteCom/CountrySelect";
import { CountryDataFlags } from "../WebsiteCom/InterNumberStep";
import { Datepicker, Label } from "flowbite-react";
import { useLocation } from "react-router-dom";

const CountInfo = () => {
    const Dashboard = useLocation().pathname.split('/')[1]
    const [CountryDropDownValue, setCountryDropDownValue] = useState(0)
    const [BirthDataValue, setBirthDataValue] = useState(ProfileData.birthData)
    const [, setImageFile] = useState<File | null>(null);
    const [imageFileUrl, setImageFileUrl] = useState<string | null>(null);
    const [currentImage, setCurrentImage] = useState<string | null>(ProfileData.img);
    const filePickerRef = useRef<HTMLInputElement>(null);
    const handleIamgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file)
            setImageFileUrl(URL.createObjectURL(file));
        }
    }
    const handleDateChange = (date: Date) => {
        setBirthDataValue(`${date.getMonth()}/${date.getDay()}/${date.getUTCFullYear()}`)
    };
    useEffect(() => {
        if (imageFileUrl != null) return setCurrentImage(imageFileUrl)
    }, [currentImage, imageFileUrl])
    return (
        <div className="flex flex-col gap-10 w-[44rem] items-center py-8">
            <div className="  relative">
                <div className="rounded-full overflow-hidden">
                    <img src={currentImage!} alt={currentImage!} className="w-[160px] h-[160px] rounded-full" />
                </div>
                <input className=' hidden' type='file' accept='image/*' ref={filePickerRef} onChange={handleIamgeChange} />
                <button className="rounded-full flex items-center justify-center bg-white text-2xl absolute bottom-1 right-1  w-10 h-10" onClick={() => filePickerRef.current?.click()}>
                    <PiPlusLight />
                </button>
            </div>
            {/* form for viewing personal data */}
            <div className="flex flex-col gap-6 w-full items-center">
                <div className="w-full ">
                    <p className=" text-base mb-2 font-medium text-BaserOnSurfase">الاسم الكامل</p>
                    <input type="text" name="userName" placeholder="User name" value={ProfileData.name} className=" text-dark border-none font-medium text-base bg-BaserSurface py-4 px-6 rounded-3xl w-full" />
                </div>
                <div className="w-full ">
                    <p className=" text-base mb-2 font-medium text-BaserOnSurfase">الدولة</p>
                    <CountrySelect data={CountryDataFlags} DropDownValue={CountryDropDownValue}
                        setDropDownValue={setCountryDropDownValue} />
                </div>
                <div className="w-full ">
                    <p className=" text-base mb-2 font-medium text-BaserOnSurfase">رقم الهاتف</p>
                    <input type="text" name="phoneNumebr" placeholder="000 000 000" value={ProfileData.phoneNumber} className=" text-dark border-none font-medium text-base bg-BaserSurface py-4 px-6 rounded-3xl w-full" />
                </div>
                <div className="w-full ">
                    <p className=" text-base mb-2 font-medium text-BaserOnSurfase">البريد الالكتروني</p>
                    <input type="email" name="email" placeholder="ex@emil.com" value={ProfileData.email} className=" text-dark border-none font-medium text-base bg-BaserSurface py-4 px-6 rounded-3xl w-full" />
                </div>
                <div className="w-full ">
                    <p className=" text-base mb-2 font-medium text-BaserOnSurfase">تاريخ الميلاد</p>
                    <div className=" relative flex-col flex gap-1 w-full items-center">
                        <Label htmlFor="ToDatePicker"
                            className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4  absolute top-0 z-10 left-0">
                            <span>{BirthDataValue}</span>
                        </Label>
                        <Datepicker
                            onChange={(date) => handleDateChange(date ?? new Date())}
                            name="ToDatePicker" id="ToDatePicker"
                            style={{ backgroundColor: '#faf5f9', width: '100%', border: '0', borderRadius: '30px', padding: '15px 40px', fontSize: '16px', fontWeight: 'normal' }}
                            theme={{
                                root: {
                                    base: "relative w-full"
                                }, popup: { root: { base: 'absolute top-0 min-w-full  left-0 z-50 block ' } }
                            }} />
                    </div>
                </div>
            </div>
            <button className={` ${Dashboard == 'Baser' ? 'bg-BaserPrimary' : ' bg-BostanyPrimary'}  text-white w-full py-5 px-6 rounded-3xl`}>حفظ التغيرات</button>
        </div>
    )
}

export default CountInfo

