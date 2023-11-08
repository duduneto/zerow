<script>
    import Button from "../../components/Button.svelte";
    import Modal from "../../components/Modal.svelte";
    import GuestInfo from "./GuestInfo.svelte";
    /**
     * @type {boolean}
     */
    let openGuestInfoModal = false;

    /**
     * @type {import("./GuestsList.svelte").Guest}
     */
    export let guestData;
    /**
     * @type {number}
     */
    export let index;

    /**
     * @param {import("./GuestsList.svelte").Guest} guestInfo
     */
    function onClickTableRow(guestInfo) {
        console.log(guestInfo);
        handleGuestInfoModal(true);
    }

    /**
     * @param {boolean} state
     */
    function handleGuestInfoModal(state) {
        openGuestInfoModal = state;
    }

    function openNewTab() {
    window.open("https://wa.me//5585998195745?text=Oi,%20sua%20mesa%20está%20pronta", '_blank');
  }
</script>

<Modal
    isOpen={openGuestInfoModal}
    onOpen={() => handleGuestInfoModal(true)}
    onClose={() => handleGuestInfoModal(false)}
    toggleComponent={GuestInfo}
    toggleComponentAttrs={{
        data: guestData,
        handleGuestClick: () => onClickTableRow(guestData),
        index,
    }}
>
    <div class="info-container">
        <div class="title-container">
            <h3>Nome do Convidado:</h3>
            <span>{guestData.name}</span>
        </div>

        <div class="description-container">
            <span>Telefone: </span>
            <span>{guestData.phoneNumber}</span>
        </div>

        <div class="cta-container">
            <Button
            text="Whatsapp"
            styleType="primary"
            onClick={openNewTab}
            
            />
            <Button
            text="Remover da Fila"
            styleType="danger"
            
            />
        </div>
    </div>
</Modal>

<style>
    .info-container {
        width: 100%;
        padding: 0px 2rem;
    }
    .title-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title-container span {
        color: var(--dark-gray-0-color);
    }

    .cta-container {
        display: flex;
    }
</style>
