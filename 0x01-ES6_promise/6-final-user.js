import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises)
    .then((results) => (
      results.map((result) => {
        const { status } = result.status;
        return { status, value: status === 'fulfilled' ? result.value : String(result.reason) };
      })
    ));
}