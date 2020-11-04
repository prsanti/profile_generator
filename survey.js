const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  `What's your name? Nicknames are also acceptable 🙂`,
  `What's an activity you like doing? 🎨`,
  `What do you listen to while doing that? 🎶`,
  `What is your favourite meal of the day? 🍳`,
  `What is your favourite food? 🍱`,
  `Do you prefer sports 🏀 or e-sports? 🎮`,
  `Who is your favourite Marvel superhero? 🦸‍♂🦸‍♀️`
];

let profile ={
  name: "",
  activity: "",
  music: "",
  meal: "",
  food: "",
  typeOfSport: "",
  superhero: ""
};


rl.question(`${questions[0]}`, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  profile.name = answer;
  rl.question(`${questions[1]}`, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    profile.activity = answer;
    rl.question(`${questions[2]}`, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      profile.music = answer;
      rl.question(`${questions[3]}`, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        profile.meal = answer;
        rl.question(`${questions[4]}`, (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          profile.food = answer;
          rl.question(`${questions[5]}`, (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            profile.typeOfSport = answer;
            rl.question(`${questions[6]}`, (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              profile.superhero = answer;
              console.log(`Here is your profile: `);
              console.log(profile);
              rl.close()
            });
          });
        });
      });
    });
  });
});