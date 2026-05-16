"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "../assets/profile.png";
import fcdFig from "../assets/research/fcd.png";
import boldFig from "../assets/research/bold.png";
import ariaFig from "../assets/research/aria.png";
import maturationFig from "../assets/research/maturation.png";
import apoeFig from "../assets/research/apoe.png";
import neuroArtHero from "../assets/neuroimaging-art.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-cyan-300">
              Consultant Neuroradiologist
            </p>

            <Image
              src={profilePic}
              alt="Dr Khaled Gad"
              className="mb-6 h-40 w-40 rounded-full object-cover object-top ring-4 ring-cyan-300/30"
              priority
            />

            <h1 className="whitespace-nowrap text-5xl font-bold tracking-tight">
              Dr Khaled Gad
            </h1>

            <p className="mt-5 max-w-sm text-lg leading-8 text-slate-300">
              Advanced neuroimaging, presurgical fMRI, DTI tractography,
              AI-assisted neuroradiology, and translational neuroscience.
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
                training, my academic background later included a neuroradiology
                fellowship at Johns Hopkins University, neuroimaging research
                training at Virginia Tech, and an MSc in Advanced Neuroimaging
                with Distinction from the UCL Queen Square Institute of
                Neurology.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Over the past several years, I have led the establishment and
                development of Kuwait’s first dedicated clinical fMRI and DTI
                service for presurgical planning, building the service from its
                early stages into a nationally integrated advanced neuroimaging
                pathway. I remain particularly enthusiastic about supporting
                neuroradiologists and healthcare institutions interested in
                establishing, expanding, or optimizing advanced neuroimaging and
                presurgical planning services.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Outside medicine, I play piano and enjoy visual arts, both of which
                continue to influence the way I perceive neuroimaging. I often
                find parallels between musical structure, artistic composition,
                and the spatial and functional organization of the brain
                revealed through advanced imaging.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
          <Image
            src={neuroArtHero}
            alt="Advanced neuroimaging artistic composite"
            className="h-[220px] w-full object-cover"
            priority
          />
        </div>

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
              className={`cursor-pointer rounded-2xl border p-4 text-center transition ${
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

        {activeSection !== "about" && (
          <div className="mt-12 w-full rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            {activeSection === "research" && (
              <section>
                <h2 className="text-3xl font-bold">
                  My Current Research Projects
                </h2>

                <div className="mt-8 space-y-12">
                  {[
                    [
                      fcdFig,
                      "Cortex-Aware Deep Learning for Detection of FCD in Children",
                      "A multimodal T1/FLAIR deep learning framework for subject-level detection of focal cortical dysplasia using cortex-focused preprocessing, asymmetry modeling, and ensemble learning. The project explores AI-assisted identification of subtle cortical abnormalities in pediatric presurgical epilepsy evaluation.",
                    ],
                    [
                      boldFig,
                      "The BOLD Framework for Establishing a Nationwide fMRI Service",
                      "An educational and service-development framework describing the establishment of Kuwait’s first nationwide clinical fMRI service for presurgical planning. The framework addresses infrastructure, protocol optimization, limitations, post-processing, and multidisciplinary communication.",
                    ],
                    [
                      ariaFig,
                      "Dual-Pipeline Deep Learning for ARIA-E and ARIA-H Detection",
                      "A dual AI workflow for automated ARIA-E segmentation and ARIA-H detection using proxy datasets including WMH and VALDO microbleed datasets. The project supports future monitoring workflows for anti-amyloid therapies.",
                    ],
                    [
                      maturationFig,
                      "Deep Learning Assessment of Pediatric Brain Maturation",
                      "A pilot normative modeling study evaluating whether deep learning can capture meaningful developmental maturation patterns on pediatric MRI and potentially identify atypical neurodevelopmental trajectories.",
                    ],
                    [
                      apoeFig,
                      "ApoE ε4 and Resting-State fMRI Connectivity",
                      "A resting-state fMRI connectomics study using ADNI data demonstrating that ApoE ε4-related dysconnectivity extends beyond the default mode network and prominently involves dorsal attention and somatomotor systems.",
                    ],
                  ].map(([fig, title, summary], index) => (
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
                          {summary as string}
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
                  <p>• Resectability issues with head and neck cancer. <span className="text-cyan-300">AJNR, 2006.</span></p>
                  <p>• Syringohydromyelia in Chiari I malformation. <span className="text-cyan-300">AJNR, 2017.</span></p>
                  <p>• CT of anterior segment eye injuries. <span className="text-cyan-300">AJR, 2017.</span></p>
                  <p>• Orbitofrontal dysfunction by fMRI post-COVID. <span className="text-cyan-300">JAMA Neurology, 2021.</span></p>
                  <p>• GBCA deposition MRI study. <span className="text-cyan-300">Clinical Imaging, 2022.</span></p>
                  <p>• White matter hyperintensities in migraine. <span className="text-cyan-300">BMC Neurology, 2022.</span></p>
                  <p>• MS relapse-related stuttering & Frontal Aslant Tract. <span className="text-cyan-300">Acta Neurologica Belgica, 2023.</span></p>
                  <p>• Neuro-schistosomiasis review. <span className="text-cyan-300">World Neurosurgery, 2024.</span></p>
                  <p>• Manuscript under review: ApoE-related resting-state fMRI dysconnectivity study.</p>
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

            {activeSection === "posters" && (
  <section>
    <h2 className="text-3xl font-bold">
      Selected Posters & Scientific Presentations
    </h2>

    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950 p-6">
      <h3 className="text-xl font-semibold text-white">
        View Selected Posters
      </h3>

      <div className="mt-5 space-y-3 text-lg leading-8">
        {[
          "Gadolinium deposition ASPNR2022.pdf",
          "H3K27M QueenSquareSymposium2022 poster.pdf",
          "MRS_AIinPractice_LEEDS2021.pdf",
          "Ocular injury ASHNR2016.pdf",
          "VBM Epilepsy ASFNR2023.pdf",
          "DTI in Glaucoma ASHNR2017.pdf",
        ].map((file) => (
          <p key={file}>
            <a
              href={`/files/posters/${file}`}
              target="_blank"
              className="text-cyan-300 hover:underline"
            >
              {file}
            </a>
          </p>
        ))}
      </div>
    </div>

    <div className="mt-10 space-y-6 text-lg leading-8 text-slate-300">

      <p>
        • Khaled Gad (presenting author), A. Fawaz, I. Ismail,
        L. Alsarraf, F. Dashti, F. Barkhof:
        Whole Brain Volumetry in Adults with Early-Onset MRI-Negative Epilepsy.
        American Society of Functional Neuroradiology Meeting,
        Boston, October 2023.
      </p>

      <p>
        • Khaled Gad, L. Alsarraf, F. Dashti, Nawal Akbar,
        Abrar Hayat:
        The Changing Trend of Gadolinium Brain Deposition Among Children
        After Implementing a New Institutional “Macrocyclic Agent-Only” Policy.
        American Society of Pediatric Neuroradiology,
        Florida, USA, January 2022.
      </p>

      <p>
        • Khaled Gad (presenting author), Topriceanu,
        Constantin-Cristian, Sotirios Bisdas:
        Neuroimaging Correlates of H3K27M-Altered Midline Glioma:
        A Systematic Review and Meta-analysis.
        Annual Meeting of the Queen Square Institute of Neurology,
        London, UK, May 2022.
      </p>

      <p>
        • Khaled Gad (invited speaker), David Yousem:
        Syringohydromyelia in Patients with Chiari I Malformation:
        A Retrospective Analysis.
        Presented during the Chiari Syringomyelia Foundation meeting
        at the Congress of Neurological Surgeons,
        Boston, MA, October 2017.
      </p>

      <p>
        • Sara El-Garawany, Khaled Gad (presenting author),
        Ahmed Anwar, Mohamed El-Beblawy:
        Diffusion Tensor Imaging in Primary Open Angle Glaucoma.
        Educational exhibit at the ASHNR Meeting,
        Las Vegas, NV, 2017.
      </p>

      <p>
        • Imane Yassine, Waleed Eldeeb, Khaled Gad,
        Yosry Ashour, Ahmed Hosny:
        Electroencephalographic and Diffusion Tensor Imaging Changes
        in Idiopathic Epileptic Children.
        Poster presentation awarded as “Best Abstract”
        at the 32nd International Epilepsy Congress,
        Barcelona, Spain, September 2017.
      </p>

      <p>
        • Sachin Gujar, Khaled Gad, Elcin Zan,
        Nafi Aygun, James Zinreich:
        A Step-by-Step Application of Static and Dynamic Multi-Planar
        Reconstructed CT Images to Reduce FESS Complications.
        RSNA Meeting,
        Chicago, IL, November 2016.
      </p>

      <p>
        • Khaled Gad (presenting author), Eric Singman,
        Rohini Nadgir, David Yousem, Jay Pillai:
        CT of Anterior Segment Injuries of the Eye Globe.
        Oral presentation at ASHNR,
        Washington, DC, September 2016.
      </p>

      <p>
        • Merage Ghane, Khaled Gad, Andrew Valdespino,
        Marika Coffman, John Richey:
        The Strength of Cerebello-Thalamic Connectivity
        as a Function of Age in Autism Spectrum Disorders.
        SNF Meeting,
        San Diego, CA, 2014.
      </p>

      <p>
        • Khaled Gad (presenting author), Magdy Elnesr,
        Ossama Adly, Mohamed Hamed, Mohamed Habba,
        David Yousem:
        Pathological Expansion of the Jaw:
        A Useful Parameter in Differentiation Between Benign
        and Malignant Lesions.
        ASNR Meeting,
        New York, NY, April 2012.
      </p>

      <p>
        • Khaled Gad (presenting author), Mohamed Ellabban,
        James Sciubba:
        Trans-facial Dental Ultrasonography (TFD-US):
        A New Technique for Assessment of Jaw Cysts.
        ASNR Meeting,
        Seattle, WA, June 2011.
      </p>

      <p>
        • Khaled Gad (presenting author), Magdy Elnesr,
        Ossama Adly, Mohamed Hamed, Mohamed Habba,
        David Yousem:
        The Effect of Jaw Lesions on the Neurovascular Canals:
        An Important Diagnostic Feature on Dental CT.
        Oral presentation at ESHNR,
        Vienna, Austria, September 2010.
      </p>

      <p>
        • Khaled Gad (presenting author), Magdy El-Nesr,
        Tarek Khalil, Adel Nessim Abu Saif:
        Transcranial Doppler Ultrasonography in Head Injury.
        Oral presentation at the ASNR Meeting,
        San Diego, CA, May 2006.
      </p>

    </div>
  </section>

            {activeSection === "clips" && (
              <section>
                <h2 className="text-3xl font-bold">Academic Clips</h2>
                <p className="mt-5 max-w-4xl leading-8 text-slate-300">
                  Selected one-minute academic clips, invited talks, teaching excerpts, and conference presentations in neuroradiology and advanced neuroimaging.
                </p>
              </section>
            )}

            {activeSection === "neuroart" && (
              <section>
                <h2 className="text-3xl font-bold">NeuroArt</h2>
                <p className="mt-5 max-w-4xl leading-8 text-slate-300">
                  A selected space for NeuroArt Challenge work, combining brain imaging, visual creativity, neuroscience education, and artistic interpretation.
                </p>
              </section>
            )}
          </div>
        )}

        <div className="mt-8 text-sm text-slate-400">
          <p>
            Contact:{" "}
            <a href="mailto:khaledgad611@gmail.com" className="text-cyan-300 hover:underline">
              khaledgad611@gmail.com
            </a>{" "}
            (preferred), or{" "}
            <a href="mailto:khagad@moh.gov.kw" className="text-cyan-300 hover:underline">
              khagad@moh.gov.kw
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}