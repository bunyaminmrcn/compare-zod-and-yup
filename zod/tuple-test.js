import * as zod from 'zod';

const athleteSchema = zod.tuple([
    // takes an array of schemas
    zod.string(), // a string for name
    zod.number(), // a number for jersey
    zod.object({
      pointsScored: zod.number(),
    }), // an object with property pointsScored that has number value
  ]);
  
  athleteSchema.parse(["James", 23, { pointsScored: 7 }])