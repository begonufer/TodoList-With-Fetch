import React, { useState } from "react";
import Pages from './Pages.jsx'
import Input from './Input.jsx'

const BodyList = () => {
    const [inputValue, setInputValue] = useState ("");
	const [todos, setTodos] = useState ([]);
	const handleSubmit = (e)=>{
		if (e.key === "Enter") {
			e.preventDefault()
			setTodos(todos.concat(inputValue));
			setInputValue("");
		}
	}
    return (
        <>
            <ul className="container-fluid bg-light shadow-sm p-0" id="Block">
				<Input 
					setInputValue={setInputValue}
					inputValue={inputValue}
					handleSubmit={handleSubmit}
					placeholder="What do you need to do?"
				/>
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