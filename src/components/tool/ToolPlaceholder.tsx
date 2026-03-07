export function ToolPlaceholder({ name }: { name: string }) {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-7 text-slate-600">
        {name} UI is scaffolded and ready for implementation. This shared shell is already connected to
        metadata, content sections, and related tool discovery.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="toolpilot-input" className="mb-2 block text-sm font-medium text-slate-700">
            Input
          </label>
          <textarea
            id="toolpilot-input"
            className="tp-input min-h-40"
            placeholder="Paste your content here"
            readOnly
            aria-readonly="true"
          />
        </div>
        <div>
          <label htmlFor="toolpilot-output" className="mb-2 block text-sm font-medium text-slate-700">
            Output
          </label>
          <textarea
            id="toolpilot-output"
            className="tp-input min-h-40"
            placeholder="Result will appear here"
            readOnly
            aria-readonly="true"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="tp-button-primary" disabled>
          Run tool
        </button>
        <button type="button" className="tp-button-secondary" disabled>
          Clear
        </button>
      </div>
    </div>
  );
}
