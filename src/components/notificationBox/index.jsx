import React from "react"
import success from "../../assets/images/icon-success-check.svg"

function NotificationBox(props) {
    return (
        <div className={props.NotificationBoxClass}
            onClick={props.onClick}
        >
            <div className="font-bold inline-flex gap-1">
                <img src={success} alt="success" />
                Message sent!
            </div>
            <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
    )
}

export default NotificationBox