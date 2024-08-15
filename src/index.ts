export type Message = string;

export const helloWorld = (message: Message) => {
  console.log(`Hello, ${message}!`);
  console.log('I made a change');
};

helloWorld('Pfida!!!!');
