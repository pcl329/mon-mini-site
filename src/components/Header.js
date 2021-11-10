import logo from '../logo.svg';
const Header =() =>{
return(
    <header className="App-header">


        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" width="50" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                
                <a class="nav-link" href="Gallery">Gallery</a>
                <a class="nav-link" href="Contact">Contact</a>
                <a class="nav-link disabled">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
        
      </header>
)

}
export default Header