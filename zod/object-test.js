import * as zod from 'zod';

const userSchema = zod.object({
    username: zod.string().toLowerCase(),
    email: zod.string().trim().email(),
    age: zod.number().positive(),
    password: zod.string().min(8).max(16),
});

userSchema.parse({
    username: "john_doe",
    email: "doe@gmail.com",
    age: -24,
    password: "not-my-favorite",
});
