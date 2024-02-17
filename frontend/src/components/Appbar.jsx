export const Appbar = ({ username }) => {
    const user = username.slice(0, username.indexOf('@'));
    return (
        <div className="app-bar-container">
            <h1>rapidPay</h1>
            <div>
                <div className="rounded-full mt-3 mr-4">
                    Hello, {user}

                </div>
            </div>
        </div>
    )
}