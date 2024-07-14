import Header from "./components/Header"
import Layout from "./components/Layout"
import { StoreProvider } from "./components/StoreProvider"

function App() {
  return (
    <StoreProvider>
      <main>
        <Header />
        <Layout>
          TODO
        </Layout>
      </main>
    </StoreProvider>
  )
}

export default App
