import GeneralFooter from "../General/GeneralFooter"

const Footer = ({ DashBoard }: { DashBoard: string }) => {
    return (
        <div className={` xl:py-[72px] !py-[50px] xl:!px-[40px] !px-[20px] ${DashBoard == 'Baser' ? 'bg-BaserbodyLigh' : ' bg-BostanybodyLigh'}   `}>
            <GeneralFooter path={`/${DashBoard}`} />
        </div>
    )
}

export default Footer