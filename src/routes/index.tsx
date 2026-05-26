import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Search,
  Settings2,
  Plus,
  Bell,
  Calendar,
  Mail,
  Settings,
  Grid3x3,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Users,
  UserPlus,
  Sparkles,
} from "lucide-react";
import agentCyan from "@/assets/agents/agent-cyan.png";
import agentPurple from "@/assets/agents/agent-purple.png";
import agentPink from "@/assets/agents/agent-pink.png";
import agentRose from "@/assets/agents/agent-rose.png";
import agentCream from "@/assets/agents/agent-cream.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const autonomousAgents = [
  {
    name: "Banking Lea...",
    img: agentCyan,
    desc: "This agent handles lead onboarding communication through email. It...",
  },
  {
    name: "Banking Lea...",
    img: agentPurple,
    desc: "This agent handles lead onboarding communication through email. It...",
  },
  {
    name: "Bike Service ...",
    img: agentPink,
    desc: "This agent is designed for bike garages, service centres, and multi-...",
  },
  {
    name: "Sales Develo...",
    img: agentRose,
    desc: "An AI Sales Development Representative that engages with...",
  },
  {
    name: "Summary Ag...",
    img: agentCream,
    desc: "An intelligent CRM assistant that generates concise, high-signal...",
  },
];

const quickAgents = [
  {
    name: "Email Assistant",
    img: agentCyan,
    desc: "Quickly drafts and replies to customer emails with contextual awareness.",
  },
  {
    name: "Meeting Notes",
    img: agentPurple,
    desc: "Summarises meetings and extracts action items in seconds.",
  },
  {
    name: "Lead Scorer",
    img: agentPink,
    desc: "Instantly scores incoming leads based on engagement signals.",
  },
];

const sidebarItems = [
  "MCP for AI Agents",
  "APIs and SDKs",
  "Connections",
  "Variables",
  "Circuits",
  "Functions",
  "Widgets",
  "Data Model",
  "SlyteUI",
  "Queries",
  "Client Script",
  "Catalyst Solutions",
];

const ziaChildren = [
  { label: "Agents", active: true, sparkle: true },
  { label: "Data Enrichment" },
  { label: "Prediction" },
  { label: "Recommendation" },
  { label: "Communication" },
  { label: "Vision" },
  { label: "Notifications" },
  { label: "Voice of the Customer", sparkle: true },
  { label: "Models" },
  { label: "Presentation" },
  { label: "Custom AI Studio" },
  { label: "Competitors" },
  { label: "Usage Data" },
];

const cpqChildren = ["Product Configurator", "Price Rules", "Guided Selling"];

function Index() {
  const [tab, setTab] = useState<"configured" | "not">("configured");
  const [section, setSection] = useState<"autonomous" | "quick">("autonomous");
  const [ziaOpen, setZiaOpen] = useState(true);
  const [cpqOpen, setCpqOpen] = useState(true);

  const agents = section === "autonomous" ? autonomousAgents : quickAgents;

  return (
    <div className="flex flex-col h-screen bg-background text-foreground text-sm">
      {/* Top header */}
      <header className="flex items-center justify-between px-4 h-14 border-b border-border bg-background">
        <div className="flex items-center gap-3">
          <button className="p-1 rounded hover:bg-muted">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="font-semibold text-[15px]">Setup Home</h1>
          <button className="p-1 rounded hover:bg-muted ml-1">
            <Settings2 className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search records"
              className="h-8 w-80 pl-9 pr-3 rounded-md border border-border bg-background text-xs focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <button className="w-8 h-8 rounded-md bg-[#2c5cff] text-white flex items-center justify-center hover:opacity-90">
            <Plus className="w-4 h-4" />
          </button>
          <IconBtn><ZiaIcon /></IconBtn>
          <IconBtn><Bell className="w-4 h-4" /></IconBtn>
          <IconBtn><Calendar className="w-4 h-4" /></IconBtn>
          <IconBtn><Mail className="w-4 h-4" /></IconBtn>
          <IconBtn><MessageSquare className="w-4 h-4" /></IconBtn>
          <IconBtn><Settings className="w-4 h-4" /></IconBtn>
          <button className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 ml-1" />
          <IconBtn><Grid3x3 className="w-4 h-4" /></IconBtn>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-background overflow-y-auto">
          <div className="p-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search"
                className="h-8 w-full pl-9 pr-3 rounded-md border border-border bg-background text-xs focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
          </div>
          <nav className="px-2 pb-6">
            {sidebarItems.map((item) => (
              <SidebarLink key={item} label={item} sparkle={item === "MCP for AI Agents" || item === "SlyteUI"} />
            ))}

            {/* Zia parent */}
            <button
              onClick={() => setZiaOpen((v) => !v)}
              className="w-full flex items-center justify-between px-3 py-2 mt-1 rounded hover:bg-muted"
            >
              <span className="flex items-center gap-2 font-medium">
                <ZiaIcon /> Zia
              </span>
              {ziaOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
            {ziaOpen && (
              <div className="ml-3 border-l border-border pl-2">
                {ziaChildren.map((c) => (
                  <SidebarLink key={c.label} label={c.label} active={c.active} sparkle={c.sparkle} />
                ))}
              </div>
            )}

            {/* CPQ parent */}
            <button
              onClick={() => setCpqOpen((v) => !v)}
              className="w-full flex items-center justify-between px-3 py-2 mt-1 rounded hover:bg-muted"
            >
              <span className="flex items-center gap-2 font-medium">
                <span className="text-[11px] px-1.5 py-0.5 rounded bg-muted">$</span>
                CPQ <Sparkles className="w-3 h-3 text-yellow-500" />
              </span>
              <div className="flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" />
                {cpqOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </div>
            </button>
            {cpqOpen && (
              <div className="ml-3 border-l border-border pl-2">
                {cpqChildren.map((c) => (
                  <SidebarLink key={c} label={c} />
                ))}
              </div>
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-[#fafbfc]">
          <div className="m-6 bg-white rounded-lg border border-border p-8 relative">
            {/* Help corner */}
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-100 rotate-45" />
              <HelpCircle className="absolute top-2 right-2 w-4 h-4 text-orange-500" />
            </div>

            <h2 className="text-2xl font-semibold">Zia Agents</h2>
            <p className="text-muted-foreground mt-2 text-[13px]">
              Unleash the potential of autonomous agents with our dynamic platform to deploy, manage, and optimize them effortlessly.
            </p>

            {/* Section tabs: Autonomous / Quick */}
            <div className="flex items-center gap-2 mt-6">
              <SectionTab active={section === "autonomous"} onClick={() => setSection("autonomous")}>
                Autonomous Agents
              </SectionTab>
              <SectionTab active={section === "quick"} onClick={() => setSection("quick")}>
                Quick Agents
              </SectionTab>
            </div>

            {/* Configured / Not Configured */}
            <div className="flex items-center justify-between mt-6">
              <div className="inline-flex rounded-full bg-muted p-1">
                <button
                  onClick={() => setTab("configured")}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${tab === "configured" ? "bg-white shadow-sm border border-border" : "text-muted-foreground"}`}
                >
                  Configured
                </button>
                <button
                  onClick={() => setTab("not")}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${tab === "not" ? "bg-white shadow-sm border border-border" : "text-muted-foreground"}`}
                >
                  Not Configured
                </button>
              </div>
              <button className="text-[#2c5cff] text-xs font-medium hover:underline flex items-center gap-1">
                View Portal Info ↗
              </button>
            </div>

            {/* Search + actions */}
            <div className="flex items-center justify-between mt-5">
              <div className="relative w-72">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  placeholder="Search agent"
                  className="h-9 w-full pl-9 pr-3 rounded-md border border-border bg-white text-xs focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="h-9 px-4 rounded-md border border-border bg-white text-xs font-medium hover:bg-muted">
                  Hire Agent
                </button>
                <button className="h-9 px-4 rounded-md bg-[#2c5cff] text-white text-xs font-medium hover:opacity-90">
                  New Agent
                </button>
              </div>
            </div>

            {/* Agent cards */}
            <div className="grid grid-cols-5 gap-4 mt-6">
              {agents.map((a, i) => (
                <AgentCard key={i} {...a} />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Bottom bar */}
      <footer className="h-10 border-t border-border bg-background flex items-center px-4 gap-4 text-xs text-muted-foreground">
        <FooterItem icon={<MessageSquare className="w-3.5 h-3.5" />} label="Chats" />
        <FooterItem icon={<Users className="w-3.5 h-3.5" />} label="Channels" />
        <FooterItem icon={<UserPlus className="w-3.5 h-3.5" />} label="Contacts" />
        <div className="flex-1 px-3">
          <span className="text-[11px]">Here is your Smart Chat (Ctrl+Space)</span>
        </div>
        <div className="flex items-center gap-3">
          <Bell className="w-3.5 h-3.5" />
          <MessageSquare className="w-3.5 h-3.5" />
          <ZiaIcon />
          <Calendar className="w-3.5 h-3.5" />
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Help</span>
        </div>
      </footer>
    </div>
  );
}

function IconBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-8 h-8 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground">
      {children}
    </button>
  );
}

function ZiaIcon() {
  return (
    <span className="inline-flex items-center justify-center w-4 h-4 rounded text-[9px] font-bold bg-gradient-to-br from-orange-400 to-pink-500 text-white">
      Z
    </span>
  );
}

function SidebarLink({
  label,
  active,
  sparkle,
}: {
  label: string;
  active?: boolean;
  sparkle?: boolean;
}) {
  return (
    <a
      className={`flex items-center justify-between px-3 py-1.5 rounded text-[13px] cursor-pointer ${
        active ? "text-[#2c5cff] bg-[#2c5cff]/5 font-medium" : "hover:bg-muted text-foreground/80"
      }`}
    >
      <span className="flex items-center gap-1.5">
        {label}
        {sparkle && <Sparkles className="w-3 h-3 text-yellow-500" />}
      </span>
      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#2c5cff]" />}
    </a>
  );
}

function SectionTab({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 text-xs font-medium rounded-md border transition ${
        active
          ? "bg-[#2c5cff]/5 border-[#2c5cff]/30 text-[#2c5cff]"
          : "bg-white border-border text-foreground/70 hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}

function AgentCard({ name, img, desc }: { name: string; img: string; desc: string }) {
  return (
    <div className="border border-border rounded-lg p-4 bg-white hover:shadow-sm transition flex flex-col items-center text-center">
      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <img src={img} alt={name} className="w-20 h-20 object-contain" loading="lazy" width={80} height={80} />
        <span className="absolute bottom-1 right-2 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[13px] font-semibold truncate max-w-[110px]">{name}</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-orange-100 text-orange-600 font-medium whitespace-nowrap">
          Digital Employee
        </span>
      </div>
      <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{desc}</p>
    </div>
  );
}

function FooterItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-muted cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}
