<script>
// @ts-nocheck

    /** @type {import('./$types').PageData} */
    export let data;
    const guestId = data.slug;

    import HostingDetails from "./HostingDetails.svelte";
    import Greeting from "./Greeting.svelte";
    import Queue from "./Queue.svelte";
    import ActionBox from "./ActionBox.svelte";
    import { onMount } from "svelte";
    import { connectEventSource, guestData } from "./service";
    import Loading from "../../../components/Loading.svelte";

    onMount(() => {
        connectEventSource(guestId);
        // getGuest(guestId);
    });
</script>

<main>
    {#if $guestData.loading}
        <Loading />
    {:else}
        <Greeting online={$guestData.online} />
        <HostingDetails />
        <Queue 
        phoneNumber={$guestData.data.phoneNumber}
        position={$guestData.data.position}
        />
        <ActionBox />
    {/if}
</main>

<style>
    main {
        height: 100vh;
        width: 100%;
        background-color: #fff;
    }
</style>
