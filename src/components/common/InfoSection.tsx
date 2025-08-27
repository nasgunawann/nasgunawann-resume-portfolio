interface InfoSectionProps {
  title: string;
  icon: React.ReactNode;
  items: {
    year: string;
    title: string;
    subtitle?: string;
  }[];
}

export const InfoSection = ({ title, icon, items }: InfoSectionProps) => (
  <div>
    <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
      {icon} {title}
    </h3>
    <ul className="space-y-2 text-gray-300">
      {items.map((item, idx) => (
        <li key={idx}>
          {item.year}:
          <span className="font-semibold text-green-300"> {item.title}</span>
          {item.subtitle && <> – {item.subtitle}</>}
        </li>
      ))}
    </ul>
  </div>
);
