import Link from "next/link";
import type { ToolRegistryItem } from "@/config/site";
import { ToolIcon } from "@/components/ui/ToolIcon";

type ToolCardProps = {
  tool: ToolRegistryItem;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/${tool.slug}`}
      className="group tp-panel flex h-full flex-col p-5 transition hover:border-slate-300"
    >
      <div className="flex items-start justify-between gap-4">
        <ToolIcon slug={tool.slug} />
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{tool.name}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{tool.summary}</p>
      <span className="mt-5 text-sm font-medium text-brand-700">
        {tool.status === "live" ? "Open tool" : "Coming soon"}
      </span>
    </Link>
  );
}
