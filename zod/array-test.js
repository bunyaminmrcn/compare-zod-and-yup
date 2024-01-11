import * as zod from 'zod';

// - optional

const userSchema = zod.object({
  username: zod.string().toLowerCase(),
  email: zod.string().trim().email(),
  age: zod.number().positive(),
  password: zod.string().min(8).max(16),
  familySecret: zod.string().optional()   
});

const usersSchema = zod.array(userSchema);

const users = [
  {
    username: "john_doe",
    email: "doe@gmail.com",
    age: -24,
    password: "not-my-favorite",
  },
];

usersSchema.parse(users); 