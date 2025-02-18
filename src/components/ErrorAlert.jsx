export function ErrorAlert({ opacity }) {
  return (
    <div
      className={`absolute top-5 right-5 bg-red-400/80 flex items-center p-4 rounded-xl transition duration-600 ease-in-out ${opacity}`}
    >
      <span className="text-white">Incorrect IP Address</span>
    </div>
  );
}
