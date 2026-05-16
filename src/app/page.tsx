import Image from "next/image";
import profilePic from "../assets/profile.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl justify-center px-6 py-4">
          <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#research" className="hover:text-cyan-300">Research</a>
            <a href="#publications" className="hover:text-cyan-300">Publications</a>
            <a href="#clips" className="hover:text-cyan-300">Academic Clips</a>
            <a href="#posters" className="hover:text-cyan-300">Posters</a>
            <a href="#neuroart" className="hover:text-cyan-300">NeuroArt</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-300">
          Consultant Neuroradiologist
        </p>

        <Image
          src={profilePic}
          alt="Dr Khaled Gad"
          className="mb-8 h-40 w-40 rounded-full object-cover ring-4 ring-cyan-300/40"
          priority
        />

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Dr Khaled Gad
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
          Advanced and functional neuroimaging consultant with expertise in
          presurgical fMRI, DTI tractography, MRS, perfusion imaging,
          neuro-oncology, epilepsy imaging, dementia, and AI-assisted
          neuroradiology research.
        </p>

        <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <a href="#research" className="rounded-2xl border border-slate-700 p-5 text-center hover:border-cyan-300 hover:bg-slate-900">
            <div className="text-2xl">🔬</div>
            <div className="mt-3 font-semibold text-cyan-300">Research</div>
          </a>

          <a href="#publications" className="rounded-2xl border border-slate-700 p-5 text-center hover:border-cyan-300 hover:bg-slate-900">
            <div className="text-2xl">📚</div>
            <div className="mt-3 font-semibold text-cyan-300">Publications</div>
          </a>

          <a href="#clips" className="rounded-2xl border border-slate-700 p-5 text-center hover:border-cyan-300 hover:bg-slate-900">
            <div className="text-2xl">🎥</div>
            <div className="mt-3 font-semibold text-cyan-300">Academic Clips</div>
          </a>

          <a href="#posters" className="rounded-2xl border border-slate-700 p-5 text-center hover:border-cyan-300 hover:bg-slate-900">
            <div className="text-2xl">🧾</div>
            <div className="mt-3 font-semibold text-cyan-300">Posters</div>
          </a>

          <a href="#neuroart" className="rounded-2xl border border-slate-700 p-5 text-center hover:border-cyan-300 hover:bg-slate-900">
            <div className="text-2xl">🎨</div>
            <div className="mt-3 font-semibold text-cyan-300">NeuroArt</div>
          </a>
        </div>

        <div className="mt-8">
          <a
            href="/files/cv.pdf"
            target="_blank"
            className="inline-block rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            Download CV
          </a>
        </div>
      </section>

      <section id="about" className="border-y border-slate-800 bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold">
            About Me & My Journey in Neuroradiology
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            My professional journey has been shaped by a long-standing interest
            in advanced neuroimaging and its direct clinical value in complex
            neurosciences practice. My work focuses on integrating functional
            MRI, DTI tractography, MRS, perfusion imaging, and resting-state
            connectivity into practical decision-making for neuro-oncology,
            epilepsy surgery, dementia, and presurgical planning.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Over the past several years, I have led the establishment and
            development of Kuwait’s first dedicated clinical fMRI and DTI
            service for presurgical planning, building the service from its
            early stages into a nationally integrated advanced neuroimaging
            pathway. This work reflects my broader academic interest in bridging
            clinical neuroradiology, neuroscience, education, and AI-assisted
            imaging workflows.
          </p>
        </div>
      </section>

      <section id="expertise" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Areas of Expertise</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Presurgical Planning</h3>
              <p className="mt-3 text-slate-600">
                fMRI, DTI, language mapping, motor mapping, tractography, and
                multidisciplinary surgical planning.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Advanced Neuroimaging</h3>
              <p className="mt-3 text-slate-600">
                MRS, perfusion MRI, resting-state fMRI, neuro-oncology,
                epilepsy, dementia, and presurgical imaging workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">AI & Research</h3>
              <p className="mt-3 text-slate-600">
                AI-assisted neuroimaging workflows, lesion segmentation,
                ARIA detection, rs-fMRI analytics, and translational research.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Research Agenda</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Selected ongoing research themes in advanced neuroimaging,
            presurgical mapping, functional connectivity, AI-assisted
            neuroradiology, and clinically meaningful imaging biomarkers.
          </p>
        </div>
      </section>

      <section id="publications" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Selected Publications</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            A curated list of selected publications and academic contributions
            will be added here.
          </p>
        </div>
      </section>

      <section id="clips" className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Academic Clips</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Academic video clips, lectures, and conference presentations will be
            listed here by title, year, and venue.
          </p>
        </div>
      </section>

      <section id="posters" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Posters</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Selected scientific posters and conference materials will be
            available here.
          </p>
        </div>
      </section>

      <section id="neuroart" className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">NeuroArt</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            A selected space for NeuroArt Challenge work, combining brain
            imaging, visual creativity, neuroscience education, and artistic
            interpretation.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Contact</h2>

          <p className="mt-6 text-slate-300">
            Preferred contact:{" "}
            <a href="mailto:khaledgad611@gmail.com" className="text-cyan-300 hover:underline">
              khaledgad611@gmail.com
            </a>
          </p>

          <p className="mt-4 text-slate-400">Additional professional contacts:</p>

          <ul className="mt-3 space-y-2 text-slate-300">
            <li>
              <a href="mailto:khagad@moh.gov.kw" className="text-cyan-300 hover:underline">
                khagad@moh.gov.kw
              </a>
            </li>
            <li>
              <a href="mailto:khaled.gad.20@ucl.ac.uk" className="text-cyan-300 hover:underline">
                khaled.gad.20@ucl.ac.uk
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}