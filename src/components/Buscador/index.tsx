import { Button, InputBase } from "@mui/material"

function Buscador() {
  return (
    <form className="flex">
      <InputBase
        fullWidth
        sx={{
          background: 'white',
          paddingLeft: 1,
          borderRadius: 1,
          marginRight: 1,
        }}
      />
      <Button variant="contained">Buscar</Button>
    </form>
  )
}

export default Buscador