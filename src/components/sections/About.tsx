import { FaQuoteLeft } from "react-icons/fa";
import { InfoSection } from "@common/InfoSection";
import Background from "@assets/images/bg2.png";
import Aboutnas from "@assets/images/aboutnas.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen px-6 py-16 text-white flex flex-col items-center gap-12 z-10"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <h1 className="text-4xl font-header text-green-400 drop-shadow-[0_0_10px_#00ff99]">
        ABOUT ME
      </h1>

      {/* Intro + Education/Experience */}
      <div className="font-body grid md:grid-cols-2 gap-12 max-w-6xl w-full items-start">
        {/* Kiri: Intro + Video */}
        <div className="space-y-6">
          <p className="text-lg text-gray-300">
            Hey there! I’m <b className="text-white">Nasgun</b> – an Information
            Systems student passionate about web development, graphic design,
            and photography. <br />I enjoy blending technology with creativity
            to build digital experiences that are functional and visually
            engaging. I’m always excited to keep learning and share my work
            through meaningful and unique projects.
          </p>
          <p className="flex items-center gap-2 text-green-300 italic">
            <FaQuoteLeft /> Turning ideas into creative experiences.
          </p>

          {/* About Nas */}
          <div className="relative max-w-[500px] w-full">
            {/* Background Layer */}
            <div
              className="absolute inset-0 z-0 rounded-tl-full rounded-bl-lg rounded-br-lg border-4 border-white bg-cover bg-center shadow-[0_0_20px_4px_rgba(255,255,255,0.6)]"
              style={{ backgroundImage: "url('/src/assets/images/bg3.png')" }}
            />

            {/* Subject Layer */}
            <div className="relative z-10">
              <img
                src={Aboutnas}
                alt="Nasrullah pixel art"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>

            {/* Upper Fade Layer */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 z-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Kanan: Education & Experience */}
        <div className="grid gap-8">
          <InfoSection
            title="Education"
            icon={
              <i className="hn hn-seedlings-solid text-green-400 text-4xl pr-4" />
            }
            items={[
              {
                year: "2023–Present",
                title: "Bachelor of Information Systems",
                subtitle: "Universitas Islam Negeri Sumatera Utara",
              },
              {
                year: "2024",
                title: "Google UX Design Professional Certificate",
                subtitle: "Coursera",
              },
              {
                year: "2025",
                title: "Graphic Design Essentials",
                subtitle: "Canva",
              },
              {
                year: "2025",
                title: "Coding Camp  - Software Engineering",
                subtitle: "RevoU",
              },
              {
                year: "2025",
                title: "Guide to Learn SQL with AI",
                subtitle: "DQLab",
              },
              {
                year: "2025",
                title: "Programming Concepts",
                subtitle:
                  "Digital Literacy Development Center KOMDIGI Indonesia",
              },
              {
                year: "2025",
                title:
                  "Introduction to Digital Products and Graphic Design for Young Workforce Micro Skill Digital Talent Scholarship",
                subtitle:
                  "Digital Literacy Development Center KOMDIGI Indonesia",
              },
              {
                year: "2025",
                title: "Project Management Training",
                subtitle:
                  "Fresh Graduate Academy - Google & Digital Literacy Development Center KOMDIGI Indonesia",
              },
            ]}
          />

          <InfoSection
            title="Experience"
            icon={
              <i className="hn hn-sun-solid text-green-400 text-4xl pr-4" />
            }
            items={[
              {
                year: "2023–Present",
                title: "Freelance Web Developer & Graphic Designer",
                subtitle: "Nanasgunung Creative Studio",
              },
              {
                year: "2022-2023",
                title: "Graphic Design Intern",
                subtitle: "KalenderKonten",
              },
              {
                year: "2025",
                title: "Academic Information System (SIAKAD) Project",
                subtitle: "Agile SDLC Coursework",
              },
            ]}
          />

          {/* CTA */}
          <div className="mt-10">
            <button className="px-6 py-3 bg-green-500 font-bold text-shadow-lg rounded shadow hover:bg-green-400 transition flex items-center gap-2">
              <i className="hn hn-message-solid" />
              Let’s Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
