import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/logo.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
// import web1 from "../public/heft.png";
// import web2 from "../public/qube.png";
import web3 from "../public/dash.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import ContactForm from "./components/Contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Ransom</title>
        <meta name="description" content="My personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="px-6 py-6 mb-12 flex justify-between dark:text-white fixed top-0 left-0 w-full bg-white shadow border dark:border-gray-900 dark:bg-gray-800 z-50">
            <div className='flex items-center gap-2 '>
          <div className="flex items-center bg-gradient-to-b from-teal-500 rounded-full w-10 h-10 relative overflow-hidden ">
              <Image src={deved} alt='image' layout="fill" objectFit="cover" />
            </div>
            <h1 className="font-semibold text-xl text-gray-800 dark:text-white">R<span className='text-teal-600 dark:text-teal-400'>A</span>NSOM</h1>
            </div>
            <ul className="flex items-center text-gray-800 dark:text-white">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              {/* <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="text-center p-10 mt-6 py-10">
            <h2 className="text-3xl mt-14 py-2 text-teal-600 uppercase font-semibold dark:text-teal-400 md:text-6xl">
              Andrew Ransom
            </h2>
            <h3 className="text-lg uppercase py-2 dark:text-white md:text-3xl">
              Business Professional / Web Developer.
            </h3>
            <p className="text-sm py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-sm">
            My professional career began in the moving industry. I ran a successful first company becoming one of
the top 3 moving companies by size and revenue in the Greater Memphis area. Where I attracted
investors and communicated with shareholders. I bring a track record of success working in a start-up
environment and have demonstrated a strong background managing companies from ideation to market
launch, and profitable monetization. I am now focusing my efforts in the area of business manangemnt and web development. Strong entrepreneurial spirit and takes on new challenges.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href='https://www.linkedin.com/in/andrew-ransom-b36a02266/'>
              <AiFillLinkedin />
              </a>
              <a href='https://github.com/bigballahransom'>
              <AiFillGithub />
              </a>
            </div>
            {/* <div className="mx-auto justify-center items-center bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} alt='image' layout="fill" objectFit="cover" />
            </div> */}
          </div>
        </section>
        <section>
        <div className="dark:bg-gray-800 p-8 rounded-xl text-gray-800 dark:text-gray-200 shadow-xl border dark:border-gray-800 mt-4">
      <h2 className="text-2xl font-bold mb-4 mt-4 mb-2 ">Professional Skills</h2>
      <div className="flex flex-wrap grid sm:grid-cols-2 gap-4 mx-4">
        <div className="flex items-center space-x-2">
            <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          </div>
          <p>Logistics and Dispatch</p>
        </div>
        <div className="flex items-center space-x-2">
            <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          </div>
          <p>Data Analytics</p>
        </div>
        <div className="flex items-center space-x-2">
            <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          </div>
          <p>Employee Management</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>Project Management</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>Sales Development</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  d="M5 13l4 4L19 7"
/>
</svg>
<p>Entrepreneurial and Innovative</p>
</div>
</div>
</div>
        </section>
        <section>
        <div className="dark:bg-gray-800 mt-8 p-8 rounded-xl text-gray-800 dark:text-gray-200 shadow-xl border dark:border-gray-800 mt-4">
      <h2 className="text-2xl font-bold mb-4 mt-4 mb-2 ">Technical Skills</h2>
      <div className="flex flex-wrap grid sm:grid-cols-2 gap-4 mx-4">
        <div className="flex items-center space-x-2">
            <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          </div>
          <p>JavaScript, HTML, CSS, Python</p>
        </div>
        <div className="flex items-center space-x-2">
            <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          </div>
          <p>React, Node.js, Express.js, GitHub, MongoDB, Firebase, Sanity</p>
        </div>
        <div className="flex items-center space-x-2">
            <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          </div>
          <p>Wordpress and Plugins</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>Gitub and Version Control</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>UX/UI Design</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  d="M5 13l4 4L19 7"
/>
</svg>
<p>APIs and Integrations</p>
</div>
</div>
</div>
        </section>
        <section>
        <div className="p-8 mt-8 dark:bg-gray-800 rounded-xl text-gray-800 dark:text-gray-200 shadow-xl border dark:border-gray-800 mt-4">
      <h2 className="text-2xl font-bold mb-4">Education and Training</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">BBA, Business Management</h3>
        <p className="text-gray-400 mb-4">University of Memphis</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2"> Certifications</h3>
        <ul className="list-disc list-inside">
          <li>Programming with JavaScript, Certificate from Meta</li>
          <li>HTML and CSS, Certificate from Meta</li>
          <li>Version Control, Certificate from Meta</li>
          <li>Introduction to Front End Programming, Certificate from Meta</li>
          <li>Advanced React, Certificate from Meta</li>
          <li>React Basics, Certificate from Meta</li>
          <li>Principles of UX/UI Design, Certificate from Meta</li>
          <li>Front-End Developer Capstone, Certificate from Meta</li>
        </ul>
      </div>
    </div>
        </section>
        <section>
          <div>
            {/* <h3 className="text-3xl py-1 dark:text-white mt-8 ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design figma/illustrator,
              programming and teaching.
            </p> */}
          </div>
          <div className="lg:flex gap-10 mt-8">
            <div className="text-center dark:bg-gray-800 shadow-lg p-10 rounded-xl my-10  dark:text-gray-200 shadow-xl border dark:border-gray-800 flex-1">
              <Image src={design}  alt='image' width={100} height={100} />
              <h3 className="text-xl text-teal-600 font-medium pt-8 pb-2 font-semibold ">
                Data Analytics
              </h3>
              <p className="py-2 text-sm">
              Find weaknesses and validate daily business
