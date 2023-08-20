<script defer lang="ts">
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
  status?: boolean
}

let openRecent = 'scale-0';
let openCurrent = 'scale-0';
let currentIndex = 0;

const projects:Project[] = [
    {
      name: 'Retrofolio',
      href: 'https://jpaulsisson.netlify.app/',
      img: Retrofolio,
      tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/portfolio-site',
      status: true,
    },
    {
      name: 'Circle Painter',
      href: 'https://circle-paint.netlify.app/',
      img: CirclePainter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/circle-generator-app',
      status: false,
    },
    {
      name: 'Blackjack',
      href: 'https://jpaulsisson-blackjack.netlify.app/',
      img: Blackjack,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/blackjack',
      status: false,
    },
    {
      name: 'Age Calculator',
      href: 'https://calculate-age-fem.netlify.app',
      img: AgeCalc,
      tags: [HTMLIcon, SassIcon, JSIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/age-calculator-app',
      status: false,
    },
    {
      name: 'Customizable Counter',
      href: 'https://customizable-counter.netlify.app',
      img: Counter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/wds-react-hooks-course/tree/main',
      status: false,
    },
  ]

const current:Project = {
  name: 'Travel Planner',
  href: '#',
  img: Travel,
  tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
  repo: '#',
};

function handleToggleRecent() {
  openRecent === 'scale-100' ? openRecent = 'scale-0' : openRecent = 'scale-100';
}
function handleToggleCurrent() {
  openCurrent === 'scale-100' ? openCurrent = 'scale-0' : openCurrent = 'scale-100';
}
function handlePrev() {
  currentIndex === 0 ? currentIndex = projects.length - 1 : currentIndex -= 1;
}
function handleNext() {
  currentIndex === projects.length - 1 ? currentIndex = 0 : currentIndex += 1;
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
  <section aria-label="my recent projects" class=''>
    <div class="carousel-container relative">
      <button on:click={handlePrev} class="carousel-button prev absolute top-1/2 left-2 text-primaryBg font-semibold text-2xl md:text-4xl bg-primaryFont opacity-40 aspect-square rounded-full p-1 md:p- flex items-center justify-center hover:opacity-100 z-10">&lt;</button>
      <button on:click={handleNext} class="carousel-button next absolute top-1/2 right-2 text-primaryBg font-semibold text-2xl md:text-4xl bg-primaryFont opacity-40 aspect-square rounded-full p-1 md:p-2 flex items-center justify-center hover:opacity-100 z-10">&gt;</button>
      <ul class=" list-none">
        {#each projects as {name, href, img, tags, repo}, index}
          <li class={`car-slide ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`} >
            <a href={href} aria-label={name + ' live site'} rel="noopener noreferrer" target="_blank" class="absolute z-40 bg-transparent w-8/12 h-3/4 inset-0 m-auto"> </a>
            <img src={img} alt={name} class="rounded-md">

            <!-- more info content -->

            <div class={`more-info w-full inset-0 absolute ${openRecent} bg-primaryBg opacity-95 flex flex-col items-center justify-center`}>
              <h3 class='flex items-center justify-center text-accentGreen text-xl md:text-3xl'>{name}</h3>
              <p class='text-xl md:text-2xl' >Tech stack:</p>
              <div class='flex items-center justify-around gap-2 md:gap-6'>
                {#each tags as tag}
                  <img src={tag} alt={name} class=' w-10 md:w-[10%]'/>
                {/each}
              </div>
              <a class='flex justify-center items-center text-xl md:text-2xl' target="_blank" rel="noopener noreferrer" href={repo}><span class='text-accentGreen text-2xl' >&#60;</span>github repo<span class='text-accentGreen text-2xl'>&#62;</span>
              </a>
            </div>

        <!-- end of more info content -->

          </li>
        {/each}
      </ul>
    </div>
  </section>
  <button on:click={handleToggleRecent} class='mb-20 mt-4 rounded-md text-primaryFont w-1/4 border-[1px] border-accentGreen md:text-2xl'>More info</button>

<!-- end of recent projects -->
<!-- current project -->

  <h2 class='mb-10 text-center text-3xl md:text-5xl'>current</h2>
  <div class='w-4/5 relative'>
      <div>
        <img src={Travel} alt='van traveling road' class="w-full rounded-md" />

        <!-- begin more info content -->

        <div class={`more-info w-full inset-0 absolute ${openCurrent} bg-primaryBg opacity-95 flex flex-col items-center justify-center`}>
          <h3 class='flex items-center justify-center text-accentGreen text-xl md:text-3xl'>Travel Planner</h3>
          <p class='text-xl md:text-2xl' >Tech stack:</p>
          <div class='flex items-center justify-around gap-2 md:gap-6'>
            {#each current.tags as tag}
              <img src={tag} alt={current.name} class=' w-10 md:w-[10%]' />
            {/each}
          </div>
          <a class='flex justify-center items-center text-xl md:text-2xl' href='/contact'><span class='text-accentGreen text-2xl' >&#60;</span>collaborate<span class='text-accentGreen text-2xl'>&#62;</span>
          </a>
        </div>
        
      <!-- end more info content -->

      </div>
  </div>
  <button on:click={handleToggleCurrent} class='mb-20 mt-4 rounded-md text-primaryFont w-1/4 border-[1px] border-accentGreen md:text-2xl'>More info</button>

<!-- mini-nav -->

  <div class=' brightness-75 flex items-center justify-evenly w-1/2 mb-8 text-md text-accentGreen md:text-xl md:mb-16'><a class='text-primaryFont' href='/'>home</a> || <a class='text-primaryFont' href='/contact'>contact</a></div>
  
  <!-- footer -->
  
  <Footer />

</main>


<style>
  .more-info {
    transition: all 400ms;
  }

  .carousel-button {
    transform: translateY(-50%);
    width: 8%;
  }

  .carousel-button:focus {
    opacity: 1;
    outline: 3px solid var(--accentGreen);
  }

  .carousel-container {
    width: clamp(320px, 80vw, 750px);
    aspect-ratio: 16/9;
  }

  .car-slide {
    position: absolute;
    inset: 0;
    transition: opacity 500ms;
  }

</style>