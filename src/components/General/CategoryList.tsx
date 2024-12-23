import { CategoryListProps } from "../../Types"


const CategoryList = ({ CategoryList, handleCategoryClick, Data, From }: CategoryListProps) => {
    return (
        <div className=" flex  flex-wrap gap-3 items-center">
            {Data && Data.map((ele, index) =>
            (
                <span key={index} onClick={() => handleCategoryClick(ele.id)} className={`${CategoryList.includes(ele.id) ? ` ${From == 'Baser' ? 'bg-BaserPrimary border-BaserPrimary' : "bg-BostanyPrimary border-BostanyPrimary"} text-white` : 'bg-transparent border-[#938F94]'} flex w-fit cursor-pointer text-sm font-medium text-BaserOnSurfase  rounded-full border-2 px-4 py-2  items-center  `}>{ele.text}</span>
            ))}
        </div>
    )
}

export default CategoryList