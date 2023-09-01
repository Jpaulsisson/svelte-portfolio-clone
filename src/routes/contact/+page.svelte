<script>
  import Email from '../../resources/email.svg';
  import Phone from '../../resources/phone.svg';
  import LinkedIn from '../../resources/linkedin.svg';
  import GitHub from '../../resources/github.svg';

  import Modal from "../../components/modal.svelte";

  let showModal = false
  const handleToggleModal = () => {
    showModal = !showModal
  }
</script>




  <section class=' flex flex-col gap-8 mt-2 md:mt-6 md:gap-12'>
    <button class='' on:click={handleToggleModal} >
      <img class='w-24 md:w-36' src={Email} alt='envelope' />
    </button>
    <button class='' on:click={handleToggleModal}>
      <img class='w-24 md:w-36' src={Phone} alt='phone' />
    </button>
    <a class='' href='https://www.linkedin.com/in/jpaulsisson/' rel='noopener noreferrer' target='_blank'>
      <img class='w-24 md:w-36' src={LinkedIn} alt='LinkedIn logo' />
    </a>
    <a href="https://github.com/Jpaulsisson" rel='noopener noreferrer' target='_blank'>
      <img class='w-24 md:w-36' src={GitHub} alt='GitHub logo' />
    </a>
    <Modal
    open={showModal}
    on:close={() => handleToggleModal()}
    />
  </section>

  
