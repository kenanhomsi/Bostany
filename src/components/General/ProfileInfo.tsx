import { useEffect, useState } from "react";
import useFetchCountries from "../../Hooks/useFetchAllCountreis";
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile";
import { ProfileFormType } from "../../Types";
import { useUpdateProfile } from "../../utils/api/User/usePutProfile";
import { useLocation } from "react-router-dom";
import ProfileMainInfo from "./ProfileMainInfo";
import ProfileCertificationSection from "./ProfileCertificationSection";
import ProfileExperianceSection from "./ProfileExperianceSection";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { SetQualificationData } from "../../redux/Slices/QualificationData";
import { setExperiencesData } from "../../redux/Slices/experienceSlice";
const ProfileInfo = () => {
    const [ProfileStep, SetProfileStep] = useState(1)
    const { data, isLoading } = useGetUserProfile();
    const dispatch = useDispatch()
    const Dashboard = useLocation().pathname.split('/')[1]
    const { mutate, isLoading: UpdataIsLoading } = useUpdateProfile();
    const { allCountries } = useFetchCountries();
    const [CHangeHappend, setCHangeHappend] = useState(false)
    const QualificationDataArray = useAppSelector((state) => state.qualificationData.QualificationDataArray)
    const ExperiencesData = useAppSelector((state) => state.experiences.ExperiencesData)
    const [ProfileForm, setProfileForm] = useState<ProfileFormType>({
        name: data?.data.name,
        imageFile: null,
        XUrl: '',
        LinkedInUrl: '',
        gender: '',
        DefinitiveWords: '',
        category: [],
        specialities: [],
        experiences: [],
        certificates: [],
        avatarToken: '',
        avatar: data?.data.avatar,
        birthdate: data?.data.birthdate,
        country: data?.data.country,
        email: data?.data.email,
        phone: data?.data.phone,
    })
    const [DropDownValue, setDropDownValue] = useState(0)
    useEffect(() => {
        setProfileForm({
            ...ProfileForm,
            experiences: ExperiencesData
        })
    }, [ExperiencesData])
    useEffect(() => {
        setProfileForm({
            ...ProfileForm,
            certificates: QualificationDataArray,
        })
    }, [QualificationDataArray])
    useEffect(() => {
        if (data) {
            const gender = data.data.gender == 'ذكر' ? 'male' : "female"
            const specialities = data?.data.specialities?.map((ele) => {
                return ele.id
            })
            const categories = data?.data.category?.map((ele) => {
                return ele.id
            })
            setProfileForm({
                ...ProfileForm,
                name: data?.data.name || '',
                avatar: data?.data.avatar != "" ? data?.data.avatar : ProfileForm.avatar,
                birthdate: data?.data.birthdate && data?.data.birthdate.split('T')[0] || '',
                country: data?.data.country != null ? data?.data.country : ProfileForm.country,
                email: data?.data.email || '',
                phone: data?.data.phone || '',
                XUrl: data?.data.twitter as string || '',
                LinkedInUrl: data?.data.linkedin as string || '',
                gender: gender || '',
                DefinitiveWords: data?.data.bio || '',
                category: categories as number[],
                specialities: specialities as number[],
            })
            if (data.data.country) {
                setDropDownValue(+data?.data.country.id as number)
            }
            if (data.data.cetificates && data.data.cetificates?.length > 0) {
                dispatch(SetQualificationData(data.data.cetificates))
            }
            if (data.data.experiences && data.data.experiences?.length > 0) {
                dispatch(setExperiencesData(data.data.experiences))
            }
            if (ProfileForm.country?.id == undefined) {
                if (allCountries.length > 15) {
                    const country = allCountries.filter((ele) => ele.code == data?.data.phone_code)[0]
                    if (country) {
                        setDropDownValue(+country.id)
                        setProfileForm({
                            ...ProfileForm,
                            country: country,
                        })
                    }
                }
            }
        }
    }, [allCountries, data])
    const handleSaveChange = () => {
        if (Dashboard == 'Baser') {
            mutate({
                payload: {
                    name: ProfileForm.name,
                    birthdate: ProfileForm.birthdate,
                    country_id: ProfileForm.country?.id,
                    email: ProfileForm.email,
                    phone: ProfileForm.phone,
                    phone_code: ProfileForm.country?.code,
                    avatar: ProfileForm.avatarToken,
                    gender: ProfileForm.gender,
                }
            })
        } else {

            mutate({
                payload: {
                    name: ProfileForm.name,
                    birthdate: ProfileForm.birthdate,
                    country_id: ProfileForm.country?.id,
                    email: ProfileForm.email,
                    phone: ProfileForm.phone,
                    phone_code: ProfileForm.country?.code,
                    avatar: ProfileForm.avatarToken,
                    gender: ProfileForm.gender,
                    specialities: ProfileForm.specialities,
                    categories: ProfileForm.category,
                    bio: ProfileForm.DefinitiveWords,
                    certificates: ProfileForm.certificates,
                    experiences: ProfileForm.experiences
                }
            })
        }

    }
    return (
        <>
            {
                !isLoading && data &&
                <div className="xl:!w-[44rem] md:!w-[37rem]">
                    {
                        ProfileStep == 1 && <ProfileMainInfo SetProfileStep={SetProfileStep} ProfileForm={ProfileForm} setProfileForm={setProfileForm} setCHangeHappend={setCHangeHappend} setDropDownValue={setDropDownValue} DropDownValue={DropDownValue} allCountries={allCountries} />
                    }
                    {
                        ProfileStep == 2 && <ProfileCertificationSection SetProfileStep={SetProfileStep} setCHangeHappend={setCHangeHappend} />
                    }
                    {
                        ProfileStep == 3 && <ProfileExperianceSection SetProfileStep={SetProfileStep} setCHangeHappend={setCHangeHappend} />
                    }
                    <button disabled={!CHangeHappend} onClick={handleSaveChange} className={`  ${Dashboard == 'Baser' ? !CHangeHappend ?
                        'bg-[#d6dad9]  text-BaserOnSurfase/35' : `bg-BaserPrimary text-white`
                        : !CHangeHappend ? 'bg-[#d6dad9] !text-dark/35' : ' bg-BostanyPrimary'}  w-full font-medium text-base py-4 px-5 rounded-full h-14`}>{UpdataIsLoading ? '...loading' : 'حفظ التغيرات'}</button>
                </div>
            }

            {
                isLoading && <h2>...Loading</h2>
            }
        </>
    )
}

export default ProfileInfo

