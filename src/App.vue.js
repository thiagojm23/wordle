import { reactive, ref, onMounted, onUnmounted } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
function selecionarLetra(letra) {
    if (fimDeJogo.value)
        return;
    const coluna = Object.keys(linhas[linhaAtual.value]).find((coluna) => linhas[linhaAtual.value][coluna] === " ");
    if (coluna)
        return (linhas[linhaAtual.value][coluna] = letra);
}
function acoesEspeciais(letra) {
    if (letra.toUpperCase() === "ENTER") {
        linhas[linhaAtual.value].verificada = true;
        if (Object.values(linhas[linhaAtual.value]).slice(0, 5).join("") ===
            palavraReferencia ||
            linhas[5].coluna05 !== " ")
            fimDeJogo.value = true;
        linhaAtual.value++;
    }
    else if (letra.toUpperCase() === "BACKSPACE") {
        const colunas = Object.keys(linhas[linhaAtual.value]);
        for (let j = colunas.length - 1; j >= 0; j--) {
            if (linhas[linhaAtual.value][colunas[j]] !== " " &&
                colunas[j] !== "corPalavra") {
                linhas[linhaAtual.value][colunas[j]] = " ";
                return;
            }
        }
    }
    else
        window.location.reload();
}
function monitoraTeclado(event) {
    const key = event.key.toUpperCase();
    if (key.length === 1 && key >= "A" && key <= "Z") {
        selecionarLetra(key);
    }
    else if (key === "ENTER" || key === "BACKSPACE") {
        acoesEspeciais(key);
    }
}
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
