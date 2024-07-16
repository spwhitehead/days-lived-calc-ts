import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [ageInYears, setAgeInYears] = useState();

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => setAgeInYears(event.target.value);
    
    return (
        <>
        <form className="calculatorForm">
            <div>
                <label htmlFor="...">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Sebastian Olivera"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}/>

                <label htmlFor="...">Age</label>
                <input
                    type="number"
                    id="ageInYears"
                    value={ageInYears}
                    placeholder="33"
                    onChange={(handleAgeChange)} />
            </div>

        </form>
        </>
    );
}

export default Calculator;