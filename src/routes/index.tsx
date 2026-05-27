import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Search, Home, DollarSign, Megaphone, Headphones, BarChart3, Zap, Settings,
  Bell, HelpCircle, ChevronDown, ChevronRight, Ban, Download, ShieldCheck,
  Globe, Box, Lock, EyeOff, Mail, FileText, StickyNote, BarChart2, Plus,
  Cpu, AlertTriangle, Users, Sparkles, ToggleLeft, ChevronLeft,
  Database, Activity, TrendingUp, ShieldAlert, CheckCircle2, XCircle,
  Clock, Bot, MessageSquare, Phone, Workflow, FileSignature, Smile,
  ListChecks, ArrowUpDown, Pause, FilePlus,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: AIGovernance });

type TabKey = "overview" | "features" | "fields" | "users" | "agents" | "usage" | "audit";

const TABS: { key: TabKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "features", label: "AI Features" },
  { key: "fields", label: "Fields & Data Access" },
  { key: "users", label: "Users & Permissions" },
  { key: "agents", label: "Agents" },
  { key: "usage", label: "Usage & Retention" },
  { key: "audit", label: "Audit & Compliance" },
];

const NAV = [
  { label: "Home", icon: Home },
  { label: "Sales", icon: DollarSign, chev: true },
  { label: "Marketing", icon: Megaphone, chev: true },
  { label: "Service", icon: Headphones, chev: true },
  { label: "Analytics", icon: BarChart3, chev: true },
  { label: "Automation", icon: Zap, chev: true },
  { label: "Setup", icon: Settings, active: true },
];

