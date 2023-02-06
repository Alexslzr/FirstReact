
ReactDOM.render(
    <MainContent />, 
    document.getElementById('root')
)

function MainContent() {
    return(
        <nav>
             <h1>Website</h1>
             <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
             </ul>
        </nav>
    )
}

//ReactDOM.render(<h1 className="header"> Yepa </h1> ,document.getElementById('root'))