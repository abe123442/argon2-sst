import { StackContext, Api, EventBus } from "sst/constructs";

export function API({ stack }: StackContext) {

  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.baseHandler",
      "GET /argon2": "packages/functions/src/lambda.argonHandler"
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