function AIGovernance() {
  const [tab, setTab] = useState<TabKey>("fields");
  const [allDisabled, setAllDisabled] = useState(false);

  return (
    <div className="flex h-screen bg-[#f4f6fa] text-[#0f172a] text-sm overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[230px] shrink-0 bg-[#0b1736] text-slate-200 flex flex-col">
        <div className="px-5 py-5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center font-bold text-white">N</div>
          <span className="font-semibold text-white text-[15px]">NexusCRM</span>
        </div>
        <div className="px-3 pb-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input placeholder="Search" className="w-full h-9 pl-9 pr-10 rounded-md bg-[#162447] border border-[#22305a] text-xs text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-[#3b82f6]" />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 bg-[#0b1736] px-1.5 py-0.5 rounded border border-[#22305a]">⌘K</span>
          </div>
        </div>
        <nav className="flex-1 px-2 space-y-0.5">
          {NAV.map((n) => (
            <button key={n.label} className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-[13px] transition ${n.active ? "bg-[#1e3a8a] text-white" : "text-slate-300 hover:bg-[#162447]"}`}>
              <span className="flex items-center gap-2.5"><n.icon className="w-4 h-4" />{n.label}</span>
              {n.chev && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
            </button>
          ))}
        </nav>
        <div className="px-2 pb-3 space-y-0.5 border-t border-[#162447] pt-3">
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-[13px] text-slate-300 hover:bg-[#162447]">
            <span className="flex items-center gap-2.5"><Bell className="w-4 h-4" />Notifications</span>
            <span className="w-5 h-5 rounded-full bg-[#3b82f6] text-white text-[10px] flex items-center justify-center">3</span>
          </button>
          <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] text-slate-300 hover:bg-[#162447]"><Settings className="w-4 h-4" />Settings</button>
          <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] text-slate-300 hover:bg-[#162447]"><HelpCircle className="w-4 h-4" />Help & Support</button>
        </div>
        <div className="px-3 py-3 border-t border-[#162447] flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xs font-semibold">AV</div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-[13px] font-medium truncate">Ava Verma</div>
            <div className="text-[11px] text-slate-400 truncate">System Administrator</div>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className="bg-white">
          <div className="px-8 pt-6 pb-4 flex items-start justify-between">
            <div>
              <h1 className="text-[28px] font-semibold tracking-tight">AI Governance</h1>
              <p className="text-[13px] text-slate-500 mt-1">Manage how AI features use CRM data, users, models, and automation.</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setAllDisabled((v) => !v)} className="h-10 px-4 rounded-lg border border-slate-200 bg-white text-[13px] font-medium hover:bg-slate-50 flex items-center gap-2">
                <Ban className="w-4 h-4" />{allDisabled ? "Enable all AI" : "Disable all AI"}
              </button>
              <button className="h-10 px-4 rounded-lg border border-slate-200 bg-white text-[13px] font-medium hover:bg-slate-50 flex items-center gap-2">
                <Download className="w-4 h-4" />Export logs
              </button>
              <button className="h-10 px-4 rounded-lg bg-[#2563eb] text-white text-[13px] font-medium hover:bg-[#1d4ed8] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />Review alerts
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-8 border-b border-slate-200">
            <div className="flex items-center gap-7">
              {TABS.map((t) => (
                <button key={t.key} onClick={() => setTab(t.key)} className={`relative py-3 text-[13px] font-medium transition ${tab === t.key ? "text-[#2563eb]" : "text-slate-600 hover:text-slate-900"}`}>
                  {t.label}
                  {tab === t.key && <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-[#2563eb] rounded-full" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          {tab === "overview" && <Overview />}
          {tab === "features" && <Features />}
          {tab === "fields" && <Fields />}
          {tab === "users" && <UsersPermissions />}
          {tab === "agents" && <AgentsTab />}
          {tab === "usage" && <UsageRetention />}
          {tab === "audit" && <AuditCompliance />}
        </div>
      </main>
    </div>
  );
}

/* ---------- Shared bits ---------- */
function StatCard({ icon, iconBg, iconColor, label, value, sub, valueColor }: any) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3">
      <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
        <span className={iconColor}>{icon}</span>
      </div>
      <div className="min-w-0">
        <div className="text-[12px] text-slate-500">{label}</div>
        <div className={`text-[20px] font-semibold mt-0.5 ${valueColor ?? ""}`}>{value}</div>
        <div className="text-[11px] text-slate-400 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

function Panel({ title, children, action, info }: any) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-[14px] font-semibold">{title}</h3>
          {info && <HelpCircle className="w-3.5 h-3.5 text-slate-400" />}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!on)} className={`w-9 h-5 rounded-full transition relative ${on ? "bg-[#2563eb]" : "bg-slate-300"}`}>
      <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition ${on ? "left-[18px]" : "left-0.5"}`} />
    </button>
  );
}

function Pill({ children, color }: { children: React.ReactNode; color: "green" | "red" | "orange" | "blue" | "gray" | "purple" }) {
  const map: Record<string, string> = {
    green: "bg-emerald-50 text-emerald-600",
    red: "bg-rose-50 text-rose-600",
    orange: "bg-orange-50 text-orange-600",
    blue: "bg-blue-50 text-blue-600",
    gray: "bg-slate-100 text-slate-600",
    purple: "bg-violet-50 text-violet-600",
  };
  return <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium ${map[color]}`}>{children}</span>;
}

function Dot({ color }: { color: string }) {
  return <span className={`w-1.5 h-1.5 rounded-full ${color} inline-block`} />;
}

/* ---------- Overview ---------- */
function Overview() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-4">
        <StatCard icon={<ShieldCheck className="w-6 h-6" />} iconBg="bg-emerald-50" iconColor="text-emerald-500" label="Compliance Status" value="Healthy" valueColor="text-emerald-600" sub="All core policies active" />
        <StatCard icon={<Cpu className="w-6 h-6" />} iconBg="bg-blue-50" iconColor="text-blue-500" label="AI Features Enabled" value="18 / 26" sub="69% of AI features enabled" />
        <StatCard icon={<Users className="w-6 h-6" />} iconBg="bg-violet-50" iconColor="text-violet-500" label="Active AI Users" value="246" valueColor="text-violet-600" sub="24% of total users" />
        <StatCard icon={<AlertTriangle className="w-6 h-6" />} iconBg="bg-rose-50" iconColor="text-rose-500" label="Hard Limit Alerts" value="2" valueColor="text-rose-600" sub="Require attention" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2"><Panel title="Quick summary"><div className="space-y-3 text-[13px]">
          <div className="flex items-center justify-between"><span>Sensitive fields blocked</span><Pill color="green">24 fields</Pill></div>
          <div className="flex items-center justify-between"><span>External model providers</span><Pill color="blue">3 approved</Pill></div>
          <div className="flex items-center justify-between"><span>Monthly credits used</span><Pill color="orange">68,400 / 100,000</Pill></div>
          <div className="flex items-center justify-between"><span>Open risk alerts</span><Pill color="red">3 high</Pill></div>
        </div></Panel></div>
        <Panel title="Recent activity"><div className="space-y-3 text-[12px] text-slate-600">
          <div>Ava Verma updated restricted fields — <span className="text-slate-400">May 17</span></div>
          <div>Neha Jain blocked proposal export — <span className="text-slate-400">May 18</span></div>
          <div>Rohan Mehta approved deal update — <span className="text-slate-400">May 19</span></div>
        </div></Panel>
      </div>
    </div>
  );
}

/* ---------- AI Features ---------- */
const FEATURES = [
  { name: "Email Generator", icon: Mail, cat: "Sales", status: "Enabled", access: "Sales team", data: "CRM, email", risk: "Medium", approval: "User review", usage: "12,340", updated: "May 19" },
  { name: "Call Summary", icon: Phone, cat: "Sales", status: "Enabled", access: "Sales + Managers", data: "Calls, notes", risk: "Low", approval: "None", usage: "9,210", updated: "May 18" },
  { name: "Lead Scoring", icon: TrendingUp, cat: "Analytics", status: "Enabled", access: "Managers", data: "CRM data", risk: "Medium", approval: "None", usage: "5,480", updated: "May 17" },
  { name: "Deal Risk Insights", icon: AlertTriangle, cat: "Sales", status: "Enabled", access: "Managers", data: "Deals, activity", risk: "Medium", approval: "None", usage: "2,310", updated: "May 17" },
  { name: "Reply Suggestions", icon: Sparkles, cat: "Service", status: "Enabled", access: "Support", data: "Tickets, conversations", risk: "Low", approval: "User review", usage: "6,880", updated: "May 16" },
  { name: "Workflow AI Builder", icon: Workflow, cat: "Automation", status: "Limited", access: "Admins", data: "CRM, workflows", risk: "High", approval: "Admin approval", usage: "730", updated: "May 15" },
  { name: "Proposal Drafting", icon: FileSignature, cat: "Sales", status: "Disabled", access: "No access", data: "CRM, files", risk: "High", approval: "Manager review", usage: "0", updated: "May 14" },
  { name: "Sentiment Analysis", icon: Smile, cat: "Service", status: "Enabled", access: "Support", data: "Conversations", risk: "Low", approval: "None", usage: "4,200", updated: "May 13" },
];

function Features() {
  const [global, setGlobal] = useState({ gen: true, pred: true, agent: false, exp: false, sugg: true });
  const [q, setQ] = useState("");
  const filtered = FEATURES.filter((f) => f.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-5 gap-4">
        <StatCard icon={<Cpu className="w-6 h-6" />} iconBg="bg-blue-50" iconColor="text-blue-500" label="Enabled Features" value="18 / 26" sub="69% of AI features enabled" />
        <StatCard icon={<AlertTriangle className="w-6 h-6" />} iconBg="bg-orange-50" iconColor="text-orange-500" label="High-Risk Features" value="5" sub="Require approval or review" />
        <StatCard icon={<Users className="w-6 h-6" />} iconBg="bg-violet-50" iconColor="text-violet-500" label="Users With Access" value="246" valueColor="text-violet-600" sub="Across 7 roles" />
        <StatCard icon={<Sparkles className="w-6 h-6" />} iconBg="bg-emerald-50" iconColor="text-emerald-500" label="Most Used Feature" value="Email Generator" valueColor="text-[16px] text-emerald-600" sub="12,340 requests this month" />
        <StatCard icon={<ToggleLeft className="w-6 h-6" />} iconBg="bg-slate-100" iconColor="text-slate-500" label="Disabled Features" value="8" sub="Hidden from users" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 space-y-5">
          <Panel title="Feature controls">
            <div className="flex items-center gap-3 mb-4">
              <select className="h-9 px-3 rounded-md border border-slate-200 text-[12px] bg-white"><option>All categories</option></select>
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search features" className="h-9 w-full pl-9 pr-3 rounded-md border border-slate-200 text-[12px]" />
              </div>
              <select className="h-9 px-3 rounded-md border border-slate-200 text-[12px] bg-white"><option>Risk: All</option></select>
              <button className="h-9 px-3 rounded-md border border-blue-200 text-[12px] text-blue-600 font-medium flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" />Bulk actions</button>
            </div>
            <table className="w-full text-[12px]">
              <thead><tr className="text-slate-500 text-left">
                <th className="py-2 pr-2"><input type="checkbox" /></th>
                <th className="py-2">Feature name</th><th>Category</th><th>Status</th><th>Access</th><th>Data used</th><th>Risk</th><th>Approval</th><th>Usage</th><th>Last updated</th>
              </tr></thead>
              <tbody>
                {filtered.map((f) => (
                  <tr key={f.name} className="border-t border-slate-100">
                    <td className="py-2.5 pr-2"><input type="checkbox" /></td>
                    <td className="py-2.5 flex items-center gap-2"><f.icon className="w-3.5 h-3.5 text-slate-500" />{f.name}</td>
                    <td>{f.cat}</td>
                    <td><span className="flex items-center gap-1.5"><Dot color={f.status === "Enabled" ? "bg-emerald-500" : f.status === "Limited" ? "bg-orange-500" : "bg-slate-400"} />{f.status}</span></td>
                    <td>{f.access}</td><td>{f.data}</td>
                    <td><span className="flex items-center gap-1.5"><Dot color={f.risk === "High" ? "bg-rose-500" : f.risk === "Medium" ? "bg-orange-400" : "bg-emerald-500"} />{f.risk}</span></td>
                    <td>{f.approval}</td><td>{f.usage}</td><td>{f.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-between mt-4 text-[12px] text-slate-500">
              <span>Showing 1 to {filtered.length} of 26 features</span>
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 border border-slate-200 rounded flex items-center justify-center"><ChevronLeft className="w-3 h-3" /></button>
                {[1,2,3].map((p) => <button key={p} className={`w-7 h-7 rounded text-[12px] ${p===1?"bg-[#2563eb] text-white":"border border-slate-200"}`}>{p}</button>)}
                <button className="w-7 h-7 border border-slate-200 rounded flex items-center justify-center"><ChevronRight className="w-3 h-3" /></button>
              </div>
            </div>
          </Panel>
          <div className="grid grid-cols-2 gap-5">
            <Panel title="Recommended feature actions" info><div className="space-y-2 text-[12px]">
              {[
                { t: "2 high-risk features are enabled for broad user groups", r: "High", c: "red" as const },
                { t: "1 disabled feature is still referenced in automation", r: "Medium", c: "orange" as const },
                { t: "Approval is missing for external content generation", r: "Medium", c: "blue" as const },
              ].map((x, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded border border-slate-100">
                  <span className="flex items-center gap-2"><AlertTriangle className={`w-3.5 h-3.5 text-${x.c}-500`} />{x.t}</span>
                  <Pill color={x.c}>{x.r}</Pill>
                </div>
              ))}
            </div></Panel>
            <Panel title="Feature usage by category" info><div className="space-y-2 text-[12px]">
              {[["Sales AI",13210,46],["Service AI",6880,24],["Analytics AI",4140,14],["Marketing AI",2620,9],["Automation AI",2080,7]].map(([n,v,p]: any) => (
                <div key={n} className="grid grid-cols-[1fr_auto_60px_40px] gap-3 items-center">
                  <span>{n}</span><span className="text-slate-500">{v.toLocaleString()}</span>
                  <div className="h-1.5 bg-slate-100 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${p*2}%` }} /></div>
                  <span className="text-right text-slate-500">{p}%</span>
                </div>
              ))}
            </div></Panel>
          </div>
        </div>
        <div className="space-y-5">
          <Panel title="Global feature controls" info action={<Toggle on onChange={() => {}} />}>
            <div className="space-y-3 text-[13px]">
              {[
                ["gen","Generative AI features",Sparkles],
                ["pred","Predictive AI features",TrendingUp],
                ["agent","Agentic actions",Bot],
                ["exp","Experimental features",Activity],
                ["sugg","AI suggestions in CRM",MessageSquare],
              ].map(([k,label,Icon]: any) => (
                <div key={k} className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><Icon className="w-4 h-4 text-slate-500" />{label}</span>
                  <Toggle on={(global as any)[k]} onChange={(v) => setGlobal({ ...global, [k]: v })} />
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="Feature categories" info><div className="space-y-2 text-[13px]">
            {[["Sales AI",8,"text-blue-500",Mail],["Service AI",5,"text-violet-500",Users],["Marketing AI",4,"text-rose-500",Megaphone],["Analytics AI",4,"text-emerald-500",BarChart2],["Automation AI",5,"text-orange-500",Workflow]].map(([n,c,col,Ic]: any) => (
              <div key={n} className="flex items-center justify-between"><span className="flex items-center gap-2"><Ic className={`w-4 h-4 ${col}`} />{n}</span><span className="text-slate-500">{c}</span></div>
            ))}
          </div></Panel>
          <Panel title="Approval policies" info><div className="space-y-2 text-[13px]">
            {[["External messages","User review","text-blue-600"],["Record updates","Manager approval","text-orange-600"],["Workflow changes","Admin approval","text-violet-600"],["Sensitive data outputs","Blocked","text-rose-600"]].map(([a,b,c]: any) => (
              <div key={a} className="flex items-center justify-between"><span>{a}</span><span className={`text-[12px] font-medium ${c}`}>{b}</span></div>
            ))}
          </div></Panel>
        </div>
      </div>
    </div>
  );
}

/* ---------- Fields & Data Access ---------- */
const FIELDS = [
  { name: "First Name", type: "Text", cls: "General", clsColor: "green", llm: "Allowed", mask: false, notes: "Basic identity" },
  { name: "Last Name", type: "Text", cls: "General", clsColor: "green", llm: "Allowed", mask: false, notes: "Basic identity" },
  { name: "Email", type: "Email", cls: "PII", clsColor: "orange", llm: "Masked", mask: true, notes: "Masked local-part" },
  { name: "Phone", type: "Phone", cls: "PII", clsColor: "orange", llm: "Masked", mask: true, notes: "Show last 2 digits" },
  { name: "Alternate Phone", type: "Phone", cls: "PII", clsColor: "orange", llm: "Blocked", mask: false, notes: "Do not send" },
  { name: "Job Title", type: "Text", cls: "General", clsColor: "green", llm: "Allowed", mask: false, notes: "Work info" },
  { name: "Lead Source", type: "Picklist", cls: "General", clsColor: "green", llm: "Allowed", mask: false, notes: "Acquisition info" },
  { name: "Annual Revenue", type: "Currency", cls: "Financial", clsColor: "orange", llm: "Masked", mask: true, notes: "Rounded to range" },
  { name: "Contract Value", type: "Currency", cls: "Financial", clsColor: "orange", llm: "Blocked", mask: false, notes: "Confidential" },
  { name: "Personal Notes", type: "Long Text", cls: "PII", clsColor: "orange", llm: "Blocked", mask: false, notes: "Contains PII" },
  { name: "Credit Score", type: "Number", cls: "Financial", clsColor: "orange", llm: "Blocked", mask: false, notes: "Highly sensitive" },
  { name: "National ID", type: "Text", cls: "PII", clsColor: "orange", llm: "Blocked", mask: false, notes: "Government ID" },
  { name: "Bank Account", type: "Text", cls: "Financial", clsColor: "orange", llm: "Blocked", mask: false, notes: "Payment data" },
  { name: "Health Details", type: "Long Text", cls: "Health", clsColor: "red", llm: "Blocked", mask: false, notes: "Health information" },
];

function Fields() {
  const [rows, setRows] = useState(FIELDS);
  const [access, setAccess] = useState({ crm: true, email: true, files: true, notes: true, analytics: false });
  const [ext, setExt] = useState({ web: true, apps: true, third: true, providers: false, approved: true });
  const [retain, setRetain] = useState({ prompts: true, zero: false, improve: false, audit: true });
  const selectedCount = rows.filter((r) => r.mask).length;
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center"><Globe className="w-6 h-6 text-emerald-500" /></div>
          <div><div className="text-[12px] text-slate-500">Global AI Access</div><div className="text-[18px] font-semibold text-emerald-600 mt-0.5">Enabled</div><div className="text-[11px] text-slate-400">All systems operational</div></div>
          <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto" />
        </div>
        <StatCard icon={<Box className="w-6 h-6" />} iconBg="bg-blue-50" iconColor="text-blue-500" label="Allowed Modules" value="6" sub="Modules available to AI" />
        <StatCard icon={<Lock className="w-6 h-6" />} iconBg="bg-orange-50" iconColor="text-orange-500" label="Restricted Fields" value="24" sub="Blocked from all LLMs" />
        <StatCard icon={<EyeOff className="w-6 h-6" />} iconBg="bg-violet-50" iconColor="text-violet-500" label="Masked Fields" value="11" valueColor="text-violet-600" sub="Masked before sending" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 space-y-5">
          <Panel title="Field restrictions">
            <div className="flex items-center gap-3 mb-4">
              <select className="h-9 px-3 rounded-md border border-slate-200 text-[12px] bg-white w-44"><option>Contacts</option><option>Deals</option><option>Accounts</option></select>
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input placeholder="Search fields" className="h-9 w-full pl-9 pr-3 rounded-md border border-slate-200 text-[12px]" />
              </div>
              <button className="h-9 px-3 rounded-md border border-blue-200 text-blue-600 text-[12px] font-medium flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" />Add restriction</button>
            </div>
            <table className="w-full text-[12px]">
              <thead><tr className="text-slate-500 text-left">
                <th className="py-2 pr-2"><input type="checkbox" /></th><th>Field name</th><th>Type</th>
                <th>Classification <HelpCircle className="w-3 h-3 inline text-slate-400" /></th>
                <th>Send to LLM</th><th>Mask before send</th><th>Notes</th>
              </tr></thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.name} className="border-t border-slate-100">
                    <td className="py-2 pr-2"><input type="checkbox" /></td>
                    <td>{r.name}</td><td className="text-slate-500">{r.type}</td>
                    <td><span className="flex items-center gap-1.5"><Dot color={r.clsColor==="green"?"bg-emerald-500":r.clsColor==="orange"?"bg-orange-500":"bg-rose-500"} />{r.cls}</span></td>
                    <td>{r.llm === "Allowed" ? <span className="flex items-center gap-1 text-emerald-600"><CheckCircle2 className="w-3 h-3" />Allowed</span> : r.llm === "Masked" ? <span className="flex items-center gap-1 text-orange-600"><EyeOff className="w-3 h-3" />Masked</span> : <span className="flex items-center gap-1 text-slate-500"><Lock className="w-3 h-3" />Blocked</span>}</td>
                    <td>{r.llm !== "Blocked" ? <Toggle on={r.mask} onChange={(v) => setRows(rows.map((x, j) => j === i ? { ...x, mask: v } : x))} /> : <span className="text-slate-400">—</span>}</td>
                    <td className="text-slate-500">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-between mt-4 text-[12px] text-slate-500">
              <span>Selected fields will never be sent to any external or internal LLM.</span>
              <span>{selectedCount} fields selected</span>
            </div>
          </Panel>
          <Panel title="Sensitive data policy" info>
            <div className="grid grid-cols-6 gap-3">
              {[
                ["PII","Personally identifiable information","bg-orange-50 border-orange-200 text-orange-600"],
                ["Financial","Financial and payment information","bg-amber-50 border-amber-200 text-amber-600"],
                ["Legal","Legal and contractual information","bg-blue-50 border-blue-200 text-blue-600"],
                ["Health","Health and medical information","bg-rose-50 border-rose-200 text-rose-600"],
                ["Restricted","Highly sensitive blocked from all LLMs","bg-red-50 border-red-200 text-red-600"],
              ].map(([t,d,c]: any) => (
                <div key={t} className={`rounded-lg border p-3 ${c}`}>
                  <div className="text-[12px] font-semibold flex items-center gap-1"><Dot color="bg-current" />{t}</div>
                  <div className="text-[11px] mt-1 opacity-80">{d}</div>
                </div>
              ))}
              <div className="col-span-1 flex items-center gap-2 text-[11px] text-slate-500"><ShieldCheck className="w-4 h-4 text-slate-400" />Fields marked Restricted are automatically blocked from all LLMs.</div>
            </div>
          </Panel>
        </div>
        <div className="space-y-5">
          <Panel title="Global AI access" action={<Toggle on onChange={() => {}} />}>
            <div className="space-y-3 text-[13px]">
              {[["crm","CRM record data","Access to CRM object data and fields",Database],["email","Emails & conversations","Access to email content and threads",Mail],["files","Files & attachments","Access to files and document content",FileText],["notes","Notes","Access to notes and comments",StickyNote],["analytics","Analytics data","Access to dashboards and reports",BarChart2]].map(([k,t,d,Ic]: any) => (
                <div key={k} className="flex items-start justify-between gap-2">
                  <div className="flex gap-2"><Ic className="w-4 h-4 text-slate-500 mt-0.5" /><div><div className="font-medium">{t}</div><div className="text-[11px] text-slate-500">{d}</div></div></div>
                  <Toggle on={(access as any)[k]} onChange={(v) => setAccess({ ...access, [k]: v })} />
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="External data access"><div className="space-y-3 text-[13px]">
            {[["web","Allow web search for AI answers","Let AI search the web for context"],["apps","Allow AI to access other CRM apps","Cross-app data usage within ecosystem"],["third","Allow third-party integrations","Use data via approved integrations"],["providers","Allow external model providers","Send data to external model APIs"],["approved","Approved providers only","Restrict to approved model providers"]].map(([k,t,d]: any) => (
              <div key={k} className="flex items-start justify-between gap-2">
                <div><div className="font-medium">{t}</div><div className="text-[11px] text-slate-500">{d}</div></div>
                <Toggle on={(ext as any)[k]} onChange={(v) => setExt({ ...ext, [k]: v })} />
              </div>
            ))}
          </div></Panel>
          <Panel title="Data retention"><div className="space-y-3 text-[13px]">
            <div className="flex items-center justify-between"><span>Retain prompts & outputs</span><Toggle on={retain.prompts} onChange={(v) => setRetain({...retain, prompts: v})} /></div>
            <div className="flex items-center justify-between"><span>Retention period</span><select className="h-7 px-2 rounded border border-slate-200 text-[12px]"><option>30 days</option><option>60 days</option><option>90 days</option></select></div>
            <div className="flex items-start justify-between"><div><div className="font-medium">Zero retention mode</div><div className="text-[11px] text-slate-500">Do not store prompts or outputs</div></div><Toggle on={retain.zero} onChange={(v) => setRetain({...retain, zero: v})} /></div>
            <div className="flex items-start justify-between"><div><div className="font-medium">Use data for model improvement</div><div className="text-[11px] text-slate-500">Allow data to improve models</div></div><Toggle on={retain.improve} onChange={(v) => setRetain({...retain, improve: v})} /></div>
            <div className="flex items-start justify-between"><div><div className="font-medium">Log AI requests for audit</div><div className="text-[11px] text-slate-500">Store request metadata for audits</div></div><Toggle on={retain.audit} onChange={(v) => setRetain({...retain, audit: v})} /></div>
          </div></Panel>
        </div>
      </div>
    </div>
  );
}

/* ---------- Users & Permissions ---------- */
const ROLES = [
  { name: "System Administrator", users: 4, ai: "Full", risk: "Low" },
  { name: "Sales Manager", users: 12, ai: "Full", risk: "Low" },
  { name: "Sales Rep", users: 86, ai: "Limited", risk: "Medium" },
  { name: "Support Agent", users: 42, ai: "Limited", risk: "Low" },
  { name: "Marketing", users: 28, ai: "Standard", risk: "Low" },
  { name: "Analyst", users: 18, ai: "Read-only", risk: "Low" },
  { name: "Guest", users: 56, ai: "None", risk: "Low" },
];

function UsersPermissions() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-4">
        <StatCard icon={<Users className="w-6 h-6" />} iconBg="bg-violet-50" iconColor="text-violet-500" label="Active AI Users" value="246" valueColor="text-violet-600" sub="24% of total users" />
        <StatCard icon={<ShieldCheck className="w-6 h-6" />} iconBg="bg-emerald-50" iconColor="text-emerald-500" label="Roles With AI" value="7" sub="All roles configured" />
        <StatCard icon={<AlertTriangle className="w-6 h-6" />} iconBg="bg-orange-50" iconColor="text-orange-500" label="Elevated Permissions" value="14" sub="Manager-level or above" />
        <StatCard icon={<Ban className="w-6 h-6" />} iconBg="bg-rose-50" iconColor="text-rose-500" label="Restricted Users" value="9" valueColor="text-rose-600" sub="No AI access" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2"><Panel title="Roles & AI permissions">
          <table className="w-full text-[12px]">
            <thead><tr className="text-slate-500 text-left"><th className="py-2">Role</th><th>Users</th><th>AI access</th><th>Risk</th><th></th></tr></thead>
            <tbody>{ROLES.map((r) => (
              <tr key={r.name} className="border-t border-slate-100">
                <td className="py-2.5 font-medium">{r.name}</td>
                <td>{r.users}</td>
                <td><Pill color={r.ai === "Full" ? "blue" : r.ai === "None" ? "gray" : "purple"}>{r.ai}</Pill></td>
                <td><span className="flex items-center gap-1.5"><Dot color={r.risk === "Medium" ? "bg-orange-400" : "bg-emerald-500"} />{r.risk}</span></td>
                <td className="text-right"><button className="text-blue-600 text-[12px]">Edit</button></td>
              </tr>
            ))}</tbody>
          </table>
        </Panel></div>
        <Panel title="Permission rules"><div className="space-y-3 text-[13px]">
          {[["Require MFA for AI access",true],["Block AI for inactive users",true],["Restrict by IP range",false],["Approval for elevated AI",true]].map(([t,v]: any) => (
            <div key={t} className="flex items-center justify-between"><span>{t}</span><Toggle on={v} onChange={() => {}} /></div>
          ))}
        </div></Panel>
      </div>
    </div>
  );
}

