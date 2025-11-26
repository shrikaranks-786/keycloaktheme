import React from 'react'
import { Globe } from 'lucide-react'
import Inputfield from '../common/Inputfield'
import Buttonsubmit from '../common/Buttonsubmit'
import { userDetails, languageSelected } from '../../constants/login.constants'

function Logindetails() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className="w-full h-full flex flex-col items-center justify-center -mt-10">
            <div className="flex flex-col w-full mx-auto gap-y-14" style={{ fontFamily: 'var(--font-primary)' }}>
                <h1 className="text-center text-[2.125rem] font-semibold text-[#435b69] inline-block">{userDetails.Login}</h1>

                <form action="" method="POST" className="flex flex-col gap-y-8">
                    <Inputfield
                        width="w-full"
                        height="h-13"
                        label={userDetails.userid}
                        value={username}
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        name="username"
                    />
                    <Inputfield
                        width="w-full"
                        height="h-13"
                        label={userDetails.password}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                    />

                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center text-[#005D91]">
                            <input type="checkbox" id="rememberMe" name="rememberMe" className="w-4 h-4 border-2" />
                            <label htmlFor="rememberMe" className="ml-2 font-normal text-[1rem]">{userDetails.rememberMe}</label>
                        </div>
                        <div className="hover:text-[#005D91] text-(--color-primary-dark)">
                            <a href="#" className="font-normal text-[1rem] cursor-pointer">{userDetails.forgotPassword}</a>
                        </div>
                    </div>

                    <Buttonsubmit width="w-full" height="h-12" label={userDetails.Login} disabled={!username || !password} />
                </form>

                <div className="w-full h-full flex justify-center items-center">
                    <div className="flex items-center text-[#005D91] text-sm">
                        <Globe size={17} />
                        {languageSelected}
                        <span className="mr-2 ml-2">-</span>
                    </div>
                    <div className="text-sm hover:text-[#005D91] text-(--color-primary-dark) cursor-pointer">
                        {userDetails.changelanguage}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logindetails
