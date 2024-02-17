export const Appbar = ({ username }) => {
    const user = username.slice(0, username.indexOf('@'));
    return (
        <div className="app-bar-container mt-40">
            <h1>rapidPay</h1>
            <div>
                <div className="rounded-full bg-slate-200" style={{ marginTop: '45px' }}>
                    Hello, {user}
                </div>
            </div>
        </div>
    )
}