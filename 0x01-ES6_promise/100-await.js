import { uploadPhoto, createUser } from './utils';

export default async function asyncUpLoadUser() {
  let result = {};

  try {
    const promise1 = await uploadPhoto();
    const promise2 = await createUser();
    result = { photo: promise1, user: promise2 };
  } catch (e) {
    result = { photo: null, user: null };
  }

  return result;
}
