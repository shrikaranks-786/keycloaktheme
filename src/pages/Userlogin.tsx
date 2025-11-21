import Ckpimage from '../components/common/Ckpimage'
import Logindetails from '../components/logindetails/Logindetails'

function Userlogin() {
  return (
    <div className='flex flex-wrap w-full h-full overflow-hidden'>
      <div className='hidden md:block lg:w-1/2 md:w-2/6 h-full'>
        <Ckpimage/>
      </div>
      <div className='w-full md:w-4/6 lg:w-1/2 h-full flex-1'>
        <Logindetails/>
      </div>
    </div>
  )
}

export default Userlogin