/* ---------- Agents ---------- */
const AGENTS = [
  { name: "Email Generator", icon: Mail, status: "Active", scope: "Sales", trigger: "Manual", runs: 12340 },
  { name: "Deal Follow-up Agent", icon: TrendingUp, status: "Active", scope: "Deals", trigger: "Auto", runs: 4220 },
  { name: "Call Summary", icon: Phone, status: "Active", scope: "Calls", trigger: "Auto", runs: 9210 },
  { name: "Workflow AI Builder", icon: Workflow, status: "Limited", scope: "Automation", trigger: "Manual", runs: 730 },
  { name: "Proposal Drafting", icon: FileSignature, status: "Disabled", scope: "Sales", trigger: "Manual", runs: 0 },
];

function AgentsTab() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-4">
        <StatCard icon={<Bot className="w-6 h-6" />} iconBg="bg-blue-50" iconColor="text-blue-500" label="Active Agents" value="8" sub="Across 5 modules" />
        <StatCard icon={<Activity className="w-6 h-6" />} iconBg="bg-emerald-50" iconColor="text-emerald-500" label="Agent Runs" value="26,500" sub="This month" />
        <StatCard icon={<Clock className="w-6 h-6" />} iconBg="bg-violet-50" iconColor="text-violet-500" label="Avg Response" value="1.4s" valueColor="text-violet-600" sub="Across all agents" />
        <StatCard icon={<AlertTriangle className="w-6 h-6" />} iconBg="bg-orange-50" iconColor="text-orange-500" label="Failures" value="12" sub="Last 24 hours" />
      </div>
      <Panel title="Agent registry">
        <table className="w-full text-[12px]">
          <thead><tr className="text-slate-500 text-left"><th className="py-2">Agent</th><th>Status</th><th>Scope</th><th>Trigger</th><th>Runs</th><th></th></tr></thead>
          <tbody>{AGENTS.map((a) => (
            <tr key={a.name} className="border-t border-slate-100">
              <td className="py-2.5 flex items-center gap-2"><a.icon className="w-3.5 h-3.5 text-slate-500" />{a.name}</td>
              <td><span className="flex items-center gap-1.5"><Dot color={a.status === "Active" ? "bg-emerald-500" : a.status === "Limited" ? "bg-orange-500" : "bg-slate-400"} />{a.status}</span></td>
              <td>{a.scope}</td><td>{a.trigger}</td><td>{a.runs.toLocaleString()}</td>
              <td className="text-right space-x-2"><button className="text-blue-600">Configure</button><button className="text-slate-500">Logs</button></td>
            </tr>
          ))}</tbody>
        </table>
      </Panel>
    </div>
  );
}

