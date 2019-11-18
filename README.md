# beHired (torre_test)


### Description

`beHired` (torre_test) is a one page platform, where you can find (by the name of the people) the skills (strengths) that match with a company stack. The idea is to take your profile at Torre and compare the strengths that you have put on your profile with the stack of a company, the stack has been formed with the skills posted on **StackShare** (stackshare.io). For this reason, the functionality with this platform is basically:

1. (Input) **Name**: you put on the platform your name it could be just first name or entire name.
2. (Input - checkbox) **Company**: You select the company which will be compared.
3. (Event) **Search**: you click on Search button, it will create an event where the platform starts to build your profile with our API and then starts the comparison.
4. (Clear event) **New Search**: If you want to make a new search you click on this button to generate the event for cleaning the buffer.

### Want to test the platform?

**Click here**:
[![behired](https://i.imgur.com/6Mt1hzp.png)](http://34.67.77.109/#/)

### Tecnologies

The tecnologies used for this web app are basically the MERN stack for javascript development, which are:

- **MongoDB**: In this project it has been used for store the companies stacks and the users searched with the stack matched.
- **Express.js**: It has been used for create the routes for the API, you can see that routes adding to the url the path, for example: `http://34.67.77.109:5000/stack`
- **React.js**: This library has been used for generating the components for rendering the website, also, it takes the inputs to proceed with the get requests.
- **Node.js**: As everything has been built with a Javascript stack, Node is used for testing in a runtime environment.

## Developers

After installation you need to make sure you have intalled Node.js package.

### How to install

If you want to see the background working, as a developer:

- Install: `git clone https://github.com/AndZapata/torre_test.git`
- Install the packages (this command will install the dependencies on the package file): `npm i`
- Run the background: `nodemon /background/server.js` or `node /background/server.js`
- Run the frontend: `npm start`
