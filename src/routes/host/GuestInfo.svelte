<script>
    export let handleGuestClick = () => {};

    /**
     * @type {import("./GuestsList.svelte").Guest}
     */
    export let data;
    /**
     * @type {number}
     */
    export let index = 0;
</script>

<tr class={index % 2 ? "even-row" : "odd-row"} on:click={handleGuestClick}>
    <td>{data.position}</td>
    <td>{data.name}</td>
    <td>{data.totalPeople}</td>
    <td>{data.isPriority ? "Sim" : "Não"}</td>
</tr>

<style>
    tr {
        cursor: pointer;
    }
    .odd-row {
        background-color: #f2f2f2;
    }

    .even-row {
        background-color: #fff;
    }
</style>
