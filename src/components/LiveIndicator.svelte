<script>
    /**
     * Indicate if it is online.
     * @type {boolean}
     */
    export let online = false;
</script>

<div class="live-indicator-container">
    <div class="indicator-wrapper {online ? "online" : ""}">
        <div class="indicator-text-wrapper">
            <p>{online ? "na" : "sem"} fila</p>
        </div>
        <div class="indicator-badge-wrapper">
            <div class="indicator-badge" />
        </div>
    </div>
</div>

<style>
    .indicator-wrapper {
        width: 90px;
        height: 24px;
        background-color: var(--light-gray-1-color);
        border-radius: 40px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .indicator-wrapper.online {
        background-color: var(--green-color);
        animation: pulse 1.3s infinite;
    }

    .indicator-text-wrapper {
        width: 70%;
        font-size: 12px;
        display: flex;
        justify-content: center;
    }

    .indicator-text-wrapper p {
        padding-left: 10px;
        color: var(--dark-gray-1-color);
    }

    .indicator-badge-wrapper {
        width: 30%;
        display: flex;
        justify-content: center;
    }

    .indicator-badge {
        width: 14px;
        height: 14px;
        background-color: #fff;
        border-radius: 40px;
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 var(--green-color);
        }
        100% {
            box-shadow: 0 0 20px 10px #00000000;
        }
    }
</style>
