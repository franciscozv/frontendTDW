/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import { Button, Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const DetallePerrito = () => {
  const { id } = useParams();
  const [aceptados, setAceptados] = useState([]);
  const [rechazados, setRechazados] = useState([])
  const getPreferencias = async () => {
    await axios.get(`http://localhost:8000/api/perros/${id}/interacciones`)
    .then(res => {
      setAceptados(res.data.aceptados)
      setRechazados(res.data.rechazados)
    })
  }
  useEffect(() => {
    getPreferencias();
  }, [])
  return (
    <>
      <Container maxWidth="sm">
      <Button component={Link} to='/listaPerritos' variant="contained" color="primary">
        Volver
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6">Perritos Aceptados</Typography>
          <List>
            {aceptados.map((perro, index) => (
              <ListItem key={index}>
                <ListItemText primary={perro.nombre} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Perritos Rechazados</Typography>
          <List>
            {rechazados.map((perro, index) => (
              <ListItem key={index}>
                <ListItemText primary={perro.nombre} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default DetallePerrito