import React, { useState } from "react";
import Pages from './Pages.jsx'

const BodyList = () => {
    const [inputValue, setInputValue] = useState ("");
	const [todos, setTodos] = useState ([]);
    return (
        <>
            <ul className="container-fluid bg-light shadow-sm p-0" id="Block">
				<input
					className="border-0 border-bottom border-color-secondary rounded-0 bg-light py-4 px-5" type= "text" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
		    		onKeyDown={(e)=>{
						if (e.key === "Enter") {
							e.preventDefault()
							setTodos(todos.concat(inputValue));
							setInputValue("");
						}}
					}
        			placeholder="What do you need to do?">
				</input>
				{todos.map((item, index) => (
					<li className="container d-inline-flex justify-content-between px-5">
						<p>{item}</p>
						<i className="fas fa-times p-0 float-right justify-content-end" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>
				))}
				<div className="m-0 px-3 pt-2 pb-2" id="itemCounter">{todos.length} item left</div>
			</ul>
			<Pages />
        </>
    )
}

export default BodyList;