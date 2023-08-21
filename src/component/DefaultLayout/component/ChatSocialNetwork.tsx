import { useMediaQuery } from 'react-responsive'

import facebook from '../assets/svg/facebook.svg'
import discord from '../assets/svg/discord.svg'
import linkedin from '../assets/svg/linkedin.svg'
import LazyImage from '~/component/customs/LazyImage'

function ChatSocialNetwork() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1280px)'
    })

    if (isDesktopOrLaptop) {
        return (
            <div className='fixed left-10 bottom-32 z-50'>
                <div className='flex flex-col gap-y-5'>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center border border-solid border-white bg-default'>
                        <div className='w-[10px] h-4 flex items-center justify-center'>
                            <LazyImage src={facebook} />
                        </div>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center border border-solid border-white bg-default'>
                        <div className='flex items-center justify-center'>
                            <LazyImage src={discord} />
                        </div>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center border border-solid border-white bg-default'>
                        <div className='flex items-center justify-center'>
                            <LazyImage src={linkedin} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChatSocialNetwork
