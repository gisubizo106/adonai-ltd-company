// app/[locale]/tracking/page.tsx
export default function TrackingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-[60vh]">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Track Your Shipment</h1>
      <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
        <label className="block text-sm font-bold text-slate-700 mb-2">Enter Tracking Number</label>
        <div className="flex gap-4">
          <input type="text" placeholder="e.g. ADONAI-12345" className="flex-1 p-3 border rounded" />
          <button className="bg-emerald-600 text-white px-8 py-3 rounded font-bold hover:bg-emerald-700">
            Track
          </button>
        </div>
      </div>
    </div>
  );
}