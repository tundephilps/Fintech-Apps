import React, { useState } from "react";
import Feedback from "../components/Feedback";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

const Demo = () => {
  const [toggle, setToggle] = useState(1);

  const [activeButton, setActiveButton] = useState(0);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <>
      <Header />
      <section className="py-8 text-gray-800">
        <div className="container mx-auto">
          <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">
              Quo et liber recusabo
            </h2>
            <p className="px-8 my-4">
              Graeco causae vim cu, alii option ancillae sea ut. Ad mea alii
              pertinax, ei sed falli ponderum adipisci. Vis iisque scripta cu.
              Sea ex mollis consulatu dissentiet, dicta viris volutpat mea an,
              et nec discere epicuri
            </p>
          </div>
          <div className="grid grid-cols-5 p-4 md:p-8">
            <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
              <button
                onClick={() => updateToggle(1)}
                className={
                  toggle === 1
                    ? "px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-l-2 border-blue-400 text-blue-500"
                    : " px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 hover:border-l-2 hover:border-blue-400 hover:text-blue-500"
                }
              >
                Mucius
              </button>

              <button
                onClick={() => updateToggle(2)}
                className={
                  toggle === 2
                    ? "px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-l-2 border-blue-400 text-blue-500"
                    : " px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 hover:border-l-2 hover:border-blue-400 hover:text-blue-500"
                }
              >
                Aperiam
              </button>
              <button
                onClick={() => updateToggle(3)}
                className={
                  toggle === 3
                    ? "px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-l-2 border-blue-400 text-blue-500"
                    : " px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 hover:border-l-2 hover:border-blue-400 hover:text-blue-500"
                }
              >
                Nonumy
              </button>
              <button
                onClick={() => updateToggle(4)}
                className={
                  toggle === 4
                    ? "px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-l-2 border-blue-400 text-blue-500"
                    : " px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 hover:border-l-2 hover:border-blue-400 hover:text-blue-500"
                }
              >
                Propriae
              </button>
            </div>
            <div
              className={
                toggle === 4
                  ? "flex w-[90vw] lg:w-[60vw] items-center justify-center"
                  : "hidden"
              }
            >
              <iframe
                width="600"
                height="315"
                src="https://www.youtube.com/embed/ldXAtejfPRk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div
              className={
                toggle === 3
                  ? "flex w-[90vw] lg:w-[60vw] items-center justify-center"
                  : "hidden"
              }
            >
              <iframe
                width="600"
                height="315"
                src="https://www.youtube.com/embed/blr9z9ynYrY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div
              className={
                toggle === 2
                  ? "flex w-[90vw] lg:w-[60vw] items-center justify-center"
                  : "hidden"
              }
            >
              <iframe
                width="600"
                height="315"
                src="https://www.youtube.com/embed/DiWyf_RtIYM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div
              className={
                toggle === 1
                  ? "grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left"
                  : "hidden"
              }
            >
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  ></path>
                </svg>
                <h5 className="text-xl font-semibold">
                  Est facilisis necessitatibus ea
                </h5>
                <p>
                  Ex audiam inermis elaboraret eam, oratio petentium ne cum,
                  mundi interesset sit no.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  ></path>
                </svg>
                <h5 className="text-xl font-semibold">Vim iudico iisque te</h5>
                <p>
                  At cibo possim impetus pro, ius id mutat commodo offendit. Cum
                  inani pertinax definitiones ad.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  ></path>
                </svg>
                <h5 className="text-xl font-semibold">Sea inani viris at</h5>
                <p>
                  Et eos atomorum urbanitas accommodare, in suscipit petentium
                  vis. Pro ea nibh praesent postulant.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <h5 className="text-xl font-semibold">
                  Error nihil primis sit ut
                </h5>
                <p>
                  Eu vis urbanitas scripserit, civibus scripserit pro id. Omnes
                  congue contentiones te eos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Feedback />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Demo;
