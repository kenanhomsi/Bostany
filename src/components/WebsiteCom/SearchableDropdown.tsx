import { useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useAppSelector } from "../../redux/store";

interface optionsType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: string | number | any
};
export interface SearchableDropdownProps {
    options: optionsType[];
    label: string;
    id: string;
    selectedVal: string;
    handleClick: (val: number) => void,
}
const SearchableDropdown = ({
    options,
    label,
    id,
    selectedVal,
    handleClick
}: SearchableDropdownProps) => {
    const [query, setQuery] = useState("");
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)

    const inputRef = useRef(null);


    const getDisplayValue = () => {
        if (query) return query;
        if (selectedVal) return selectedVal;

        return "";
    };

    const filter = (options: optionsType[]) => {
        return options.filter(
            (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    };

    return (
        <div className="dropdown ">
            <div className="control mb-5">
                <div className=" relative ">
                    <input
                        className={` ${RegisterAs == 'Baser' ? 'bg-BaserSurface' : ' bg-BostanySurfaceContainer'} !h-fit w-full !py-3 !rounded-2xl !px-10 !border-none`}
                        ref={inputRef}
                        type="text"
                        value={getDisplayValue()}
                        name="searchTerm"
                        placeholder="إبحث عن دولتك "
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                    />
                    <GoSearch className=" absolute right-4 top-4" />
                </div>
            </div>

            <div className={`options flex flex-col gap-5 `}>
                {filter(options).map((option, index) => {
                    return (
                        <div
                            onClick={() => handleClick(option.id)}
                            key={`${id}-${index}`}
                            className={`flex ${RegisterAs == 'Baser' ? 'bg-BaserSurface' : ' bg-BostanySurfaceContainer'}  cursor-pointer p-4 rounded-xl   justify-between items-center`}>
                            <div className=" flex items-center gap-6">
                                <img src={option.flag} alt={option.flag} className="w-6 h-6 rounded-full" />
                                <span>{option.name}</span>
                            </div>
                            <div className="">{option.key}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchableDropdown;
