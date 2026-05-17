"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "../assets/profile-new.png";
import fcdFig from "../assets/research/fcd.png";
import boldFig from "../assets/research/bold.png";
import ariaFig from "../assets/research/aria.png";
import maturationFig from "../assets/research/maturation.png";
import apoeFig from "../assets/research/apoe.png";
import neuroArtHero from "../assets/neuroimaging-art.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
          <div className="flex flex-col items-center text-center lg:items-center">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-cyan-300 sm:tracking-[0.35em]">
              Consultant Neuroradiologist
            </p>

            <Image
              src={profilePic}
              alt="Dr Khaled Gad"
              className="mb-6 h-44 w-44 rounded-full object-cover object-[center_-12px] ring-4 ring-cyan-300/30 sm:h-48 sm:w-48"
              priority
            />

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Dr Khaled Gad
            </h1>

            <p className="mt-5 max-w-sm text-base leading-8 text-slate-300 sm:text-lg">
              Advanced neuroimaging, presurgical fMRI, DTI tractography,
              AI-assisted neuroradiology, and translational neuroscience.
            </p>
          </div>

          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
            <h2 className="text-2xl font-bold sm:text-3xl">
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
              Outside medicine, I play piano and enjoy visual arts, both of
              which continue to influence the way I perceive neuroimaging. I
              often find parallels between musical structure, artistic
              composition, and the spatial and functional organization of the
              brain revealed through advanced imaging.
            </p>
          </section>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
          <Image
            src={neuroArtHero}
            alt="Advanced neuroimaging artistic composite"
            className="h-[180px] w-full object-cover sm:h-[220px]"
            priority
          />
        </div>

        <div className="mt-8 space-y-4">
          {[
            ["research", "🔬", "Ongoing Research"],
            ["publications", "📚", "Publications"],
            ["posters", "🧾", "Posters"],
            ["clips", "🎥", "Academic Clips"],
            ["neuroart", "🎨", "NeuroArt"],
            ["gallery", "📸", "Photo Gallery"],
          ].map(([key, icon, label]) => (
            <div
              key={key}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <button
                onClick={() => toggleSection(key)}
                className={`flex w-full cursor-pointer items-center justify-between p-5 text-left transition ${
                  activeSection === key
                    ? "bg-slate-800"
                    : "hover:bg-slate-800/70"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-base font-semibold text-cyan-300 sm:text-lg">
                    {label}
                  </span>
                </div>
                <span className="text-2xl text-cyan-300">
                  {activeSection === key ? "−" : "+"}
                </span>
              </button>

              {activeSection === key && (
                <div className="border-t border-slate-800 p-6 sm:p-8">
                  {key === "research" && (
                    <section>
                      <h2 className="text-2xl font-bold sm:text-3xl">
                        Ongoing Research Projects
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
                            className="grid gap-6 lg:grid-cols-2 lg:items-center"
                          >
                            <Image
                              src={fig}
                              alt={title as string}
                              className="rounded-2xl border border-slate-800"
                            />
                            <div>
                              <h3 className="text-xl font-semibold text-cyan-300 sm:text-2xl">
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

                  {key === "publications" && (
                    <section>
                      <h2 className="text-2xl font-bold sm:text-3xl">
                        Selected Publications
                      </h2>

                      <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
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

                  {key === "posters" && (
                    <section>
                      <h2 className="text-2xl font-bold sm:text-3xl">
                        Selected Posters & Scientific Presentations
                      </h2>

                      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950 p-6">
                        <h3 className="text-xl font-semibold text-white">
                          View Selected Posters
                        </h3>

                        <div className="mt-5 space-y-3 text-base leading-8 sm:text-lg">
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

                      <div className="mt-10 space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
                        <p>• Khaled Gad (presenting author), A. Fawaz, I. Ismail, L. Alsarraf, F. Dashti, F. Barkhof: Whole Brain Volumetry in Adults with Early-Onset MRI-Negative Epilepsy. American Society of Functional Neuroradiology Meeting, Boston, October 2023.</p>
                        <p>• Khaled Gad, L. Alsarraf, F. Dashti, Nawal Akbar, Abrar Hayat: The Changing Trend of Gadolinium Brain Deposition Among Children After Implementing a New Institutional “Macrocyclic Agent-Only” Policy. American Society of Pediatric Neuroradiology, Florida, USA, January 2022.</p>
                        <p>• Khaled Gad (presenting author), Topriceanu, Constantin-Cristian, Sotirios Bisdas: Neuroimaging Correlates of H3K27M-Altered Midline Glioma: A Systematic Review and Meta-analysis. Annual Meeting of the Queen Square Institute of Neurology, London, UK, May 2022.</p>
                        <p>• Khaled Gad (invited speaker), David Yousem: Syringohydromyelia in Patients with Chiari I Malformation: A Retrospective Analysis. Presented during the Chiari Syringomyelia Foundation meeting at the Congress of Neurological Surgeons, Boston, MA, October 2017.</p>
                        <p>• Sara El-Garawany, Khaled Gad (presenting author), Ahmed Anwar, Mohamed El-Beblawy: Diffusion Tensor Imaging in Primary Open Angle Glaucoma. Educational exhibit at the ASHNR Meeting, Las Vegas, NV, 2017.</p>
                        <p>• Imane Yassine, Waleed Eldeeb, Khaled Gad, Yosry Ashour, Ahmed Hosny: Electroencephalographic and Diffusion Tensor Imaging Changes in Idiopathic Epileptic Children. Poster presentation awarded as “Best Abstract” at the 32nd International Epilepsy Congress, Barcelona, Spain, September 2017.</p>
                        <p>• Sachin Gujar, Khaled Gad, Elcin Zan, Nafi Aygun, James Zinreich: A Step-by-Step Application of Static and Dynamic Multi-Planar Reconstructed CT Images to Reduce FESS Complications. RSNA Meeting, Chicago, IL, November 2016.</p>
                        <p>• Khaled Gad (presenting author), Eric Singman, Rohini Nadgir, David Yousem, Jay Pillai: CT of Anterior Segment Injuries of the Eye Globe. Oral presentation at ASHNR, Washington, DC, September 2016.</p>
                        <p>• Merage Ghane, Khaled Gad, Andrew Valdespino, Marika Coffman, John Richey: The Strength of Cerebello-Thalamic Connectivity as a Function of Age in Autism Spectrum Disorders. SNF Meeting, San Diego, CA, 2014.</p>
                        <p>• Khaled Gad (presenting author), Magdy Elnesr, Ossama Adly, Mohamed Hamed, Mohamed Habba, David Yousem: Pathological Expansion of the Jaw: A Useful Parameter in Differentiation Between Benign and Malignant Lesions. ASNR Meeting, New York, NY, April 2012.</p>
                        <p>• Khaled Gad (presenting author), Mohamed Ellabban, James Sciubba: Trans-facial Dental Ultrasonography (TFD-US): A New Technique for Assessment of Jaw Cysts. ASNR Meeting, Seattle, WA, June 2011.</p>
                        <p>• Khaled Gad (presenting author), Magdy Elnesr, Ossama Adly, Mohamed Hamed, Mohamed Habba, David Yousem: The Effect of Jaw Lesions on the Neurovascular Canals: An Important Diagnostic Feature on Dental CT. Oral presentation at ESHNR, Vienna, Austria, September 2010.</p>
                        <p>• Khaled Gad (presenting author), Magdy El-Nesr, Tarek Khalil, Adel Nessim Abu Saif: Transcranial Doppler Ultrasonography in Head Injury. Oral presentation at the ASNR Meeting, San Diego, CA, May 2006.</p>
                      </div>
                    </section>
                  )}

                  {key === "clips" && (
                    <section>
                      <h2 className="text-2xl font-bold sm:text-3xl">
                        Academic Clips
                      </h2>

                      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950 p-6">
                        <h3 className="text-xl font-semibold text-white">
                          Selected Academic Clips
                        </h3>

                        <div className="mt-5 space-y-4 text-base leading-8 sm:text-lg">
                          <p><a href="https://youtu.be/HKo81RxGrV0" target="_blank" className="text-cyan-300 hover:underline">Establishing a New fMRI Service — fMRI Users Forum by NNL, Bergen, Norway</a></p>
                          <p><a href="https://youtu.be/uqUhCnmZI1o" target="_blank" className="text-cyan-300 hover:underline">Making MRS Easy to Interpret — ASFNR, Austin, Texas</a></p>
                          <p><a href="https://youtu.be/iN-DDnyhgJc" target="_blank" className="text-cyan-300 hover:underline">VBM-Based Volumetry in MRI-Negative Epilepsy — ASFNR, Boston, MA</a></p>
                          <p><a href="https://youtu.be/oGby86hA8-A" target="_blank" className="text-cyan-300 hover:underline">DBS Planning — World Parkinson’s Day, Kuwait</a></p>
                          <p><a href="https://youtu.be/PCure-7LaWY" target="_blank" className="text-cyan-300 hover:underline">fMRI/DTI for Presurgical Planning — BSNR Grand Round, UK</a></p>
                        </div>
                      </div>

                      <p className="mt-8 max-w-5xl leading-8 text-slate-300">
                        Selected short academic presentations, invited talks,
                        educational discussions, and neuroradiology teaching
                        clips focused on advanced neuroimaging, presurgical
                        planning, functional MRI, AI applications, and
                        translational neuroscience.
                      </p>
                    </section>
                  )}

                  {key === "neuroart" && (
                    <section>
                      <h2 className="text-2xl font-bold sm:text-3xl">
                        NeuroArt
                      </h2>

                      <p className="mt-5 max-w-5xl leading-8 text-slate-300">
                        NeuroArt is a visual exploration of the intersection
                        between neuroscience, neuroradiology, functional
                        imaging, music, and artistic interpretation. Through
                        selected imaging-based compositions and educational
                        visual concepts, this section reflects how advanced
                        neuroimaging can transcend diagnostic boundaries and
                        evolve into a medium of scientific storytelling and
                        creativity.
                      </p>

                      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950 p-6">
  <h3 className="text-xl font-semibold text-white">
    Featured NeuroArt Collection
  </h3>

  <div className="mt-8 space-y-6">

    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-xl font-semibold text-cyan-300">
        NeuroArt Masterpieces
      </div>

      <a
        href="/files/neuroart/Imaginary_Masterpieces_Inspired_by_Famous_Painters_Art_Styles.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full border border-cyan-300 px-5 py-2 font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950"
      >
        View PDF
      </a>
    </div>

    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-xl font-semibold text-cyan-300">
        fMRI and Musical Creativity by Dr Charles Limb
      </div>

      <a
        href="https://youtu.be/U4k5JFmahVY?si=X4Pu8PoSmVuoPPYL"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full border border-cyan-300 px-5 py-2 font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950"
      >
        Watch Video
      </a>
    </div>

  </div>
</div>
                   </section>
                  )}

                  {key === "gallery" && (
                    <section>
                      <h2 className="text-2xl font-bold sm:text-3xl">
                        Photo Gallery
                      </h2>

                      <p className="mt-5 max-w-5xl leading-8 text-slate-300">
                        A curated visual space for selected professional
                        photographs with colleagues, team members, and
                        collaborators, capturing moments from clinical practice,
                        multidisciplinary teamwork, scientific meetings,
                        educational workshops, and advanced neuroimaging
                        activities.
                      </p>

                      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                        {Array.from({ length: 56 }, (_, i) => {
                          const number = String(i + 1).padStart(2, "0");
                          const src = `/gallery/gallery-${number}.jpeg`;

                          return (
                            <img
                              key={i}
                              src={src}
                              alt={`Gallery photo ${number}`}
                              className="aspect-square w-full rounded-2xl object-contain bg-slate-950 shadow-md transition duration-300 hover:scale-105"
                            />
                          );
                        })}
                      </div>
                    </section>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm leading-7 text-slate-400">
          <p>
            Contact:{" "}
            <a
              href="mailto:khaledgad611@gmail.com"
              className="text-cyan-300 hover:underline"
            >
              khaledgad611@gmail.com
            </a>{" "}
            (preferred), or{" "}
            <a
              href="mailto:khagad@moh.gov.kw"
              className="text-cyan-300 hover:underline"
            >
              khagad@moh.gov.kw
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}