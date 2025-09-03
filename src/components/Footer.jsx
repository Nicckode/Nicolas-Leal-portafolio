export default function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-800 text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Nicolas Leal. All rights reserved.</p>
      <p className="mt-2">
        Built with <span className="text-blue-500">React</span> &{" "}
        <span className="text-sky-400">TailwindCSS</span>
      </p>
    </footer>
  );
}
