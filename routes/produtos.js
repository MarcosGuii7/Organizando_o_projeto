const express = require("express")
const router = express.Router()
const produtosControllers = require("../controllers/produtosControllers")
const controllersFuncionarios = require("../controllers/controllersFuncionarios")

router.post("/", produtosControllers.criarProdutos)
router.get("/", produtosControllers.listarProdutos)
router.put("/:id", produtosControllers.atualizarProdutos)
router.delete("/:id", produtosControllers.deletarProdutos)

router.post("/", controllersFuncionarios.cadastrarFuncionarios)
router.get("/", controllersFuncionarios.listarFuncionarios)
router.put("/:id", controllersFuncionarios.atualizarFuncionarios)
router.delete("/:id", controllersFuncionarios.deletarFuncionarios)

module.exports = router;