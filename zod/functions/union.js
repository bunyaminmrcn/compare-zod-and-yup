import * as zod from 'zod';

const productId = zod.union([zod.string(), zod.number()]);

productId.parse(222);
productId.parse('I9290JEI');
productId.parse(false); 