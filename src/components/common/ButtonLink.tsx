import type { Action } from "../../types/site";

export function ButtonLink({ action }: { action: Action }) {
  return (
    <a className={`button ${action.style ?? "primary"}`} href={action.href}>
      {action.label}
    </a>
  );
}
