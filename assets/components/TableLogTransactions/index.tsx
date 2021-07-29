import React from 'react'
import { 
  ResponsiveTableLogCobra, 
  StyledTable, 
  ContentItem,
  ClaveField,
  ValueItem,
  ContainerBox
} from './styles'
type Props = {
  data: {}[]
  titleData: {}[]
}

const fields:any={
  reference:"Referencia ePayco",
  state:"Estado",
  date:"Fecha",
}
const TableDashboard: React.FC<Props> = ({ data, titleData }) => {

  const titles = Object.keys(titleData)
  const datos = Object.keys(data[0])

  const addStatusClass = (state: any) => {
    let { classCss }: any = ''
    switch (state) {
      case 'Aprobada':
      case 'Aceptada':
        classCss = (
          <h1
            style={{
              textAlign: 'center',
              fontSize: '13px',
              color: 'green',
              textDecoration: 'none',
            }}
          >
            {state}
          </h1>
        )
        break
      case 'Pendiente':
        classCss = (
          <h1
            style={{
              textAlign: 'center',
              fontSize: '13px',
              color: 'orange',
              textDecoration: 'none',
            }}
          >
            {state}
          </h1>
        )
        break
      case 'Rechazada':
        classCss = (
          <h1
            style={{
              textAlign: 'center',
              fontSize: '13px',
              color: 'red',
              textDecoration: 'none',
            }}
          >
            {state}
          </h1>
        )
        break
      default:
        classCss = (
          <h1
            style={{
              textAlign: 'center',
              fontSize: '13px',
              textDecoration: 'none',
            }}
          >
            {state}
          </h1>
        )
        break
    }
    return classCss
  }

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
              {datos.map((title: any, index: number) => (
                <td key={index}>
                  {title == 'state' ? (
                    <span>{addStatusClass(item[title])}</span>
                  ) : (
                    <body>{item[title]}</body>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <ResponsiveTableLogCobra>
          {
            data.map((item:any)=>{
              const cajas= Object.keys(fields).map((clave:any)=>(
                  <ContentItem>
                    <ClaveField>{fields[clave]}</ClaveField>
                    {fields[clave] === 'Estado' ? 
                    <span>{addStatusClass(item[clave])}</span>
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
    </ResponsiveTableLogCobra>
    </>
  )
}

export default TableDashboard
