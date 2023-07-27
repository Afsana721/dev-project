

//create About component & add action event & submit button for user action.

const About = () => {
    return (
        <div>
            <h1>I am the About view</h1>
            <from action='/'>
                <input type='submit' value='Back to Start' />       {/* add input to submit and get back to root route*/}

            </from>
            
        </div>
    )
}

export default About;