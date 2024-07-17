import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [ageInYears, setAgeInYears] = useState<number | null>(null);
    const [submittedName, setSubmittedName] = useState<string | null>(null);
    const[submittedAge, setSubmittedAge] = useState<number | null>(null);

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.valueAsNumber;
        setAgeInYears(value ? value : null);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setSubmittedName(name);
        setSubmittedAge(ageInYears);
    };

    const daysLived = submittedAge !== null ? submittedAge * 365 : null;
    
    return (
        <>
        <form className="calculatorForm" action="submit" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Sebastian Olivera"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}/>

                <label htmlFor="ageInYears">Age</label>
                <input
                    type="number"
                    id="ageInYears"
                    value={ageInYears !== null ? ageInYears : ""}
                    placeholder="33"
                    onChange={(handleAgeChange)} />
            </div>
            <button type="submit">Submit</button>
        </form>
        {submittedName && submittedAge !== null &&(
            <div>
                <p>{submittedName} is {daysLived} days old!</p>
            </div>
        )}
        </>
    );
}

export default Calculator;