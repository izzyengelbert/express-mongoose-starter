import Joi from '@hapi/joi';

const userSchema = {
  parameter: Joi.object({
    id: Joi.number().required()
  }),
  query: Joi.object({
    username: Joi.string().min(12).max(20)
  })
};

export default userSchema;
