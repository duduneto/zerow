<script>
    import HostingDetails from "./HostingDetails.svelte";
    import Greeting from "./Greeting.svelte";
    import Queue from "./Queue.svelte";
    import ActionBox from "./ActionBox.svelte";
</script>

<main>
    <Greeting />
    <HostingDetails />
    <Queue />
    <ActionBox />
</main>

<style>
    main {
        height: 100vh;
        width: 100%;
        background-color: #fff;
    }
</style>
