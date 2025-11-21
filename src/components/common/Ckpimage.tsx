function Ckpimage() {
  return (
    <div
      className='h-full w-full bg-cover bg-center flex justify-center items-center relative'
      style={{
        backgroundImage: `url(itemoptix-logo/login.png)`,
        fontFamily: 'var(--font-primary)'
      }}
    >
      <div className="w-full flex flex-col items-center space-y-14">
        <label className="text-white inline-block text-[1.5rem] font-thin">Welcome to</label>
        <img className="w-[50%]" src="itemoptix-logo/IO_Software_Platform_white.png" alt="Login" />
        <div className="w-[25%] left-11 bottom-8 absolute">
          <img className="w-full" src="itemoptix-logo/Checkpoint-Primary-Logo-White.png" alt="Checkpoint Logo" />
        </div>
      </div>
    </div>
  )
}

export default Ckpimage
