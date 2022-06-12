const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let teater1 = await promiseTheaterIXX();
  let teater2 = await promiseTheaterVGC();
  let gabunganTeater = [...teater1, ...teater2];
  let result = 0;
  gabunganTeater.map((el) => el.hasil === emosi && (result += 1));
  return result;
};

module.exports = {
  promiseOutput,
};
