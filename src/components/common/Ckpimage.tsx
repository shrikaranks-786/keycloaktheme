function Ckpimage() {
  return (
    <div
      className='h-full w-full bg-cover bg-center flex justify-center items-center relative'
      style={{
        backgroundImage: `url(itemoptix-logo/login.png)`,
        fontFamily: 'var(--font-primary)'
      }}
    >
      <div className="w-full flex flex-col items-center gap-y-7 -mt-[12%]">
        <label className="text-white inline-block"
          style={{
            fontWeight: 150,
            fontSize: "150%",
            fontFamily: "var(--font-primary)"
          }}>Welcome to</label>
        <img className="w-[50%]" src="itemoptix-logo/IO_Software_Platform_white.png" alt="Login" />
        <div className="w-[25%] left-[6%] bottom-[2%] absolute">
          <img className="w-full" src="itemoptix-logo/Checkpoint-Primary-Logo-White.png" alt="Checkpoint Logo" />
        </div>
      </div>
    </div>
  )
}

export default Ckpimage
