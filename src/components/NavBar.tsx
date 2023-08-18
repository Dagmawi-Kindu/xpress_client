const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light '>
        <a className='navbar-brand' href='#'>
          <i>LOGO</i>
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='true'
              >
                Our Tests
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Contact Us
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
