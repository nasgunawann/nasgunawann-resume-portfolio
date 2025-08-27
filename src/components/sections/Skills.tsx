import LogoLoop from "@common/LogoLoop";
import StatBar from "@common/StatBar";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiGit,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMariadb,
  SiPhp,
  SiExpress,
  SiLaravel,
  SiCodeigniter,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

const textColorMap: Record<string, string> = {
  emerald: "text-emerald-400 drop-shadow-[0_0_10px_#34d399]",
  red: "text-red-400 drop-shadow-[0_0_10px_#ff6467]",
  pink: "text-pink-400 drop-shadow-[0_0_10px_#f472b6]",
  yellow: "text-yellow-400 drop-shadow-[0_0_10px_#facc15]",
  green: "text-green-400 drop-shadow-[0_0_10px_#22c55e]",
};

const techLogos = [
  {
    node: <VscVscodeInsiders />,
    title: "VS Code",
    href: "https://code.visualstudio.com",
  },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiMariadb />, title: "MariaDB", href: "https://mariadb.org" },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  {
    node: <SiCodeigniter />,
    title: "CodeIgniter",
    href: "https://codeigniter.com",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  {
    node: <SiAdobephotoshop />,
    title: "Adobe Photoshop",
    href: "https://www.adobe.com/products/photoshop.html",
  },
  {
    node: <SiAdobeillustrator />,
    title: "Adobe Illustrator",
    href: "https://www.adobe.com/products/illustrator.html",
  },
  { node: <SiCanva />, title: "Canva", href: "https://www.canva.com" },
];

const skillStats = [
  {
    category: "Frontend",
    color: "emerald",
    stats: [
      { label: "React", value: 95, icon: <SiReact /> },
      { label: "TypeScript", value: 90, icon: <SiTypescript /> },
      { label: "Tailwind CSS", value: 92, icon: <SiTailwindcss /> },
      { label: "HTML/CSS", value: 98, icon: <SiHtml5 /> },
      { label: "JavaScript", value: 94, icon: <SiJavascript /> },
    ],
  },
  {
    category: "Backend",
    color: "red",
    stats: [
      { label: "Laravel", value: 88, icon: <SiLaravel /> },
      { label: "CodeIgniter", value: 75, icon: <SiCodeigniter /> },
      { label: "PHP", value: 85, icon: <SiPhp /> },
      { label: "MySQL/MariaDB", value: 87, icon: <SiMysql /> },
      { label: "Express.js", value: 80, icon: <SiExpress /> },
    ],
  },
  {
    category: "Design",
    color: "pink",
    stats: [
      { label: "Figma", value: 90, icon: <SiFigma /> },
      { label: "Photoshop", value: 85, icon: <SiAdobephotoshop /> },
      { label: "Illustrator", value: 80, icon: <SiAdobeillustrator /> },
      { label: "Canva", value: 88, icon: <SiCanva /> },
    ],
  },
  {
    category: "Tools",
    color: "yellow",
    stats: [
      { label: "VS Code", value: 95, icon: <VscVscodeInsiders /> },
      { label: "Git", value: 90, icon: <SiGit /> },
      { label: "Bootstrap", value: 80, icon: <SiBootstrap /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <h2 className="text-4xl font-header text-yellow-400 text-center mb-8 drop-shadow-[0_0_10px_#ffdf20]">
        SKILLS
      </h2>

      <div className="relative overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={48}
          gap={64}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0f0f0f"
          ariaLabel="Tech stack showcase"
        />
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillStats.map(({ category, stats, color }) => (
            <div
              key={category}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3
                className={`text-xl font-bold ${textColorMap[color]} mb-4 drop-shadow`}
              >
                {category} Skills
              </h3>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <StatBar
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    color={color}
                    icon={stat.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
