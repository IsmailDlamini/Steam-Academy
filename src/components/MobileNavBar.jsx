import './MobileNavBar.css'

const MobileNavBar = (prop) => {
  return (
    <>
      <div className={prop.ClassName}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>
            <img src={prop.Logo} alt="sisters in science" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavBar;
