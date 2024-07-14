import { PropsWithChildren } from "react"

function Layout(props: PropsWithChildren) {
  return (
    <div className="m-auto max-w-[800px] min-h-screen w-full border-x border-black/20 bg-white my-3">
      {props.children}
    </div>
  )
}

export default Layout