import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  StyledTable,
  TableTextMoneda,
  TableTextStatusOK,
  TableTextStatusPending,
  TableTextStatusCancel,
  ContentAction,
  ModalButtons,
  ModalInput,
  TableTextStatusOther,
} from './styles'
import MedioPago from '../../components/MedioPago/'
import TableTransaccionesAction from '../TableTransaccionesAction'
import NumberFormat from 'react-number-format'
import { useHistory, Link } from 'react-router-dom'
import { ModalComp } from '../modalComp'
import { sendTransactionReceiptLast } from '../../redux/actions'

type Props = {
  data: {}[]
  titleData: {}[]
  toast: any
}

const TableTransaction: React.FC<Props> = ({ data, titleData, toast }) => {
  const titles = Object.keys(titleData)
  const titless = Object.keys(data[0])
  const history: any = useHistory()

  const [trx, setTrx] = useState(0)
  const [isShown, setIsShown] = useState<boolean>(false)
  const toggle = () => setIsShown(!isShown)
  const [input, setInput] = useState({
    email: '',
  })

  const handleInputChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const enviarComprobante = async (idTransaction: number, email: string) => {
    let res = await sendTransactionReceiptLast(idTransaction, email)
    if (res === false) {
      toast.error('Error al enviar comprobante, intente nuevamente.')
    } else {
      toast.success('Se ha enviado el comprobante correctamente.')
    }
    setInput({ email: '' })
    toggle()
  }

  const modalConfirmacionTrx = (
    <div>
      <ModalInput>
        <p>Ingrese el correo electrónico.</p>
        <input
          placeholder="Correo electrónico"
          name="email"
          type="email"
          value={input.email}
          onChange={(e) => handleInputChange(e)}
        />
      </ModalInput>
      <ModalButtons>
        <button className="buttonSend" onClick={() => enviarComprobante(trx, input.email)}>
          Enviar
        </button>
        <button className="buttonCancel" onClick={toggle}>
          Cancelar
        </button>
      </ModalButtons>
    </div>
  )

  return (
    <div>
      <StyledTable>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            {titleData.map((item: any, index: number) => (
              <th key={index}>
                <header>{item}</header>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index}>
              {titless.map((title: any, index: number) => (
                <td key={index}>
                  {index == 0 ? (
                    <body>
                      <Link
                        to={'/transacciones/detalles/' + item[title]}
                        style={{
                          fontWeight: 'normal',
                          fontSize: '1vw',
                          color: '#40a8e6',
                          textDecoration: 'none',
                        }}
                      >
                        {item[title]}
                      </Link>
                    </body>
                  ) : index == 3 ? (
                    <body>
                      <TableTextMoneda>
                        <NumberFormat
                          thousandSeparator={true}
                          prefix={'$'}
                          value={item[title]}
                          displayType={'text'}
                        />
                      </TableTextMoneda>
                    </body>
                  ) : index == 2 ? (
                    <body>
                      <MedioPago type={item[title]}></MedioPago>
                    </body>
                  ) : index == 4 ? (
                    <body>
                      {item[title] == 'Aceptada' ? (
                        <TableTextStatusOK>{item[title]}</TableTextStatusOK>
                      ) : item[title] == 'Pendiente' ? (
                        <TableTextStatusPending>{item[title]}</TableTextStatusPending>
                      ) : item[title] == 'Fallida' ? (
                        <TableTextStatusCancel>{item[title]}</TableTextStatusCancel>
                      ) : item[title] == 'Cancelada' ? (
                        <TableTextStatusCancel>{item[title]}</TableTextStatusCancel>
                      ) : (
                        <TableTextStatusOther>{item[title]}</TableTextStatusOther>
                      )}
                    </body>
                  ) : (
                    <body>{item[title]}</body>
                  )}
                </td>
              ))}
              <td>
                <ContentAction>
                  <TableTransaccionesAction
                    setTrx={setTrx}
                    item={item.referencePayco}
                    actions={[
                      {
                        name: 'Detalle',
                        funcion: () =>
                          history.push(`/transacciones/detalles/${item.referencePayco}`),
                        validarEstado: true,
                      },
                      {
                        name: 'Enviar comprobante',
                        funcion: () => toggle(),
                        validarEstado: true,
                      },
                      {
                        name: 'Reenvió de confirmación',
                        funcion: '',
                        validarEstado: true,
                      },
                    ]}
                  ></TableTransaccionesAction>
                </ContentAction>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
            <tr>
              {titles.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </tfoot> */}
      </StyledTable>
      <ModalComp
        isShown={isShown}
        hide={toggle}
        modalContent={modalConfirmacionTrx}
        headerText="Enviar confirmación transacción"
      ></ModalComp>
    </div>
  )
}

export default TableTransaction
