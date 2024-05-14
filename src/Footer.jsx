import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaWeibo,
} from "react-icons/fa6";

const sourceLogo =
  "https://static.wikia.nocookie.net/gfriend/images/4/46/Source_Music_Logo.png";

const Footer = () => {
  return (
    <>
      <div className='py-6 flex flex-wrap justify-center items-center bg-gray-10'>
        <FooterIcon icon={<FaXTwitter size='20' />} />
        <FooterIcon icon={<FaInstagram size='20' />} />
        <FooterIcon icon={<FaFacebook size='20' />} />
        <FooterIcon icon={<FaYoutube size='20' />} />
        <FooterIcon icon={<FaTiktok size='20' />} />
        <FooterIcon icon={<FaWeibo size='20' />} />
      </div>

      <div className='grid grid-cols-6 gap-4 justify-center items-center mt-8 mb-8'>
        <div className='col-start-1 col-span-2 ml-8'>
          <a href='https://www.sourcemusic.com/' className='flex items-end'>
            <img src={sourceLogo}></img>
          </a>
        </div>

        <div className='col-start-4 col-span-6'>
          <div className='text-right mt-10 mr-8 text-gray-5'>
            <small className='block font-bold'>SOURCE MUSIC Co.Ltd.</small>
            <small className='mb-32'>
              42, Hangang-daero, Yongsan-gu, Seoul, Republic of Korea Copyright©
              2019 SOURCE MUSIC Co.Ltd. All rights reserved PRIVACY POLICY
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

const FooterIcon = ({ icon, text = "Get Fearless!" }) => (
  <div className='footer-icon group mx-10'>
    {icon}
    <span className='footer-tooltip group'>{text}</span>
  </div>
);

export default Footer;
