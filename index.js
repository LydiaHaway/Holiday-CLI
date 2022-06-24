#!/usr/bin/env node

holiday = (country) => {
  const chalk = require("chalk");

  const axios = require("axios");

  const { getCode } = require("country-list");

  country = getCode(country);

  let currentYear = new Date().getFullYear();

  const URL = `https://date.nager.at/api/v3/PublicHolidays/${currentYear}/${country}`;

  axios
    .get(URL)
    .then((response) => {
      for (i = 0; i < response.data.length; i++) {
        console.log("\n" + chalk.blue.underline(response.data[i].date));
        console.log(chalk.red.italic(response.data[i].name));
      }
    })
    .catch((error) => {
      console.log(error);
    });

  const ora = require("ora");

  const spinner = ora("Loading").start();

  setTimeout(() => {
    spinner.color = "yellow";
    spinner.text = "Loading rainbows";
    spinner.succeed("done");
  }, 1000);
};

let country = process.argv.slice(2);
country = country[0];

holiday(country);

module.exports = holiday;
