export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-heading font-bold text-sm">
          <span className="gradient-text">Muhammad Iklil</span>
        </div>
        <p className="text-subtle text-xs font-body">
          © {new Date().getFullYear()} · Web3 Creator & Community Builder · Indonesia
        </p>
        <div className="font-mono text-xs text-muted">
          Built with ❤️ for Web3
        </div>
      </div>
    </footer>
  )
}
