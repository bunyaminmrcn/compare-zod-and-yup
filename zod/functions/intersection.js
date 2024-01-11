import * as zod from 'zod';

const userId = zod.object({
    id: zod.number(),
  });
  
  const baseTeacher = zod.object({
    name: zod.string(),
  });
  
  const teacher = zod.intersection(baseTeacher, userId);
  teacher.parse({ name: "Mr Doe" }); 