import Joi from '@hapi/joi';

const authSchema = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
  })
};

export default authSchema;
