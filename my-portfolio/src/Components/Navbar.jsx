import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCode, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="site-title"> BRYN <br /> BUCU </a>
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInfoCircle} className="menu-icon" />
            About
          </a>
        </li>

        <li>
          <a href="#">
            <FontAwesomeIcon icon={faCode} className="menu-icon" />
            Skills
          </a>
        </li>

        <li>
          <a href="#">
            <FontAwesomeIcon icon={faBriefcase} className="menu-icon" />
            Project
          </a>
        </li>

        <li>
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} className="menu-icon" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
