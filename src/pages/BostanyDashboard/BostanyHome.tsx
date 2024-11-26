import { Tabs } from "flowbite-react"
import BostanyComingSeeds from "../../components/BostanyComponents/BostanyComingSeeds"
import TreesSeeds from "../../components/BostanyComponents/TreesSeeds"
import RequestsSeeds from "../../components/BostanyComponents/RequestsSeeds"
import { useGetUserProfile } from "../../utils/api/User/useGetUserProfile"
const BostanyHome = () => {
    const { data } = useGetUserProfile();
    return (
        <div className="mt-section">
            <div className="mt-section  py-14 2xl:!pr-10 2xl:!pl-24 md:!pr-5 md:!pl-10  w-full min-h-[70vh]">
                <Tabs aria-label="Tabs with underline" variant="underline"
                    theme={{
                        tablist: {
                            variant: {
                                underline: "-mb-px flex-wrap  dark:border-gray-700",
                            },
                            tabitem: {
                                base: 'flex items-center  xl:w-[200px] w-[150px] justify-center  p-4 text-base text-[#48464A] font-medium first:ml-0 focus:outline-none  disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
                                variant: {
                                    underline: {
                                        active: {
                                            on: "active  rounded-t-lg border-b-2 border-[#00C1A1] text-[#00C1A1] dark:border-cyan-500 dark:text-cyan-500",
                                            off: "border-b-2 border-transparent text-[#48464A]  "
                                        }
                                    },
                                }
                            },
                        }
                    }}
                >
                    <Tabs.Item active title={`البذور (${data?.data.counts?.waiting_projects || 0})`} >
                        <BostanyComingSeeds />
                    </Tabs.Item>
                    <Tabs.Item title={`الطلبات (${data?.data.counts?.invitations_count || 0})`}  >
                        <RequestsSeeds />
                    </Tabs.Item>
                    <Tabs.Item title={`الأشجار (${data?.data.counts?.completed_projects || 0})`}  >
                        <TreesSeeds />
                    </Tabs.Item>
                </Tabs>
            </div>
        </div>
    )
}

export default BostanyHome