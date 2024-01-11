import * as zod from 'zod';

/*
const ageSchema = zod.number().min(18);
ageSchema.parse(12);
*/

const ageSchema = zod
  .number()
  .min(18, { message: "too young to play" })
  .max(40, { message: "too old to play" });
ageSchema.parse(12)