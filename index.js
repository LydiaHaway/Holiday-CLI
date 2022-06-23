#!/usr/bin/env node

Holiday = (country) => {
  console.log("Hello, Node.JS!");

  const axios = require("axios");

  const { getCode } = require("country-list");

  country = getCode(country);

  const URL = `https://date.nager.at/api/v3/PublicHolidays/2022/${country}`;

  axios
    .get(URL)
    .then((response) => {
      for (i = 0; i < response.data.length; i++) {
        console.log(response.data[i].date);
        console.log(response.data[i].name);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

let country = process.argv.slice(2);
country = country[0];

Holiday(country);

module.exports = Holiday;
