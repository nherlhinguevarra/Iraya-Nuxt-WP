<template>
    <div class="w-full max-w-[375px] 
                sm:max-w-[400px] lg:max-w-[590px] 
                xl:max-w-[800px] aspect-square 
                mx-auto my-auto earth">
    </div>
</template>

<style scoped>
    .earth {
        background-image: url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/Earth-scaled.jpg');
        background-size: 1600px;
        background-repeat: repeat-x;
        border-radius: 50%;
        position: relative;
        overflow: hidden;

        /* Rotation illusion */
        animation: rotate 15s linear infinite;

        /* Glow + Depth */
        box-shadow:
            0 0 50px rgba(0, 150, 255, 0.4),
            inset -40px 0 80px rgba(0, 0, 0, 0.6),
            inset 20px 0 40px rgba(255, 255, 255, 0.1),
            0 0 15px rgba(0, 100, 255, 0.3);
    }

    /* "Sunlight" simulation with soft gradient */
    .earth::before {
        content: "";
        position: absolute;
        top: -10%;
        left: -10%;
        width: 120%;
        height: 120%;
        border-radius: 50%;
        background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.15),
            rgba(0, 0, 0, 0.5)
        );
        pointer-events: none;
        z-index: 1;
        animation: lightShift 15s ease-in-out infinite alternate;
    }

    /* Atmosphere glow */
    .earth::after {
        content: "";
        position: absolute;
        top: -5%;
        left: -5%;
        width: 110%;
        height: 110%;
        border-radius: 50%;
        box-shadow: 0 0 50px 10px rgba(30, 144, 255, 0.4);
        z-index: 0;
        pointer-events: none;
    }

    /* Background movement */
    @keyframes rotate {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 1600px 0;
        }
    }

    /* Light highlight shift */
    @keyframes lightShift {
        0% {
            background-position: 25% 25%;
        }
        100% {
            background-position: 35% 30%;
        }
    }
</style>
