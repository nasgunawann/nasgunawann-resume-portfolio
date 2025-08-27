interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
}

export default function PortfolioItem({
  title,
  description,
  image,
}: PortfolioItemProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold text-amber-50">{title}</h3>
        <p className="text-m">{description}</p>
      </div>
    </a>
  );
}
