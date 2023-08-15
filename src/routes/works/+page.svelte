<script lang="ts">
  import Footer from "../../components/footer.svelte";
  import Retrofolio from '../../resources/retrofolio.png';
  import CirclePainter from '../../resources/circle-painter.png';
  import Blackjack from '../../resources/blackjack.png';
  import AgeCalc from '../../resources/age-calc.png';
  import Counter from '../../resources/counter.png';
  import HTMLIcon from '../../resources/HTML-icon.svg';
  import CSSIcon from '../../resources/CSS-icon.svg';
  import JSIcon from '../../resources/JS-icon.svg';
  import ReactIcon from '../../resources/React-icon.svg';
  import GitIcon from '../../resources/Git-icon.svg';
  import SassIcon from '../../resources/Sass-icon.svg';
  import Travel from '../../resources/travel.jpeg';
  
  type Project = {
  name: string,
  href: string,
  img: string,
  tags: string[],
  repo: string,
  status?: string
}

let openRecent = 'scale-0';
let openCurrent = 'scale-0';

const projects:Project[] = [
    {
      name: 'Retrofolio',
      href: 'https://jpaulsisson.netlify.app/',
      img: Retrofolio,
      tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/portfolio-site'
    },
    {
      name: 'Circle Painter',
      href: 'https://circle-paint.netlify.app/',
      img: CirclePainter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/circle-generator-app',
    },
    {
      name: 'Blackjack',
      href: 'https://jpaulsisson-blackjack.netlify.app/',
      img: Blackjack,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/blackjack',
    },
    {
      name: 'Age Calculator',
      href: 'https://calculate-age-fem.netlify.app',
      img: AgeCalc,
      tags: [HTMLIcon, SassIcon, JSIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/age-calculator-app',
    },
    {
      name: 'Customizable Counter',
      href: 'https://customizable-counter.netlify.app',
      img: Counter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/wds-react-hooks-course/tree/main',
    },
  ]

const current:Project = {
  name: 'Travel Planner',
  href: '#',
  img: Travel,
  tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
  repo: '#',
  status: 'Gathering API keys and wireframing'
};

function handleToggleRecent() {
  openRecent === 'scale-100' ? openRecent = 'scale-0' : openRecent = 'scale-100';
}
function handleToggleCurrent() {
  openCurrent === 'scale-100' ? openCurrent = 'scale-0' : openCurrent = 'scale-100';
}
</script>

<main class='w-full max-w-cutoff flex flex-col items-center justify-center'>

  <!-- skills -->

  <section class='my-10'>
    <h2 class='text-3xl text-center my-4 md:text-5xl'>proficiencies</h2>
    <ul class=' grid grid-cols-3 text-xl md:text-2xl'>
      <li class='p-3 text-accentOrange'>HTML</li>
      <li class='p-3 text-blue-500'>CSS</li>
      <li class='p-3 text-yellow-300'>Javascript</li>
      <li class='p-3 text-blue-300'>React</li>
      <li class='p-3 text-pink-500'>Sass</li>
      <li class='p-3 text-blue-500 '>Typescript</li>
      <li class='p-3 text-accentGreen'>Tailwind</li>
      <li class='p-3 text-accentOrange'>Git</li>
      <li class='p-3 text-purple-600 '>Bootstrap</li>
    </ul>
  </section>

  <!-- recent projects -->

  <h2 class='mb-10 text-center text-3xl md:text-5xl'>recent</h2>
  <div class='w-4/5 rounded-md relative transition-all flex gap-2 overflow-x-scroll'>
    
    {#each projects as {name, href, img, tags, repo}}
    <div class='w-full relative'>
      <div>
        <img src={img} alt={name} class="w-full p-2" />

        <!-- more info content -->
        <div class={`more-info w-full inset-0 absolute ${openRecent} overflow-hidden bg-primaryBg opacity-90 flex flex-col items-center justify-center transition-all`}>
          <h3 class='flex items-center justify-center text-accentGreen text-xl md:text-3xl'>{name}</h3>
          <p class='text-xl md:text-2xl' >Tech stack:</p>
          <div class='flex items-center justify-evenly'>
            {#each tags as tag}
              <img src={tag} alt={name} />
            {/each}
          </div>
          <a class='flex justify-center items-center text-xl md:text-2xl' href='/contact'><span class='text-accentGreen text-2xl' >&#60;</span>github repo<span class='text-accentGreen text-2xl'>&#62;</span>
          </a>
        </div>
        <!-- end of more info content -->
      </div>
  </div>
    {/each}
  </div>
  <button on:click={handleToggleRecent} class='mb-20 mt-4 rounded-md text-primaryFont w-1/4 border-[1px] border-accentGreen md:text-2xl'>More info</button>

<!-- current project -->

  <h2 class='mb-10 text-center text-3xl md:text-5xl'>current</h2>
  <div class='w-4/5 relative'>
      <div>
        <img src={Travel} alt='van traveling road' class="w-full" />
        <div class={`more-info w-full inset-0 absolute ${openCurrent} overflow-hidden bg-primaryBg opacity-90 flex flex-col items-center justify-center transition-all`}>
          <h3 class='flex items-center justify-center text-accentGreen text-xl md:text-3xl'>Travel Planner</h3>
          <p class='text-xl md:text-2xl' >Tech stack:</p>
          <div class='flex items-center justify-evenly'>
            {#each current.tags as tag}
              <img src={tag} alt={current.name} />
            {/each}
          </div>
          <a class='flex justify-center items-center text-xl md:text-2xl' href='/contact'><span class='text-accentGreen text-2xl' >&#60;</span>collaborate<span class='text-accentGreen text-2xl'>&#62;</span>
          </a>
        </div>
        
      </div>
  </div>
  <button on:click={handleToggleCurrent} class='mb-20 mt-4 rounded-md text-primaryFont w-1/4 border-[1px] border-accentGreen md:text-2xl'>More info</button>

<!-- mini-nav -->

  <div class=' brightness-75 flex items-center justify-evenly w-1/2 mb-8 text-md text-accentGreen md:text-xl md:mb-16'><a class='text-primaryFont' href='/'>home</a> || <a class='text-primaryFont' href='/contact'>contact</a></div>
  
  <!-- footer -->
  
  <Footer />

</main>
