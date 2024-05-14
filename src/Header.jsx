const sourceLogo =
  "https://static.wikia.nocookie.net/gfriend/images/4/46/Source_Music_Logo.png";

const Header = () => {
  return (
    <header>
      <ul className='flex mt-6'>
        <li className='mr-6'>
          <a href='https://www.sourcemusic.com/'>
            <img src={sourceLogo}></img>
          </a>
        </li>
        <li className='header-text'>
          <div>ABOUT</div>
        </li>
        <li className='header-text'>
          <div>LE SSERAFIM</div>
        </li>
        <li className='header-text'>
          <div>AUDITION</div>
        </li>
      </ul>
      <Divider />
    </header>
  );
};

const Divider = () => {
  return <hr className='header-hr'></hr>;
};

export default Header;
