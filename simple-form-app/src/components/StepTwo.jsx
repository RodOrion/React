const StepTwo = ({name, email, password, setSubmited}) => {
    const handleClick = () => {
        setSubmited(false)
    }
    return (
        <div className="flexContainer result">
            <h1>Results</h1>
            <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
            <button onClick={handleClick}>Edit your information</button>
        </div>
    )
}
export default StepTwo