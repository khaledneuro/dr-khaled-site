import Image from "next/image";
import profilePic from "../assets/profile.jpg";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
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

        <div className="mt-10 flex flex-wrap gap-4">
          <a
  href="mailto:khaledgad611@gmail.com?subject=Website%20Contact"
  className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
>
  Contact Me
</a>

          <a
            href="#expertise"
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-800"
          >
            View Expertise
          </a>
          <a
  href="/files/cv.pdf"
  target="_blank"
  className="rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
>
  Download CV
</a>
        </div>
        <div className="mt-8 text-sm text-slate-400">
  <p>
    Preferred contact:{" "}
    <a
      href="mailto:khaledgad611@gmail.com"
      className="text-cyan-300 hover:underline"
    >
      khaledgad611@gmail.com
    </a>
  </p>

  <p className="mt-2">
    Additional professional contacts:
  </p>

  <ul className="mt-2 space-y-1">
    <li>
      <a
        href="mailto:khagad@moh.gov.kw"
        className="text-cyan-300 hover:underline"
      >
        khagad@moh.gov.kw
      </a>
    </li>

    <li>
      <a
        href="mailto:khaled.gad.20@ucl.ac.uk"
        className="text-cyan-300 hover:underline"
      >
        khaled.gad.20@ucl.ac.uk
      </a>
    </li>
  </ul>
</div>
      </section>

      <section id="expertise" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Areas of Expertise</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Presurgical Planning </h3>
              <p className="mt-3 text-slate-600">
                fMRI, DTI, language mapping, motor mapping, tractography, and
                multidisciplinary surgical planning.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Advanced Neuroimaging</h3>
              <p className="mt-3 text-slate-600">
                MRS, perfusion MRI, resting-state fMRI, neuro-oncology, epilepsy, dementia, and presurgical planning.
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
    </main>
  );
}