import { useEffect, useState } from "react"
import { useMainStore } from "../../hooks"
import { openWeatherMap } from "../../constants"
import { Backdrop, CircularProgress } from "@mui/material"
import { setWeatherXmlData } from "../../store/main"

function UpdateWeatherData() {
  const mainStore = useMainStore()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (mainStore.weatherQuery) {
      setLoading(true)
      const url = new URL(openWeatherMap.forecastEndpoint)

      url.searchParams.append('appid', openWeatherMap.apiKey)
      url.searchParams.append('q', mainStore.weatherQuery)
      url.searchParams.append('mode', 'xml')
      url.searchParams.append('units', 'metric')
      url.searchParams.append('lang', 'es')
    
      fetch(url.toString())
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP! status: ${response.status}`)
        }

        return response.text()
      })
      .then((xmlText) => setWeatherXmlData(xmlText))
      .finally(() => setLoading(false))
    }
  }, [mainStore.weatherQuery])

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default UpdateWeatherData