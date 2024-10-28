import { Link } from 'react-router-dom';
import Icon from "../images/Logo.png";

function Navbar() {
  
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary shadow'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#' style={{ marginLeft: '170px' }} >
          <img src={Icon} alt="Icon" width="170px" height="40px" />
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: '100px' }}>
            <li>
              <Link className="btn btn-link" aria-current="page" to="/">Search</Link>
            </li>
            <li>
              <Link className="nav-link" aria-current="page" to="/website">Website</Link>
            </li>
            <li>
              <Link className="nav-link" aria-current="page" to="/linkedIn">LinkedIn</Link>
            </li>
            <li>
              <Link className="nav-link" aria-current="page" to="/contact" >Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
