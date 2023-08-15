<script>
import Hello from '../resources/new-hello.png';
import Wifey from '../resources/wifey.jpg';
import KidOne from '../resources/kid-one.jpg';
import KidTwo from '../resources/kid-two.jpg';
import Bday from '../resources/muhbday.jpeg';
import Footer from '../components/footer.svelte'

</script>

<!-- intro -->

<section class='my-10 flex flex-col items-center justify-center gap-4 text-center'>
  <h1 class='flex items-center justify-center gap-2 tracking-wide text-3xl md:text-4xl'><img class="" src={Hello} alt='Hello sign' width={75}/> I&apos;m Paul,</h1>
  <p class='w-3/5 text-lg tracking-wide md:text-2xl'>I&apos;m a frontend software engineer from Birmingham, AL. Let me save a few thousand words <sub class='text-accentOrange text-2xl md:text-4xl'>&#10549;</sub></p>
</section>

<!-- photo grid -->

<section class='photo-grid w-4/5 mb-10 grid items-center justify-center grid-cols-12 grid-rows-5 rounded-xl'>
  <div class=" col-start-2 col-span-6 row-start-1 row-span-3">
    <img class='rounded-sm' src={Wifey} alt='my hot wife' />
  </div>
  <div class=" col-start-9 col-span-3 row-start-1 row-span-3">
    <img class='rounded-sm' src={KidOne} alt='my son' />
  </div>
  <div class=' col-start-8 col-span-3 row-start-3 row-span-2' >
    <img class='rounded-sm' src={KidTwo} alt='my daughter' />
  </div>
  <div class=' col-start-3 col-span-4 row-start-3 row-span-3'>
    <img class='rounded-sm ' src={Bday} alt='my birthday' />
  </div>      
</section>

<!-- short statement -->

<section class='w-3/4 my-10'>
  <p class='p-6 text-lg text-center border-b-[1px] border-solid border-accentRed md:text-2xl'>
  I love <b class='text-accentOrange '>people</b> and <b class='text-accentOrange '>problem</b> solving.
  <br/>
  <a class='p-[1px] text-base border-solid border-b-[1px] border-accentGreen md:text-lg' href='/works'>What have I done?</a>
  </p>        
</section>

  <Footer  />


<style>
  .photo-grid {
  background-image: linear-gradient(45deg, transparent 0% 49%, antiquewhite 49% 50%, transparent 50% 100%), linear-gradient(135deg, transparent 0% 49%, antiquewhite 49% 50%, transparent 50% 100%);
  background-size: 3% 3%, 4% 4%;
  background-repeat: repeat;
  box-shadow: 
  inset 0px 0px 25px var(--primaryBg),
  inset 0px 0px 50px var(--primaryBg),
  inset 0px 0px 50px var(--primaryBg),
  inset 0px 0px 100px var(--primaryBg),
  inset 0px 0px 100px var(--primaryBg),
  inset 0px 0px 125px var(--primaryBg),
  inset 0px 0px 150px var(--primaryBg),
  inset 0px 0px 200px var(--primaryBg);
}
</style>