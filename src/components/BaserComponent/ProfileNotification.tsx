import { ToggleSwitch } from "flowbite-react"
import { ProfileData } from "../../utils/data"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const ProfileNotification = () => {
    const Dashboard = useLocation().pathname.split('/')[1]
    const [GeneralNotificationSwitch, setGeneralNotificationSwitch] = useState({
        AppointmentReminder: ProfileData.GeneralNotification[0].state,
        ConfirmSeedReservation: ProfileData.GeneralNotification[1].state,
        CancellationNotice: ProfileData.GeneralNotification[2].state,
        AppointmentReminder24Hours: ProfileData.GeneralNotification[3].state,
        ReminderOfAppointment1HourBefore: ProfileData.GeneralNotification[4].state,
        PromotionsAndDiscounts: ProfileData.GeneralNotification[5].state
    })
    const [BostanyNotificationSwitch, setBostanyNotificationSwitch] = useState({
        BostanyMessagesAndInquiries: ProfileData.BostanyNotification[0].state,
        UpdatesOnPreferredAdvisors: ProfileData.BostanyNotification[1].state,
    })

    return (
        <div className="flex flex-col gap-10 w-[44rem] py-8">
            <div className="flex flex-col gap-10  p-4">
                <p className={` text-[22px] font-semibold  text-BaserOnSurfase`}>الإشعارات العامة</p>
                <div className=" flex flex-col gap-10 bg-white p-4 rounded-3xl">
                    {
                        ProfileData.GeneralNotification.map((notif, index) => (
                            <div className=" w-full flex  justify-between items-center" key={index}>
                                <p className=" text-base font-medium text-BaserOnSurfase">{notif.title}</p>
                                <ToggleSwitch sizing="md"
                                    name={notif.name}
                                    id={notif.name}
                                    theme={{
                                        toggle: {
                                            checked: {
                                                on: `after:translate-x-full after:border-white rtl:after:-translate-x-full  ${Dashboard == 'Baser' ? '!bg-BaserPrimary' : '!bg-BostanyPrimary'}`
                                            }
                                        }
                                    }}
                                    checked={GeneralNotificationSwitch[notif.name as keyof typeof GeneralNotificationSwitch]}
                                    onChange={(e) => setGeneralNotificationSwitch({
                                        ...GeneralNotificationSwitch,
                                        [notif.name]: e
                                    })} />
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="flex flex-col gap-10  p-4">
                <p className={` text-[22px] font-semibold  text-BaserOnSurfase`}>إشعارات من البستاني</p>
                <div className=" flex flex-col gap-10 bg-white p-4 rounded-3xl">
                    {
                        ProfileData.BostanyNotification.map((notif, index) => (
                            <div className=" w-full flex  justify-between items-center" key={index}>
                                <p className=" text-base font-medium text-BaserOnSurfase">{notif.title}</p>
                                <ToggleSwitch sizing="md"
                                    name={notif.name}
                                    id={notif.name}
                                    theme={{
                                        toggle: {
                                            checked: {
                                                on: `after:translate-x-full after:border-white rtl:after:-translate-x-full  ${Dashboard == 'Baser' ? '!bg-BaserPrimary' : '!bg-BostanyPrimary'}`
                                            }
                                        }
                                    }}
                                    checked={BostanyNotificationSwitch[notif.name as keyof typeof BostanyNotificationSwitch]}
                                    onChange={(e) => setBostanyNotificationSwitch({
                                        ...BostanyNotificationSwitch,
                                        [notif.name]: e
                                    })} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ProfileNotification