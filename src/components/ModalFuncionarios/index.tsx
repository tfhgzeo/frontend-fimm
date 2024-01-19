import { createUser } from '@/api'
import { CUser } from '@/types'
import React, { useState } from 'react'
import { XCircle } from 'react-feather'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const ModalFuncionarios: React.FC<IModal> = ({ isOpen, setOpen }) => {
  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState('')
  const [cpf, setCpf] = useState('')
  const [cidade, setCidade] = useState('')
  const [base, setBase] = useState('')
  const [funcao, setFuncao] = useState('')
  const [regiao, setRegiao] = useState('')

  const onSubmit = () => {
    const userData: CUser = {
      base,
      cidade,
      cpf,
      funcao,
      matricula,
      nome,
      regiao,
    }
    createUser(userData)
      .then((response) => {
        console.log(response)

        toast.success('Cadastrado com Sucesso')
        // setOpen(!open)
      })
      .catch(() => {
        toast.error('Erro ou cadastrar')
      })
  }

  if (isOpen) {
    return (
      <form
        onSubmit={() => {
          onSubmit()
        }}
      >
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-rgba-modal">
          <div
            className="fixed left-3/4 top-3  transform rounded-md bg-white p-3"
            style={{ width: '400px', left: '45%', top: '10%' }}
          >
            <button
              className="flex h-2 flex-row bg-black"
              onClick={() => setOpen(!isOpen)}
            >
              <XCircle className="fixed" style={{ left: '90%' }} />
            </button>
            <h2 className="p-2 font-bold">Cadastrar Funcionário</h2>
            <input
              className="mb-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Matricula"
              required={true}
              value={matricula}
              onChange={(e) => {
                setMatricula(e.target.value)
              }}
            />
            <input
              className="mb-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Nome"
              required={true}
              value={nome}
              onChange={(e) => {
                setNome(e.target.value)
              }}
            />
            <input
              className="mb-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="CPF"
              required={true}
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value)
              }}
            />
            <input
              className="mb-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Função"
              required={true}
              value={funcao}
              onChange={(e) => {
                setFuncao(e.target.value)
              }}
            />
            <input
              className="mb-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Região"
              required={true}
              value={regiao}
              onChange={(e) => {
                setRegiao(e.target.value)
              }}
            />
            <input
              className="mb-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Base"
              required={true}
              value={base}
              onChange={(e) => {
                setBase(e.target.value)
              }}
            />
            <input
              className="mb-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Cidade"
              required={true}
              value={cidade}
              onChange={(e) => {
                setCidade(e.target.value)
              }}
            />
            <button
              className="w-full rounded-md bg-primary p-4 text-white"
              onClick={() => setOpen(!isOpen)}
            >
              Download Padrão
            </button>
            <div className="relative mb-4 mt-2">
              <input
                className="placeholder-text w-full cursor-pointer rounded-md border border-gray-300 p-3 text-center text-white file:border-none file:bg-white file:text-white"
                type="file"
                placeholder="Cadastro em massa"
              />
              <span className="pointer-events-none absolute left-0 top-0 w-full p-3 text-center text-primary">
                Cadastro em massa
              </span>
            </div>
            <button className="w-full rounded-md bg-primary p-4 text-white">
              Cadastrar funcionário
            </button>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    )
  }
}

export default ModalFuncionarios
