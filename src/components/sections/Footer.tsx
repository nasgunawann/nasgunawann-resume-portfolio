export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Nasrullah Gunawan. Built with React.js
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/nasgunawann"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nasgunawan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nasgunawann@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
