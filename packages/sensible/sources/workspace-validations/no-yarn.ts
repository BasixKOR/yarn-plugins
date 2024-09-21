import { MessageName, Report, structUtils, Workspace } from "@yarnpkg/core";

const YARN_IDENT = structUtils.parseIdent("yarn");

export function validateWorkspace(
  workspace: Workspace,
  report: Pick<Report, "reportWarning" | "reportError">,
) {
  const configuration = workspace.project.configuration;

  if (workspace.manifest.hasDependency(YARN_IDENT)) {
    report.reportWarning(
      MessageName.TIPS_NOTICE,
      `Workspace depends on ${structUtils.prettyIdent(
        configuration,
        YARN_IDENT,
      )} which is likely a mistake.`,
    );
  }
}
