import GeneralFooter from "../General/GeneralFooter"

const Footer = ({ DashBoard }: { DashBoard: string }) => {
    return (
        <div className=" py-[72px] px-[40px]  bg-BaserbodyLigh ">
            <GeneralFooter path={`/${DashBoard}`} />
        </div>
    )
}

export default Footer