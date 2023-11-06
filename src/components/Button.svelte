<script>
    /**
     * Button style type.
     * @type {("primary" | "danger")}
     * @default "primary"
     */
    export let styleType;

    /**
     * Text content of the button.
     * @type {string}
     */
    export let text = "";

    /**
     * button's width.
     * @type {string}
     */
    export let width = "";
    /**
     * button's max-width.
     * @type {string}
     */
    export let maxWidth = "";

    /**
     * Click event handler.
     */
    export let onClick = () => {};
</script>

<button 
class={styleType} 
on:click={onClick} 
style="width: {width}; max-width: {maxWidth}" 
{...$$restProps}
>
    {#if text}{text}{:else}<slot>Default content</slot>{/if}
</button>

<style>
    button {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 8px 16px;
        text-align: center;
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
    
    button:focus {
        opacity: 0.75;
        transform: scale(0.98); 
    }

    button.primary {
        background-color: var(--primary-color);
    }
    button.danger {
        background-color: var(--danger-color);
    }
</style>
