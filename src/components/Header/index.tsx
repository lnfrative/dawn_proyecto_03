import { BiSearchAlt } from "react-icons/bi"
import Buscador from "../Buscador"

function Header() {
  return (
    <header className="bg-[#2b2d42] h-[50px] w-full text-white grid grid-cols-12">
      <div className="flex sm:ml-3 items-center col-span-6 lg:col-span-2 2xl:col-span-3">
        <h1>
          Dashboard
        </h1>
      </div>

      <div className='hidden lg:block lg:col-span-8 2xl:col-span-6 self-center'>
        <Buscador />
      </div>

      <div className='col-span-6 flex justify-end lg:col-span-2 2xl:col-span-3'>
        <div className='lg:hidden'>
          <BiSearchAlt />
        </div>
      </div>
    </header>
  )
}

export default Header