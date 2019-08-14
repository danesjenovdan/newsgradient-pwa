import axios from 'axios';

const baseApiUrl = 'http://localhost:8081/v1';
let axiosInstance = axios.create({ baseURL: baseApiUrl });

export const eventRanges = {
  today: 'today',
  yesterday: 'yesterday',
  lastWeek: 'last-week',
  lastMonth: 'last-month',
};

export const slants = {
  farLeft: 'left',
  liberal: 'lib',
  conservative: 'con',
  farRight: 'right',
  all: 'all',
};

export const getEvents = (eventRange: string, slant: string) => axiosInstance
  .get('/events/', {
    params: {
      range: eventRange,
      slant,
    },
  }).then(response => response.data)
  .catch((error) => { throw error });

export const getArticles = (eventId: Number) => axiosInstance
  .get('/articles/', {
    params: {
      event: eventId,
    },
  }).then(response => response.data)
  .catch((error) => { throw error });