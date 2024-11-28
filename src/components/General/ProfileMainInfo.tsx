import { PiPlusLight } from "react-icons/pi";
import BostanyManIcon from '/Icons/BostanyMan.png'
import BostanyfemaleIcon from '/Icons/Bostanyfemale.png'
import CountrySelect from "../WebsiteCom/CountrySelect";
import SpecialistList from "./SpecialistList";
import { categorySelect, CountriesData, SpecialitiesType } from "../../Types/api";
import CategoryList from "./CategoryList";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiXLogo } from "react-icons/pi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useGetSpecialitiestList } from "../../utils/api/select/useGetspecialities";
import { useGetCategoriestList } from "../../utils/api/select/useGetCategories";
import { useEffect, useRef, useState } from "react";
import { useUploadMedia } from "../../utils/api/Media/usePutUploadMedia";
import { ProfileFormType } from "../../Types";
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile";
import BaserManIcon from '/Icons/Man.png'
import BaserfemaleIcon from '/Icons/female.png'
import DatePickerComponent from "./DatePicker";
export interface ProfileMainInfoPrps {
    ProfileForm: ProfileFormType;
    setProfileForm: (value: ProfileFormType) => void;
    setCHangeHappend: (value: boolean) => void;
    setDropDownValue: (id: number) => void;
    DropDownValue: number;
    allCountries: CountriesData[];
    SetProfileStep: (id: number) => void
}
const ProfileMainInfo = ({ ProfileForm, SetProfileStep, setProfileForm, setCHangeHappend, setDropDownValue, DropDownValue, allCountries, }: ProfileMainInfoPrps) => {
    const [SelectedSpecialities, setSelectedSpecialities] = useState(0)
    const { mutate: MutateUploadMedia, data: uploadMediaData, isSuccess } = useUploadMedia();
    const { data } = useGetUserProfile();
    const { data: SpecialitiestListData } = useGetSpecialitiestList();
    const { data: categories, refetch } = useGetCategoriestList({
        queryKey: ["Categories", SelectedSpecialities]
    });
    useEffect(() => {
        refetch()
    }, [SelectedSpecialities, refetch])

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
    const handleDateChange = (date: Date | null) => {
        setCHangeHappend(true);
        if (date) {
            setProfileForm({
                ...ProfileForm,
                birthdate: `${date.getMonth() + 1}/${date.getDate()}/${date.getUTCFullYear()}`
            });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCHangeHappend(true)
        setProfileForm({
            ...ProfileForm,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (uploadMediaData && isSuccess) {
            setProfileForm({
                ...ProfileForm,
                avatarToken: uploadMediaData.data.token
            })
        }
    }, [uploadMediaData, isSuccess])

    const handleGenderClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCHangeHappend(true)

        setProfileForm({
            ...ProfileForm,
            gender: (e.target as HTMLButtonElement).value == 'ذكر' ? 'male' : 'female'
        })
    }
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCHangeHappend(true)

        setProfileForm({
            ...ProfileForm,
            DefinitiveWords: e.target.value
        })
    }
    const handleWorkSpaceClick = (id: number) => {
        setCHangeHappend(true)

        setSelectedSpecialities(id)
        setProfileForm({
            ...ProfileForm,
            specialities: ProfileForm.specialities.includes(id) ? ProfileForm.specialities.filter((ele) => ele !== id) : [...ProfileForm.specialities, id]
        })
    }
    const handleCategoryClick = (id: number) => {

        setCHangeHappend(true)
        setProfileForm({
            ...ProfileForm,
            category: ProfileForm.category.includes(id) ? ProfileForm.category.filter((ele) => ele !== id) : [...ProfileForm.category, id]
        })
    }
    const HandleSocialMediaLiksInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCHangeHappend(true)
        setProfileForm({
            ...ProfileForm,
            [e.target.name]: e.target.value
        })
    }
    const handleClickArrowGoCertification = () => {
        SetProfileStep(2);
    }
    const handleClickArrowGoExperiance = () => {
        SetProfileStep(3);
    }

    return (
        <div className="flex flex-col gap-10 xl:!w-[44rem] md:!w-[37rem] items-center py-8">
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
            <div className={`  flex flex-col gap-6 w-full items-center`}>
                <div className="w-full ">
                    <p className={` text-base mb-2 font-medium ${data?.data.type == 'customer' ? 'text-BaserOnSurfase' : ' text-BostanyOnSurface'} `}>الاسم الكامل</p>
                    <input type="text" onChange={handleInputChange} name="name" placeholder="User name" value={ProfileForm.name} className={` ${data?.data.type == 'customer' ? 'bg-BaserSurface text-BaserOnSurfase focus:border-BaserPrimary' : ' bg-BostanySurfaceContainer text-BostanyOnSurface focus:border-BostanyPrimary'} placeholder:text-dark border-transparent focus:ring-0  focus:border-2 font-medium text-base   py-4 px-6 rounded-3xl w-full`} />
                </div>
                <div className="w-full ">
                    <p className={` text-base mb-2 font-medium ${data?.data.type == 'customer' ? 'text-BaserOnSurfase' : ' text-BostanyOnSurface'}`}>الدولة</p>
                    {
                        allCountries.length > 0 &&
                        <CountrySelect data={allCountries} DropDownValue={DropDownValue}
                            setDropDownValue={setDropDownValue} />
                    }
                </div>
                <div className="w-full ">
                    <p className={` text-base mb-2 font-medium ${data?.data.type == 'customer' ? 'text-BaserOnSurfase' : ' text-BostanyOnSurface'}`}>رقم الهاتف</p>
                    <input type="text" onChange={handleInputChange} name="phone" placeholder="000 000 000" value={ProfileForm.phone} className={` placeholder:text-dark border-transparent focus:ring-0  focus:border-2 font-medium text-base ${data?.data.type == 'customer' ? 'bg-BaserSurface text-BaserOnSurfase focus:border-BaserPrimary' : ' bg-BostanySurfaceContainer text-BostanyOnSurface focus:border-BostanyPrimary'} py-4 px-6 rounded-3xl w-full`} />
                </div>
                <div className="w-full ">
                    <p className={` text-base mb-2 font-medium ${data?.data.type == 'customer' ? 'text-BaserOnSurfase' : ' text-BostanyOnSurface'}`}>البريد الالكتروني</p>
                    <input type="email" onChange={handleInputChange} name="email" placeholder="ex@emil.com" value={ProfileForm.email} className={` placeholder:text-dark border-transparent focus:ring-0  focus:border-2 font-medium text-base ${data?.data.type == 'customer' ? 'bg-BaserSurface text-BaserOnSurfase focus:border-BaserPrimary' : ' bg-BostanySurfaceContainer text-BostanyOnSurface focus:border-BostanyPrimary'} py-4 px-6 rounded-3xl w-full`} />
                </div>
                <div className="w-full ">
                    <p className={`text-base mb-2 font-medium ${data?.data.type == 'customer' ? 'text-BaserOnSurfase' : ' text-BostanyOnSurface'}`}>تاريخ الميلاد</p>
                    <div className=" relative flex-col flex gap-1 w-full items-center">
                        {/* <Label htmlFor="ToDatePicker"
                            className={`w-full ${data?.data.type == 'customer' ? 'bg-BaserSurface' : ' bg-BostanySurfaceContainer'}   h-20 text-dark text-base px-6 py-4  rounded-3xl border-none   absolute top-0 flex items-center z-10 left-0`}>
                            <span > {ProfileForm.birthdate == '' ? ' يوم / شهر / سنة ' : ProfileForm.birthdate} </span>
                        </Label>
                        <Datepicker
                            onChange={handleDateChange!}
                            name="ToDatePicker" id="ToDatePicker"
                            style={{ backgroundColor: '#faf5f9', width: '100%', border: '0', borderRadius: '24px', padding: '15px 40px', fontSize: '16px', fontWeight: 'normal' }}
                            theme={{
                                root: {
                                    base: "relative w-full"
                                }, popup: { root: { base: 'absolute top-0 min-w-full  left-0 z-50 block ' } }
                            }} /> */}
                        <DatePickerComponent
                            name="ToDatePicker"
                            id="ToDatePicker"
                            value={ProfileForm.birthdate!}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>
                <div className=" w-full ">
                    <p className={` text-base mb-2 font-medium ${data?.data.type == 'customer' ? 'text-BaserOnSurfase' : ' text-BostanyOnSurface'}`}>الجنس</p>
                    <div className="min-w-full flex  gap-3 " >
                        <button onClick={handleGenderClick} value='ذكر' className={` ${ProfileForm.gender == 'male' ? data?.data.type == 'customer' ? '!border-BaserPrimary ' : `!border-BostanyPrimary` : ''} ${data?.data.type == 'customer' ? 'bg-BaserSurface' : 'bg-BostanySurfaceContainer'} border-2 border-transparent  !h-fit flex-1  p-4 cursor-pointer  flex flex-col items-center gap-4 rounded-2xl`}>
                            <img src={data?.data.type == 'customer' ? BaserManIcon : BostanyManIcon} alt={BostanyManIcon} className="w-20 h-20  pointer-events-none" />
                            <p>ذكر</p>
                        </button>
                        <button onClick={handleGenderClick} value='أنثي' className={`${ProfileForm.gender == 'female' ? data?.data.type == 'customer' ? '!border-BaserPrimary ' : `!border-BostanyPrimary ` : ''} ${data?.data.type == 'customer' ? 'bg-BaserSurface' : 'bg-BostanySurfaceContainer'}  border-2 border-transparent !h-fit flex-1 p-4 cursor-pointer  flex flex-col items-center gap-4 rounded-2xl`}>
                            <img src={data?.data.type == 'customer' ? BaserfemaleIcon : BostanyfemaleIcon} alt={BostanyfemaleIcon} className="w-20 h-20 pointer-events-none " />
                            <p>أنثي</p>
                        </button>
                    </div>
                </div>
                {data?.data.type === 'consultant' &&
                    <>
                        <div className=" w-full ">
                            <p className=" font-medium text-base mb-1 text-[#191C1B]">كلمات تعريفية تشويقية عنك</p>
                            <textarea rows={5} onChange={handleChange} value={ProfileForm.DefinitiveWords} className=" resize-none w-full bg-BostanySurfaceContainer text-dark font-medium focus:outline-BostanyPrimary focus:ring-0  rounded-3xl border-none p-4" />
                            <p className=" text-dark text-sm"><span>{ProfileForm.DefinitiveWords && ProfileForm.DefinitiveWords.length}</span>/70</p>
                        </div>
                        <div className=" w-full ">
                            <p className=" font-medium text-base mb-1 text-[#191C1B]">مجالك</p>
                            <SpecialistList From='Bostany' data={SpecialitiestListData?.data as SpecialitiesType[]} handleWorkSpaceClick={handleWorkSpaceClick} SelectedSpecialitiest={ProfileForm.specialities} />
                        </div>
                        {categories?.data && categories?.data.length > 0 && <div className="w-full">
                            <p className=" font-medium text-base mb-1 text-[#191C1B]">تخصصك</p>
                            <CategoryList From='Bostany' CategoryList={ProfileForm.category} handleCategoryClick={handleCategoryClick} Data={categories?.data as categorySelect[]} />
                        </div>}
                        <div className=" w-full  ">
                            <p className=" font-medium text-base mb-1 text-[#191C1B]">الحسابات</p>
                            <div className=" flex gap-3 items-center my-5  w-full">
                                <PiXLogo className="text-3xl text-BostanyOnSurface" />
                                <input type="text" name="XUrl" onChange={HandleSocialMediaLiksInput} value={ProfileForm.XUrl} className="  border-none focus:outline-BostanyPrimary focus:ring-0 w-full  rounded-3xl bg-BostanySurfaceContainer text-dark text-xs font-medium p-4" placeholder="https://x.com/Bas10ar" />
                            </div>
                            <div className=" flex gap-3 items-center w-full">
                                <BiLogoLinkedin className="text-3xl text-BostanyOnSurface" />
                                <input type="text" name="LinkedInUrl" onChange={HandleSocialMediaLiksInput} value={ProfileForm.LinkedInUrl} className=" w-full border-none focus:outline-BostanyPrimary focus:ring-0   rounded-3xl bg-BostanySurfaceContainer text-dark text-xs font-medium p-4" placeholder="https://www.linkedin.com/company/bas-10" />
                            </div>
                        </div>
                        <div className=" w-full h-[1px] bg-[#8E918F]"></div>
                        <div className=" w-full flex flex-col gap-10 my-5">
                            <div className=" flex justify-between items-center">
                                <p>الشهادات</p>
                                <RiArrowLeftSLine className="w-6 h-6  text-dark cursor-pointer" onClick={handleClickArrowGoCertification} />
                            </div>
                            <div className=" flex justify-between items-center">
                                <p>الخبرات</p>
                                <RiArrowLeftSLine className="w-6 h-6 text-dark cursor-pointer" onClick={handleClickArrowGoExperiance} />
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ProfileMainInfo