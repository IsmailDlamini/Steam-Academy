const Header = (prop) => {
  return (
    <>
      <div className="PageHeader">
        <div className="Logo">
          <img src={prop.Logo} className="SiteLogo" alt="SiteLogo" />
        </div>

        <div className="NavBar">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="ExternalLink">
          <img
            src={prop.ExternalLogo}
            className="ExternalLogo"
            alt="sisters in science"
          />
        </div>

        <div className="MobileNav">
          <img
            src={prop.MobileNavIcon}
            className="icon"
            onClick={prop.onClick}
            alt=""
          />
          {/* <MobileNavIcon1 
              ClassName={`icon ${navBarState ? 'shift-mobile-nav' : ''}` }
              onClick={ToggleMobileNavBar}
            />
            <MobileNavIcon2 
              ClassName={`icon ${navBarState ? '' : 'shift-mobile-nav'}` }
              onClick={ToggleMobileNavBar} */}
          {/* /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
