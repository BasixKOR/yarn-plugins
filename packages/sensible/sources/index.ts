import { Plugin, Hooks } from "@yarnpkg/core";
import { validateWorkspace } from "./workspace-validations";

const plugin: Plugin<Hooks> = {
  hooks: {
    validateWorkspace,
  },
};

export default plugin;
