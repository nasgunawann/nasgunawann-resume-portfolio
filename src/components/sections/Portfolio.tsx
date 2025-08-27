import PortfolioItem from "@common/PortfolioItem";

const projects = [
  {
    title: "SIAKAD – Academic Information System",
    description:
      "A web-based academic information system designed to manage students, lecturers, courses, and grades with responsive interface.",
    image: "images/portalsia.png",
  },
  {
    title: "Nanasgunung Creative Studio - Landing Page",
    description:
      "A minimalistic personal website showcasing identity and creative works.",
    image: "images/nanasgunung.png",
  },
  {
    title: "Dimsum App Dashboard",
    description:
      "A web-based ordering system for managing dimsum sales with stock and kitchen dashboards.",
    image: "images/dimsum.png",
  },
  {
    title: "Gameboy Style App",
    description:
      "A retro-inspired web app with main menu, letters, snake game, and customizable gallery.",
    image: "images/gameboy.png",
  },
  {
    title: "Love Letter Web App",
    description:
      "A pixel art style love letter web app with letters, tic-tac-toe game, and custom gallery.",
    image: "images/surat.png",
  },
  {
    title: "Class Landing Page",
    description:
      "A central hub website for students to submit and showcase their web assignments.",
    image: "images/silima.png",
  },

  {
    title: "Masjid Website",
    description:
      "A modern mosque website with program schedules, profiles, and community updates.",
    image: "images/masjid.png",
  },
  // Tambahkan lebih banyak item sesuai kebutuhan
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white">
      <section className="relative px-6 py-20 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400 drop-shadow-[0_0_10px_#ffdf20]">
          FEATURED PROJECTS
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
