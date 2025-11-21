import React from 'react';

type InputfieldProps = {
    width?: string;
    height?: string;
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    name?: string;
};

function Inputfield({ width, height, label, value, onChange, type, name }: InputfieldProps) {
    return (
        <div className="flex flex-col space-y-2" style={{ fontFamily: "var(--font-primary)" }}>
            <h3 className="text-[#005D91] text-[1rem] font-normal">{label}</h3>
            <div className={`${width || "w-full"} ${height || "h-13"} input-box-color`}>
                <input
                    type={type}
                    className="w-full h-full outline-none bg-transparent"
                    onChange={onChange}
                    value={value}
                    name={name}
                />
            </div>
        </div>
    );
}

export default Inputfield;
