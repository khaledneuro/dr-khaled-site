"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "../assets/profile.jpg";
import fcdFig from "../assets/research/fcd.png";
import boldFig from "../assets/research/bold.png";
import ariaFig from "../assets/research/aria.png";
import maturationFig from "../assets/research/maturation.png";
import apoeFig from "../assets/research/apoe.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:items-start">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-300">
              Consultant Neuroradiologist
            </p>

            <Image
              src={profilePic}
              alt="Dr Khaled Gad"
              className="mb-8 h-44 w-44 rounded-full object-cover ring-4 ring-cyan-300/40"
              priority
            />

            <h1 className="whitespace-nowrap text-5xl font-bold tracking-tight">
              Dr Khaled Gad
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Advanced and functional neuroimaging consultant focused on
              presurgical fMRI, DTI tractography, MRS, perfusion imaging,
              neuro-oncology, epilepsy imaging, dementia, and AI-assisted
              neuroradiology research.
            </p>
          </div>

          <div>
            <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
              <h2 className="text-3xl font-bold">
                About Me & My Journey in Neuroradiology
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300">
                My professional journey has been shaped by a long-standing
                interest in advanced neuroimaging and its direct clinical value
                in complex neurosciences practice. Originally from Egypt, where
                I completed my radiology residency and early neuroradiology
                training, my academic background later included a
                neuroradiology fellowship at Johns Hopkins University,
                neuroimaging research training at Virginia Tech, and an MSc in
                Advanced Neuroimaging with Distinction from the UCL Queen
                Square Institute of Neurology.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Over the past several years, I have led the establishment and
                development of Kuwait’s first dedicated clinical fMRI and DTI
                service for presurgical planning, building the service from its
                early stages into a nationally integrated advanced
                neuroimaging pathway. I remain particularly enthusiastic about
                supporting neuroradiologists and healthcare institutions
                interested in establishing, expanding, or optimizing advanced
                neuroimaging and presurgical planning services.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Outside medicine, I enjoy piano and visual arts, both of which
                continue to influence the way I perceive neuroimaging. I often
                find parallels between musical structure, artistic composition,
                and the spatial and functional organization of the brain
                revealed through advanced imaging.
              </p>
            </section>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {[
                ["about", "👤", "About"],
                ["research", "🔬", "Research"],
                ["publications", "📚", "Publications"],
                ["posters", "🧾", "Posters"],
                ["clips", "🎥", "Academic Clips"],
                ["neuroart", "🎨", "NeuroArt"],
              ].map(([key, icon, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`rounded-2xl border p-4 text-center transition ${
                    activeSection === key
                      ? "border-cyan-300 bg-slate-900"
                      : "border-slate-700 hover:border-cyan-300 hover:bg-slate-900"
                  }`}
                >
                  <div className="text-2xl">{icon}</div>
                  <div className="mt-2 text-sm font-semibold text-cyan-300">
                    {label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeSection !== "about" && (
          <div className="mt-12 w-full rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            {activeSection === "research" && (
              <section>
                <h2 className="text-3xl font-bold">Research Agenda</h2>

                <div className="mt-8 space-y-12">
                  {[
                    [
                      fcdFig,
                      "Cortex-Aware Deep Learning for Detection of FCD in Children",
                    ],
                    [
                      boldFig,
                      "The BOLD Framework for Establishing a Nationwide fMRI Service",
                    ],
                    [
                      ariaFig,
                      "Dual-Pipeline Deep Learning for ARIA-E and ARIA-H Detection",
                    ],
                    [
                      maturationFig,
                      "Deep Learning Assessment of Pediatric Brain Maturation",
                    ],
                    [
                      apoeFig,
                      "ApoE ε4 and Resting-State fMRI Connectivity",
                    ],
                  ].map(([fig, title], index) => (
                    <div
                      key={index}
                      className="grid gap-8 lg:grid-cols-2 lg:items-center"
                    >
                      <Image
                        src={fig}
                        alt={title as string}
                        className="rounded-2xl border border-slate-800"
                      />
                      <div>
                        <h3 className="text-2xl font-semibold text-cyan-300">
                          {title as string}
                        </h3>
                        <p className="mt-4 leading-8 text-slate-300">
                          Selected academic project in advanced neuroimaging,
                          AI-assisted neuroradiology, presurgical planning, or
                          network neuroscience.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeSection === "publications" && (
  <section>
    <h2 className="text-3xl font-bold">Selected Publications</h2>

    <div className="mt-8 space-y-5 text-lg leading-8 text-slate-300">
      <p>
        • Resectability issues with head and neck cancer.
        <span className="text-cyan-300"> AJNR, 2006.</span>
      </p>

      <p>
        • Syringohydromyelia in Chiari I malformation.
        <span className="text-cyan-300"> AJNR, 2017.</span>
      </p>

      <p>
        • CT of anterior segment eye injuries.
        <span className="text-cyan-300"> AJR, 2017.</span>
      </p>

      <p>
        • Orbitofrontal dysfunction by fMRI post-COVID.
        <span className="text-cyan-300"> JAMA Neurology, 2021.</span>
      </p>

      <p>
        • GBCA deposition MRI study.
        <span className="text-cyan-300"> Clinical Imaging, 2022.</span>
      </p>

      <p>
        • White matter hyperintensities in migraine.
        <span className="text-cyan-300"> BMC Neurology, 2022.</span>
      </p>

      <p>
        • MS relapse-related stuttering & Frontal Aslant Tract.
        <span className="text-cyan-300">
          {" "}
          Acta Neurologica Belgica, 2023.
        </span>
      </p>

      <p>
        • Neuro-schistosomiasis review.
        <span className="text-cyan-300">
          {" "}
          World Neurosurgery, 2024.
        </span>
      </p>

      <p>
        • Manuscript under review: ApoE-related resting-state fMRI
        dysconnectivity study.
      </p>
    </div>

    <a
      href="https://scholar.google.com/citations?user=TL_LNkEAAAAJ&hl=en"
      target="_blank"
      className="mt-10 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
    >
      View Google Scholar Profile
    </a>
  </section>
)}

            {activeSection === "clips" && (
              <section>
                <h2 className="text-3xl font-bold">Academic Clips</h2>
                <p className="mt-5 max-w-4xl leading-8 text-slate-300">
                  Selected one-minute academic clips, invited talks, teaching
                  excerpts, and conference presentations in neuroradiology and
                  advanced neuroimaging.
                </p>
              </section>
            )}

            {activeSection === "neuroart" && (
              <section>
                <h2 className="text-3xl font-bold">NeuroArt</h2>
                <p className="mt-5 max-w-4xl leading-8 text-slate-300">
                  A selected space for NeuroArt Challenge work, combining brain
                  imaging, visual creativity, neuroscience education, and
                  artistic interpretation.
                </p>
              </section>
            )}
          </div>
        )}

        <div className="mt-8 text-sm text-slate-400">
          <p>
            Contact:{" "}
            <a
              href="mailto:khaledgad611@gmail.com"
              className="text-cyan-300 hover:underline"
            >
              khaledgad611@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}