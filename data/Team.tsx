export interface TeamDepartment {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export const TEAM_DEPARTMENTS: TeamDepartment[] = [
  {
    id: "executive",
    name: "Executive Management",
    role: "Corporate governance, strategic alignment, and cross-border expansion oversight.",
    imageUrl: "assets/USER.png",
  },
  {
    id: "operations",
    name: "Operations Team",
    role: "End-to-end freight orchestration, carrier management, and dynamic scheduling.",
    imageUrl: "assets/USER.png",
  },
  {
    id: "sales",
    name: "Sales & Marketing Team",
    role: "Client acquisition, bespoke logistics pricing, and market lane analysis.",
    imageUrl: "assets/USER.png",
  },
  {
    id: "customer-service",
    name: "Customer Service Team",
    role: "24/7 real-time shipment milestone updates and client documentation support.",
    imageUrl: "assets/USER.png",
  },
  {
    id: "customs",
    name: "Customs Clearance Team",
    role: "Regulatory compliance, tariff classification, and multi-border brokerage execution.",
    imageUrl: "assets/USER.png",
  },
  {
    id: "warehouse",
    name: "Warehouse Team",
    role: "Secure cargo receiving, container stuffing/stripping, and inventory auditing.",
    imageUrl: "assets/USER.png",
  },
  {
    id: "fleet",
    name: "Fleet/Transport Team",
    role: "On-the-ground asset deployment, physical transport safety, and route optimization.",
    imageUrl: "assets/USER.png",
  },
  {
    id: "finance",
    name: "Finance Team",
    role: "Duty disbursement funding management, freight billing, and fiscal auditing.",
    imageUrl: "assets/USER.png",
  },
];