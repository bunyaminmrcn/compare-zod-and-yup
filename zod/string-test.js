import * as zod from 'zod';
// or import { zod } from 'zod'

const schema = zod.string()
schema.parse('hello');