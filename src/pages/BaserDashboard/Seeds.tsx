import { Tabs } from "flowbite-react"
import ComingSeeds from "../../components/BaserComponent/ComingSeeds"
import CanceledSeeds from "../../components/BaserComponent/CanceledSeeds"
import FinishedSeeds from "../../components/BaserComponent/FinishedSeeds"
import { useGetUserBaserProfile } from "../../utils/api/User/useGetUserProfileBaser"

const Seeds = () => {
    const { data: userData } = useGetUserBaserProfile();

    return (
        <div className="mt-section py-14  pr-10 pl-24 w-full min-h-[70vh]">
            <Tabs aria-label="Tabs with underline" variant="underline"
                theme={{
                    tablist: {
                        variant: {
                            underline: "-mb-px flex-wrap  dark:border-gray-700",
                        },
                        tabitem: {
                            base: 'flex items-center  w-[200px] justify-center  p-4 text-base text-[#48464A] font-medium first:ml-0 focus:outline-none  disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
                            variant: {
                                underline: {
                                    active: {
                                        on: "active  rounded-t-lg border-b-2 border-[#9966FF] text-[#9966FF] dark:border-cyan-500 dark:text-cyan-500",
                                        off: "border-b-2 border-transparent text-[#48464A]  "
                                    }
                                },
                            }
                        },
                    }
                }}
            >
                <Tabs.Item active title={`بذوري (${userData?.data.counts.waiting_projects || 0})`} >
                    <ComingSeeds />
                </Tabs.Item>
                <Tabs.Item title={`ثماري (${userData?.data.counts.completed_projects || 0})`}  >
                    <FinishedSeeds />
                </Tabs.Item>
                <Tabs.Item title={`ملغية (${userData?.data.counts.cancelled_projects || 0})`}  >
                    <CanceledSeeds />
                </Tabs.Item>
            </Tabs>
        </div>
    )
}

export default Seeds