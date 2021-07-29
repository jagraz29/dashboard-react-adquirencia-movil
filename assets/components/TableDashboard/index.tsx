import React from 'react'
import {
  StyledTable,
  TableTextMoneda,
  TableTextLink,
  TableTextStatusOK,
  TableTextStatusPending,
  TableTextStatusCancel,
  ResponsiveTableDashboard,
  ContainerBox,
  ContentItem,
  ClaveField,
  ValueItem,
  ValueStatus,
  TableTextStatusOther
} from './styles'
import MedioPago from '../../components/MedioPago/'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'

type Props = {
  data: {}[]

  titleData: {}[]
}

const fields:any={
  referencePayco:"Ref.Payco",
  referenceClient: "Ref.Cliente",
  description:"Descripción",
  paymentMethod:"Medio de pago",
  amount:"Valor",
  currency:"Moneda",
  status:"Estado"
}

const TableDashboard: React.FC<Props> = ({ data, titleData }) => {
  
  const titless = Object.keys(data[0])

  return (
    <>
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
                  <TableTextLink>
                    <Link to={`/transacciones/detalles/${item[title]}`}>
                      {item[title]}
                    </Link>
                  </TableTextLink>
                ) : index == 5 ? (
                  <body>
                    <TableTextMoneda>{item[title]}</TableTextMoneda>
                  </body>
                ) : index == 3 ? (
                  <body>
                    <MedioPago type={item[title]}></MedioPago>
                  </body>
                ) : index == 6 ? (
                  <body>
                    {item[title] == 'Aceptada' ? (
                      <TableTextStatusOK>{item[title]}</TableTextStatusOK>
                    ) : item[title] == 'Pendiente' ? (
                      <TableTextStatusPending>{item[title]}</TableTextStatusPending>
                    ) : item[title] == 'Rechazada'? (
                      <TableTextStatusCancel>{item[title]}</TableTextStatusCancel>
                    ) : item[title] == 'Cancelada' ? (
                      <TableTextStatusCancel>{item[title]}</TableTextStatusCancel>
                    ) : (
                      <TableTextStatusOther>{item[title]}</TableTextStatusOther>
                    )}
                  </body>
                ) : 
                 index == 4 ? (
                  <body>
                    <NumberFormat
                          thousandSeparator={true}
                          prefix={'$'}
                          value={item[title]}
                          displayType={'text'}
                        />
                  </body>
                )
                :(
                  <body>{item[title]}</body>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
    <ResponsiveTableDashboard>
          {
            data.map((item:any)=>{
              const cajas= Object.keys(fields).map((clave:any)=>(
                  <ContentItem>
                    <ClaveField>{fields[clave]}</ClaveField>
                    {
                      fields[clave] === "Ref.Payco"?
                      <Link to={`/transacciones/detalles/${item[clave]}`}>{item[clave]}</Link>
                      :
                      fields[clave] === "Valor"?
                      <NumberFormat
                          thousandSeparator={true}
                          prefix={'$'}
                          value={item[clave]}
                          displayType={'text'}
                        />
                      :
                      fields[clave] === "Estado"?
                      <ValueStatus data-estado={item[clave]}>{item[clave]}</ValueStatus>
                      :
                      fields[clave] === "Medio de pago"?
                      <MedioPago type={item[clave]}></MedioPago>
                      :
                      <ValueItem>{item[clave]}</ValueItem>
                    }
                  </ContentItem>
              ))
                return <ContainerBox>
                  {cajas}
                </ContainerBox>
            })
          }
    </ResponsiveTableDashboard>
    </>
  )
}

export default TableDashboard
