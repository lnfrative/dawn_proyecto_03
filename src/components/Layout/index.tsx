import { PropsWithChildren } from "react"

function Layout(props: PropsWithChildren) {
  return (
    <div className='grid grid-cols-12'>
      <div className='hidden sm:block sm:col-span-1 lg:col-span-2 2xl:col-span-3' />
      
      <div className='col-span-full sm:col-span-10 lg:col-span-8 2xl:col-span-6'>
        <div id='section-content'>
          {props.children}
        </div>
      </div>

      <div className='hidden sm:block sm:col-span-1 lg:col-span-2 2xl:col-span-3' />
    </div>
  )
}

export default Layout