import * as  yup from 'yup';
// or import * as yup from yup

const schema = yup.string();
schema.validate(333).then((res) => console.log(res)); // returns 333
schema.isValid(11).then((res) => console.log(res)); // returns true