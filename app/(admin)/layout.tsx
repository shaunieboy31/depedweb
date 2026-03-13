export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-slate-900 text-white p-6 shadow-xl hidden md:block">
        <h2 className="text-xl font-bold mb-8 tracking-wide">Admin Panel</h2>
        <nav className="space-y-4">
          <a href="/dashboard" className="block text-slate-300 hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-800">
            Dashboard Overview
          </a>
          <a href="#" className="block text-slate-300 hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-800">
            Image Manager
          </a>
          <a href="#" className="block text-slate-300 hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-800">
            Document Center
          </a>
          <a href="/" className="block text-slate-400 hover:text-white transition-colors py-2 px-3 mt-8 text-sm">
            &larr; Back to Site
          </a>
        </nav>
      </aside>
      
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Admin User</span>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
          </div>
        </header>

        <div>
          {children}
        </div>
      </main>
    </div>
  );
}
