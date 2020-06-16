# GetHired

This project uses React + Material UI + Express to compose a dashboard service that aims to help individuals track and monitor their journey to employment.

![image](https://user-images.githubusercontent.com/2312703/84735031-5289ce80-af57-11ea-998d-8e5e963e58b5.png)

## Next Steps
- Refine jobs data model to add timestamps for various user actions (applied, interviews, offer extended) to be able to track metrics
- Develop metrics dashboard
- Implement oAuth (google + github)
- Obtain access to various job board APIs
- Implement jobs stream from API sources (allow user to search by location parameters, position, description)
- Users should be able to see jobs stream, and add them to their dashboard


## System Requirements

1. Node (12.16.1)
2. MongoDB

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Installing

```sh
git clone https://github.com/timothydadams/mvp/
cd mvp
```

Start the mongoDB server on your computer, then execute the following commands in the terminal.

```sh
npm install
npm run react-dev
npm start
```
In a browser window, navigate to localhost:3500
