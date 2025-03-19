import axios from "axios";

export const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com/reports",
  headers: {
    "x-rapidapi-key": "e6a620c577msh2184218a20be38ap1af1b8jsn5656078368db",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

export const detailApi = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "e6a620c577msh2184218a20be38ap1af1b8jsn5656078368db",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});
