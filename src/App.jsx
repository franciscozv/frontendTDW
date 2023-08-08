import Navbar from './navbar/Navbar';
import { Container } from '@mui/material'
import Registro from './pages/Registro'
import { Route, Routes } from 'react-router-dom'
import ListaPerritos from './pages/ListaPerritos'
import DetallePerrito from './pages/DetallePerrito';
import InboxIcon from '@mui/icons-material/Inbox'
const navArrayLinks = [
  {
    title: "Registro", path: "/", icon: <InboxIcon/>
  },
  {
    title: "Lista Perritos", path: "/listaPerritos", icon: <InboxIcon/>
  }
];

function App() {
  return (
    <>
        <Navbar navArrayLinks={navArrayLinks}/>
        <Container sx={{ mt:5 }}>
          <Routes>
            <Route path='/' element={<Registro/>}/>
            <Route path='/listaPerritos' element={<ListaPerritos/>}/>
            <Route path='/listaPerritos/:id' element={<DetallePerrito/>}/>
          </Routes>
        </Container>
    </>
  )
}

export default App
