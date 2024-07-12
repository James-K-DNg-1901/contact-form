import React from "react"
import verifyCheckIcon from "../../assets/images/icon-checkbox-check.svg"

function VerifyCheck(props) {

  return (
    <div className="">
        <div className="flex gap-4 items-center">
            <div className={props.checkIconStyle} onClick={props.Clicked}>
                <img className={props.checked} src={verifyCheckIcon} alt="checkbox-icon" />
            </div>
            <span>I consent to being contacted by the team
                 <span className={props.mark}>*</span>
            </span> 
        </div>
        <p className={props.referMark}>{props.refer}</p>
    </div>
  )
}

export default VerifyCheck