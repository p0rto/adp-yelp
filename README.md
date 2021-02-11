# adp-yelp
A simple service that get some data from the Yelp API.

## Using

Run ``npm run dev`` to start the server.

### Data logged on console

After starting the server, an array of objects with businesses data will be logged on the console.

### Data on route

If you prefer to use a http tool like Postman or Insomnia, you can send a GET request to ``http://localhost:3001/businesses`` with a Bearer Token (the api key is on the .env file). The response will be an array of objects with businesses data. 