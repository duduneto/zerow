<script>
    import LiveIndicator from "../../../components/LiveIndicator.svelte";
</script>

<header>
    <div class="greeting-container">
        <div class="greeting">
            <h1>Você Entrou na Fila!</h1>
            <p>
                Vai dar tudo certo, você vai receber uma mensagem quando sua vez
                chegar
            </p>
        </div>
        <LiveIndicator />
    </div>
</header>

<style>
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .greeting-container {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .greeting {
        width: 60%;
    }

    .greeting-container h1 {
        font-weight: 400;
        font-size: 18px;
        margin: 0px;
        color: var(--dark-gray-0-color);
    }

    .greeting-container p {
        margin: 0px;
        font-size: 12px;
        color: var(--light-gray-0-color);
    }
</style>
