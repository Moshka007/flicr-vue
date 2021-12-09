<template>
  <div class="message">
      <slot></slot>
  </div>
</template>

<style scoped>
    .message {
        padding: 30px 40px;
        border: 1px solid cornflowerblue;
        border-radius: 5px;
        position: relative;
        bottom: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: rgb(150, 54, 54);
    }
</style>