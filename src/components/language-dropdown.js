import React from 'react'

const LanguageDropdown = (props) => {
    return (
        <div style={{ marginTop: "50px" }}>
            <select onChange={props.handleLanguage} defaultValue={localStorage.getItem("selectedLanguage")}>
                <option>Select Language</option>
                <option value={"en"}>English</option>
                <option value={"fr"}>French</option>
                <option value={"ur"}>Urdu</option>
            </select>
        </div>
    )
}

export default LanguageDropdown
