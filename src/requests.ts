import axios from 'axios';

const baseApiUrl = 'https://api.ng.djnd.si/v1';
let axiosInstance = axios.create({ baseURL: baseApiUrl });

export const eventRanges = {
  today: 'today',
  yesterday: 'yesterday',
  lastWeek: 'last-week',
  lastMonth: 'last-month',
};

export const getEvents = (eventRange: string) => axiosInstance
  .get('/events/', {
    params: {
      range: eventRange,
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