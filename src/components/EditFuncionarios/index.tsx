import React from 'react'
import { XCircle } from 'react-feather'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const EditFuncionarios: React.FC<IModal> = ({ isOpen, setOpen }) => {
  if (isOpen) {
    return (
      <div
        // eslint-disable-next-line prettier/prettier
      className={`fixed justify-center items-center bottom-0 left-0 right-0 top-0 flex flex-row-reverse rounded bg-rgba-modal pr-4 pt-4 ${isOpen ? 'h-full md:w-full' : 'invisible h-0 w-0'} `}
      >
        <div
          // eslint-disable-next-line prettier/prettier
        className={`hide-scrollbar top-3 flex  transform flex-col  rounded-md bg-white p-3 ${isOpen ? 'h-[38.5rem] md:w-[31.25rem]' : 'h-0 md:w-0 '} transition-width duration-300 `}
        >
          <button
            // eslint-disable-next-line prettier/prettier
          className={`absolute flex h-2 flex-row bg-black ${isOpen ? '' : 'invisible'}`}
            onClick={() => setOpen(!isOpen)}
          >
            <XCircle className="fixed" style={{ left: '88%' }} />
          </button>

          <div className="flex flex-col overflow-hidden overflow-y-scroll text-left">
            <h2 className="p-2 font-bold">Editar</h2>
            <h2 className="p-2 font-bold">Nome</h2>
            <label className="p-2 text-gray-400  ">
              Editar o nome do colaborador
            </label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Nome"
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">CPF</h2>
            <label className="p-2 text-gray-400  ">Editar o CPF</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: 12345678901"
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Função</h2>
            <label className="p-2 text-gray-400  ">Editar Função</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: Agente Comercial"
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Região</h2>
            <label className="p-2 text-gray-400  ">Editar Região</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: Piruibe"
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Contrato</h2>
            <label className="p-2 text-gray-400  ">Editar Contrato</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: SaneaGo"
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Cidade</h2>
            <label className="p-2 text-gray-400  ">Editar Cidade</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: São Paulo"
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">E-mail</h2>
            <label className="p-2 text-gray-400  ">Editar E-mail</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: teste@exemple.com"
            />
          </div>

          <div
            // eslint-disable-next-line prettier/prettier
          className={`z-[1] flex  w-full flex-row items-center justify-around border-t p-4 ${isOpen ? '' : 'invisible'}`}
            style={{ boxShadow: '0 -20px 20px -20px rgba(0,0,0,0.2)' }}
          >
            <button
              className="mr-6 w-full rounded-2xl  border-2 border-primary bg-white p-4 text-primary"
              onClick={() => setOpen(!isOpen)}
            >
              Cancelar
            </button>
            <button
              className="w-full rounded-2xl bg-primary p-4 text-white"
              onClick={() => setOpen(!isOpen)}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditFuncionarios
