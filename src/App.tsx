import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import Layout from "./components/Layout"
import StoreProvider from "./components/StoreProvider"
import UpdateWeatherData from "./components/UpdateWeatherData"

function App() {
  return (
    <StoreProvider>
      <main>
        <Header />
        <Layout>
          <Dashboard />
        </Layout>
        <UpdateWeatherData />
      </main>
    </StoreProvider>
  )
}

export default App
