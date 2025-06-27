const OtherProjectsPage = () => {
  return (
    <main className="overflow-y-scroll w-full px-8 py-4">
      <h1 className="font-bold text-2xl pb-4">Projects & Progress</h1>

      <div className="border p-2 mb-4">
        <h2 className="text-lg">Personal Website</h2>
        <p className="p-2">
          This website that you're on right now! It works well with the features
          I wanted for it, but of course it has a long way to go and will only
          get better with time. Most links to resourses used for this website
          can be found other places here, but just in case, here they are again.
        </p>
        <div className="w-full bg-gray-500 rounded-full">
          <div className="w-1/2 bg-green-500 rounded-full">
            <div className="text-right mx-4 text-white">50%</div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center gap-2 p-2">
          <a
            href="https://trello.com/b/YtBat5Uz/website-features"
            className="p-2 rounded bg-gray-100 hover:bg-gray-200"
          >
            Trello
          </a>
          <a
            href="https://github.com/dashiello/personal-website"
            className="p-2 rounded bg-gray-100 hover:bg-gray-200"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="border p-2 mb-4">
        <h2 className="text-lg">Conlang Maker</h2>
        <p className="p-2">
          A website to help make & manage constructed languages (i.e. conlangs).
          It's developed in Next.js and hosted on Vercel.
        </p>
        <div className="w-full bg-gray-500 rounded-full">
          <div className="w-1/5 bg-green-500 rounded-full">
            <div className="text-right mx-4 text-white">20%</div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center gap-2 p-2">
          <a
            href="https://trello.com/b/n7gKRIDz/conlang-maker-planned-features"
            className="p-2 rounded bg-gray-100 hover:bg-gray-200"
          >
            Trello
          </a>
        </div>
      </div>

      <div className="border p-2 mb-4">
        <h2 className="text-lg">Don't Break the Chain App</h2>
        <p className="p-2">
          An app to help make sure you do something everyday using the "don't
          break the chain" method. I know there are probablly apps like this
          already available, but I want to make it because it seems like
          something I could do.
        </p>
        <div className="w-full bg-gray-500 rounded-full">
          <div className="w-0 bg-green-500 rounded-full">
            <div className="text-right mx-4 text-white">0%</div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center gap-2 p-2"></div>
      </div>

      <div className="border p-2 mb-4">
        <h2 className="text-lg">Script Chess</h2>
        <p className="p-2">
          I think it would be fun to play chess by writing a script that
          automatically plays someone else's script. The website would provide
          an array of all the current chess positions, and the user would have
          to provide a valid move notation as a string. There would be a time
          limit to how long the move calculation could take, maybe ~1 second.
          Your script would only be able to play one other at a time, and you
          could just sit and watch for a while. I'm thinking a similar to
          Blaseball in a way.
        </p>
        <div className="w-full bg-gray-500 rounded-full">
          <div className="w-0 bg-green-500 rounded-full">
            <div className="text-right mx-4 text-white">0%</div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center gap-2 p-2"></div>
      </div>

      <div className="border p-2 mb-4">
        <h2 className="text-lg">Lancer RPG Battle Map Website</h2>
        <p className="p-2">
          The Lancer RPG by Massif Press in a fantastic game system & has an
          amazing character & quest manager in the form of
          <a
            href="https://compcon.app/#/"
            className="text-red-500 hover:text-red-600"
          >
            COMP/CON
          </a>
          , the free, open-source digital toolkit and gameplay assistant for
          building and playing LANCER TTRPG games. However, this tool does not
          include a battle mat for actually playing the game, and other online
          resources are lacking in the specific tools I would want to see. Of
          course, that means I plan on undertaking this task myself, building a
          online battle mat tool for playing lancer over the internet. I plan on
          developing it in Godot.
        </p>
        <div className="w-full bg-gray-500 rounded-full">
          <div className="w-0 bg-green-500 rounded-full">
            <div className="text-right mx-4 text-white">0%</div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center gap-2 p-2"></div>
      </div>

      <div className="border p-2 mb-4">
        <h2 className="text-lg">Untitled Wizard Game/Sim</h2>
        <p className="p-2">
          I've always been a fan of magics & wizards in media. I've also been
          facinated by games/sims like Dwarf Fortress & Kenshi. I thought it
          would be fun to have a game likes those about being a wizard,
          pondering arcane mysteries, going on quests, breaking curses or
          putting curses on your enemeis. I thouth it would also be fun to
          develop for the web using tools traditionally used for website
          building.
        </p>
        <div className="w-full bg-gray-500 rounded-full">
          <div className="w-0 bg-green-500 rounded-full">
            <div className="text-right mx-4 text-white">0%</div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center gap-2 p-2"></div>
      </div>
    </main>
  );
};

export default OtherProjectsPage;
