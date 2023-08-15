<script>
  import Modal from "../../components/modal.svelte";
  let showModal = false
  const handleToggleModal = () => {
    showModal = !showModal
  }
</script>


<section>

  <button class="bg-green-600" on:click={() => handleToggleModal()}>Open modal</button>
  <Modal
    title='phone and email'
    open={showModal}
    on:close={() => handleToggleModal()}
  >
    <svelte:fragment slot="body"> 
    </svelte:fragment>
  </Modal>
</section>