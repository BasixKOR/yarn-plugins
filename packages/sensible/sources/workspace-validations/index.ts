import { validateWorkspace as validateNoYarn } from "./no-yarn";
import { Report, Workspace } from "@yarnpkg/core";

export function validateWorkspace(workspace: Workspace, report: Pick<Report, 'reportWarning' | 'reportError'>) {
  validateNoYarn(workspace, report);
}
