<script>
export default {
    props: {
        size: {
            type: [String, Number],
            default: 24
        },
        color: {
            type: String,
            default: 'currentColor'
        }
    }
}
</script>

<template>
    <svg
        :height="size"
        :width="size"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        :fill="color"
    >
        <path d="M30.252 7.7c-.698-1.22-2.07-1.922-3.768-1.922H8.195c-1.706 0-3.067.707-3.77 1.922-.702 1.214-.612 2.748.244 4.218l11.434 19.86a1.44 1.44 0 0 0 2.498 0l11.407-19.863c.848-1.469.934-3.005.244-4.215zM6.91 9.135c.244-.421.976-.468 1.278-.468h7.7V26L7.143 10.494c-.154-.275-.48-.936-.239-1.358Zm20.613 1.35L18.778 26V8.667h7.706c.303 0 1.031.035 1.272.455.242.419-.09 1.099-.24 1.363z"></path>
    </svg>
</template>

