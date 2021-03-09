const psi = require('psi');

const getPageSpeed = async(url) => {
  console.log(url);
  try {
    const { data } = await psi(url);
    console.log('Speed score:', data.lighthouseResult.categories.performance.score);

  // Output a formatted report to the terminal
  await psi.output(url);
  console.log('Done');

  // Supply options to PSI and get back speed
  const data2 = await psi(url, {
    nokey: 'true',
    strategy: 'desktop'
  });
  console.log('Speed score:', data2.data.lighthouseResult.categories.performance.score);
  } catch(err) {
    console.log(err)
  }
};

module.exports = getPageSpeed;