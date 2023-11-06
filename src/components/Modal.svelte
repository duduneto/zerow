<script>
    import Button from "./Button.svelte";

    /**
     * Indicate if it is online.
     * @type {boolean}
     */
    export let open = true;
    /**
     * Indicate toggle button text of the modal
     * @type {string}
     */
    export let toggleButtonTitle = "";

    /**
     * @param {boolean} newState
     */
    function handleModal(newState) {
        open = newState;
    }
</script>

<Button
    text={toggleButtonTitle}
    styleType={"primary"}
    onClick={() => handleModal(true)}
/>
<div class="modal-container {open ? 'open' : 'closed'}">
    <button
        class="modal-outside-container"
        on:click={() => handleModal(false)}
    />
    <div class="content-container">
        <button class="close-button" on:click={() => handleModal(false)} >X</button>
        <slot />
    </div>
</div>

<style>
    button {
        cursor: pointer;
        border: none;
        outline: none;
    }
    .modal-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-outside-container {
        opacity: 0.4;
        width: 100%;
        height: 100%;
        background-color: var(--white-color);
        position: absolute;
        z-index: 9;
    }

    .modal-container.closed {
        display: none;
    }

    .content {
        z-index: 99;
    }

    .content-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3rem;
        z-index: 99;
        position: relative;
        box-shadow: 0px 0px 10px 2px #00000034;
        border-radius: 15px;
    }

    .close-button {
        width: 32px;
        height: 32px;
        cursor: pointer;

        background-color: var(--white-color);

        position: absolute;
        top: -16px;
        right: -16px;

        border-radius: 16px;
        box-shadow: 0px 0px 10px 2px #00000034;
    }
</style>
