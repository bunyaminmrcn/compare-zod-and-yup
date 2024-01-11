import * as  yup from 'yup';

const schema = yup.string().strict();
schema.validate(333).then((res) => console.log(res))