const HomePage = () => {
  return (
    <main className="overflow-y-scroll w-full px-8 py-4">
      <div id="introduction" className="mb-32">
        <h1 className="text-3xl font-bold">Hello World,</h1>
        <p>
          I'm Dashiell Pepperman, a Computer Science bachelor & Linguistics
          minor from the University of Georgia. I am passionate about technology
          & design, and hope to make something great in the future.
        </p>
        <p>
          <b>Important Information!</b> This website is still under development
          & is constantly undergoing changes! To show my project managment
          skills, I've created a
          <a
            className="font-bold text-sky-600 underline"
            href="https://trello.com/b/YtBat5Uz/website-features"
          >
            public Trello Board
          </a>
          so everyone can follow along with my progress & see what I plan to add
          in the future.
        </p>
      </div>
      <div id="experiences" className="mb-32">
        <h2 className="underline font-bold text-2xl">Profesional Experience</h2>
        <div className="mb-2">
          <h3 className="font-bold text-lg">
            <span className="text-2xl">Fullstack Developer</span> at
            <span className="text-xl">
              <a href="https://wayfinderdata.com/">
                Wayfinder Data Solutions, LLC
              </a>
            </span>
          </h3>
          <p className="text-sm text-slate-800">
            September 2023 - December 2023, 20 hours per week
          </p>
          <ul className="list-disc list-inside">
            <li>
              Orchestrated seamless deployment pipelines on AWS, implementing
              scalable infrastructure using services like EC2, S3, and Lambda,
              resulting in a 30% reduction in application downtime.
            </li>
            <li>
              Engineered responsive web applications using Next.js, optimizing
              performance and user experience through server-side rendering and
              efficient data fetching, leading to a 40% increase in page load
              speed.
            </li>
            <li>
              Spearheaded robust test suites with Jest, ensuring code
              reliability and maintaining a 95% test coverage across multiple
              modules, enhancing the overall product stability and minimizing
              bugs in production.
            </li>
          </ul>
        </div>

        <div className="mb-2">
          <h3 className="font-bold text-lg">
            <span className="text-2xl">Web Developer</span> at
            <span className="text-xl">
              <a href="https://www.artimatic.io/">
                Artimatic Technologies, inc
              </a>
            </span>
          </h3>
          <p className="text-sm text-slate-800">
            February 2022 - December 2022, 35 hours per week
          </p>
          <ul className="list-disc list-inside">
            <li>
              Enhanced website performance by leveraging TypeScript, React, and
              TailwindCSS to craft an intuitive and responsive frontend,
              ensuring a seamless user experience across various devices and
              browsers.
            </li>
            <li>
              Implemented an extensive testing strategy utilizing Jest,
              elevating code coverage from 20% to 80%, fortifying the
              reliability and stability of the application while significantly
              reducing potential bugs in production.
            </li>
            <li>
              Developed and documented a RESTful API using Python and Django
              Rest Framework, ensuring scalability, and facilitating future
              enhancements and integrations.
            </li>
          </ul>
        </div>

        <div className="mb-2">
          <h3 className="font-bold text-lg">
            <span className="text-2xl"> Software Developer</span> at
            <span className="text-xl"> Tata Consultancy Services</span>
          </h3>
          <p className="text-sm text-slate-800">
            May 2021 - November 2021, 40+ hours per week
          </p>
          <ul className="list-disc list-inside">
            <li>
              Acquired proficiency in Core Java, JDBC, Angular, and Node.js,
              applying this skill set across multiple Agile-driven full-stack
              projects, streamlining development and delivering high-quality
              solutions within project timelines.
            </li>
            <li>
              Proactively delved into the fundamentals of UX, UI, and Machine
              Learning through self-study, assimilating foundational knowledge
              and exploring innovative possibilities for future project
              advancements.
            </li>
            <li>
              Led a seamless transition from an external maintenance team to the
              TCS team, orchestrating a smooth transfer of operations and
              ensuring uninterrupted functionality, thereby optimizing
              efficiency and team collaboration.
            </li>
          </ul>
        </div>
      </div>

      <div id="education" className="mb-32">
        <h2 className="underline font-bold text-2xl">Education</h2>
        University of Georgia, Franklin College of Arts & Sciences Athens, GA
        Bachelor of Science in Computer Science; Linguistics Minor December 2020
        GPA: 3.7/4.00 Financed 100% of college expenses through part-time job
        and Zell Miller Scholarship Named to Dean’s List for Spring 2018, Summer
        2018, Fall 2018, and Spring 2019
      </div>
      <div id="skills" className="mb-32">
        <h2 className="underline font-bold text-2xl">Skills</h2>
        Programing languages: Java, C, C++, HTML5, CSS, Node.JS, SQL,
        JavaScript, TypeScript, Python, PHP Software: Microsoft Office Suit,
        Java Eclipse, VSCode, MySQL Frameworks: React, Django, Angular, Spring
        Boot, Laravel, NextJS Operating Systems: Windows 7/8/10, Linux
      </div>
      <div id="additional" className="mb-32">
        <h2 className="underline font-bold text-2xl">Additional Experience</h2>
        <div>
          UGA Dining Services Athens, GA Student Supervisor August 2018 – March
          2020 Effectively performed multiple tasks such as serving customers,
          restocking food items, and maintaining food temperatures within a
          fast-paced environment Supervised new student workers and provided
          constructive feedback when necessary Focused on proper safety
          procedures for preparation and storage of food Maintained
          approximately 15-20 hour per week while enrolled as a full-time
          student
        </div>
        <div>
          Study Abroad Studied German language and Green Design in Freiburg
          Germany Summer 2018 Earned 6 academic credit hours by completing
          cultural linguistics courses Improved written and verbal communication
          skills by conducting oral presentations and writings in German
          Traveled independently around Germany and France to become fully
          immersed in European culture
        </div>
      </div>
    </main>
  );
};

export default HomePage;
