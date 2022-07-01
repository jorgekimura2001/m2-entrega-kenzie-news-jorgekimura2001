import app from './models/classes.js'
import Requisicao from '../src/controllers/Requisicao.js'

const conjutoDados = await Requisicao.pegarDados()

console.log(conjutoDados)
