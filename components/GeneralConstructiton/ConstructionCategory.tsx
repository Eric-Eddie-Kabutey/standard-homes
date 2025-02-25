import React from 'react';

interface Props {
    title: string;
    id: string;
}

const ConstructionCategory: React.FC<Props> = ({ title, id }) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row mx-[7%] items-center gap-4 mt-[2%]">
                <h2 id={id} className="text-[#1A3850] text-[2.2rem] font-semibold mb-4">
                    {title}
                </h2>
                <div className="border-b border-dashed border-slate-400 flex-1"></div>
            </div>
        </div>
    );
};

export default ConstructionCategory;
