import { ChevronRight, CircleUserRound } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className='w-full py-3 px-6 bg-white drop-shadow-lg border-b-2 flex justify-between items-center z-50'>
            <div className='flex items-center gap-2 text-gray-400'>
                <span>Home</span>
                <ChevronRight size={20} strokeWidth={1.25} />
                <h1 className='text-blue-950 font-semibold'>Dashboard V2</h1>
            </div>
            <div>
                <Input type='text' className='border-2 border-gray' placeholder='Search'/>
            </div>
            <div className='flex items-center gap-2'>
                <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                    <CircleUserRound size={30} strokeWidth={1} />
                </Button>
            </div>
        </div>
    )
}

export default Navbar