import * as zod from 'zod';
const usernameSchema = zod.string().toLowerCase();
const emailSchema = zod.string().trim().email();

console.log(usernameSchema.parse("John_Doe")); // logs john_doe
emailSchema.parse(" doe@mail.com ");