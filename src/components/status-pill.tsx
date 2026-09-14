const statusMap: Record<string, string> = {
  Live: "success", Active: "success", Paid: "success", Confirmed: "success", Completed: "success", Verified: "success",
  Review: "warning", Pending: "warning", "Pending payment": "warning", Optimizing: "warning", Assigned: "info", "In stay": "info",
  Held: "danger", Escalated: "danger", Cancelled: "danger", High: "danger", Medium: "warning", "Waiting guest": "neutral",
};

export function StatusPill({ children }: { children: string }) {
  return <span className={`status status--${statusMap[children] ?? "neutral"}`}>{children}</span>;
}
