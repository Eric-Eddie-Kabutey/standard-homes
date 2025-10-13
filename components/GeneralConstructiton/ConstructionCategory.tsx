import React from 'react';

interface Props {
    title: string;
    id: string;
}

const ConstructionCategory: React.FC<Props> = ({ title, id }) => {
    return (
        <div>
            <div id={id} className="flex flex-col md:flex-row  items-center gap-4 mt-[2%] max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
                <h2 className="text-[#1A3850] text-[2.2rem] font-semibold mb-4">
                    {title}
                </h2>
                <div className="border-b border-dashed border-slate-400 flex-1"></div>
            </div>
        </div>
    );
};

export default ConstructionCategory;
