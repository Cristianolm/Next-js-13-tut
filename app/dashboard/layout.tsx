import React from "react";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  return <div style={{ color: "red", padding: "15px" }}>{children}</div>;
}

export default DashboardLayout;
