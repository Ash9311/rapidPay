export function InputBox({ label, placeholder, onChange }) {
    return (
        <div>
            <div className="text-sm font-medium text-left p-2 text-black">
                {label}
            </div>
            <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" type="text" name="" id="" />
        </div>

    )
}