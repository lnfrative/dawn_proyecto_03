import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useMainStore } from "../../hooks"
import { convertTimestampToTime, formatNumberWithDots, getTimeZoneFromSeconds } from "../../util"
import { openWeatherMap } from "../../constants"
import ChartLine from "../ChartLine"
import { useState } from "react"

function Dashboard() {
  const mainStore = useMainStore()

  const [forecastMainSelected, setForecastMainSelected] = useState(Object.keys(openWeatherMap.forecastMainTags)[0])

  if (!mainStore.weatherData) return null
  return (
    <section>
      <div className="w-full bg-white border border-black/20 rounded-md py-10 my-6">
        <div>
          <h2 className="font-bold text-3xl text-center">
            {mainStore.weatherData.city.name}
          </h2>
          <div className="text-center">{mainStore.weatherData.city.country}</div>
        </div>

        <div className="mt-5 flex justify-evenly">
          <div className="text-center">
            <div>{formatNumberWithDots(mainStore.weatherData.city.population)}</div>
            <b>Población</b>
          </div>

          <div className="text-center">
            <div>{convertTimestampToTime(mainStore.weatherData.city.sunrise, mainStore.weatherData.city.timezone)}</div>
            <b>Amanecer</b>
          </div>

          <div className="text-center">
            <div>{getTimeZoneFromSeconds(mainStore.weatherData.city.timezone)}</div>
            <b>Zona horaria</b>
          </div>
        </div>
      </div>

      <div className="w-full bg-white border border-black/20 rounded-md py-10 my-6 px-3">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gráfico</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={forecastMainSelected}
            label="Gráfico"
            onChange={(e) => setForecastMainSelected(e.target.value)}
          >
            {Object.keys(openWeatherMap.forecastMainTags).map((key) => (
              <MenuItem key={key} value={key}>{openWeatherMap.forecastMainTags[key]}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="mt-6">
          <ChartLine
            labels={mainStore.weatherData.list.map((value: { dt_txt: any }) => value.dt_txt)}
            datasets={[
              {
                fill: true,
                tension: 0.3,
                borderWidth: 2,
                label: openWeatherMap.forecastMainTags[forecastMainSelected],
                data: mainStore.weatherData.list.map((value: { main: { [x: string]: any } }) => value.main[forecastMainSelected])
              }
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Dashboard