import { AnimatedSection } from "./AnimatedSection";

interface PersonaCardProps {
  number: number;
  role: string;
  capabilities: string[];
  contexts: {
    context: string;
    risk: string;
  }[];
}

function PersonaCard({ number, role, capabilities, contexts }: PersonaCardProps) {
  return (
    <div className="border border-[#eaeaea] rounded-xl p-5 flex flex-col gap-4 w-full font-['Inter',sans-serif] h-full">
      {/* Role + Capabilities */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-2">
          <span className="text-[12px] text-[#999]" style={{ fontWeight: 500 }}>
            {String(number).padStart(2, "0")}
          </span>
          <span className="text-[13px] text-[#0f0f0f]" style={{ fontWeight: 500 }}>
            {role}
          </span>
        </div>
        <ul className="flex flex-col gap-1 ml-4 list-disc text-[12px] text-[#6b6b6b] leading-[1.6] marker:text-[#d0d0d0]">
          {capabilities.map((cap, i) => (
            <li key={i}>{cap}</li>
          ))}
        </ul>
      </div>

      {/* Contexts */}
      <div className="flex flex-col gap-3 mt-auto">
        {contexts.map((ctx, i) => (
          <div key={i} className="bg-[#f8f8f8] rounded-xl p-4 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#999]" style={{ fontWeight: 500 }}>Context</p>
              <p className="text-[12px] text-[#3d3d3d] leading-[1.6]">{ctx.context}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#999]" style={{ fontWeight: 500 }}>Current Risks</p>
              <p className="text-[12px] text-[#3d3d3d] leading-[1.6]">{ctx.risk}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const personas: PersonaCardProps[] = [
  {
    number: 1,
    role: "Super Admin",
    capabilities: [
      "Full access",
      "Configure the entire company account",
      "Manage billing, integrations, and roles",
      "Responsible for security",
    ],
    contexts: [
      {
        context: "When I configure a company in the system, I want to securely manage all roles and permissions so that employees only have access to the features they need without creating security risks.",
        risk: "Errors in permission assignment",
      },
      {
        context: "When new integrations or subscriptions appear, I want to manage billing and connections in one place to reduce the risk of financial and technical errors",
        risk: "Manual approvals across multiple platforms → errors",
      },
    ],
  },
  {
    number: 2,
    role: "Admin (IT / Security)",
    capabilities: [
      "Manage users and roles",
      "Create access policies",
      "Handle incidents and logs",
      "No access to billing",
    ],
    contexts: [
      {
        context: "When new users are added to the system, I want to create access policies and roles to ensure secure operations",
        risk: "Risk of incorrect access permissions",
      },
      {
        context: "When an incident or suspicious activity occurs, I want to quickly review logs to prevent or mitigate the impact",
        risk: "Reviewing data takes too long",
      },
    ],
  },
  {
    number: 3,
    role: "Manager",
    capabilities: [
      "Manages their team",
      "Approves / rejects requests",
      "Views reports within their scope",
    ],
    contexts: [
      {
        context: "When my team submits requests, I want to quickly approve or reject them to maintain process efficiency",
        risk: "Delays due to manual processing",
      },
      {
        context: "When evaluating performance in my area, I want to see up-to-date reports to make decisions based on current data",
        risk: "Data is scattered, requires manual reconciliation",
      },
    ],
  },
  {
    number: 4,
    role: "Support / Auditor (Read-only)",
    capabilities: [
      "Read-only access",
      "Logs, reports, and change history",
    ],
    contexts: [
      {
        context: "When reviewing logs and reports, I want to see all changes to ensure accuracy without interfering with the process",
        risk: "Difficult to track changes in real time",
      },
      {
        context: "When analyzing changes, I want access to complete data without the risk of accidental edits to maintain security",
        risk: "Need for double-checking → time loss",
      },
    ],
  },
];

export function UserPersonas() {
  return (
    <AnimatedSection className="w-full">
      <div className="bg-[#fafafa] w-full overflow-hidden py-10 md:py-16 flex items-center justify-center">
        <div className="bg-white rounded-2xl overflow-hidden w-[100%] max-w-[1191px] p-6 md:p-10 lg:p-14">
          <p
            className="font-['Inter',sans-serif] text-[12px] text-[#999] uppercase tracking-[0.08em] mb-6"
            style={{ fontWeight: 500 }}
          >
            Target Users + JTBD
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {personas.map((persona) => (
              <PersonaCard key={persona.number} {...persona} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}