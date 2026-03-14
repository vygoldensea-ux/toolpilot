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
      className="group tp-panel flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-brand-200"
    >
      <div className="flex items-start justify-between gap-4">
        <ToolIcon slug={tool.slug} />
        <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          {tool.status === "live" ? "Live" : "Soon"}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#292456]">{tool.name}</h3>
      <p className="mt-3 text-sm leading-7 text-[#666b86]">{tool.summary}</p>
      <span className="mt-6 text-sm font-semibold text-brand-700">
        {tool.status === "live" ? "Open tool" : "Coming soon"}
      </span>
    </Link>
  );
}
