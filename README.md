# GetHired

This project uses React + Material UI + Express to compose a dashboard service that aims to help individuals track and monitor their journey to employment.




## System Requirements

1. Node (12.16.1)
2. MySQL (5.7)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Installing

```sh
git clone https://github.com/Gimli-FEC/gamestart-product-overview/
cd gamestart-product-overview
```

Start the mysql server on your computer, then execute the following commands in the terminal.

```sh
npm install
mysql -u root < db/dbSchema.sql
npm run seed
npm run test
npm run production
npm run server-dev
```
In a browser window, navigate to localhost:3000/?id=NUM

and replace NUM with a number from 1 to 100.

To start the development node server:
```sh
npm run server-dev
```
To start React with webpack:
```sh
npm run react-dev
```
