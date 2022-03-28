import logo from '../src/logo.png'

function Search() {
    return (
        <div className="container">
            <div className="header">
                <div className="caption">
                    <h4>WIKIPEDIA</h4>
                    <p>The Free Encyclopedia</p>
                </div>
                <img src={logo} alt="" />
            </div>
        </div>

    );
}
export default Search;