import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header container">
        <div className="header-logo">
          <h1>Istanjourney</h1>
        </div>
        <div className="header-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#home">Programs</a>
          <a href="#home">Blog</a>
          <a href="#home">Gallery</a>
        </div>
        <div className="header-book">
            
          <button>Book a Tour</button>
        </div>
      </div>
    </>
  );
};
export default Header;
