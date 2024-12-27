const { default: axios } = require("axios");
const fs = require("fs-extra");
const sugerArray = ["not suger", "low", "medium"];
async function getData() {
  const { data } = await axios.get("https://api.sampleapis.com/coffee/hot");
  const array = data.map((item) => {
    const randomNum = Math.floor(Math.random() * 3);
    return {
      ...item,
      suger: sugerArray[randomNum],
      price: Math.floor(Math.random() * 20),
    };
  });
  console.log(data);
  fs.writeFileSync("test.json", JSON.stringify(array));
  //   console.log(data);
}
getData();
console.log(2);
