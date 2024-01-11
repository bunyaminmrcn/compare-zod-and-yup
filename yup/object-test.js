import * as  yup from 'yup';

const userSchema = yup
  .object({
    username: yup.string().lowercase().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().required(),
    password: yup.string().min(8).max(16).required(),
    familySecret: yup.string(),
  })
  .strict();

userSchema
  .validate({
    username: "John_Doe",
    email: "doe@gmail.com",
    password: "not-my-favorite",
  })
  .then((res) => console.log(res));