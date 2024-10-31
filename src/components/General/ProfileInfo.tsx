import { useEffect, useRef, useState } from "react";
// import { ProfileData } from "../../utils/data";//TODO لازم امحيها
import { PiPlusLight } from "react-icons/pi";
import CountrySelect from "../WebsiteCom/CountrySelect";
import { Datepicker, Label } from "flowbite-react";
import { useLocation } from "react-router-dom";
import useFetchCountries from "../../Hooks/useFetchAllCountreis";
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile";
import { ProfileFormType } from "../../Types";
import { useUpdateProfile } from "../../utils/api/User/usePutProfile";
import { useUploadMedia } from "../../utils/api/Media/usePutUploadMedia";
import { useDispatch } from "react-redux";
import { loginSuccess, User } from "../../redux/Slices/authSlice";

const ProfileInfo = () => {
    const Dashboard = useLocation().pathname.split('/')[1]
    const { data, isLoading } = useGetUserProfile();
    const dispatch = useDispatch()
    const { mutate, isLoading: UpdataIsLoading, data: UpadatData } = useUpdateProfile();
    const { mutate: MutateUploadMedia, data: uploadMediaData } = useUploadMedia();
    const { allCountries } = useFetchCountries();
    const [CHangeHappend, setCHangeHappend] = useState(false)
    const [DropDownValue, setDropDownValue] = useState(1)
    const [ProfileForm, setProfileForm] = useState<ProfileFormType>({
        name: data?.data.name,
        imageFile: null,
        avatarToken: '',
        avatar: data?.data.avatar,
        birthdate: data?.data.birthdate,
        country: data?.data.country,
        email: data?.data.email,
        phone: data?.data.phone,
    })
    useEffect(() => {
        if (data) {
            setProfileForm({
                imageFile: null,
                name: data?.data.name,
                avatar: data?.data.avatar,
                birthdate: data?.data.birthdate.split('T')[0],
                country: data?.data.country,
                email: data?.data.email,
                phone: data?.data.phone,
            })
            setDropDownValue(+data?.data.country.id)
        }
    }, [data])
    const filePickerRef = useRef<HTMLInputElement>(null);
    const handleIamgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCHangeHappend(true)
        const file = e.target.files?.[0];
        if (file) {

            setProfileForm(({
                ...ProfileForm,
                imageFile: file,
                avatar: URL.createObjectURL(file)
            }))
        }
        MutateUploadMedia({
            payload: {
                file: file!,
                collection: 'avatars',
            }
        })
    }
    const handleDateChange = (date: Date) => {
        setCHangeHappend(true)

        setProfileForm({
            ...ProfileForm,
            birthdate: `${date.getMonth() + 1}/${date.getDate()}/${date.getUTCFullYear()}`
        })
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCHangeHappend(true)
        setProfileForm({
            ...ProfileForm,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (uploadMediaData) {
            setProfileForm({
                ...ProfileForm,
                avatarToken: uploadMediaData.data.token
            })
        }

    }, [uploadMediaData])
    const handleSaveChange = () => {
        mutate({
            payload: {
                name: ProfileForm.name,
                birthdate: ProfileForm.birthdate,
                country_id: ProfileForm.country?.id,
                email: ProfileForm.email,
                phone: ProfileForm.phone,
                phone_code: ProfileForm.country?.code,
                avatar: ProfileForm.avatarToken
            }
        })
        dispatch(loginSuccess({
            user: UpadatData?.data as User,
        }))
    }
    return (
        <>
            {
                !isLoading && data &&
                <div className="flex flex-col gap-10 w-[44rem] items-center py-8">
                    <div className="  relative">
                        <div className="rounded-full overflow-hidden">
                            <img src={ProfileForm.avatar} alt={ProfileForm.avatar} className="w-[160px] h-[160px] rounded-full" />
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
                            <input type="text" onChange={handleInputChange} name="name" placeholder="User name" value={ProfileForm.name} className=" text-dark border-none font-medium text-base bg-BaserSurface py-4 px-6 rounded-3xl w-full" />
                        </div>
                        <div className="w-full ">
                            <p className=" text-base mb-2 font-medium text-BaserOnSurfase">الدولة</p>
                            {
                                allCountries.length > 0 &&
                                <CountrySelect data={allCountries} DropDownValue={DropDownValue}
                                    setDropDownValue={setDropDownValue} />
                            }
                        </div>
                        <div className="w-full ">
                            <p className=" text-base mb-2 font-medium text-BaserOnSurfase">رقم الهاتف</p>
                            <input type="text" onChange={handleInputChange} name="phone" placeholder="000 000 000" value={ProfileForm.phone} className=" text-dark border-none font-medium text-base bg-BaserSurface py-4 px-6 rounded-3xl w-full" />
                        </div>
                        <div className="w-full ">
                            <p className=" text-base mb-2 font-medium text-BaserOnSurfase">البريد الالكتروني</p>
                            <input type="email" onChange={handleInputChange} name="email" placeholder="ex@emil.com" value={ProfileForm.email} className=" text-dark border-none font-medium text-base bg-BaserSurface py-4 px-6 rounded-3xl w-full" />
                        </div>
                        <div className="w-full ">
                            <p className=" text-base mb-2 font-medium text-BaserOnSurfase">تاريخ الميلاد</p>
                            <div className=" relative flex-col flex gap-1 w-full items-center">
                                <Label htmlFor="ToDatePicker"
                                    className="w-full bg-BaserSurface text-dark  rounded-2xl border-none p-4  absolute top-0 z-10 left-0">
                                    <span>{ProfileForm.birthdate}</span>
                                </Label>
                                <Datepicker
                                    onChange={handleDateChange}
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
                    <button disabled={!CHangeHappend} onClick={handleSaveChange} className={`  ${Dashboard == 'Baser' ? !CHangeHappend ? 'bg-BaserPrimary/35' : `bg-BaserPrimary` : !CHangeHappend ? 'bg-BostanyPrimary/35' : ' bg-BostanyPrimary'}  text-white w-full py-5 px-6 rounded-3xl`}>{UpdataIsLoading ? '...loading' : 'حفظ التغيرات'}</button>
                </div>
            }
            {
                isLoading && <h2>...Loading</h2>
            }
        </>
    )
}

export default ProfileInfo

