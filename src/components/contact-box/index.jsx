import React, { useState } from "react"
import FillingBox from "../infomation-fill-box"
import MessageBox from "../message-box"
import VerifyCheck from "../verify-check"
import Button from "../button"
import NotificationBox from "../notificationBox"

function ContactBox() {

    const [checked, setChecked] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const [firstNameRefer, setFirstnameRefer] = useState("opacity-0")
    const [lastNameRefer, setLastnameRefer] = useState("opacity-0")
    const [emailRefer, setEmailRefer] = useState("opacity-0")
    const [checkBoxRefer, setCheckBoxRefer] = useState("opacity-0")
    const [messageRefer, setMessageRefer] = useState("opacity-0")
    const [verifyRefer, setVerifyRefer] = useState("opacity-0")
    const [NotifShow, setNotifShow] = useState("opacity-0")


    const closeNotifBox = () => setNotifShow("opacity-0")

    const handleSubmit = () => {

        if (firstName == "") {
            setFirstnameRefer("opacity-1")
        } else {
            setFirstnameRefer("opacity-0")
        }

        if (lastName == "") {
            setLastnameRefer("opacity-1")
        } else {
            setLastnameRefer("opacity-0")
        }

        if (validRegex.test(email)) {
            setEmailRefer("opacity-0")
        } else {
            setEmailRefer("opacity-1")
        }

        if (checked == "") {
            setCheckBoxRefer("opacity-1")
        } else {
            setCheckBoxRefer("opacity-0")
        }

        if (message == "") {
            setMessageRefer("opacity-1")
        } else {
            setMessageRefer("opacity-0")
        }

        if (toggleClass == true) {
            setVerifyRefer("opacity-1")
        } else {
            setVerifyRefer("opacity-0")
        }

        if (firstName != "" &&
            lastName != "" &&
            checked != "" &&
            message != "" &&
            toggleClass != true &&
            validRegex.test(email)
        ) {
            setNotifShow("opacity-1")
        } else {
            setNotifShow("opacity-0")
        }
    }

    const checkBoxs = [
        {
            id: 1,
            name: "General Enquiry"
        },
        {
            id: 2,
            name: "Support Request"
        }
    ]

    const [toggleClass, setToggleClass] = useState(true)

    const handleClick = () => setToggleClass(!toggleClass)

  return (
    <div className="
        w-desk-contact-box-w h-desk-contact-box-h
        bg-white m-12 p-12
        max-tablet:w-mobile-contact-box-w
        max-tablet:h-mobile-contact-box-h
        max-tablet:p-7 rounded-xl
        relative
        "
    >
        <h1 className="text-2xl font-bold font-Kalar">
            Contact Us
        </h1>
        <div className="flex justify-between max-tablet:flex-col">
            <FillingBox
                id='firstName'
                boxName='First Name'
                refer='This field is required'
                mark="text-Green-600 mx-2"
                referMark={`text-red-500 ${firstNameRefer}`}
                type='text'
                inputBox="
                    w-68 h-12 p-3 rounded-lg 
                    border-Grey-500 border
                    hover:bg-Green-200
                    focus:bg-Green-200 hover:cursor-pointer"
                value={firstName}
                Changing={e => setFirstName(e.target.value)}
            />
            <FillingBox 
                id='lastName'
                boxName='Last Name'
                refer='This field is required' 
                mark="text-Green-600 mx-2"
                referMark={`text-red-500 ${lastNameRefer}`}
                type='text'
                inputBox="
                    w-68 h-12 p-3 rounded-lg 
                    border-Grey-500 border
                    hover:bg-Green-200
                    focus:bg-Green-200 hover:cursor-pointer"
                value={lastName}
                Changing={e => setLastName(e.target.value)}
            />
        </div>
        <FillingBox 
                id='emailAddress'
                boxName='Email Address'
                refer='Please enter a valid email address' 
                mark="text-Green-600 mx-2"
                referMark={`text-red-500 ${emailRefer}`}
                type='text'
                inputBox="
                    w-full h-12 p-3 rounded-lg 
                    border-Grey-500 border
                    hover:bg-Green-200
                    focus:bg-Green-200 hover:cursor-pointer"
                value={email}
                Changing={e => setEmail(e.target.value)}
        />
        <p>Query type<span className="text-Green-600 mx-2">*</span></p>
        <div key={checkBoxs.id} className="flex justify-between max-tablet:flex-col">
            {checkBoxs.map(checkeBox => (
                <div key={checkeBox.id} className="
                        w-68 h-12 p-3 my-2 rounded-lg 
                        border-Grey-500 border
                        hover:bg-Green-200
                        hover:cursor-pointer
                        flex items-center gap-3"
                >
                    <input 
                        type="radio" 
                        checked={checked === checkeBox.id}
                        onChange={() => setChecked(checkeBox.id)}/>
                        
                    <p>{checkeBox.name}</p>
                </div>
            ))}
        </div>
        <p className={`text-red-500 ${checkBoxRefer}`}>Please select query type</p>
        <MessageBox 
                id='messageBox'
                boxName='Message'
                refer='This field is requied' 
                mark="text-Green-600 mx-2"
                referMark={`text-red-500 ${messageRefer}`}
                type='text'
                inputBox="
                    w-full h-32 p-3 rounded-lg 
                    border-Grey-500 border
                    hover:bg-Green-200
                    focus:bg-Green-200 hover:cursor-pointer"
                value={message}
                Changing={e => setMessage(e.target.value)}
        />
        <VerifyCheck
            mark="text-Green-600 mx-2"
            refer="To submit this form, please consent to being contacted"
            referMark={`text-red-500 ${verifyRefer}`}
            checkIconStyle="
                w-5 h-5
                max-tablet:h-4
                rounded-md border-2 border-Grey-500 
                hover:cursor-pointer
                hover:border-Green-600"
            checked={`w-6 rounded-md ${toggleClass ? "opacity-0" : ""}`}
            Clicked={handleClick}
        />
        <Button
            onClick={handleSubmit}
        />
        <NotificationBox
            NotificationBoxClass=
                {`absolute -top-10 left-32 max-tablet:left-7
                w-90 h-24 max-tablet:w-68
                bg-Grey-900  hover:bg-Grey-500
                hover:cursor-pointer
                flex flex-col justify-center
                text-sm text-white
                p-3 max-tablet:p-4 rounded-md ${NotifShow}`}
            onClick={closeNotifBox}
        />
    </div>
  )
}

export default ContactBox