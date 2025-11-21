type ButtonProps = {
    width?: string;
    height?: string;
    label?: string;
    disabled?: boolean;
};

function Buttonsubmit({ width, height, label, disabled = false }: ButtonProps) {
    return (
        <div className="flex flex-col space-y-2" style={{ fontFamily: "var(--font-primary)" }}>
            <div className={`${width || "w-full"} ${height || "h-12"} ${disabled ? "text-gray-400" : ""} input-button-color font-normal text-[1.2rem]`}>
                <button
                    type="submit"
                    className="w-full h-full outline-none"
                >
                    {label}
                </button>
            </div>
        </div>
    );
}

export default Buttonsubmit;
