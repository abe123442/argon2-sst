import { ApiHandler } from "sst/node/api";
import { hash } from "argon2";

export const baseHandler = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  };
});

export const argonHandler = ApiHandler(async (_evt) => {
  const timestamp = new Date().valueOf();
  const response = await hash(timestamp.toString());
  return {
    statusCode: 200,
    body: response,
  };
});
