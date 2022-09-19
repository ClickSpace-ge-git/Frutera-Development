import "./popup.scss"

export default function PopUp({children}){

    return(
        <div className="popup">
            <div className="popup-content">
                {children}
            </div>
        </div>
    )
}