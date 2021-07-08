import React, { useEffect, useState } from 'react'
import { StyledTable, TableTextMoneda, TableTextLink } from './styles'
import TableCollectAction from '../TableCollectAction'
import { useModal } from '../../components/hooks/useModal'
import { ModalComp } from '../../components/modalComp'
import ShareLink from '../../components/ShareLink'

import NumberFormat from 'react-number-format'
import { useHistory } from 'react-router-dom'

type Props = {
  data: {}[]
  titleData: {}[]
}

const TableDashboard: React.FC<Props> = ({ data, titleData }) => {
  const titles = Object.keys(titleData)
  const datos = [
    'id',
    'date',
    'title',
    'reference',
    'currency',
    'amount',
    'typeSell',
    'state',
    'link',
  ]
  const [alert, setAlert] = useState(false)
  const [buttonLoadModal, setButtonLoadModal] = useState(false)
  const [idCobra, setIdCobra] = useState(null)
  const history = useHistory()
  const { isShown, toggle } = useModal()

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  const content = (
    <React.Fragment>
      <ShareLink idCobra={idCobra} />
    </React.Fragment>
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
              {datos.map((title: any, index: number) => {
                if (title != 'typeSell') {
                  return (
                    <td key={index}>
                      {title == 'id' ? (
                        <body>{item[title]}</body>
                      ) : title == 'amount' ? (
                        <body>
                          <NumberFormat
                            thousandSeparator={true}
                            prefix={'$'}
                            value={item[title]}
                            displayType={'text'}
                          />
                        </body>
                      ) : title == 'currency' ? (
                        <body>
                          <TableTextMoneda>{item[title]}</TableTextMoneda>
                        </body>
                      ) : title == 'link' ? (
                        <body>
                          <TableTextLink href={'https://link.epayco.io/' + item[title]}>
                            https://link.epayco.io/{item[title]}
                          </TableTextLink>
                        </body>
                      ) : title == 'state' ? (
                        <body>
                          {item[title] == 1
                            ? 'Pendiente por pago'
                            : item[title] == 2
                            ? 'Pagado'
                            : 'Eliminado'}
                        </body>
                      ) : (
                        <body>{item[title]}</body>
                      )}
                    </td>
                  )
                }
              })}
              <td>
                <TableCollectAction
                  actions={[
                    {
                      name: 'Detalle de cobro',
                      funcion: () => {
                        redirectRoute(`/collect/show/${item['id']}`)
                      },
                      validarEstado: true,
                    },
                    {
                      name: 'Compartir cobro',
                      funcion: () => {
                        setIdCobra(item['id'])
                        toggle()
                      },
                      validarEstado: true,
                    },
                    {
                      name: 'Eliminar cobro',
                      funcion: '',
                      validarEstado: true,
                    },
                  ]}
                ></TableCollectAction>
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
        modalContent={content}
        headerText={'Compartir link de Cobro'}
      />
    </div>
  )
}

export default TableDashboard
