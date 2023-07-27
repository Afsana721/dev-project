

//create Home component & add action event & submit button for user action.

const Home = () => {
    return (
        <div>
            <h1>I am the Home view</h1>

            <from action='/'>
                <input type='submit' value='Back to Start' />

            </from>
        </div>
    )
}

export default Home;