import { Tabs } from "flowbite-react"
import BostanyComingSeeds from "../../components/BostanyComponents/BostanyComingSeeds"
import TreesSeeds from "../../components/BostanyComponents/TreesSeeds"
import RequestsSeeds from "../../components/BostanyComponents/RequestsSeeds"

const BostanyHome = () => {
    return (
        <div className="mt-section">
            <div className="mt-section py-14 px-16 w-full min-h-[70vh]">
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
                                            on: "active  rounded-t-lg border-b-2 border-[#00C1A1] text-[#00C1A1] dark:border-cyan-500 dark:text-cyan-500",
                                            off: "border-b-2 border-transparent text-[#48464A]  "
                                        }
                                    },
                                }
                            },
                        }
                    }}
                >
                    <Tabs.Item active title={`البذور (${6})`} >
                        <BostanyComingSeeds />
                    </Tabs.Item>
                    <Tabs.Item title={`الطلبات (${6})`}  >
                        <RequestsSeeds />
                    </Tabs.Item>
                    <Tabs.Item title={`الأشجار (${6})`}  >
                        <TreesSeeds />
                    </Tabs.Item>
                </Tabs>
            </div>
        </div>
    )
}

export default BostanyHome