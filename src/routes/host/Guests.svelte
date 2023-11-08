<script>
    /**
     * Represents a Guest object.
     * @typedef {Object} Guest
     * @property {string} id - The unique identifier for the user.
     * @property {string} joinedAt - The date and time when the user joined.
     * @property {string | null} leftAt - The date and time when the user left (or null if still active).
     * @property {string | number} phoneNumber - The user's phone number.
     * @property {boolean} isPriority - Indicates whether the user is a priority user (true or false).
     * @property {number} totalPeople - The total number of people associated with the user.
     * @property {string} hostId - The unique identifier of the host associated with the user.
     */

    import Loading from "../../components/Loading.svelte";

    /**
     * Example user data array.
     * @type {Guest[]}
     */
    export let data = [];
    /**
     * Example user data array.
     * @type {boolean}
     */
    export let loading = false;
    /**
     * @param {{ id: string; name: string; position: number; totalPeople: number; isPriority: boolean; phoneNumber: string; }} guestInfo
     */
    function onClickTableRow(guestInfo) {
        console.log(guestInfo);
    }
</script>

<section>
    <div class="head-title">
        <h1>Convidados na Fila</h1>
        {#if loading}
            <Loading />
        {/if}
    </div>
    <table id="data-table">
        <thead>
            <tr>
                <th>Pos.</th>
                <th>Name</th>
                <th>N.Pessoas</th>
                <th>Prioridade</th>
            </tr>
        </thead>
        <tbody>
            {#each data as guest}
                <tr on:click={() => onClickTableRow(guest)}>
                    <td>{guest.position}</td>
                    <td>{guest.name}</td>
                    <td>{guest.totalPeople}</td>
                    <td>{guest.isPriority ? "Sim" : "Não"}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</section>

<style>
    .head-title {
        display: flex;
    }
    section {
        width: 100%;
    }
    table {
        border-collapse: collapse;
        width: 100%;
        margin: 0 auto;
    }

    tr:hover {
        opacity: 0.5;
        cursor: pointer;
    }

    th,
    td {
        padding: 8px;
        text-align: left;
    }

    thead {
        background-color: var(--green-color);
        color: var(--dark-gray-0-color);
    }

    tbody tr:nth-child(odd) {
        background-color: #f2f2f2;
    }

    tbody tr:nth-child(even) {
        background-color: #fff;
    }
</style>