operations. Allow data driven decisions to be made for the business leading to reduced
cost and improved productivity.
              </p>
              <h4 className="py-4 text-teal-600">Popular Tools</h4>
              <p className="text-gray-800 dark:text-gray-500 py-1">Microsoft Suite</p>
              <p className="text-gray-800 dark:text-gray-500 py-1">Tableau</p>
              <p className="text-gray-800 dark:text-gray-500 py-1">Power BI</p>
              <p className="text-gray-800 dark:text-gray-500 py-1">Google Analytics</p>
            </div>
            <div className="text-center dark:bg-gray-800 shadow-lg p-10 rounded-xl my-10  dark:text-gray-200 shadow-xl border dark:border-gray-800 flex-1">
              <Image src={code}  alt='image' width={100} height={100} />
              <h3 className="text-xl text-teal-600 font-medium pt-8 pb-2 font-semibold ">
                Web Development
              </h3>
              <p className="py-2 text-sm">
                Do you have an idea for your next great website? Lets make it a
                reality. Quick learner of different frameworks, layouts, and languages.
              </p>
              <h4 className="py-4 text-teal-600">Popular Tools</h4>
              <p className="text-gray-800 dark:text-gray-500 py-1">Next JS</p>
              <p className="text-gray-800 dark:text-gray-500 py-1">React</p>
              <p className="text-gray-800 dark:text-gray-500 py-1">Tailwind CSS</p>
              <p className="text-gray-800 dark:text-gray-500 py-1">MongoDb</p>
            </div>
            <div className="text-center dark:bg-gray-800 shadow-lg p-10 rounded-xl my-10 dark:text-gray-200 shadow-xl border dark:border-gray-800 flex-1">
              <Image src={consulting}  alt='image' width={100} height={100} />
              <h3 className="text-xl text-teal-600 font-medium pt-8 pb-2 font-semibold ">Project Management</h3>
              <p className="py-2 text-sm">
              I bring a track record of success working in a start-up
environment and have demonstrated a strong background managing companies from ideation to market
launch, and profitable monetization.
              </p>
              <h4 className="py-4 text-teal-600">Popular Tools</h4>
              <p className="text-gray-800 dark:text-gray-500 py-1">KanJam</p>
              <p className="text-gray-800 dark:text-gray-500 py-1">Full Scope</p>
              <p className="text-gray-800 dark:text-gray-500 py-1">Trello</p>
              <p className="text-gray-800 dark:text-gray-500 py-1">GitHub</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Web Developer Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am a multi tool for solving business solutions on the web, from
              <span className="text-teal-500"> React, Next, MongoDb </span>
              as my go to frameworks, to utilizing pre-exitsing builders such as <span className="text-teal-500">wordpress </span>
              I am the man for the job when it comes to solving complex business or personal website or web-app needs.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services, including brand design figma / illustrator,
              programming and data analytics.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt='image'
                src={web1}
              /> */}
              <div className='my-8'>
            <h3 className="text-3xl py-1 dark:text-white ">Heft Moving</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Commercial use, wordpress website with
              <span className="text-teal-500"> custom forms </span>
              and <span className="text-teal-500">mobile friendly </span>
              interface.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Solving business needs using WordPress as a solution, advertising and marketing priorities for small businesses, as well as collection of useful data from Google Analytics.
            </p>
            <a href='https://heftmoves.com'>
            <button className='bg-teal-600 dark:bg-teal-400  mt-2 rounded-3xl hover:bg-teal-400 px-6 py-3 text-white dark:hover:bg-teal-600'>Try it out</button>
            </a>
          </div>
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div> */}
            <div className="basis-1/3 flex-1">
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt='image'
                src={web3}
              /> */}
              <div className='my-8'>
            <h3 className="text-3xl py-1 dark:text-white ">Qube Moving Software</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Commercial SAAS CRM built on
              <span className="text-teal-500"> Next JS </span>
              for local moving companies that allows functionalities such as <span className="text-teal-500">building estimates, analyzing KPIs, managing jobs to completion, and full sales management </span>
              all in one application.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I built the entire frontend, KPIs and data sections, algorythms for calculations, calendar functionality, <span className='text-gray-800 dark:text-gray-200'>and</span> some backend work.
            </p>
            <a href='https://movers.bookqube.com'>
            <button className='bg-teal-600 dark:bg-teal-400 rounded-3xl hover:bg-teal-400 dark:hover:bg-teal-600 px-6 py-3 text-white mt-2'>Try it out</button>
            </a>
          </div>
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div> */}
          </div>
        </section>
        <secttion>
          <ContactForm />
        </secttion>
      </main>
    </div>
  );
}
