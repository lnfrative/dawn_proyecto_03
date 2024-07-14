import { Button, InputBase } from "@mui/material"
import { useStoreDispatch } from "../../hooks"
import { setWeatherQuery } from "../../store/main"

function Buscador() {
  const dispatch = useStoreDispatch()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        
        const inputSearch = formData.get('input_search')?.toString()

        if (inputSearch) {
          dispatch(setWeatherQuery(inputSearch))
        }
      }}
      className="flex flex-1"  
    >
      <InputBase
        name="input_search"
        fullWidth
        sx={{
          background: 'white',
          paddingLeft: 1,
          borderRadius: 1,
          marginRight: 1,
        }}
      />
      <Button type="submit" variant="contained">Buscar</Button>
    </form>
  )
}

export default Buscador