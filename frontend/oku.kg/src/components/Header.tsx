import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">📚 oku.kg</h1>
      <nav>
        <Link className="px-3" href="/">Главная</Link>
        <Link className="px-3" href="/books">Книги</Link>
      </nav>
    </header>
  );
}

