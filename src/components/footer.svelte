<script>
  import Email from '../resources/email.svg';
  import Phone from '../resources/phone.svg';
  import LinkedIn from '../resources/linkedin.svg';
  import GitHub from '../resources/github.svg';

  import Modal from "./modal.svelte";

  let showModal = false
  const toggleModal = () => {
    showModal = !showModal
  }
</script>


<section  class='w-full max-w-[850px] flex flex-col items-center justify-center'>
  <footer class='mb-10 w-1/2 flex items-center justify-between'>
    <!-- modal -->
    <Modal
    open={showModal}
    on:close={toggleModal}
    ></Modal>
    <!-- end modal -->
    <button class=' cursor-pointer' on:click={toggleModal}>
      <img class='w-10 md:w-16' src={Email} alt='envelope'/>
    </button>
      <button class='cursor-pointer' on:click={toggleModal}>
      <img class='w-10 md:w-16' src={Phone} alt='phone'/>
      </button>
      <a class='' href='https://www.linkedin.com/in/jpaulsisson/' rel='noopener noreferrer' target='_blank'>
      <img class='w-10 md:w-16' src={LinkedIn} alt='LinkedIn logo'/>
      </a>
      <a href="https://github.com/Jpaulsisson" rel='noopener noreferrer' target='_blank'>
      <img class='w-10 md:w-16' src={GitHub} alt='GitHub logo'/>
      </a>
    </footer>
</section>