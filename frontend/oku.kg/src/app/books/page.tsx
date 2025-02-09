export default function BooksPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">📚 Список книг</h1>
        <ul className="space-y-2">
          <li className="p-4 bg-white shadow rounded-lg">📖 Гарри Поттер</li>
          <li className="p-4 bg-white shadow rounded-lg">📖 Властелин Колец</li>
          <li className="p-4 bg-white shadow rounded-lg">📖 1984</li>
        </ul>
      </div>
    );
  }

  