<script>
    // @ts-nocheck

    import Button from "./Button.svelte";

    /**
     * External Props to set open internal props
     * @type {boolean}
     */
    export let isOpen = false;
    /**
     * Function to run when open Modal.
     * @type {() => void}
     */
    export let onOpen = () => {};
    /**
     * Function to run when closes Modal.
     * @type {() => void}
     */
    export let onClose = () => {};
    /**
     * Indicate toggle button text of the modal
     * @type {string}
     */
    export let toggleButtonTitle = "";

    /**
     * @type {import('svelte').SvelteComponent}
     */
    export let toggleComponent;

    export let toggleComponentAttrs = {};

    function handleOpen() {
        onOpen();
    }

    function handleClose() {
        onClose();
    }
</script>

{#if toggleComponent}
    <svelte:component this={toggleComponent} {...toggleComponentAttrs} />
{:else}
    <Button
        text={toggleButtonTitle}
        styleType={"primary"}
        onClick={handleOpen}
    />
{/if}
<div class="modal-container {isOpen ? 'open' : 'closed'}">
    <button class="modal-outside-container" on:click={handleClose} />
    <div class="content-container">
        <button class="close-button" on:click={handleClose}>X</button>
        {#if isOpen}
            <slot />
        {/if}
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
