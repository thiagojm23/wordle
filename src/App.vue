<template lang="pug">
main
  .containerCentral
    .quadro
      .linha(v-for="i in linhas")
        span(:class="!i.verificada ? '' : !palavraReferencia.includes(i.coluna01.toUpperCase()) ? 'nada' : palavraReferencia.split('')[0] === i.coluna01.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna01.toUpperCase() }}
        span(:class="!i.verificada ? '' : !palavraReferencia.includes(i.coluna02.toUpperCase()) ? 'nada' : palavraReferencia.split('')[1] === i.coluna02.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna02.toUpperCase() }}
        span(:class="!i.verificada ? '' : !palavraReferencia.includes(i.coluna03.toUpperCase()) ? 'nada' : palavraReferencia.split('')[2] === i.coluna03.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna03.toUpperCase() }}
        span(:class="!i.verificada ? '' : !palavraReferencia.includes(i.coluna04.toUpperCase()) ? 'nada' : palavraReferencia.split('')[3] === i.coluna04.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna04.toUpperCase() }}
        span(:class="!i.verificada ? '' : !palavraReferencia.includes(i.coluna05.toUpperCase()) ? 'nada' : palavraReferencia.split('')[4] === i.coluna05.toUpperCase() ? 'certo' : 'quase'") {{ i.coluna05.toUpperCase() }}
    
    .teclado
      .linha
        span(v-for="letra in ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']" @click="selecionarLetra(letra)") {{ letra }}
      .linha
        span(v-for="letra in ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç']" @click="selecionarLetra(letra)") {{ letra }}
      .linha
        span(v-for="letra in ['Z', 'X', 'C', 'V', 'B', 'N', 'M']" @click="selecionarLetra(letra)") {{ letra }}
      .linha
        span(v-for="letra in [ 'Enter', 'Backspace', 'Reiniciar Jogo']" @click="acoesEspeciais(letra)") {{ letra }}
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted, onUnmounted } from "vue";

const palavraReferencia = "MENGO";
const linhaAtual = ref(0);

const fimDeJogo = ref(false);

const linhas = reactive([
  {
    coluna01: " ",
    coluna02: " ",
    coluna03: " ",
    coluna04: " ",
    coluna05: " ",
    verificada: false,
  },
  {
    coluna01: " ",
    coluna02: " ",
    coluna03: " ",
    coluna04: " ",
    coluna05: " ",
    verificada: false,
  },
  {
    coluna01: " ",
    coluna02: " ",
    coluna03: " ",
    coluna04: " ",
    coluna05: " ",
    verificada: false,
  },
  {
    coluna01: " ",
    coluna02: " ",
    coluna03: " ",
    coluna04: " ",
    coluna05: " ",
    verificada: false,
  },
  {
    coluna01: " ",
    coluna02: " ",
    coluna03: " ",
    coluna04: " ",
    coluna05: " ",
    verificada: false,
  },
  {
    coluna01: " ",
    coluna02: " ",
    coluna03: " ",
    coluna04: " ",
    coluna05: " ",
    verificada: false,
  },
]);

onMounted(() => {
  window.addEventListener("keydown", monitoraTeclado);
});

onUnmounted(() => {
  window.removeEventListener("keydown", monitoraTeclado);
});

function selecionarLetra(letra: string) {
  if (fimDeJogo.value) return;
  const coluna = Object.keys(linhas[linhaAtual.value]).find(
    (coluna) => linhas[linhaAtual.value][coluna] === " "
  );
  if (coluna) return (linhas[linhaAtual.value][coluna] = letra);
}

function acoesEspeciais(letra: string) {
  if (letra.toUpperCase() === "ENTER") {
    linhas[linhaAtual.value].verificada = true;
    if (
      Object.values(linhas[linhaAtual.value]).slice(0, 5).join("") ===
        palavraReferencia ||
      linhas[5].coluna05 !== " "
    )
      fimDeJogo.value = true;
    linhaAtual.value++;
  } else if (letra.toUpperCase() === "BACKSPACE") {
    const colunas = Object.keys(linhas[linhaAtual.value]);
    for (let j = colunas.length - 1; j >= 0; j--) {
      if (
        linhas[linhaAtual.value][colunas[j]] !== " " &&
        colunas[j] !== "corPalavra"
      ) {
        linhas[linhaAtual.value][colunas[j]] = " ";
        return;
      }
    }
  } else window.location.reload();
}

function monitoraTeclado(event: KeyboardEvent) {
  const key = event.key.toUpperCase();
  if (key.length === 1 && key >= "A" && key <= "Z") {
    selecionarLetra(key);
  } else if (key === "ENTER" || key === "BACKSPACE") {
    acoesEspeciais(key);
  }
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
