export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({ status: 200, body: 'Success' }),
      () => Error())
    .finally(() => console.log('Got a response from the API'));
}
