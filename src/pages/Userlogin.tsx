import Ckpimage from '../components/common/Ckpimage'
import Logindetails from '../components/logindetails/Logindetails'

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
      </div>
    </div>
  )
}

export default Userlogin
