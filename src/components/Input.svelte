<script>
    export let label = "";
</script>

<label>
    <span>{label}</span>
    <input {...$$restProps} />
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        color: var(--dark-gray-1-color);
        margin: 1rem 0px;
    }
    
    input {
        height: 28px;
        width: 100%;
        font-size: 18px;
        color: var(--dark-gray-0-color);
    }
</style>
