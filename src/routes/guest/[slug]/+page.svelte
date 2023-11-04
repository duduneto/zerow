<script>
    // @ts-nocheck
    import { page } from "$app/stores";
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);

    import HostingDetails from "./HostingDetails.svelte";
    import Greeting from "./Greeting.svelte";
    import Queue from "./Queue.svelte";
    import ActionBox from "./ActionBox.svelte";
    import { onMount } from "svelte";
    import { fetchGuest, guestData } from "./service";
    import Loading from "../../../components/Loading.svelte";

    onMount(() => {
        fetchGuest(data.slug);
    });
</script>

<main>
    {#if $guestData.loading}
        <Loading />
    {:else}
        <Greeting />
        <HostingDetails />
        <Queue phoneNumber={$guestData.data.phoneNumber} />
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
