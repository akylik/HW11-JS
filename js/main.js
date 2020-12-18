async function getRandomChinese(length, time) {
  let iterations = length;
  let result = "";
  const generateAsyncWord = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(createChineseWord());
      }, time);
    });
  };

  while (iterations > 0) {
    result += await generateAsyncWord();
    iterations--;
  }

  return result;
}

function createChineseWord() {
  const now = Date.now();
  const sign = now.toString().substr(now.length - 5);
  return String.fromCharCode(sign);
}

getRandomChinese(4, 50).then((successMessage) => {
  console.log("Chinese word " + successMessage + " за 200ms");
});