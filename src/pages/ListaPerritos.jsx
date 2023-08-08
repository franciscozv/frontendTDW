/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Avatar, Button, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import axios from 'axios'
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const ListaPerritos = () => {
  const [listaPerritos, setListaPerritos] = useState([]);
  const getPerros = async () => {
    await axios.get('http://localhost:8000/api/perros')
    .then(res => {
      setListaPerritos(res.data.perro)
    })
  }
  useEffect(() => {
    getPerros()
  },[])
  return (
    <Container maxWidth="sm">
  <Typography variant='h5'>Selecciona un perfil</Typography>
  <List>
    {listaPerritos.map(perro => (
      <ListItem key={perro.id}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <ListItemAvatar>
              <Avatar alt={perro.nombre} src={perro.foto_url} />
            </ListItemAvatar>
          </Grid>
          <Grid item>
            <ListItemText primary={perro.nombre} />
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to={`/listaPerritos/${perro.id}`}
              variant="contained"
              color="primary"
            >
              aceptados y rechazados
            </Button>
            <Button variant="outlined" color="secondary">
              ir a selección
            </Button>
          </Grid>
        </Grid>
      </ListItem>
    ))}
  </List>
</Container>

  );
};

export default ListaPerritos;