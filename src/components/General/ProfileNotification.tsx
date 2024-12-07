import { ToggleSwitch } from "flowbite-react"
import { useLocation } from "react-router-dom"
import { useGetNotificationSettings } from "../../utils/api/notifications/useGetSettings"
import { useUpdateNotificationSettings } from "../../utils/api/notifications/usePutNotificationSettings"
import { ProfileNotifiHandleSwitchProps } from "../../Types"

const ProfileNotification = () => {
    const Dashboard = useLocation().pathname.split('/')[1]
    const { mutate } = useUpdateNotificationSettings();
    const { data, isLoading } = useGetNotificationSettings();
    const handleSwitch = ({ notif, value }: ProfileNotifiHandleSwitchProps) => {
        const oldData = {
            project_cancelled: {
                database: data?.data.filter((ele) => ele.key == 'project_cancelled')[0].database
            },
            project_reminder: {
                database: data?.data.filter((ele) => ele.key == 'project_reminder')[0].database
            },
            schedule_remider: {
                database: data?.data.filter((ele) => ele.key == 'schedule_remider')[0].database
            },
        }
        mutate({
            payload: {
                notify: {
                    ...oldData,
                    [notif.key]: {
                        database: value
                    }
                }
            }

        })
    }
    return (
        <div className="flex flex-col gap-10 xl:!w-[44rem] md:!w-[37rem] py-8">
            <div className="flex flex-col gap-10  p-4">
                {/* <p className={` text-[22px] font-semibold  text-BaserOnSurfase`}>الإشعارات العامة</p> */}
                <div className=" flex flex-col gap-4 bg-white p-4 rounded-3xl">
                    {!isLoading && data &&
                        data.data.map((notif, index) => (
                            <div className=" w-full flex  justify-between items-center" key={index}>
                                <p className=" text-base font-medium text-BaserOnSurfase">{notif.name}</p>
                                <ToggleSwitch sizing="md"
                                    name={notif.name}
                                    id={notif.name}
                                    className=" "
                                    theme={{
                                        toggle: {
                                            base: "relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-0 ",
                                            checked: {
                                                on: `after:translate-x-full after:border-white rtl:after:-translate-x-full  ${Dashboard == 'Baser' ? '!bg-BaserPrimary' : '!bg-BostanyPrimary'}`
                                            }
                                        }
                                    }}
                                    checked={notif.database}
                                    onChange={(value) => handleSwitch({ notif, value })}
                                />
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default ProfileNotification