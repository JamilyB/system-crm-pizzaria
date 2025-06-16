export default function SobreTemplate({ name, description, address, image }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-500">📍 {address}</p>
    </div>
  );
}
