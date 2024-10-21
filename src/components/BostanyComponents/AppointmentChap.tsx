import React from 'react'
export interface AppointmentChapType {
    image: string;
    name: string;
    Workspace: {
        name: string;
        icon: React.ReactNode
    },
    special: string
}
const AppointmentChap = ({ image, name, Workspace, special }: AppointmentChapType) => {
    return (
        <div className=" text-BostanyPrimary  font-medium flex flex-col  gap-2">
            <p className='flex items-center gap-3 text-xs '><img src={image} alt={image} className='w-8 h-8 rounded-full' /> <span>{name}</span></p>
            <p className='text-[10px] flex items-center gap-2'><div className="flex gap-2 py-1  px-2 border rounded-3xl border-BostanyPrimary"><span className='text-lg'>{Workspace.icon}</span><span>{Workspace.name}</span></div> <span>{special}</span></p>
        </div>
    )
}

export default AppointmentChap