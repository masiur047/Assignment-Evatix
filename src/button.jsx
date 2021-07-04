function button({label,onClick})
{
    return(
        <div className="btn1">
            <button className="btn" onClick={onClick}>
               {label}
            </button>
        </div>
    )
}

export default button;