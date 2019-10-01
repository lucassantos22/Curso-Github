export default {
    state:{
        quantidade: 1,
        preco: 9.99
    },
    mutations:{
        setQuantidade(state, quantidade){
            state.quantidade = quantidade;
        },
        setPreco(state, preco){
            state.preco = preco;
        }
    }
}