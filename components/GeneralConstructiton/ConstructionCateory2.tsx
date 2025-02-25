import React from 'react'
interface Props {
    title: string;
    id: string;
}

const ConstructionCateory2: React.FC<Props> = ({title, id}) => {
    return (
        <div>
            <div id={id} className="flex flex-col md:flex-row mx-[7%] items-center gap-4 mb-2 mt-[2%]">
                <div className="border-b border-dashed border-slate-400 flex-1"></div>
                <h2  className="text-[#1A3850] font-semibold text-[2.2rem] mb-4">
                    {title}
                </h2>
            </div>
        </div>

    )
}

export default ConstructionCateory2