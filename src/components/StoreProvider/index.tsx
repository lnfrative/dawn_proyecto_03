import { store } from "../../store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux"

function StoreProvider(props: PropsWithChildren) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default StoreProvider