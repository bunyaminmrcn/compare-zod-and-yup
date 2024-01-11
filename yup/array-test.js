import * as  yup from 'yup';

const schema = yup.array().of(yup.number().min(2)).min(4);

schema.validate([2]).then((res) => {
  console.log(res); // typerror: this field must have at least 4 items
});