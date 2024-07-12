import React from "react"

function MessageBox(props) {

  return (
    <div className="">
        <p className="my-2">{props.boxName}<i className={props.mark}>*</i></p>
        <textarea 
            onChange={props.Changing}
            className={props.inputBox}
            type={props.type}
            value={props.value}
        />
        <p className={props.referMark}>{props.refer}</p>
    </div>
  )
}

export default MessageBox