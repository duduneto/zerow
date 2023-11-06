<script>
    const data = [
        {
            id: "3d84ea79-bc67-4c22-9fb6-4459be341c2f",
            name: "Guest da Silva",
            position: 0,
            totalPeople: 6,
            isPriority: false,
            phoneNumber: "+55 (85) 99819-6374",
        },
        {
            id: "8a1c89bf-9c4f-42a1-ae6d-7f2676f8d2b1",
            name: "John Doe",
            position: 1,
            totalPeople: 3,
            isPriority: true,
            phoneNumber: "+1 (555) 123-4567",
        },
        {
            id: "c67f3e92-6ac2-495d-8f5b-128e4fbd20a0",
            name: "Alice Johnson",
            position: 2,
            totalPeople: 4,
            isPriority: false,
            phoneNumber: "+1 (123) 789-4567",
        },
        {
            id: "2e68e1db-8d99-4cb6-9aa2-17c58d75281e",
            name: "Maria Garcia",
            position: 3,
            totalPeople: 5,
            isPriority: true,
            phoneNumber: "+34 (123) 456-7890",
        },
        {
            id: "b1f3d740-7f4d-49d5-af03-99d33b35c1ec",
            name: "David Smith",
            position: 4,
            totalPeople: 2,
            isPriority: false,
            phoneNumber: "+44 (20) 1234-5678",
        },
    ];

    /**
     * @param {{ id: string; name: string; position: number; totalPeople: number; isPriority: boolean; phoneNumber: string; }} guestInfo
     */
    function onClickTableRow(guestInfo) {
        console.log(guestInfo)
    }
</script>

<section>
    <h1>Convidados na Fila</h1>
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
                <tr on:click={() => onClickTableRow(guest)} >
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
