import { z } from 'zod';

const createProductValidation = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: 'Title must be a string',
    }),
    image: z.string({
      invalid_type_error: 'Image must be a string',
    }),
    price: z.number({
      invalid_type_error: 'Price must be a number',
    }),
    category: z.string({
      invalid_type_error: 'Category must be a string',
    }),
    ratings: z.number({
      invalid_type_error: 'Ratings must be a number',
    }),
    description: z.string({
      invalid_type_error: 'Description must be a string',
    }),
  }),
});

export default createProductValidation;
