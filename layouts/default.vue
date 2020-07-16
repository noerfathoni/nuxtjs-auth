<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Nunito Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @apply bg-gray-200;
}

button,
button:active,
button:focus,
input {
  border: none;
  outline: none;
}
</style>
