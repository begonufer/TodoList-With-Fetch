import React, {useState} from "react";

const Input = ({ setInputValue, inputValue, handleSubmit, placeholder }) => {

    return (
        <>
			<input
				className="border-0 border-bottom border-color-secondary rounded-0 bg-light py-4 px-5"
				type= "text" 
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
		    	onKeyDown={handleSubmit}
        		placeholder={placeholder}>
			</input>
        </>
    )
}

export default Input;