import React from "react"

function Button(props) {
    return (
        <div className="
            w-full h-12 bg-Green-600 hover:cursor-pointer
            rounded-lg text-white text-xl font-medium
            hover:bg-Grey-900
            flex items-center justify-center"
            onClick={props.onClick}
        >
            Submit
        </div>
    )
}

export default Button