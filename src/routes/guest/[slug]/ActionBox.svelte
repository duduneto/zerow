<script>
    import Button from "../../../components/Button.svelte";

</script>

<div class="cta-container">
    <div class="share-container">

        <Button 
        styleType="primary"
        >
        <div>
            <p>compartilhar minha fila de espera</p>
        </div>
        </Button>
    </div>
    <div class="giveup-container">
        <Button
        styleType="danger"
        text="desistir da fila 😢"
        />

    </div>
</div>

<style>
    p {
        margin: 0px;
    }
    .cta-container {
        padding: 1rem;
    }

    .share-container {
        margin: 1rem 0px;
        height: 48px;
    }

</style>