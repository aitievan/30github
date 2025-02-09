export default function BookPage({ params }: { params: { id: string } }) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">📖 Книга: {params.id}</h1>
        <p className="text-gray-600">Описание книги появится здесь...</p>
      </div>
    );
  }
  