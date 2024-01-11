import * as zod from 'zod';

const passwordSchema = zod.string().min(8).max(16);
passwordSchema.parse("3same33");