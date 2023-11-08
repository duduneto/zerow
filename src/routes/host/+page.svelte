<script>
    import { onMount } from "svelte";
    import AddGuest from "./AddGuest.svelte";
    import Guests from "./Guests.svelte";
    import { getGuests, hostData } from "./service"

    const hostId = "ca762e4c-0cbe-424b-93e0-e66ca4a4c783"

    onMount(() => getGuests(hostId))
</script>
<main>
    <AddGuest hostId={hostId} />
    <Guests
    data={$hostData.data}
    loading={$hostData.loading}
    />
</main>

<style>
    main {
        padding: 1rem;
    }
</style>