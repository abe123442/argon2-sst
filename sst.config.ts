import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "argon2-sst",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
