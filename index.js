const { WebClient } = require('@slack/web-api');
const psi = require('psi');
// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient('xoxb-1830608725251-1845173470001-q6lSifWTVF19xO0g7dkMUtu2');
// The current date
const currentTime = new Date().toTimeString();

(async () => {

  try {

  const { data } = await psi('https://theverge.com');
  console.log('Speed score:', data.lighthouseResult.categories.performance.score);

  // Output a formatted report to the terminal
  await psi.output('https://theverge.com');
  console.log('Done');

  // Supply options to PSI and get back speed
  const data2 = await psi('https://theverge.com', {
    nokey: 'true',
    strategy: 'desktop'
  });
  console.log('Speed score:', data2.data.lighthouseResult.categories.performance.score);
} catch(err) {
  console.log(err)
}

  // try {
  //   // Use the `chat.postMessage` method to send a message from this app
  //   await web.chat.postMessage({
  //     channel: '#general',
  //     text: `The current time is ${currentTime}`,
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  // console.log('Message posted!');
})();