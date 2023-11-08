<script>
    /**
     * Represents a Guest object.
     * @typedef {Object} Guest
     * @property {string} id - The unique identifier for the guest.
     * @property {string} joinedAt - The date and time when the guest joined.
     * @property {number} position - Guest's Position.
     * @property {string | null} name - Guest Name.
     * @property {string | null} leftAt - The date and time when the guest left (or null if still active).
     * @property {string | number} phoneNumber - The guest's phone number.
     * @property {boolean} isPriority - Indicates whether the guest is a priority guest (true or false).
     * @property {number} totalPeople - The total number of people associated with the guest.
     * @property {string} hostId - The unique identifier of the host associated with the guest.
     * @exports Guest
     */

    import Loading from "../../components/Loading.svelte";
    import Modal from "../../components/Modal.svelte";
    import GuestInfoModal from "./GuestInfoModal.svelte";
    import GuestInfo from "./GuestInfoModal.svelte";

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
            {#each data as guest, index}
                <GuestInfoModal 
                guestData={guest}
                index={index}
                />
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
</style>
