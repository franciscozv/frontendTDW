import { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import axios from 'axios'
const endPoint = "http://localhost:8000/api";

// eslint-disable-next-line react/prop-types
const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    sexo: '',
  });

  const [foto_url, setFoto_url] = useState('');

  const fetchRandomImage = async () => {
    await axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => setFoto_url(res.data.message))
      .catch(error => console.error('Error:', error));
  }
  useEffect(() => {
    fetchRandomImage()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const changeRandomImage = () => {
  fetchRandomImage()
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {nombre, descripcion} = formData;
    if(!nombre.trim() || !descripcion.trim()) {
      return console.log('titulo y descripcion obligatorios')
    }
    console.log(nombre, descripcion, foto_url);
    await axios.post(`${endPoint}/perros`, {nombre: nombre , foto_url: foto_url, descripcion: descripcion});

    setFormData({
      nombre: '',
      descripcion: '',
      sexo: ''
    })
    changeRandomImage()
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Avatar
          alt="Profile Picture"
          src={foto_url}
          style={{ width: '100px', height: '100px', margin: '10px auto' }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={changeRandomImage}
        >
          Cambiar foto aleatoria
        </Button>

        <TextField
          name="nombre"
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.nombre}
          onChange={handleInputChange}
        />

        <TextField
          name="descripcion"
          label="Descripción"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={formData.descripcion}
          onChange={handleInputChange}
        />

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Sexo</FormLabel>
          <RadioGroup
            aria-label="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
          >
            <FormControlLabel value="macho" control={<Radio />} label="macho" />
            <FormControlLabel value="hembra" control={<Radio />} label="hembra" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
            Enviar
        </Button>
      </form>
    </Container>
  );
};

export default Registro;