import React from 'react'
import { XCircle } from 'react-feather'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const ModalFilterEquip: React.FC<IModal> = ({ isOpen, setOpen }) => {
  // if (isOpen) {
  return (
    <div
      // eslint-disable-next-line prettier/prettier
      className={`fixed bottom-0 left-0 right-0 top-0 flex flex-row-reverse rounded bg-rgba-modal pr-4 pt-4 ${isOpen ? 'h-full md:w-full' : 'invisible h-0 w-0'} `}
    >
      <div
        // eslint-disable-next-line prettier/prettier
        className={`hide-scrollbar top-3 flex  transform flex-col  rounded-md bg-white p-3 ${isOpen ? 'h-[37.5rem] md:w-[31.25rem]' : 'h-0 md:w-0 '} transition-width duration-300 `}
      >
        <button
          // eslint-disable-next-line prettier/prettier
          className={`absolute flex h-2 flex-row bg-black ${isOpen ? '' : 'invisible'}`}
          onClick={() => setOpen(!isOpen)}
        >
          <XCircle className="fixed" style={{ left: '85%' }} />
        </button>

        <div className="overflow-hidden overflow-y-scroll">
          <h2 className="p-2 font-bold">Filtro</h2>

          <h2 className="p-2 font-bold">Equipamento</h2>
          <label className="p-2 text-gray-400  ">Filtre pelo equipamento</label>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Ex: Impressora"
          />
          <hr className="mb-4"></hr>
          <h2 className="p-2 font-bold">Dias</h2>
          <label className="p-2 text-gray-400  ">Filtre por Dias</label>

          <input
            className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="10"
          />
          <hr className="mb-4"></hr>
          <h2 className="p-2 font-bold">Marca</h2>
          <label className="p-2 text-gray-400  ">Filtre por Marca</label>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Ex: 123456"
          />
          <hr className="mb-4"></hr>
          <h2 className="p-2 font-bold">Quantidade</h2>
          <label className="p-2 text-gray-400  ">Filtre pela quantidade</label>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Ex: 1"
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
            Limpar filtro
          </button>
          <button
            className="w-full rounded-2xl bg-primary p-4 text-white"
            onClick={() => setOpen(!isOpen)}
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  )
  // }
}

export default ModalFilterEquip
