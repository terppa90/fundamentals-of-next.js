export default function Alert({ message }) {
  const bgColor = 'bg-amber-50';
  const textColor = 'text-amber-900';
  const borderColor = 'border-amber-400';

  return (
    <div className={`${bgColor} ${textColor} ${borderColor} border-l-4 p-4 rounded-r shadow-sm my-4 flex items-center`}>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}