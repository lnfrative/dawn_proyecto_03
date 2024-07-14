import { useMainStore } from "../../hooks"
import { convertTimestampToTime, formatNumberWithDots, getTimeZoneFromSeconds } from "../../util"

function Dashboard() {
  const mainStore = useMainStore()

  if (!mainStore.weatherData) return null
console.log(mainStore.weatherData)
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
    </section>
  )
}

export default Dashboard