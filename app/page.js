import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
//Icons
import { DiReact, DiJsBadge, DiHtml5, DiCss3 } from "react-icons/di";
import profile from "../public/profile.jpeg";
import mentis from "../public/Mentis.png";
import produni from "../public/Produni.png";
import multitool from "../public/dmx_multitool.png";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 min-h-screen md:px-20">
        <section className="md:mb-20 mb-10">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-adlam">EetuPe</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/CV.pdf"
                  download="cv_eetu_petanen.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-left pt-10 md:px-10 flex justify-between">
            <div>
              <h2 className="text-5xl py-2 text-red-600 font-medium md:text-6xl">
                Eetu Petänen
              </h2>
              <h3 className="text-2xl pt-2 md:text-3xl">
                Developer and student.
              </h3>
              <div className="text-5xl flex justify-start py-4 gap-6 text-gray-600">
                <a href="https://twitter.com/epetanen">
                  <AiFillTwitterCircle />
                </a>
                <a href="https://www.linkedin.com/in/eetu-petanen/">
                  <AiFillLinkedin />
                </a>
                <a href="https://www.github.com/EetuPe/">
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <div className="relative rounded-lg md:rounded-full w-40 h-40 overflow-hidden md:h-80 md:w-80">
              <Image src={profile} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section className="md:px-10">
          <h3 className="text-3xl py-1">Projects I've worked on:</h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="relative w-140 h-80 overflow-hidden md:h-40 md:w-140 rounded">
                <Image src={produni} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">Produni</h3>
              <p className="py-2">
                A place for students to keep track of their schedules.
              </p>
              <div class="justify-center my-8 select-none flex">
                <a
                  href="https://github.com/EetuPe/produni1.1"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                >
                  {`</>`}
                </a>
                <a
                  href="https://produni.petanen.com"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-500 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Live View
                </a>
              </div>
              <div className="justify-center my-8 select-none flex">
                <div
                  role="button"
                  title="Hover chip"
                  class="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                >
                  <DiReact />
                  <span class="block text-sm font-medium">React</span>
                </div>
                <div
                  role="button"
                  title="Hover chip"
                  class="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                >
                  <DiJsBadge />
                  <span class="block text-sm font-medium">Javascript</span>
                </div>
                <div
                  role="button"
                  title="Hover chip"
                  class="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                >
                  <DiHtml5 />
                  <span class="block text-sm font-medium">HTML</span>
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="relative w-140 h-80 overflow-hidden md:h-40 md:w-140 rounded">
                <Image src={mentis} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Mentis</h3>
              <p className="py-2">
                A mastermind game where the player can guess the 4 color code by
                inputting a 4-digit code. Each color is assigned a numerical
                value.
              </p>
              <div class="justify-center my-8 select-none flex">
                <a
                  href="https://github.com/EetuPe/mentis"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                >
                  {`</>`}
                </a>
                <a
                  href="https://mentis.petanen.com"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-500 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Live View
                </a>
              </div>
              <div className="justify-center my-8 select-none flex">
                <div
                  role="button"
                  title="Hover chip"
                  class="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                >
                  <DiReact />
                  <span class="block text-sm font-medium">React</span>
                </div>
                <div
                  role="button"
                  title="Hover chip"
                  class="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                >
                  <DiJsBadge />
                  <span class="block text-sm font-medium">Javascript</span>
                </div>
                <div
                  role="button"
                  title="Hover chip"
                  class="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                >
                  <DiHtml5 />
                  <span class="block text-sm font-medium">HTML</span>
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="relative w-140 h-80 overflow-hidden md:h-40 md:w-140 rounded">
                <Image src={multitool} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">DMX Multitool</h3>
              <p className="py-2">
                A tool for lighting technicians to calculate DMX channel values
                for all kinds of fixtures. Works with multiple universes.
              </p>
              <div class="justify-center my-8 select-none flex">
                <a
                  href="https://dmxtool.com"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-500 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Live View
                </a>
              </div>
              <div className="justify-center my-8 select-none flex">
                <div
                  role="button"
                  title="Hover chip"
                  class="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                >
                  <DiReact />
                  <span class="block text-sm font-medium">React</span>
                </div>
                <div
                  role="button"
                  title="Hover chip"
                  class="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                >
                  <DiJsBadge />
                  <span class="block text-sm font-medium">Javascript</span>
                </div>
                <div
                  role="button"
                  title="Hover chip"
                  class="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                >
                  <DiHtml5 />
                  <span class="block text-sm font-medium">HTML</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
