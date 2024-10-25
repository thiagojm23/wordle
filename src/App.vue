<template lang="pug">
main
  .containerCentral
    .quadro
      .linha(v-for="i in linhas")
        span(:class="!palavraReferencia.includes(i.coluna01.toUpperCase()) ? 'nada' : palavraReferencia.split('')[0] === i.coluna01.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna01.toUpperCase() }}
        span(:class="!palavraReferencia.includes(i.coluna02.toUpperCase()) ? 'nada' : palavraReferencia.split('')[1] === i.coluna02.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna02.toUpperCase() }}
        span(:class="!palavraReferencia.includes(i.coluna03.toUpperCase()) ? 'nada' : palavraReferencia.split('')[2] === i.coluna03.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna03.toUpperCase() }}
        span(:class="!palavraReferencia.includes(i.coluna04.toUpperCase()) ? 'nada' : palavraReferencia.split('')[3] === i.coluna04.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna04.toUpperCase() }}
        span(:class="!palavraReferencia.includes(i.coluna05.toUpperCase()) ? 'nada' : palavraReferencia.split('')[4] === i.coluna05.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna05.toUpperCase() }}
    
    .teclado
      .linha
        span(v-for="letra in ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']" @click="selecionarLetra(letra)") {{ letra }}
      .linha
        span(v-for="letra in ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç']" @click="selecionarLetra(letra)") {{ letra }}
      .linha
        span(v-for="letra in ['Z', 'X', 'C', 'V', 'B', 'N', 'M']" @click="selecionarLetra(letra)") {{ letra }}
      .linha
        span(v-for="letra in ['Shift', 'Space', 'Enter', 'Backspace']" @click="selecionarLetra(letra)") {{ letra }}
</template>
<script lang="ts" setup>
import { computed, reactive } from "vue";

const palavraReferencia = "MENGO";

const fimDeJogo = computed(() => {
  return linhas[5].coluna05 !== " ";
});

const linhas = reactive([
  { coluna01: " ", coluna02: " ", coluna03: " ", coluna04: " ", coluna05: " " },
  { coluna01: " ", coluna02: " ", coluna03: " ", coluna04: " ", coluna05: " " },
  { coluna01: " ", coluna02: " ", coluna03: " ", coluna04: " ", coluna05: " " },
  { coluna01: " ", coluna02: " ", coluna03: " ", coluna04: " ", coluna05: " " },
  { coluna01: " ", coluna02: " ", coluna03: " ", coluna04: " ", coluna05: " " },
  { coluna01: " ", coluna02: " ", coluna03: " ", coluna04: " ", coluna05: " " },
]);

function selecionarLetra(letra: string) {
  if (fimDeJogo.value) return;
  linhas.find((linha) => {
    const coluna = Object.keys(linha).find((coluna) => linha[coluna] === " ");
    console.log(linha[coluna]);
    if (linha[coluna] === " ") return (linha[coluna] = letra);
  });
}
</script>
<style lang="css">
body {
  background-color: black;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.containerCentral {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 10px;
}
.quadro {
  display: flex;
  flex-direction: column;
  gap: 8px;
  .linha {
    display: flex;
    gap: 12px;
    font-size: 40px;
    span {
      color: white;
      width: 50px;
      height: 50px;
      text-align: center;
      border: 1px solid gray;
      border-radius: 4px;
      &.certo {
        background-color: green;
      }
      &.quase {
        background-color: rgb(107, 107, 107);
      }
      &.nada {
        background-color: black;
      }
    }
  }
}
.teclado {
  padding: 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  .linha {
    display: flex;
    gap: 6px;
    justify-content: center;
    span {
      display: inline-block;
      padding: 10px 15px;
      border-radius: 4px;
      background-color: rgb(200, 200, 200);
      color: black;
      font-size: 18px;
      cursor: pointer;
      user-select: none;
      &:hover {
        background-color: rgb(170, 170, 170);
      }
      &:active {
        background-color: rgb(150, 150, 150);
      }
    }
  }
}
</style>
