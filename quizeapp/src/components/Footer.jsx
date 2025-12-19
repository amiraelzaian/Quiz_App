export default function Footer() {
  return (
    <footer className="w-full text-center py-4 text-sm text-gray-500">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold text-purple-600">Amira Alazian</span>. All
      rights reserved.
    </footer>
  );
}