/* ---------- Usage & Retention ---------- */
function UsageRetention() {
  const [ga, setGa] = useState(true);
  const [me, setMe] = useState({ ext: true, web: true, apps: true, third: false, approved: true });
  const [dr, setDr] = useState({ prompts: true, responses: true, zero: false, train: true });
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-5 gap-4">
        <StatCard icon={<Database className="w-6 h-6" />} iconBg="bg-emerald-50" iconColor="text-emerald-500" label="Monthly AI Credits" value="68,400 / 100,000" sub="68% used" />
        <StatCard icon={<Users className="w-6 h-6" />} iconBg="bg-violet-50" iconColor="text-violet-500" label="Active AI Users" value="246" valueColor="text-violet-600" sub="24% of total users" />
        <StatCard icon={<Activity className="w-6 h-6" />} iconBg="bg-blue-50" iconColor="text-blue-500" label="Total Requests" value="28,930" valueColor="text-blue-600" sub="This month" />
        <StatCard icon={<TrendingUp className="w-6 h-6" />} iconBg="bg-sky-50" iconColor="text-sky-500" label="Projected Usage" value="92%" valueColor="text-sky-600" sub="Projected to limit" />
        <StatCard icon={<AlertTriangle className="w-6 h-6" />} iconBg="bg-rose-50" iconColor="text-rose-500" label="Hard Limit Alerts" value="2" valueColor="text-rose-600" sub="Require attention" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 space-y-5">
          <Panel title="1. Usage limits" info>
            <div className="grid grid-cols-3 gap-4 text-[12px]">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-semibold mb-3">Account-wide limits</div>
                <div className="space-y-2.5">
                  <div className="flex justify-between"><span className="text-slate-500">Monthly credit limit</span><span className="font-medium">100,000</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Alert thresholds</span><span className="font-medium">50%, 80%, 100%</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Hard limit</span><span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" />Enabled</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Auto-pause non-critical features</span><span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" />Enabled</span></div>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-semibold mb-3">Feature limits</div>
                <div className="space-y-2.5">
                  {[["Email Generator","20,000","Soft","orange"],["Call Summary","15,000","Soft","orange"],["Lead Scoring","10,000","Hard","red"],["Deal Insights","15,000","Soft","orange"]].map(([n,v,t,c]: any) => (
                    <div key={n} className="flex justify-between items-center"><span className="text-slate-500">{n}</span><span className="flex items-center gap-2"><span className="font-medium">{v}</span><Pill color={c}>{t} limit</Pill></span></div>
                  ))}
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-semibold mb-3">User limits</div>
                <div className="space-y-2.5">
                  <div><div className="text-slate-500">Default user limit</div><div className="font-medium">1,000 credits/user/month</div></div>
                  <div><div className="text-slate-500">Power user policy</div><div className="font-medium">Up to 5,000 credits/user</div></div>
                  <div className="flex justify-between"><span className="text-slate-500">Team override</span><span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" />Enabled</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Temporary boost</span><span className="font-medium">Up to 2x for 7 days</span></div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel title="2. Usage by feature">
            <table className="w-full text-[12px]">
              <thead><tr className="text-slate-500 text-left"><th className="py-2">Feature</th><th>Requests</th><th>Credits</th><th>Trend</th><th>Limit status</th></tr></thead>
              <tbody>{[["Email Generator",Mail,12340,61.7],["Call Summary",Phone,9210,61.4],["Lead Scoring",TrendingUp,5480,54.8],["Forecast AI",BarChart2,2310,46.2]].map(([n,Ic,v,p]: any) => (
                <tr key={n} className="border-t border-slate-100">
                  <td className="py-2.5 flex items-center gap-2"><Ic className="w-3.5 h-3.5 text-slate-500" />{n}</td>
                  <td>{v.toLocaleString()} <span className="text-slate-400">({p}%)</span></td>
                  <td>{v.toLocaleString()} <span className="text-slate-400">({p}%)</span></td>
                  <td><svg width="80" height="20"><polyline points="0,10 15,7 30,12 45,5 60,10 75,6" fill="none" stroke="#10b981" strokeWidth="1.5" /></svg></td>
                  <td><span className="flex items-center gap-1.5 text-emerald-600"><Dot color="bg-emerald-500" />On track</span></td>
                </tr>
              ))}</tbody>
            </table>
          </Panel>
          <Panel title="3. Policy actions">
            <div className="grid grid-cols-4 gap-3">
              {[["Edit limits","Update account, feature, and user limits",ListChecks],["Download usage report","Export detailed usage report (CSV)",Download],["Pause AI at limit","Pause non-critical features when limit is reached",Pause],["Request more credits","Submit a request to increase your monthly credit limit",FilePlus]].map(([t,d,Ic]: any) => (
                <button key={t} className="text-left border border-slate-200 rounded-lg p-3 hover:bg-slate-50">
                  <Ic className="w-5 h-5 text-blue-500 mb-2" />
                  <div className="text-[12px] font-semibold">{t}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{d}</div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 mt-2" />
                </button>
              ))}
            </div>
          </Panel>
        </div>
        <div className="space-y-5">
          <Panel title="Global AI access" info action={<Toggle on={ga} onChange={setGa} />}>
            <div className="flex items-start gap-2 text-[12px]"><Globe className="w-4 h-4 text-slate-400 mt-0.5" /><div><div>Master switch for AI across the entire CRM.</div><div className="text-emerald-600 font-medium mt-1">{ga ? "Enabled" : "Disabled"}</div></div></div>
          </Panel>
          <Panel title="Model & external access" info>
            <div className="space-y-3 text-[13px]">
              {[["ext","External model access",Mail],["web","Web search access",Globe],["apps","Access to other CRM apps",Box],["third","Third-party data access",AlertTriangle],["approved","Approved providers only",Database]].map(([k,t,Ic]: any) => (
                <div key={k} className="flex items-center justify-between"><span className="flex items-center gap-2"><Ic className="w-4 h-4 text-slate-500" />{t}</span><Toggle on={(me as any)[k]} onChange={(v) => setMe({...me, [k]: v})} /></div>
              ))}
            </div>
          </Panel>
          <Panel title="Data retention" info>
            <div className="space-y-3 text-[13px]">
              <div className="flex items-center justify-between"><span>Retention period</span><select className="h-7 px-2 rounded border border-slate-200 text-[12px]"><option>30 days</option></select></div>
              {[["prompts","Retain prompts"],["responses","Retain responses"],["zero","Zero retention mode"],["train","Model training opt-out"]].map(([k,t]: any) => (
                <div key={k} className="flex items-center justify-between"><span>{t}</span><Toggle on={(dr as any)[k]} onChange={(v) => setDr({...dr, [k]: v})} /></div>
              ))}
              <div className="flex items-center justify-between"><span>Export logs</span><span className="text-blue-600 flex items-center gap-1 text-[12px]">30 days <ChevronRight className="w-3 h-3" /></span></div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

/* ---------- Audit & Compliance ---------- */
const LOGS = [
  { t: "May 19, 10:42 AM", u: "Ava Verma", ui: "AV", uc: "bg-blue-500", agent: "Email Generator", ai: Mail, mod: "Contacts", evt: "Generated email", data: "CRM + email", act: "Saved draft", appr: "Approved", apc: "green", risk: "Low", rc: "green" },
  { t: "May 19, 09:58 AM", u: "Rohan Mehta", ui: "RM", uc: "bg-rose-500", agent: "Deal Follow-up Agent", ai: TrendingUp, mod: "Deals", evt: "Updated next step", data: "Deals, tasks", act: "Updated record", appr: "Manager approved", apc: "purple", risk: "Medium", rc: "orange" },
  { t: "May 18, 04:15 PM", u: "Maya Singh", ui: "MS", uc: "bg-violet-500", agent: "Call Summary", ai: Phone, mod: "Calls", evt: "Summarized transcript", data: "Calls, notes", act: "Viewed summary", appr: "Auto", apc: "gray", risk: "Low", rc: "green" },
  { t: "May 18, 03:21 PM", u: "Arjun Rao", ui: "AR", uc: "bg-orange-500", agent: "Workflow AI Builder", ai: Workflow, mod: "Automation", evt: "Created workflow step", data: "CRM, workflow", act: "Draft created", appr: "Pending", apc: "orange", risk: "High", rc: "red" },
  { t: "May 18, 12:09 PM", u: "Neha Jain", ui: "NJ", uc: "bg-emerald-500", agent: "Proposal Drafting", ai: FileSignature, mod: "Deals", evt: "Generated proposal", data: "Files, deal data", act: "Blocked export", appr: "Rejected", apc: "red", risk: "High", rc: "red" },
  { t: "May 17, 11:08 AM", u: "Ava Verma", ui: "AV", uc: "bg-blue-500", agent: "Governance Settings", ai: ShieldCheck, mod: "Setup", evt: "Updated restricted fields", data: "Sensitive fields", act: "Policy updated", appr: "Auto", apc: "gray", risk: "Medium", rc: "orange" },
];

function AuditCompliance() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-5 gap-4">
        <StatCard icon={<ListChecks className="w-6 h-6" />} iconBg="bg-blue-50" iconColor="text-blue-500" label="Audit Events" value="28,930" valueColor="text-blue-600" sub="Events retained for 30 days" />
        <StatCard icon={<ShieldAlert className="w-6 h-6" />} iconBg="bg-rose-50" iconColor="text-rose-500" label="Open Risk Alerts" value="3" valueColor="text-rose-600" sub="Require immediate review" />
        <StatCard icon={<Clock className="w-6 h-6" />} iconBg="bg-orange-50" iconColor="text-orange-500" label="Pending Approvals" value="12" valueColor="text-orange-600" sub="AI actions awaiting approval" />
        <StatCard icon={<AlertTriangle className="w-6 h-6" />} iconBg="bg-violet-50" iconColor="text-violet-500" label="Policy Violations" value="7" valueColor="text-violet-600" sub="This month" />
        <StatCard icon={<ShieldCheck className="w-6 h-6" />} iconBg="bg-emerald-50" iconColor="text-emerald-500" label="Compliance Status" value="Healthy" valueColor="text-emerald-600" sub="All core policies active" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2"><Panel title="AI audit log">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1 max-w-xs">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input placeholder="Search logs" className="h-9 w-full pl-9 pr-3 rounded-md border border-slate-200 text-[12px]" />
            </div>
            <select className="h-9 px-3 rounded-md border border-slate-200 text-[12px]"><option>All events</option></select>
            <select className="h-9 px-3 rounded-md border border-slate-200 text-[12px]"><option>All users</option></select>
            <select className="h-9 px-3 rounded-md border border-slate-200 text-[12px]"><option>Last 30 days</option></select>
            <button className="h-9 px-3 rounded-md border border-slate-200 text-[12px] flex items-center gap-1.5"><Download className="w-3.5 h-3.5" />Export</button>
          </div>
          <table className="w-full text-[12px]">
            <thead><tr className="text-slate-500 text-left"><th className="py-2">Time</th><th>User</th><th>Feature / Agent</th><th>Module</th><th>Event</th><th>Data accessed</th><th>Action</th><th>Approval</th><th>Risk</th></tr></thead>
            <tbody>{LOGS.map((l, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="py-2.5 text-slate-500">{l.t}</td>
                <td><span className="flex items-center gap-1.5"><span className={`w-5 h-5 rounded-full ${l.uc} text-white text-[9px] font-semibold flex items-center justify-center`}>{l.ui}</span>{l.u}</span></td>
                <td><span className="flex items-center gap-1.5"><l.ai className="w-3.5 h-3.5 text-slate-500" />{l.agent}</span></td>
                <td>{l.mod}</td><td>{l.evt}</td><td className="text-slate-500">{l.data}</td><td>{l.act}</td>
                <td><Pill color={l.apc as any}>{l.appr}</Pill></td>
                <td><Pill color={l.rc as any}>{l.risk}</Pill></td>
              </tr>
            ))}</tbody>
          </table>
        </Panel>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <Panel title="Human review policies" info><div className="space-y-2.5 text-[13px]">
            {[["External emails","User approval",Mail],["Record updates","Manager approval",Database],["Workflow activation","Admin approval",Workflow],["Sensitive field requests","Blocked",Lock],["Data exports","Admin approval",Download]].map(([t,v,Ic]: any) => (
              <div key={t} className="flex items-center justify-between"><span className="flex items-center gap-2"><Ic className="w-4 h-4 text-slate-500" />{t}</span><span className={`text-[12px] font-medium ${v === "Blocked" ? "text-rose-600" : "text-blue-600"} flex items-center gap-1`}>{v} <ChevronRight className="w-3 h-3" /></span></div>
            ))}
          </div></Panel>
          <Panel title="Recent compliance changes" info><div className="space-y-3 text-[12px]">
            {[["Restricted fields updated","Added 3 fields to restricted list","text-orange-500"],["Model training opt-out enabled","Zero training mode enabled for all users","text-rose-500"],["Approval policy changed for external email","External emails now require user approval","text-blue-500"],["New provider added to approved list","OpenAI GPT-4.1 added to allowed providers","text-emerald-500"]].map(([t,d,c]: any) => (
              <div key={t} className="flex gap-2"><AlertTriangle className={`w-4 h-4 ${c} mt-0.5 shrink-0`} /><div><div className="font-medium">{t}</div><div className="text-[11px] text-slate-500">{d}</div></div></div>
            ))}
          </div></Panel>
        </div>
        </div>
        <div className="space-y-5">
          <Panel title="Risk alerts" info><div className="space-y-2 text-[12px]">
            {[["Sensitive field was requested by Proposal Drafting","High","red"],["External model access enabled for 1 admin role","Medium","orange"],["Usage nearing hard monthly limit","Medium","orange"]].map(([t,r,c]: any) => (
              <div key={t} className="flex items-center justify-between border border-slate-100 rounded-lg p-2.5">
                <span className="flex items-center gap-2"><ShieldAlert className={`w-3.5 h-3.5 text-${c}-500`} />{t}</span>
                <Pill color={c}>{r}</Pill>
              </div>
            ))}
          </div></Panel>
          <Panel title="Compliance policies" info><div className="space-y-2 text-[13px]">
            {[["PII protection","Active","green"],["Financial data masking","Active","green"],["External communication review","Active","green"],["Zero retention mode","Off","gray"],["Approved model providers only","Active","green"]].map(([t,s,c]: any) => (
              <div key={t} className="flex items-center justify-between"><span>{t}</span><Pill color={c}>{s}</Pill></div>
            ))}
          </div></Panel>
          <Panel title="Retention & logging" info><div className="space-y-3 text-[13px]">
            <div className="flex items-center justify-between"><span>Retain prompts</span><Toggle on onChange={() => {}} /></div>
            <div className="flex items-center justify-between"><span>Retain responses</span><Toggle on onChange={() => {}} /></div>
            <div className="flex items-center justify-between"><span>Retention period</span><span className="text-[12px] text-slate-500">30 days</span></div>
            <div className="flex items-center justify-between"><span>Zero retention mode</span><Toggle on={false} onChange={() => {}} /></div>
            <div className="flex items-center justify-between"><span>Exportable audit logs</span><span className="text-blue-600 text-[12px] flex items-center gap-1">Enabled <ChevronRight className="w-3 h-3" /></span></div>
          </div></Panel>
        </div>
      </div>
    </div>
  );
}
