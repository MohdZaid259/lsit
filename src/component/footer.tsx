export default function Footer() {
  return (
    <footer className="border-t bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-20 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row justify-around gap-2">
          <div>© {new Date().getFullYear()} Lateral System for Innovation and Technology. All rights reserved.</div>
          <div className="sm:ml-auto">LS4IT. Engineered textiles for industry.</div>
        </div>
      </footer>
  )
}