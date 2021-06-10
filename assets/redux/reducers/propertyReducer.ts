import { AnyAction } from 'redux'
import { ClienteReducerType } from '../../types'
import { GET_PROPERTY_SITE } from '../actions/index'

const initialState: ClienteReducerType = {
    cliente: {
        Id: 0,
        key_cli: '',
        tipo_doc: 0,
        id_regimen: null,
        documento: '',
        digito: null,
        fecha_expedicion: null,
        nombre: '',
        fecha_creacion: '',
        apellido: null,
        razon_social: null,
        nombre_empresa: '',
        id_pais: '',
        id_region: null,
        id_ciudad: 0,
        terminos_y_condiciones: 0,
        ip_cliente: null,
        email: '',
        contrasena: '',
        telefono: null,
        ind_pais: 0,
        celular: '',
        direccion: null,
        pagweb: null,
        servicio: null,
        ciiu: null,
        actividad: null,
        id_plan: 0,
        id_estado: 0,
        observaciones: null,
        id_reseller: null,
        logo: '',
        id_aliado: null,
        comision_aliado: null,
        tipo_cliente: '',
        fase_integracion: 0,
        detalle_estado: 0,
        id_categoria: null,
        id_subcategoria: null,
        saldo_cliente: null,
        codigo_qr: null,
        pin: null,
        estado_pin: null,
        fb_user_id: null,
        perfil_id: 0,
        fb_user_status: null,
        sexo: null,
        fecha_nacimiento: null,
        aliado: 0,
        plain_password: null,
        borrado: null,
        slug: null,
        promedio_ventas: null,
        tipo_nacionalidad_clientes: null,
        dir_tipo_nomenclatura: null,
        dir_numero_nomenclatura: null,
        dir_numero_puerta1: null,
        dir_numero_puerta2: null,
        dir_tipo_propiedad: null,
        dir_detalle_tipo_propiedad: null,
        dir_descripcion: null,
        ind_ciudad: null,
        restricted_user: 0,
        lat: null,
        lng: null,
        tipo_usuario: 0,
        metatag_registro_id: 0,
        socios: null,
        last_restrictive_list_query: null,
        agregador_epy: null,
        id_tercero_siigo: null,
        id_contacto_siigo: null,
        responsable_iva: null,
        id_responsabilidad_fiscal: null,
        id_master_cliente: null,
    },
    clienteDetalleConfig: {
        emailContacto: '',
        emailContracargos: '',
        emailFacturacion: '',
        emailTransacciones: '',
        emailTickets: '',
        reintentosConfirmacion: '',
        urlConfirmacion: '',
        urlRespuesta: '',
    },
    paises: [{
        id: 0,
        name: '',
        displayText: '',
        locale: '',
        flag: '',
    }]
}

const proertyReducer = (state: ClienteReducerType = initialState, action: AnyAction) => {
    switch (action.type) {
      case GET_PROPERTY_SITE: {
        return {
          ...state,
          cliente: action.payload,
        }
      }
      default: {
        return state
      }
    }
  }
  
  export default proertyReducer