import * as zod from 'zod';

const sumOfNumsSchema = zod
  .function()
  .args(zod.number(), zod.number())
  .returns(zod.number());

const sumOfNums = sumOfNumsSchema.validate((val1, val2) => {
  return val1 + val2;
});

sumOfNums("1", 33);