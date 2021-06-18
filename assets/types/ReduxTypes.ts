export type CaptchaReducerType = {
  tokenCaptcha: any
}

export type ViewReducerType = {
  view: 'home' | 'other'
}

export type ClienteReducerType = {
  cliente: {
    Id: any
    key_cli: any
    tipo_doc: any
    id_regimen?: any
    documento: any
    digito?: any
    fecha_expedicion?: any
    nombre: any
    fecha_creacion: any
    apellido?: any
    razon_social?: any
    nombre_empresa: any
    id_pais: any
    id_region?: any
    id_ciudad: any
    terminos_y_condiciones: any
    ip_cliente?: any
    email: any
    contrasena: any
    telefono?: any
    ind_pais: any
    celular: any
    direccion?: any
    pagweb?: any
    servicio?: any
    ciiu?: any
    actividad?: any
    id_plan: any
    id_estado: any
    observaciones?: any
    id_reseller?: any
    logo: any
    id_aliado?: any
    comision_aliado?: any
    tipo_cliente: any
    fase_integracion: any
    detalle_estado: any
    id_categoria?: any
    id_subcategoria?: any
    saldo_cliente?: any
    codigo_qr?: any
    pin?: any
    estado_pin?: any
    fb_user_id?: any
    perfil_id: any
    fb_user_status?: any
    sexo?: any
    fecha_nacimiento?: any
    aliado: any
    plain_password?: any
    borrado?: any
    slug?: any
    promedio_ventas?: any
    tipo_nacionalidad_clientes?: any
    dir_tipo_nomenclatura?: any
    dir_numero_nomenclatura?: any
    dir_numero_puerta1?: any
    dir_numero_puerta2?: any
    dir_tipo_propiedad?: any
    dir_detalle_tipo_propiedad?: any
    dir_descripcion?: any
    ind_ciudad?: any
    restricted_user: any
    lat?: any
    lng?: any
    tipo_usuario: any
    metatag_registro_id: any
    socios?: any
    last_restrictive_list_query?: any
    agregador_epy?: any
    id_tercero_siigo?: any
    id_contacto_siigo?: any
    responsable_iva?: any
    id_responsabilidad_fiscal?: any
    id_master_cliente?: any
  }
  clienteDetalleConfig: {
    emailContacto: any
    emailContracargos: any
    emailFacturacion: any
    emailTransacciones: any
    emailTickets: any
    reintentosConfirmacion: any
    urlConfirmacion: any
    urlRespuesta: any
  }
  paises: {
    id: any
    name: any
    displayText: any
    locale: any
    flag: any
  }[]
}

export type UserReducerType = {
  userData: {
    data: {
      email: any
      cellPhone: any
      companyName: any
      indicative: any
      logo: any
      socialName: any
    }
  }
  profileImage: any
  backgroundImage: any
}

export type sellLinkReducerType = {
  links: {
    nombre: string
    descripcion: string
    factura: string
    tipoMoneda: string
    valor: number
    total: number
    impuestos?: number
    imagenes?: []
    archivo?: any
    cantidad?: number
    fechaVencimiento?: any
    urlConfirmacion?: string
    urlRespuesta?: string
  }[]
}

export type ClientePaisReducerType = {
  paises: {
    paises: { id: any; name: any; displayText: any; locale: any; flag: any }[]
  }
}
