import Ckpimage from '../components/common/Ckpimage'
import Logindetails from '../components/logindetails/Logindetails'
import { copyrightText, privacyPolicyText } from '../constants/login.constants';

function Userlogin() {
  const showLanguageSelector = false;
  return (
    <div className="w-full flex h-full overflow-hidden" style={{ fontFamily: "var(--font-primary)" }}>
      <div className="ckp-image-section">
        <Ckpimage />
      </div>
      <div className={`form-section ${showLanguageSelector ? "items-center justify-center" : "justify-center items-center relative"
        }`}>
        <div className={`${showLanguageSelector ? "form-container" : "form-container-userdetails flex flex-col justify-center"}`}>
          <Logindetails />
        </div>
        <div className="min-w-[45%] max-w-[90%] md:max-w-[65%] bottom-[2%] right-0 left-0 mx-auto text-center absolute text-[70%] text-[#435b69] flex justify-center font-thin">
          <h3>
            {copyrightText}
            <span className="text-blue-400 underline decoration-black">  {privacyPolicyText}</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Userlogin
