const barColorMap: Record<string, string> = {
  emerald: "bg-emerald-400",
  red: "bg-red-400",
  pink: "bg-pink-400",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
};

const StatBar = ({
  label,
  value,
  color = "green",
  icon,
}: {
  label: string;
  value: number;
  color?: string;
  icon?: React.ReactNode;
}) => {
  const barColor = barColorMap[color] ?? "bg-green-400";

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm font-medium">
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span>{label}</span>
        </div>
        <span>{value}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded">
        <div
          className={`h-full rounded ${barColor} transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default StatBar;
