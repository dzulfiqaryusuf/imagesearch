import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID qr6LuGrCTKV1f_1uCLALNSuzdOoryKueVzjMKwWXrmI',
  },
});