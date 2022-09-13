import axios from 'axios';
import { url } from 'inspector';

export const api = axios.create({
    baseURL: 'http://api-test.bhut.com.br:3000/api-docs/'
})



export const cadastroCarro = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url,dados)
    setDado(resposta.data) 
}

export const busca = async(url: any, setDado: any, header: any) => {
    const resposta = await api.get(url,header)
    setDado(resposta.data) 
}

export const buscaId = async(url: any, setDado: any, header: any) => {
    const resposta = await api.get(url,header)
    setDado(resposta.data) 
}

export const post = async(url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data) 
}

export const put = async(url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data) 
}

export const deleteId = async(url: any, header: any) => {
    await api.delete(url, header)
}