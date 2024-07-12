import React from "react"

function FillingBox(props) {

  return (
    <div className="">
        <p className="my-2">{props.boxName}<span className={props.mark}>*</span></p>
        <input 
            onChange={props.Changing}
            className={props.inputBox}
            type={props.type}
            value={props.value}
        />
        <p className={props.referMark}>{props.refer}</p>
    </div>
  )
}

export default FillingBox