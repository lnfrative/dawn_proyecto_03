import { PropsWithChildren, useEffect, useRef, useState } from "react"
import classNames from "classnames"

import Buscador from "../Buscador"

function BotonBuscador(props: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null)
  const [searchIsOpen, setSearchIsOpen] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (element && searchIsOpen) {
      const onClose = (e: MouseEvent) => {
        if (!element.contains(e.target as Node)) {
          setSearchIsOpen(false)
        }
      }

      window.addEventListener('click', onClose)

      return () => window.removeEventListener('click', onClose)
    }
  }, [searchIsOpen])

  return (
    <div
      ref={ref}
      onClick={() => setSearchIsOpen(true)}
      className={classNames(
        "bg-paper rounded-md p-2",
        "border border-tiny-contrast hover:bg-tiny-contrast active:bg-paper transition-[background] duration-150 ease-linear",
        {
          'cursor-pointer h-[40px] w-[40px] flex items-center justify-center': !searchIsOpen
        }
      )}
    >
      <div
        className={classNames("px-3 absolute left-0 top-0 bottom-0 w-full flex items-center", {
          ['hidden']: !searchIsOpen
        })}
      >
        <Buscador />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default BotonBuscador