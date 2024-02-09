export const Balance = ({ value, username }) => {
    return (
        <div className="flex">
            <div>Your Balance</div>
            <div>{username.slice(0, username.indexOf('@'))}</div>
            <div> Rs.{value}</div>
        </div>
    )
}