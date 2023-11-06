<script>
    /**
     * Text content of the button.
     * @type {string}
     */
    export let phoneNumber;
    /**
     * Text content of the button.
     * @type {string}
     */
    export let position;
</script>

<div class="queue-container">
    <div class="queue-wrapper">
        <div class="queue-info-box">
            <div class="queue-info">
                <div class="position-info">
                    <h3>posição na fila:</h3>
                    <p>mesa p/ 2 pessoas</p>
                </div>
                <div class="contact-info">
                    <p>{phoneNumber}</p>
                </div>
            </div>
            <div class="position-counter">
                <h3>{position}</h3>
            </div>
        </div>
        <div class="additional-info">
            <p>
                Sim, se você está na posição 5, então tem 4 pessoas na sua
                frente 😬
            </p>
        </div>
    </div>
</div>

<style>
    :root {
        --counter-position-w: 122px;
    }
    h3 {
        margin: 0px;
        font-size: 16px;
        font-weight: 400;
        color: var(--dark-gray-1-color);
    }
    p {
        font-size: 12px;
        margin: 0px;
        color: var(--light-gray-0-color);
    }

    .queue-container {
        width: 100%;
        height: 186px;
    }

    .queue-wrapper {
        padding: 1.5rem 1rem;
    }

    .queue-info-box {
        height: 126px;
        width: 100%;
        background-color: #f4f5f6;
        border-radius: 15px;
        box-shadow: 0px 3px 6px 0px #00000041;
        display: flex;
        justify-content: space-between;
    }

    .queue-info-box .queue-info {
        width: calc(100% - var(--counter-position-w));
        height: 70%;
        padding: 1rem 0px 1rem 1rem;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
    }

    .queue-info-box .position-counter {
        width: var(--counter-position-w);
        height: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--dark-gray-1-color);
        border-radius: 0px 15px 15px 0px;
    }

    .position-counter h3 {
        font-size: 42px;
    }

    .contact-info p {
        color: var(--dark-gray-1-color);
    }
    .additional-info {
        padding: 0.4rem 1rem 0px 1rem;
    }
</style>
