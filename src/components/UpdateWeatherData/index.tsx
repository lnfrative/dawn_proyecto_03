import { useEffect, useState } from "react"
import { useMainStore, useStoreDispatch } from "../../hooks"
import { openWeatherMap } from "../../constants"
import { Backdrop, CircularProgress } from "@mui/material"
import { setWeatherData } from "../../store/main"

function UpdateWeatherData() {
  const mainStore = useMainStore()
  const dispatch = useStoreDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      const url = new URL(openWeatherMap.forecastEndpoint)

      url.searchParams.append('appid', openWeatherMap.apiKey)
      url.searchParams.append('q', mainStore.weatherQuery || 'Guayaquil')
      url.searchParams.append('mode', 'json')
      url.searchParams.append('units', 'metric')
      url.searchParams.append('lang', 'es')
    
      fetch(url.toString())
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP! status: ${response.status}`)
        }

        return response.json()
      })
      .then((data) => dispatch(setWeatherData(data)))
      .finally(() => setLoading(false))
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