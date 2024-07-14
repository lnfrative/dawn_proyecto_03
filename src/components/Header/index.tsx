import { BiSearchAlt } from "react-icons/bi"
import Buscador from "../Buscador"
import BotonBuscador from "../BotonBuscador"

function Header() {
  return (
    <header className="relative bg-[#2b2d42] h-[50px] w-full text-white grid grid-cols-12 px-3">
      <div className="flex sm:ml-3 items-center col-span-6 lg:col-span-2 2xl:col-span-3">
        <h1>
          Clima
        </h1>
      </div>

      <div className='hidden lg:block lg:col-span-8 2xl:col-span-6 self-center'>
        <Buscador />
      </div>

      <div className='col-span-6 flex justify-end lg:col-span-2 2xl:col-span-3 self-center'>
        <div className='lg:hidden'>
          <BotonBuscador>
            <BiSearchAlt />
          </BotonBuscador>
        </div>
      </div>
    </header>
  )
}

export default Header