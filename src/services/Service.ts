import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

//get e delete não envia nada
//post e put, envia o json e grava

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) =>{
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function ) =>{
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}
// feito em aula é a fusão do login com o cadastro 
//backend sempre retorna algo por meio do setDados
// header é utilizado para as requisições que passam pela segurança

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}
