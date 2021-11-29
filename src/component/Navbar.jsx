

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand fw-bold fs-8" href="#">
       BOOK my Show</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

           <li>
             <form class="d-flex">
        <input class="form-control mx-4" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="#">Movie</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Stream</a>
        </li>
       
        
      </ul>
     
     <div className = "buttons">
        <a href="" className="btn btn-outline-dark">
        <i className="fa fa-sign-in me-1"></i>LOGIN</a>
        <a  href="" className="btn btn-outline-dark ms-2 " >
             <i className="fa fa-sign-in me-1">Register</i>
        </a>
        <a  href="" className="btn btn-outline-dark ms-2 " >
             <i class="fa fa-ticket-alt me-1">My-Ticket(0)</i>
        </a>
     </div>
    </div>
  </div>
</nav>
        </div>

    );
}

export default Navbar;