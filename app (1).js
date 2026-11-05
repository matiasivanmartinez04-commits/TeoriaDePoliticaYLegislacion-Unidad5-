/* ============================================================
   PyLE · Unidad 5 — Sitio de estudio para el coloquio
   Datos extraídos de los 4 archivos provistos:
   - PPT de la cátedra (PyLE – Unidad 5)
   - Saforcada y Ximenes (2024), Tramas y Redes 6, págs. 17-28
   - Gluz y Kesler (2024), Debates em Educação 16/38, págs. 1-19
   - Guía "Actividad unidad 5"
   ============================================================ */

const CHIP_FUENTE = {
  "Saforcada y Ximenes": "chip-sx",
  "Gluz y Kesler": "chip-gk",
  "Cátedra (PPT)": "chip-cat",
  "Guía": "chip-guia"
};

const DATA = {
  meta: {
    titulo: "PyLE · Unidad 5 — Temas en debate en la agenda de la política educativa actual",
    fuentes: [
      { id: "ppt", nombre: "PyLE – Unidad 5 (PPT de la cátedra)", detalle: "Diapositivas de la Unidad 5: síntesis de la cátedra a partir de Saforcada y Ximenes y de Gluz y Kesler." },
      { id: "sx", nombre: "Saforcada y Ximenes (2024)", detalle: "«El derecho a la educación en América Latina y el Caribe. Disputas políticas y reconfiguraciones regionales», Tramas y Redes (6), págs. 17-28. Guía: págs. 17 a 25." },
      { id: "gk", nombre: "Gluz y Kesler (2024)", detalle: "«El avance de las nuevas derechas y el cercenamiento de lo común en las políticas educativas argentinas del SXXI», Debates em Educação, Vol. 16, N° 38. Guía: págs. 1 a 19." },
      { id: "guia", nombre: "Actividad Unidad 5 (docx)", detalle: "Guía de preguntas A (Saforcada y Ximenes) y B (Gluz y Kesler) — resuelta en la pestaña «Guía resuelta»." }
    ]
  },

  resumenExpres: [
    "El derecho a la educación convive con DOS concepciones en disputa desde el origen de los sistemas educativos: la INDIVIDUAL (igualdad formal, igualdad de oportunidades, el Estado solo «propicia» oportunidades, incluso vía iniciativa privada) y la SOCIAL (igualdad en el acceso a una educación de calidad a lo largo de la vida; no basta el reconocimiento jurídico: exige realización efectiva mediante la educación pública). Saforcada y Ximenes, con Paviglianiti, lo llaman «construcción histórica polémica».",
    "La historia del derecho funciona por CICLOS de expansión y retracción: Estado de Bienestar (expansión) → dictaduras y años 90 (retracción neoliberal: derecho como «oportunidad») → siglo XXI posneoliberal o CINAL (nueva expansión: leyes, obligatoriedad, financiamiento, interculturalidad, diversidad sexual, migraciones) → restauración conservadora actual (nueva retracción).",
    "La NOVEDAD de la etapa actual (Saforcada y Ximenes): la derecha ya no niega el derecho «desde afuera», lo disputa DESDE DENTRO: lo reinterpreta mediante una «juridificación reactiva» (Vaggione) que resignifica la libertad y proclama la primacía de la familia (homeschooling, «con mis hijos no te metas»), renaturaliza las desigualdades (las valora como mérito) y habilita la persecución del trabajo docente.",
    "La IGUALDAD: la igualdad de condiciones de acceso (constitutiva del derecho en las constituciones del Estado Social) es reemplazada por la igualdad de oportunidades; así, las desigualdades que produce el sistema no solo se aceptan: se valoran como mérito (pág. 23 de Saforcada y Ximenes).",
    "CHILE es el caso de interés: la Constitución de 1980 suplantó el derecho social por la «libertad de enseñanza»; eso produjo 40 años de mercado y segregación, el estallido de 2019 y un proceso constituyente que naufragó: sigue vigente la constitución pinochetista.",
    "Gluz y Kesler estudian ARGENTINA con otra hipótesis: las dinámicas de INDIVIDUACIÓN de larga data (desde los ´80) crearon las condiciones de posibilidad del avance de las nuevas derechas: instrumentos de política que activan y responsabilizan a los sujetos por sus resultados, estigmatizan a los sectores vulnerados y erosionan la legitimidad de las políticas protectoras.",
    "CABA es el «SEMILLERO»: desde 2007 el PRO reorganiza el Estado con la Nueva Gestión Pública (NGP), ingresa personal empresarial (Bullrich, Acuña), jerarquiza la evaluación y reforma la secundaria: la NES (2013) y la Secundaria del Futuro (2017) pasan de la INCLUSIÓN a la INNOVACIÓN (habilidades del siglo XXI, autonomía escolar, educación emocional, co-responsabilidad de familias y ONG).",
    "Con CAMBIEMOS (2015-2019) ese modelo se escala a la Nación: «calidad centrada en los aprendizajes» (PEN 2016-2021), Secundaria Federal 2030, y el financiamiento pasa de UNIVERSAL a SELECTIVO y COMPETITIVO: el PMI pasa a dar recursos a pocas escuelas por «Proyectos de Aprendizaje Integrado» (PAI); Conectar Igualdad (netbooks universales) es reemplazado por Aprender Conectados; aparecen Escuelas Faro, Asistiré, La escuela sale del aula, y los «fondos rotatorios» (por etapas y sujetos a rendición: quien no rinde pierde desembolsos) que profundizan desfinanciación y fragmentación.",
    "Con LLA/MILEI (2023-2024) se radicaliza: el Ministerio de educación se degrada a Secretaría dentro de «Capital Humano»; la educación se entiende como «capital humano» para la economía; DNU y Ley de Bases habilitan privatizar Educ.ar; se lanzan los VOUCHERS EDUCATIVOS (2024): financian familias de escuelas privadas subvencionadas con fondos que antes iban a programas socioeducativos estatales; su efecto principal es SIMBÓLICO: instalar la capacidad «de compra» de las familias. Además se cuestiona la obligatoriedad, se acusa a la escuela pública de «adoctrinamiento» y se proyecta reformar la Ley de Educación Nacional para denunciar a docentes por «actividad política».",
    "Lo que tienen EN COMÚN ambos artículos: marco regional post-CINAL, avance de las derechas, restauración conservadora, desplazamiento del derecho social, privatización y mercantilización. Lo que los DIFERENCIA: Saforcada y Ximenes analizan el DERECHO y su JURIDIFICACIÓN (escala regional, enfoque jurídico-político, caso Chile); Gluz y Kesler analizan los INSTRUMENTOS de política y la INDIVIDUACIÓN (escala argentina, enfoque empírico-procesal, caso CABA, nivel secundario)."
  ],

  periodos: [
    {
      id: "p1948", clase: "expansion", anios: "1948",
      titulo: "El punto de partida: la Declaración Universal de Derechos Humanos",
      texto: "Con el horror de la Segunda Guerra Mundial grabado «en cuerpos y pensamientos», la ONU aprueba la Declaración Universal de Derechos Humanos, que reconoce el derecho humano a la educación. Desde entonces y hasta fines del siglo XX se construye una compleja arquitectura internacional de reconocimiento y seguimiento de derechos. Aun así, el derecho sigue siendo una deuda para grandes sectores del planeta, en especial para América Latina y el Caribe.",
      hitos: ["1948: Declaración Universal de Derechos Humanos", "1966: Pacto Internacional de Derechos Económicos, Sociales y Culturales"],
      fuentes: ["Saforcada y Ximenes"], ref: "p. 19"
    },
    {
      id: "pbienestar", clase: "expansion", anios: "Mediados del siglo XX",
      titulo: "Estado de Bienestar: primer ciclo de EXPANSIÓN",
      texto: "El derecho a la educación es reconocido como DERECHO SOCIAL en la regulación internacional; los Estados asumen un rol proactivo para garantizarlo; se amplían los sistemas escolares y se desarrollan políticas de acceso para sectores históricamente excluidos.",
      hitos: ["Reconocimiento del derecho social", "Estados proactivos", "Sistemas escolares más amplios"],
      fuentes: ["Saforcada y Ximenes", "Cátedra (PPT)"], ref: "p. 19-20; PPT diap. 3"
    },
    {
      id: "pdictaduras", clase: "retraccion", anios: "2ª mitad del siglo XX",
      titulo: "Dictaduras en América Latina: negación de derechos",
      texto: "La región entra en un período «trágico» de golpes de Estado y gobiernos autoritarios «a sangre y fuego», que instauran regímenes de negación de los derechos humanos y SIENTAN LAS BASES del neoliberalismo que se consolidará en los años 90.",
      hitos: ["Golpes de Estado y gobiernos autoritarios", "Negación de derechos humanos", "Bases del neoliberalismo"],
      fuentes: ["Saforcada y Ximenes"], ref: "p. 19-20"
    },
    {
      id: "p90", clase: "retraccion", anios: "Años 90",
      titulo: "Neoliberalismo: el derecho como «oportunidad»",
      texto: "Primó una concepción INDIVIDUAL del derecho, entendido como «derecho de oportunidad en clave liberal». Políticas que debilitaron el sector público, privatización de la educación y redefinición del rol del Estado. El derecho a la educación perdió presencia en discursos, leyes, políticas y cooperación internacional. Gentili: los sectores neoliberales buscaban redefinirlo como derecho individual o incluso como derecho privado de propiedad en una educación de mercado. En paralelo, en la CABA de los 90 nacen intervenciones de «inclusión con justicia social» (fin de la lógica asistencial) que luego se nacionalizarán con el kirchnerismo.",
      hitos: ["«Derecho de oportunidad» en clave liberal", "Debilidad de lo público y privatización", "Gentili: educación de mercado", "CABA pionera de políticas de inclusión"],
      fuentes: ["Saforcada y Ximenes", "Gluz y Kesler"], ref: "S&X p. 20-21; G&K p. 5-6"
    },
    {
      id: "pcaba02", clase: "expansion", anios: "2001-2007",
      titulo: "Crisis de 2001 y el nacimiento del PRO en CABA",
      texto: "La crisis 2001 hace caer el bipartidismo y permite que las derechas se nucleen por fuera de los partidos tradicionales. El PRO (así llamado desde 2005) se presenta en CABA en 2003 con Mauricio Macri y gana tras la tragedia de Cromañón (194 muertos, crisis de gestión y corrupción). Se presenta como partido de «gestión» con promesa de «renovación de la política». En 2002, la CABA había sido la primera jurisdicción en sancionar la obligatoriedad del nivel secundario (Ley 898/GCBA/02).",
      hitos: ["2002: Ley 898 — obligatoriedad de la secundaria en CABA", "2003: primera presentación del PRO", "2004: tragedia de Cromañón", "2007: el PRO gobierna CABA (hasta hoy)"],
      fuentes: ["Gluz y Kesler"], ref: "p. 4-6"
    },
    {
      id: "pcinal", clase: "expansion", anios: "2003-2015 (aprox.)",
      titulo: "Ciclo progresista (CINAL): nueva expansión del derecho",
      texto: "Cambio de siglo = cambio de contexto: posneoliberalismo o «Ciclo de Impugnación al Neoliberalismo» (Ouviña y Thwaites Rey). Nueva agenda regional: soberanía, reposicionamiento del Estado y derechos sociales. El derecho a la educación vive un NUEVO CICLO DE EXPANSIÓN: leyes de educación en los primeros quince años del siglo, rol proactivo de los Estados, extensión de la obligatoriedad y aumento del financiamiento. Ganan fuerza NUEVOS TÓPICOS: educación intercultural, diversidad sexual, derechos de la población migrante. La agenda incorpora demandas de movimientos indígenas, negros, de mujeres, LGBTQIA+ y campesinos (derechos sexuales y reproductivos, pueblos originarios, matrices africanas), con leyes y políticas que buscan reducir desigualdades y promover diversidad.",
      hitos: ["Nuevas leyes de educación", "Extensión de la obligatoriedad", "Más financiamiento", "Interculturalidad, diversidad sexual, migraciones", "Agendas de diversidad y acciones afirmativas"],
      fuentes: ["Saforcada y Ximenes", "Cátedra (PPT)", "Gluz y Kesler"], ref: "S&X p. 20-21; PPT diap. 3; G&K p. 5"
    },
    {
      id: "ppro07", clase: "retraccion", anios: "2007-2015",
      titulo: "CABA: el «semillero» de la derecha en educación (PRO)",
      texto: "El PRO inicia un «giro a la derecha» en la CABA con tres grandes movimientos. (1) Reorganización del Estado con lógica de Nueva Gestión Pública: «régimen gerencial» para los cargos altos (Decretos 684/09 y 335/11), «gerencias operativas» con terminología empresarial, ingreso de funcionarios del mundo empresarial y de fundaciones (Bullrich, Acuña - Grupo Sophia) y jerarquización de la evaluación (entidad descentralizada específica). Se desarticulan los programas socioeducativos (ZAP, Coordinación de Programas Socioeducativos). (2) Reforma del secundario: la Nueva Escuela Secundaria (NES, 2013) y la Secundaria del Futuro (2017) cambian la «inclusión» por la «innovación»: habilidades del siglo XXI, tutorías como asignatura de «autonomía escolar» (metáfora del «rally», autoevaluación mensual), ACAP (2021) con empresas (McDonald's, Banco Santander, Bolsa de Comercio) y el «contexto VICA». (3) Programas que apelan a la co-responsabilidad de familias y comunidades: talleres para familias y Red Comunitaria de Apoyo Escolar (RCAE) en ONGs y fundaciones, donde el docente pasa a ser «facilitador».",
      hitos: ["2007: asunción del PRO en CABA", "NGP y «régimen gerencial»", "2013: Nueva Escuela Secundaria (NES)", "2017: Secundaria del Futuro", "2021: ACAP con actores empresariales", "RCAE: apoyo escolar en ONGs"],
      fuentes: ["Gluz y Kesler", "Cátedra (PPT)"], ref: "G&K p. 6-10; PPT diap. 5"
    },
    {
      id: "pcambiemos", clase: "retraccion", anios: "2015-2019",
      titulo: "Cambiemos: «primer tiempo» — de las desigualdades a la innovación y la calidad",
      texto: "Primera coalición de derecha que llega a la presidencia por el voto. Trasladó los equipos del PRO porteño al ministerio nacional (Bullrich). Reordenó el Ministerio con NGP (Subsecretaría de Innovación y Calidad Educativa) y desfinanció las políticas socioeducativas. El Plan Estratégico Nacional «Argentina Enseña y Aprende» (Res. CFE 285/16) instala la «calidad centrada en los aprendizajes»: se abandona la «igualdad de todos al derecho a la educación» (Res. CFE 79/09) y se pasa a la igualdad de oportunidades y al «derecho al aprendizaje». La Secundaria Federal 2030 (Res. CFE 330/17) replica la Secundaria del Futuro. El FINANCIAMIENTO pasa de universal a selectivo y competitivo: el PMI (antes para todas las secundarias) pasa a dar recursos a pocas instituciones por «Proyectos de Aprendizaje Integrado» (PAI); Conectar Igualdad (netbooks universales + formación docente) es reemplazado por Aprender Conectados (aulas digitales móviles y robótica, con certámenes «Docentes Innovadores» con premios y castigos). Programas nuevos, focalizados y a baja escala: Escuelas Faro (3000 escuelas), Asistiré (control de asistencia digital) y La escuela sale del aula (menos de 100 escuelas). El POAI y los «fondos rotatorios» (recursos por etapas sujetos a rendición) terminan en más desfinanciación y fragmentación federal.",
      hitos: ["2015: asunción de Cambiemos", "2016: PEN «Argentina Enseña y Aprende» (Res. 285/16)", "2017: Secundaria Federal 2030 (Res. 330/17)", "PMI → selectivo por PAI", "Conectar Igualdad → Aprender Conectados", "Escuelas Faro, Asistiré, La escuela sale del aula", "POAI y fondos rotatorios"],
      fuentes: ["Gluz y Kesler", "Cátedra (PPT)"], ref: "G&K p. 11-14; PPT diap. 5-6"
    },
    {
      id: "ppandemia", clase: "expansion", anios: "2019-2023",
      titulo: "Pandemia, UxP y conflicto por la escuela",
      texto: "El peronismo (Unión por la Patria) vuelve condicionado por la pandemia (un «tiempo liminal» según García Linera): debe recomponer capacidades estatales desestructuradas, renegociar la deuda y atender la emergencia (IFE por Decreto 310/20: subsidio incondicional a 8,9 millones de personas). Las políticas educativas priorizan la CONTINUIDAD PEDAGÓGICA (materiales virtuales y cuadernillos sin conectividad) y el servicio de alimentación escolar. La educación se vuelve foco de conflicto: las derechas se atribuyen la defensa de la «libertad» y del «derecho a la educación» contra el cierre de escuelas; el progresismo defiende el aislamiento sanitario. Los escándalos del gobierno (vacunatorio VIP, fotos del cumpleaños de la primera dama) son capitalizados por el PRO. Crece la derecha radicalizada con la consigna de la libertad: La Libertad Avanza (2019); Milei es diputado por CABA en 2021 (tercera fuerza).",
      hitos: ["2019: LLA se funda; UxP asume", "2020: IFE (D. 310/20) y cuarentena", "Continuidad pedagógica y alimentación escolar", "2021: Milei diputado (tercera fuerza en CABA)"],
      fuentes: ["Gluz y Kesler"], ref: "p. 15-16"
    },
    {
      id: "plla", clase: "retraccion", anios: "2023-2024",
      titulo: "Gobierno de LLA: radicalización, «fusionismo» y vouchers",
      texto: "«Elección de tercios» → alianza LLA-PRO gana el ballotage. DNU de reforma integral del Estado y Ley de Bases (664 artículos, modifica más de 300 leyes; habilitaría la privatización de Educ.ar, la plataforma pública de más de 20 años). El Ministerio de Educación se degrada a Secretaría dentro de la megacartera de «Capital Humano»: la educación se concibe como «capital humano» («conjunto de habilidades, aptitudes, experiencias y conocimientos de cada persona, imprescindible para la economía de un país», plataforma LLA 2023). Se abandonan los lineamientos de igualdad (Decreto 7/2019) y el Estado se concentra en logística y coordinación (Decreto 8/2023). Segunda medida: los VOUCHERS EDUCATIVOS (Res. 61/2024) — financiamiento temporario a familias con hijos en escuelas privadas con subvención mayor al 75% e ingresos de hasta 7 salarios mínimos, pagado con fondos antes destinados a programas socioeducativos estatales. Su principal efecto es SIMBÓLICO: un imaginario de fortalecimiento de la capacidad «de compra» más que un mercado escolar neoclásico. Presupuesto educativo congelado (reducción real), entrega de libros interrumpida, FONID reducido 10-20% nominal. Discurso presidencial: cuestiona la obligatoriedad, acusa a la escuela pública de «adoctrinamiento ideológico» y se proyecta reformar la LEN para crear un ámbito de denuncia de docentes que hagan «actividad política». Síntesis de Gluz y Kesler: «la individuación vía mercantilización y el control ideológico parecen ser el camino del fusionismo en el campo escolar».",
      hitos: ["2023: LLA+PRO ganan el ballotage", "Ministerio → Secretaría de Capital Humano", "DNU + Ley de Bases (Educ.ar privatizable)", "2024: Vouchers Educativos (Res. 61/2024)", "FONID reducido 10-20%", "Cuestionamientos a la obligatoriedad y a la escuela pública", "Proyecto de reforma de la LEN para denunciar docentes"],
      fuentes: ["Gluz y Kesler", "Cátedra (PPT)"], ref: "G&K p. 16-19; PPT diap. 6"
    },
    {
      id: "prestauracion", clase: "retraccion", anios: "Marco regional actual",
      titulo: "La restauración conservadora: el derecho disputado «desde dentro»",
      texto: "Tras el ciclo progresista, un nuevo ciclo de RETRACCIÓN: la restauración conservadora. El conservadurismo funciona como sustrato del neoliberalismo en crisis (Wendy Brown): nueva alianza liberal-conservadora con mayor peso del componente conservador. Las desigualdades dejan de ser un problema público y pasan a ser aceptadas —e incluso valoradas— como objetivo social (renaturalización). El neoconservadurismo no niega los derechos: los REINTERPRETA (renaturalización del derecho, Vaggione). El derecho a la educación comienza a disputarse DESDE DENTRO: el derecho universal de niñas, niños y jóvenes a la escolaridad se enfrenta al supuesto «derecho educativo natural» de los padres (educación en el hogar, «con mis hijos no te metas»). Estrategias de redefinición o BORRAMIENTO del derecho en discursos, normas y políticas; nuevos impulsos privatizadores y mercantilizadores; persecución y control del trabajo docente. Todo ello se articula en la «juridificación reactiva».",
      hitos: ["Alianza liberal-conservadora", "Desigualdades renaturalizadas", "Primacía de la familia (homeschooling)", "Igualdad de oportunidades como mérito", "Control y persecución docente", "Juridificación reactiva"],
      fuentes: ["Saforcada y Ximenes", "Cátedra (PPT)"], ref: "p. 21-23; PPT diap. 4"
    },
    {
      id: "ptech", clase: "retraccion", anios: "Transversal (última década)",
      titulo: "Tecnología, pandemia y derecho a la educación",
      texto: "Las soluciones digitales (plataformas, apps, IA «basada en datos») avanzan con un discurso de innovación y eficacia «incuestionable», presentado como garantía del derecho: enseñanza «personalizada» que daría iguales oportunidades a cada estudiante (Avelar, 2023). El Informe de Seguimiento de la Educación 2023 (UNESCO, 2024) destaca la FALTA DE EVIDENCIA sobre mejora de calidad, equidad e inclusión, y advierte RIESGOS para el derecho a la educación. Aun así, la digitalización avanza aprovechando vacíos regulatorios o presionando por cambios legislativos (enseñanza híbrida y a distancia en la educación básica).",
      hitos: ["Discurso de innovación «incuestionable»", "IA y enseñanza «personalizada»", "UNESCO 2023: sin evidencia y con riesgos", "Híbrida y a distancia en educación básica"],
      fuentes: ["Saforcada y Ximenes"], ref: "p. 18-19"
    }
  ],

  temas: [
    {
      id: "t1", titulo: "Las dos concepciones del derecho a la educación",
      texto: "Desde la conformación de los sistemas educativos nacionales (Estados liberales occidentales), conviven dos concepciones que alternan su fuerza y siguen vigentes y en disputa.",
      puntos: [
        "DERECHO INDIVIDUAL: supone IGUALDAD FORMAL — el derecho se reconoce jurídicamente a todos los ciudadanos y ciudadanas — y se expresa como IGUALDAD DE OPORTUNIDADES. La responsabilidad del Estado es propiciar que existan esas oportunidades, sea por sus propias acciones o por iniciativas privadas, en el marco de las libertades individuales.",
        "DERECHO SOCIAL: supone IGUALDAD EN EL ACCESO a una educación de CALIDAD A LO LARGO DE LA VIDA para todos y todas. No basta el reconocimiento jurídico: exige la REALIZACIÓN EFECTIVA. El Estado, como ámbito de construcción de LO COMÚN, tiene la responsabilidad principal de garantizarlo, y el modo de realizarlo es la EDUCACIÓN PÚBLICA.",
        "Ambas concepciones se reeditan en cada contexto histórico: el derecho a la educación es, con Paviglianiti, una «construcción histórica polémica»."
      ],
      quien: ["Saforcada y Ximenes", "Cátedra (PPT)"],
      cita: { texto: "El derecho a la educación es, como caracterizara Norma Paviglianiti tres décadas atrás, una construcción histórica polémica.", ref: "Saforcada y Ximenes, p. 21" }
    },
    {
      id: "t2", titulo: "Igualdad de condiciones vs. igualdad de oportunidades",
      texto: "El desplazamiento conceptual clave de la unidad: qué pasa con la igualdad cuando se la reemplaza por igualdad de oportunidades (pág. 23).",
      puntos: [
        "La igualdad de condiciones de acceso — constitutiva del derecho a la educación en las Constituciones y la legislación del ESTADO SOCIAL — PIERDE VIGENCIA en nuevas normas y políticas estructuradas en torno a un «renovado principio de igualdad de oportunidades».",
        "Según ese principio, las desigualdades que produce el propio sistema educativo NO SOLO DEBEN SER ACEPTADAS SINO TAMBIÉN VALORADAS COMO MÉRITO.",
        "Desde el neoconservadurismo, que un sistema supuestamente «meritocrático» discrimine de modo permanente y estructural a pobres, negros, mujeres, pueblos originarios, migrantes y población LGBTQIA+ «solo confirma la funcionalidad del sistema de jerarquías».",
        "En Argentina, Gluz y Kesler documentan el mismo desplazamiento en las normas: de la «igualdad de todos al derecho a la educación» (Res. CFE 79/09) al «derecho a la igualdad de oportunidades y al derecho al aprendizaje» (Res. CFE 285/16, PEN 2016-2021)."
      ],
      quien: ["Saforcada y Ximenes", "Gluz y Kesler"],
      cita: { texto: "Las desigualdades derivadas del sistema educativo no solo deben ser aceptadas, sino también valoradas como mérito.", ref: "Saforcada y Ximenes, p. 23" }
    },
    {
      id: "t3", titulo: "Restauración conservadora y alianza liberal-conservadora",
      texto: "La etapa actual de retracción del derecho a la educación recibe varios nombres: nueva derecha, ultraconservadurismo, restauración conservadora.",
      puntos: [
        "Wendy Brown (2019, citada por Saforcada y Ximenes): el conservadurismo es el SUSTRATO IDEOLÓGICO del NEOLIBERALISMO EN CRISIS. Cuando se desenmascaran las falsas promesas de libertad y prosperidad de la desregulación y el vaciamiento de lo público, el neoliberalismo encuentra en el conservadurismo un fundamento más consistente.",
        "Surge así una NUEVA ALIANZA LIBERAL-CONSERVADORA con mayor peso específico del componente conservador.",
        "El neoconservadurismo NO NIEGA la existencia de derechos fundamentales: los REINTERPRETA en un marco afirmativo de desigualdades «naturales y necesarias» — lo que Vaggione llama RENATURALIZACIÓN DEL DERECHO: el derecho natural de «los padres» sobre los hijos, de «los progenitores» sobre la familia, de las mayorías sobre las minorías.",
        "Las jerarquías de género, raza, clase y religión son reafirmadas y pasan a estructurar la revisión de normas y políticas públicas."
      ],
      quien: ["Saforcada y Ximenes", "Cátedra (PPT)"],
      cita: { texto: "El conservadurismo constituye el sustrato ideológico del neoliberalismo en crisis.", ref: "Wendy Brown, citada por Saforcada y Ximenes, p. 22" }
    },
    {
      id: "t4", titulo: "Juridificación reactiva y renaturalización",
      texto: "Concepto central de la guía A: qué es la «juridificación reactiva» y qué consecuencias tiene.",
      puntos: [
        "DEFINICIÓN (Vaggione, 2020): reinscripción de los principios, normas y políticas del derecho a la educación impulsada por las coaliciones neoconservadoras; una juridificación que NO amplía derechos sino que los reencuadra en clave conservadora.",
        "Sus dos EJES comunes y TRANSNACIONALES: (1) la profunda re-significación de la noción de LIBERTAD; (2) la afirmación de la PRIMACÍA DE LA FAMILIA (y de lo privado) en materia de educación, ética y sexualidad.",
        "Establece una NUEVA DOGMÁTICA JURÍDICA CONSERVADORA para los derechos humanos en general y para el derecho a la educación en particular (Ximenes y Vaggione, 2024).",
        "CONSECUENCIAS: fortalecimiento de las políticas de PRIVATIZACIÓN y SEGREGACIÓN escolar; expansión de la EDUCACIÓN EN EL HOGAR (homeschooling) y del «con mis hijos no te metas»; y ESTRATEGIAS DE PERSECUCIÓN Y CONTROL sobre la labor docente.",
        "Efecto estructural: la (re)naturalización del papel de la familia y de las desigualdades RESTAURA el poder reformista del neoliberalismo educativo en el continente, que estaba cuestionado y contenido por movimientos sociales, organizaciones docentes y sectores académicos."
      ],
      quien: ["Saforcada y Ximenes", "Cátedra (PPT)"],
      cita: { texto: "Es una (re)naturalización del papel de la familia y de las desigualdades… tiene el efecto de restaurar el poder reformista del neoliberalismo educativo en el continente.", ref: "Saforcada y Ximenes, p. 18" }
    },
    {
      id: "t5", titulo: "La disputa «desde dentro» del derecho",
      texto: "Otra pregunta clave de la guía A: qué significa que el derecho se dispute «desde dentro» y dos ejemplos.",
      puntos: [
        "SIGNIFICADO: la derecha no niega el derecho «desde afuera» (como en los 90); disputa internamente su contenido político y legal, distorsionando ESTRATÉGICAMENTE la gramática de los derechos fundamentales. Por eso obliga a repensar las bases conceptuales del derecho humano a la educación.",
        "EJEMPLO 1 — DERECHO NATURAL DE LOS PADRES: el reconocimiento relativamente estable del derecho universal e inalienable de niños, niñas y jóvenes a la escolaridad se enfrenta a la idea de un derecho educativo NATURAL de los padres y tutores, con responsabilidad «absoluta y definitiva» de dirigir la educación de sus hijos, incluso optando por la educación en el hogar (homeschooling) (Cury, 2017).",
        "EJEMPLO 2 — IGUALDAD DE OPORTUNIDADES COMO MÉRITO: la igualdad de condiciones de acceso se reemplaza por un principio que acepta y VALORA las desigualdades que produce el sistema como mérito (renaturalización).",
        "También puede citarse el caso chileno: la «libertad de enseñanza» que suplantó al derecho social en la Constitución de 1980."
      ],
      quien: ["Saforcada y Ximenes", "Cátedra (PPT)"],
      cita: { texto: "El derecho a la educación comienza a ser disputado «desde dentro».", ref: "Saforcada y Ximenes, p. 22" }
    },
    {
      id: "t6", titulo: "Nuevas dimensiones del derecho: diversidad e interculturalidad",
      texto: "Qué ganó el derecho a la educación durante el ciclo progresista (y qué es lo que hoy la restauración conservadora cuestiona).",
      puntos: [
        "El siglo XXI amplía los sentidos del derecho: educación intercultural, DIVERSIDAD SEXUAL, derechos de la población MIGRANTE.",
        "La agenda incorpora demandas de movimientos contrahegemónicos, decoloniales, antirracistas y antidiscriminatorios: indígenas, negros, mujeres, LGBTQIA+, campesinos; derechos sexuales y reproductivos, pueblos originarios y matrices africanas (Carreira, Ximenes y Ramos, 2021).",
        "Estas demandas se formulan en términos de derechos fundamentales y MATIZAN las nociones de igualdad y universalidad ya establecidas en el derecho social.",
        "La coalición progresista dio respaldo institucional con leyes y políticas para reducir desigualdad y promover diversidad (Gomes y Ximenes, 2022).",
        "La restauración conservadora pone en CUESTIÓN precisamente estas nuevas dimensiones del derecho."
      ],
      quien: ["Saforcada y Ximenes", "Cátedra (PPT)"],
      cita: { texto: "Comenzaron a ganar fuerza nuevos tópicos que enriquecieron el sentido y los alcances del derecho a la educación, tales como la educación intercultural, la diversidad sexual, los derechos de la población migrante.", ref: "Saforcada y Ximenes, p. 20" }
    },
    {
      id: "t7", titulo: "El caso Chile",
      texto: "Por qué Chile es un caso de interés para Saforcada y Ximenes (pregunta de la guía A).",
      puntos: [
        "La CONSTITUCIÓN DE 1980 (de la dictadura de Pinochet) NO reconoce el derecho social a la educación: lo suplanta por la noción de LIBERTAD DE ENSEÑANZA.",
        "Eso fue un elemento central del desarrollo de un MODELO DE MERCADO que privatizó la educación pública y generó profundos procesos de SEGREGACIÓN durante 40 años.",
        "El malestar desembocó en movilizaciones estudiantiles repetidas y en la GRAN MOVILIZACIÓN SOCIAL de 2019, que reclamaba una nueva constitución que reconociera el derecho a la educación pública.",
        "El proceso constituyente NAUFRAGÓ por las acciones de la propia extrema derecha: sigue vigente la constitución pinochetista (al menos al momento de escribir el artículo).",
        "Lección del caso: la definición constitucional del derecho (derecho social vs. libertad de enseñanza) moldea décadas de política educativa; y la disputa sigue abierta."
      ],
      quien: ["Saforcada y Ximenes"],
      cita: { texto: "La ausencia del derecho social a la educación en la Constitución de 1980, suplantado por la noción de libertad de enseñanza, fue uno de los elementos centrales para el desarrollo de un modelo de mercado.", ref: "Saforcada y Ximenes, p. 23" }
    },
    {
      id: "t8", titulo: "Individuación y neosujeto (hipótesis de Gluz y Kesler)",
      texto: "La hipótesis del artículo de Gluz y Kesler y el concepto de «individuación» (pregunta de la guía B).",
      puntos: [
        "HIPÓTESIS: las dinámicas de INDIVIDUACIÓN de larga data (presentes en el campo político desde los años ´80, con diverso grado de intensidad y consenso) generaron las CONDICIONES DE POSIBILIDAD del avance de la derecha radicalizada.",
        "¿Cómo? Cristalizando REGLAS, PROCEDIMIENTOS y MODOS DE INTERVENCIÓN PÚBLICA que: vehiculizaron REPRESENTACIONES ESTIGMATIZANTES sobre los sectores más vulnerados y EROSIONARON LA LEGITIMIDAD de las políticas protectoras (Grassi, 2014).",
        "INDIVIDUACIÓN: dinámicas por las que las políticas ACTIVAN a los sujetos (vía condicionalidades, rendimiento educativo, rendición de fondos), los RESPONSABILIZAN por sus resultados e INVISIBILIZAN los condicionantes políticos y económicos de esos resultados.",
        "Estas dinámicas moldean subjetividades: el «NEOSUJETO» (Laval y Dardot) del capitalismo tardío: se adapta, compite, se autoevalúa y se autoinvierte; una sensibilidad social proclive a las derechas.",
        "Marco teórico: los instrumentos de política como VECTORES DE SENTIDO y no meras decisiones técnicas (Lascoumes y Le Galés); la NGP invisibiliza su carácter político; «trayectorias de las políticas» de Stephen Ball (las políticas como textos y discursos)."
      ],
      quien: ["Gluz y Kesler"],
      cita: { texto: "Las dinámicas de individuación de larga data han generado las condiciones de posibilidad para estas avanzadas al cristalizar reglas, procedimientos y modos de intervención pública que vehiculizaron representaciones estigmatizantes sobre los sectores más vulnerados y erosionaron la legitimidad de las políticas protectoras.", ref: "Gluz y Kesler, p. 1-2 (resumen)" }
    },
    {
      id: "t9", titulo: "CABA «semillero» de la derecha educativa",
      texto: "Por qué la Ciudad de Buenos Aires aparece como «semillero» (pregunta de la guía B).",
      puntos: [
        "La CABA concentra capacidades por ser CAPITAL y el DISTRITO MÁS RICO: eso le da relativa autonomía de agenda y centralidad en el juego federal (Chiara y Gluz, 2007).",
        "Fue el ÁMBITO GEOGRÁFICO DE CONSOLIDACIÓN Y PROYECCIÓN de las nuevas derechas que luego gobernaron a nivel nacional: allí se esbozaron primero las políticas educativas de una derecha cada vez más radicalizada.",
        "El PRO gobierna la CABA de manera ININTERRUMPIDA desde 2007; en 2015-2019 obtiene en paralelo la presidencia y la provincia de Buenos Aires (casi el 40% del electorado).",
        "La escala nacional retomó las líneas porteñas por DOS VÍAS: por coincidir en orientaciones de política y por el TRASLADO DE FUNCIONARIOS (Bullrich, ex ministro de educación de la CABA, al frente de la cartera nacional).",
        "En la CABA se reorganizó el Estado con lógica de NGP («régimen gerencial», «gerencias operativas») y con presencia empresarial y de fundaciones privadas."
      ],
      quien: ["Gluz y Kesler", "Cátedra (PPT)"],
      cita: { texto: "La CABA fue el ámbito geográfico de consolidación y proyección de las nuevas derechas que gobernaron recientemente a nivel nacional.", ref: "Gluz y Kesler, p. 4" }
    },
    {
      id: "t10", titulo: "De la inclusión a la innovación: NES y Secundaria del Futuro",
      texto: "Qué cambia entre la inclusión y la innovación en la secundaria (pregunta de la guía B, con ejemplos).",
      puntos: [
        "ANTES (inclusión, kirchnerismo y gestión PRO anterior en CABA): las desigualdades sociales eran el foco de la agenda; instrumentos para acompañar TRAYECTORIAS escolares y fortalecer lo socioeducativo de manera integral (ZAP, tutorías como soporte de integración).",
        "DESPUÉS (NES 2013 / Secundaria del Futuro 2017): la preocupación pasa a ser la INNOVACIÓN, la creatividad y las «habilidades del siglo XXI»; se pierde la centralidad de la inclusión como objetivo.",
        "EJEMPLO 1 — TUTORÍAS: nacidas como parte de las políticas de inclusión para soportar trayectorias, pasan a ser asignatura obligatoria con ENFOQUE INDIVIDUAL de «autonomía escolar»: cuadernillos con la metáfora de la escuela como «rally» y «cuestionarios de autoevaluación mensual» sobre metas y desempeño; se diluye la responsabilidad institucional de enseñar.",
        "EJEMPLO 2 — LAS HORAS DE ACOMPAÑAMIENTO: en la Secundaria del Futuro se REASIGNAN a espacios interareales para evitar la «fragmentación» de los saberes; pierde terreno el acompañamiento a trayectorias.",
        "EJEMPLO 3 — ACAP (Res. 3958/21): Actividades de Aproximación al Mundo del Trabajo con empresas (McDonald's, Banco Santander, Bolsa de Comercio), «habilidades para la empleabilidad», educación financiera y el «contexto VICA» (volátil, incierto, complejo, ambiguo)."
      ],
      quien: ["Gluz y Kesler", "Cátedra (PPT)"],
      cita: { texto: "La innovación, la creatividad, las habilidades para el siglo XXI, exigen a la educación en general —y a la formación del nivel secundario en particular— adaptarse a estas nuevas demandas.", ref: "Documento de la NES (GCBA, 2015), citado por Gluz y Kesler, p. 7" }
    },
    {
      id: "t11", titulo: "Calidad, evaluación y educación emocional",
      texto: "Qué lugar ocupan la evaluación y la educación emocional en las políticas de «calidad» (pregunta de la guía B).",
      puntos: [
        "La EVALUACIÓN se jerarquiza: en CABA se crea una entidad descentralizada específica, muy influyente en la incorporación de lineamientos de organismos internacionales; a nivel nacional, la «CALIDAD CENTRADA EN LOS APRENDIZAJES» es el eje del PEN 2016-2021 (Res. CFE 285/16).",
        "Las políticas nuevas (Escuelas Faro, Asistiré) se centran en la MEJORA DEL RENDIMIENTO MEDIBLE, a baja escala y sin operar sobre los factores sociales que inciden en los aprendizajes.",
        "La EDUCACIÓN EMOCIONAL avanza como MECANISMO DE REGULACIÓN DE LA CUESTIÓN SOCIAL, articulado con una lógica EFICIENTISTA: vincular las emociones a la MEJORA DEL RENDIMIENTO en las evaluaciones estandarizadas (Otero, 2017).",
        "En la Jornada Extendida y en los programas centrales se incorporan AUTOEVALUACIÓN y habilidades socioemocionales (autonomía, autorregulación, trabajo en equipo): el estudiante debe tomarse a sí mismo como objeto de trabajo.",
        "Resultado: cada estudiante RESPONDE POR SU RESULTADO — el éxito y el fracaso se vuelven asuntos individuales (autoinversión, competencia constante)."
      ],
      quien: ["Gluz y Kesler", "Cátedra (PPT)"],
      cita: { texto: "El autocuidado y la autoinversión resultan las claves a partir de las cuales se establece el éxito y el fracaso de individuos inmersos en una competencia constante.", ref: "Díaz (2013), citado por Gluz y Kesler, p. 9" }
    },
    {
      id: "t12", titulo: "Financiamiento: del universal al selectivo y competitivo",
      texto: "Diferencia entre financiamiento universal y selectivo/competitivo, ejemplos y qué son los fondos rotatorios (pregunta de la guía B).",
      puntos: [
        "UNIVERSAL: recursos para TODAS las instituciones. Ejemplos previos: el PMI asignaba recursos económicos a todas las secundarias para acompañar trayectorias y contratar docentes (para desterrar los rasgos selectivos del formato escolar); el Conectar Igualdad entregaba NETBOOKS en forma universal y daba formación docente.",
        "SELECTIVO Y COMPETITIVO: recursos a UNAS POCAS instituciones seleccionadas bajo reglas competitivas. Ejemplos: el PMI pasa a otorgar recursos a pocas escuelas según «Proyectos de Aprendizaje Integrado» (PAI) en el marco de la Secundaria Federal 2030; Conectar Igualdad es reemplazado por Aprender Conectados (aulas digitales móviles y laboratorios de robótica) con certámenes tipo «Docentes Innovadores» (premios y castigos), sin importar la desigual distribución del equipamiento.",
        "Programas nuevos focalizados y a baja escala: Escuelas Faro (3000 escuelas; Lengua y Matemática; sin operar sobre factores sociales), Asistiré (control de asistencia digital; individualiza las causas del fracaso escolar) y La escuela sale del aula (menos de 100 escuelas, desactivada pronto, sin presupuesto de infraestructura).",
        "FONDOS ROTATORIOS: mecanismo de financiamiento de los POAI (Planes Operativos Anuales Integrales, firmados por convenios con metas): los recursos se asignan POR ETAPAS y quedan SUJETOS A RENDICIÓN DE CUENTAS; quien no rinde en tiempo y forma PIERDE LOS DESEMBOLSOS.",
        "CONSECUENCIA: en un contexto de ajuste, de desarticulación de equipos técnicos nacionales y de fuertes desigualdades federales (p. ej., la informalidad económica impide cumplir requerimientos administrativos como las notas fiscales), el resultado fue MAYOR DESFINANCIACIÓN y profundización de la FRAGMENTACIÓN del sistema."
      ],
      quien: ["Gluz y Kesler", "Cátedra (PPT)"],
      cita: { texto: "Los fondos rotatorios (asignación de recursos por etapas y sujeto a rendición) fueron el nuevo mecanismo elegido para financiar las acciones previstas en los POAI… la consecuencia fue una mayor desfinanciación.", ref: "Gluz y Kesler, p. 14" }
    },
    {
      id: "t13", titulo: "Vouchers Educativos (2024) e «impacto simbólico»",
      texto: "Qué son los vouchers, a quiénes van dirigidos, cómo se financian y por qué los autores hablan de «impacto simbólico» (pregunta de la guía B).",
      puntos: [
        "QUÉ SON: programa de Asistencia «Vouchers Educativos» (Res. 61/2024) del gobierno de LLA: FINANCIAMIENTO TEMPORARIO a familias con hijos en instituciones educativas de gestión privada.",
        "A QUIÉNES: a familias con hijos en escuelas privadas CON SUBVENCIÓN MAYOR AL 75% y con ingresos que no superen los 7 SALARIOS MÍNIMOS.",
        "CÓMO SE FINANCIA: con fondos asignados a PROGRAMAS SOCIOEDUCATIVOS destinados anteriormente a la educación de gestión ESTATAL (Res. 61/2024, art. 5): ese sector queda sin recursos programáticos para atender las desigualdades.",
        "SENTIDO MATERIAL: avanza la MERCANTILIZACIÓN (CTERA, 2020) y la TRANSFERENCIA DE INGRESOS del sector estatal al privado (que además conserva sus subsidios históricos).",
        "IMPACTO SIMBÓLICO: se orienta más a instalar un IMAGINARIO de fortalecimiento de la capacidad «DE COMPRA» de las familias que a instaurar un mercado escolar fundado en los principios neoclásicos del «elector racional». Refuerza la estigmatización de la escuela pública y la idea de que la educación es un bien de consumo."
      ],
      quien: ["Gluz y Kesler", "Cátedra (PPT)"],
      cita: { texto: "Se orienta más al impacto simbólico en términos de un imaginario de fortalecimiento de la capacidad «de compra» que a la instauración de un mercado escolar fundado en los principios neoclásicos del elector racional.", ref: "Gluz y Kesler, p. 18" }
    },
    {
      id: "t14", titulo: "Fusionismo, capital humano y control ideológico (LLA)",
      texto: "El «segundo tiempo» de las derechas: cómo se radicalizan bajo el gobierno de La Libertad Avanza.",
      puntos: [
        "FUSIONISMO (Morresi y Vicente): la combinación de postulados de las corrientes liberal-conservadoras y nacionalistas reaccionarias; también, en educación, la articulación de la REDUCCIÓN DEL GASTO y la MERCANTILIZACIÓN con el CONTROL IDEOLÓGICO y el cuestionamiento del rol civilizatorio del Estado.",
        "ARQUITECTURA: el Ministerio de educación se degrada a SECRETARÍA dentro de la megacartera de «CAPITAL HUMANO» (que incluye trabajo, cultura, niñez). La educación se define como formación de «capital humano» para la economía (plataforma LLA 2023).",
        "MARCO LEGAL: DNU integral + LEY DE BASES (664 artículos; modifica más de 300 leyes; delegación legislativa; habilita privatizar la plataforma EDUC.AR, con más de 20 años).",
        "AJUSTE: presupuesto educativo replicado (reducción real), interrupción de la entrega de libros de texto, FONID reducido nominalmente entre 10% y 20% → descentralización de responsabilidades a las jurisdicciones y más desigualdades federales.",
        "DISCURSO: cuestiona la OBLIGATORIEDAD escolar y acusa a la educación pública de ADOCTRINAMIENTO IDEOLÓGICO; se proyecta reformar la LEY DE EDUCACIÓN NACIONAL para crear un ámbito de denuncia de familias y estudiantes hacia docentes que realicen «actividad política».",
        "CIERRE de Gluz y Kesler: las derechas combinan la lógica NEOLIBERAL de regulación mercantil, la lógica LIBERTARIA de prescindencia del Estado y la apuesta CONSERVADORA de control moral de la transmisión. Las protecciones sociales pasan a significarse como PRIVILEGIOS."
      ],
      quien: ["Gluz y Kesler", "Cátedra (PPT)"],
      cita: { texto: "La individuación vía mercantilización y el control ideológico parecen ser el camino del «fusionismo» en el campo escolar.", ref: "Gluz y Kesler, p. 19" }
    },
    {
      id: "t15", titulo: "Cómo estudiar el derecho a la educación (aporte epistemológico)",
      texto: "Saforcada y Ximenes proponen tratar al derecho como CATEGORÍA Y PROBLEMA de investigación, no como posición normativa neutra.",
      puntos: [
        "CRÍTICA a la visión predominante: suele asumirse que las disputas están FUERA del derecho (la política lo niega o no lo implementa) y que el derecho es una base «segura» para los movimientos en defensa de la educación pública.",
        "Hay que apartarse del «residuo NORMATIVISTA»: no confundir el «ser» con el «deber ser», no asimilar automáticamente derecho a la educación = derecho social, y no vincular de manera unívoca política educativa y derecho escrito.",
        "TRES PREGUNTAS de trabajo: (1) los actores y procesos en tensión que intervienen en la formalización de reivindicaciones en la norma jurídica (la JURIDIFICACIÓN, Ximenes 2012 y 2014); (2) las concepciones del derecho en disputa en cada contexto, escala y territorio; (3) las relaciones entre el marco jurídico, sus interpretaciones y el diseño y desarrollo de políticas públicas.",
        "El derecho cumple FUNCIONES diversas en la política educativa: formalizar objetivos, imponer vetos a conquistas sociales, crear instituciones, establecer pautas, limitar autonomías (excesiva juridificación) o abrir participación. No hay dirección única ni neutral en la norma: hay posiciones contradictorias que se materializan también en la REGLAMENTACIÓN y la MICROLEGISLACIÓN del día a día.",
        "Otra vía: observar los conflictos DENTRO y ENTRE las corrientes de juridificación (social, neoliberal, conservadora, contrahegemónica, gerencial), como mapa de los proyectos societales en disputa.",
        "CIERRE: América Latina es «la región más desigual de un planeta profundamente desigual»; el derecho social a la educación sigue siendo una gran deuda y hay que afirmarlo como «derecho humano social inalienable»."
      ],
      quien: ["Saforcada y Ximenes"],
      cita: { texto: "No hay una dirección única y neutral en la norma, sino posiciones contradictorias y muchas veces conflictivas, que se materializan no sólo en la norma general sino –y muchas veces principalmente– en la reglamentación y la microlegislación del día a día.", ref: "Saforcada y Ximenes, p. 24-25" }
    }
  ],

  autores: [
    {
      id: "sx", nombre: "Fernanda Saforcada y Salomão Ximenes",
      obra: "«El derecho a la educación en América Latina y el Caribe. Disputas políticas y reconfiguraciones regionales» (Tramas y Redes, N° 6, junio 2024, págs. 17-28). Páginas de la guía: 17 a 25.",
      filia: "Saforcada: UBA / Universidad Nacional del Oeste / CONICET (Argentina); co-coordinadora del Grupo de Trabajo CLACSO «Políticas educativas y derecho a la educación». Ximenes: UFABC / CNPq (Brasil); doctor en Derecho del Estado (USP); coordina el Observatorio de Políticas Educativas del Grande ABC.",
      tesis: "HIPÓTESIS: la juridificación impulsada por nuevas coaliciones nacionales de carácter LIBERAL-CONSERVADOR (nueva derecha, ultraconservadurismo, restauración conservadora) se constituyó en la última década como uno de los principales aspectos TRANSNACIONALES de las disputas sobre el significado del derecho a la educación, con profundo potencial de impacto en el diseño de políticas educativas — aunque se manifiesta en formas, proporciones, tiempos e instancias diferentes en cada realidad nacional y local.",
      escala: "América Latina y el Caribe (regional) — enfoque JURÍDICO-POLÍTICO sobre el derecho a la educación.",
      porTema: [
        { tema: "Igualdad", dice: "El reemplazo de la igualdad de condiciones por la igualdad de oportunidades hace que las desigualdades se acepten y se VALOREN como mérito; el sistema «meritocrático» queda funcional a las jerarquías." },
        { tema: "Estado", dice: "En la concepción social, el Estado es el ámbito de construcción de LO COMÚN y el responsable principal de garantizar el derecho mediante la educación pública." },
        { tema: "Familia", dice: "El neoconservadurismo proclama un derecho educativo NATURAL de los padres (homeschooling, «con mis hijos no te metas»): renaturalización del derecho (Vaggione)." },
        { tema: "Docentes", dice: "La juridificación reactiva desemboca en estrategias de PERSECUCIÓN Y CONTROL sobre la labor docente." },
        { tema: "Tecnología", dice: "La digitalización avanza con un discurso de innovación «incuestionable» y sin evidencia: la UNESCO advierte RIESGOS para el derecho a la educación." },
        { tema: "Ciclos", dice: "Expansión (Estado de Bienestar) → retracción (dictaduras y años 90) → expansión (CINAL, siglo XXI) → retracción (restauración conservadora)." },
        { tema: "Chile", dice: "Caso de interés: la Constitución de 1980 cambió el derecho social por «libertad de enseñanza» → mercado y segregación por 40 años → estallido 2019 → proceso constituyente naufragado." },
        { tema: "Método", dice: "Estudiar el derecho como construcción histórica en disputa: juridificación, concepciones en pugna y relaciones entre marco jurídico y políticas públicas." }
      ],
      conceptos: ["Derecho individual vs. derecho social", "Construcción histórica polémica (Paviglianiti)", "Ciclos de expansión y retracción", "CINAL / posneoliberalismo", "Juridificación reactiva (Vaggione)", "Renaturalización del derecho", "Disputa «desde dentro»", "Igualdad de oportunidades como mérito", "Alianza liberal-conservadora (Brown)", "Derecho humano social inalienable"],
      citas: [
        { texto: "El derecho a la educación es, como caracterizara Norma Paviglianiti tres décadas atrás, una construcción histórica polémica.", ref: "p. 21" },
        { texto: "El conservadurismo constituye el sustrato ideológico del neoliberalismo en crisis (Wendy Brown).", ref: "p. 22" },
        { texto: "El derecho a la educación comienza a ser disputado «desde dentro».", ref: "p. 22" },
        { texto: "Las desigualdades derivadas del sistema educativo no solo deben ser aceptadas, sino también valoradas como mérito.", ref: "p. 23" },
        { texto: "América Latina es la región más desigual de un planeta profundamente desigual.", ref: "p. 25" }
      ]
    },
    {
      id: "gk", nombre: "Nora Gluz y Axel Kesler",
      obra: "«El avance de las nuevas derechas y el cercenamiento de lo común en las políticas educativas argentinas del SXXI» (Debates em Educação, Vol. 16, N° 38, 2024). Páginas de la guía: 1 a 19.",
      filia: "Gluz: UNGS y UBA / CONICET. Kesler: CONICET y UBA.",
      tesis: "HIPÓTESIS: las dinámicas de INDIVIDUACIÓN de larga data (desde los ´80) generaron las condiciones de posibilidad del avance de la derecha radicalizada, al cristalizar reglas, procedimientos y modos de intervención pública que vehiculizaron representaciones estigmatizantes sobre los sectores más vulnerados y erosionaron la legitimidad de las políticas protectoras.",
      escala: "Argentina (nacional y CABA) — enfoque EMPÍRICO-PROCESAL sobre los instrumentos de política del nivel secundario (documentos 2003-2023; entrevistas 2018-2023; «trayectorias de las políticas» de Ball).",
      porTema: [
        { tema: "Igualdad", dice: "Documentan el desplazamiento normativo: de la «igualdad de todos al derecho a la educación» (Res. CFE 79/09) a la igualdad de oportunidades y el «derecho al aprendizaje» (Res. CFE 285/16)." },
        { tema: "Estado", dice: "DESRESPONSABILIZACIÓN estatal y CERCENAMIENTO DE LO COMÚN: externalización de funciones, NGP, financiamiento que castiga a las jurisdicciones que no rinden." },
        { tema: "Familia", dice: "Programas que apelan a la CO-RESPONSABILIDAD de familias y comunidades (talleres para familias, Red Comunitaria de Apoyo Escolar en ONGs): comunitarización de la responsabilidad pública." },
        { tema: "Docentes", dice: "Docente «facilitador» (RCAE); FONID reducido; proyecto de reforma de la LEN para DENUNCIAR a docentes por «actividad política»." },
        { tema: "CABA", dice: "«SEMILLERO»: ámbito de consolidación y proyección de las nuevas derechas; NGP, funcionarios empresariales, jerarquización de la evaluación y reforma del secundario." },
        { tema: "Secundaria", dice: "NES y Secundaria del Futuro: de la INCLUSIÓN a la INNOVACIÓN (habilidades del siglo XXI, autonomía escolar, ACAP con empresas, educación emocional)." },
        { tema: "Financiamiento", dice: "Del UNIVERSAL (PMI para todas; Conectar Igualdad) al SELECTIVO y COMPETITIVO (PAI; Aprender Conectados); fondos rotatorios → desfinanciación y fragmentación; VOUCHERS 2024 con «impacto simbólico»." },
        { tema: "LLA/Milei", dice: "«Fusionismo»: individuación vía mercantilización + control ideológico; educación como «capital humano»; escuela pública acusada de «adoctrinamiento»; las protecciones sociales significadas como privilegios." }
      ],
      conceptos: ["Individuación", "Neosujeto (Laval y Dardot)", "Fusionismo (Morresi y Vicente)", "«Semillero» (CABA)", "Nueva Gestión Pública", "Instrumentos como vectores de sentido (Lascoumes y Le Galés)", "Trayectorias de las políticas (Ball)", "Inclusión → innovación (NES)", "Habilidades del siglo XXI / contexto VICA", "Educación emocional", "Financiamiento universal → selectivo y competitivo", "Fondos rotatorios", "Vouchers e «impacto simbólico»", "Cercenamiento de lo común", "Riesgos de existencia (Merklen)"],
      citas: [
        { texto: "La CABA fue el ámbito geográfico de consolidación y proyección de las nuevas derechas que gobernaron recientemente a nivel nacional.", ref: "p. 4" },
        { texto: "La individuación vía mercantilización y el control ideológico parecen ser el camino del «fusionismo» en el campo escolar.", ref: "p. 19" },
        { texto: "Se orienta más al impacto simbólico en términos de un imaginario de fortalecimiento de la capacidad «de compra» que a la instauración de un mercado escolar fundado en los principios neoclásicos del elector racional.", ref: "p. 18" },
        { texto: "El resultado es probablemente la legitimidad del cercenamiento a las áreas sociales que construían la igualdad a partir de la conformación de un sentido común en el que las protecciones sociales se significan como privilegios.", ref: "p. 19-20" }
      ]
    },
    {
      id: "cat", nombre: "La cátedra (PPT Unidad 5)",
      obra: "«Los temas en debate en la agenda de la política educativa actual» — Política y Legislación Escolar, Unidad 5 (6 diapositivas).",
      filia: "Síntesis de la cátedra construida a partir de los dos artículos.",
      tesis: "PREGUNTA RECTORA de la unidad: «¿Quién decide qué significa “derecho a la educación”?» — La unidad organiza el contenido en: (1) las dos concepciones del derecho; (2) los ciclos de expansión y retracción; (3) la restauración conservadora que disputa el derecho «desde dentro»; (4) Argentina: de la inclusión a la innovación, la calidad y la evaluación; (5) el financiamiento: del universal al selectivo y a la demanda.",
      escala: "Síntesis pedagógica de los dos artículos.",
      porTema: [
        { tema: "Concepto central 1", dice: "Dos concepciones del derecho (individual vs. social) vigentes y en disputa (Saforcada y Ximenes)." },
        { tema: "Concepto central 2", dice: "Ciclos: Bienestar → dictaduras y 90 → siglo XXI → restauración conservadora." },
        { tema: "Concepto central 3", dice: "Argentina: CABA «semillero», calidad y evaluación, individuación, del derecho a la oportunidad (Gluz y Kesler)." },
        { tema: "Concepto central 4", dice: "Financiamiento: PMI→PAI, Conectar Igualdad→Aprender Conectados, fondos rotatorios, Vouchers Educativos 2024 (Gluz y Kesler)." }
      ],
      conceptos: ["Pregunta rectora de la unidad", "Igualdad formal vs. realización efectiva", "Ciclos de expansión y retracción", "Restauración conservadora", "Individuación", "Vouchers Educativos"],
      citas: [
        { texto: "¿Quién decide qué significa «derecho a la educación»?", ref: "Diapositiva 1" }
      ]
    }
  ],

  comparativa: [
    { tema: "Objeto y escala", sx: "El DERECHO a la educación como categoría política y jurídica; escala AMÉRICA LATINA Y EL CARIBE.", gk: "Las POLÍTICAS EDUCATIVAS del nivel SECUNDARIO argentino; escala NACIONAL y CABA, con foco en los instrumentos." },
    { tema: "Hipótesis central", sx: "La JURIDIFICACIÓN liberal-conservadora (restauración conservadora) es el principal aspecto TRANSNACIONAL de la disputa por el significado del derecho.", gk: "Las dinámicas de INDIVIDUACIÓN de larga data generaron las condiciones de posibilidad del avance de las nuevas derechas." },
    { tema: "Concepto clave", sx: "Disputa del derecho «DESDE DENTRO»: juridificación reactiva, renaturalización del derecho, primacía de la familia, mérito.", gk: "INDIVIDUACIÓN: instrumentos que activan y responsabilizan sujetos, estigmatizan y erosionan las políticas protectoras; neosujeto." },
    { tema: "Igualdad", sx: "La igualdad de condiciones (Estado Social) pierde vigencia frente a la igualdad de oportunidades: las desigualdades se valoran como MÉRITO (pág. 23).", gk: "Desplazamiento documentado en normas: de la «igualdad de todos al derecho a la educación» (Res. 79/09) a la igualdad de oportunidades y el «derecho al aprendizaje» (Res. 285/16)." },
    { tema: "Rol del Estado", sx: "Estado como ámbito de LO COMÚN, responsable principal de garantizar el derecho social vía educación pública; hoy: desfinanciación, borramiento del derecho, privatización.", gk: "DESRESPONSABILIZACIÓN y externalización (NGP, fundaciones, ONG); sanciones a provincias; «cercenamiento de lo común»; las protecciones sociales se significan como privilegios." },
    { tema: "Familia", sx: "PRIMACÍA DE LA FAMILIA como dogmática conservadora: derecho «natural» de los padres, homeschooling, «con mis hijos no te metas».", gk: "CO-RESPONSABILIDAD operativa: talleres para familias y RCAE en ONGs — comunitarización de la responsabilidad por las trayectorias." },
    { tema: "Docentes", sx: "PERSECUCIÓN Y CONTROL de la labor docente como consecuencia de la juridificación reactiva.", gk: "Docente «facilitador», FONID reducido, proyecto de reforma de la LEN con ámbito de DENUNCIA por «actividad política»." },
    { tema: "Tecnología", sx: "Crítica regional con UNESCO: sin evidencia de mejora y con RIESGOS para el derecho; vacíos regulatorios.", gk: "Caso argentino: Conectar Igualdad (universal) → Aprender Conectados (selectivo, competitivo, con premios)." },
    { tema: "Financiamiento", sx: "Denuncia la MERCANTILIZACIÓN como tendencia regional (Verger, Moschetti y Fontdevila).", gk: "Detalle fino: UNIVERSAL → SELECTIVO/COMPETITIVO (PMI→PAI); fondos rotatorios; VOUCHERS 2024 financiados con fondos socioeducativos estatales; «impacto simbólico»." },
    { tema: "Caso de estudio", sx: "CHILE: Constitución de 1980, «libertad de enseñanza», mercado, estallido 2019, proceso constituyente naufragado.", gk: "CABA como «SEMILLERO» de la derecha educativa y su escalado nacional (2015-2019) y radicalización (2023-2024)." },
    { tema: "Método", sx: "Ensayo conceptual: derecho como categoría y problema; tres preguntas; funciones del derecho; corrientes de juridificación.", gk: "Estudio empírico: documentos oficiales 2003-2023, entrevistas 2018-2023; instrumentos como vectores de sentido; «trayectorias de las políticas» de Ball." }
  ],

  coincidencias: [
    "Ambos parten del AVANCE DE LAS DERECHAS en la región en la última década y lo toman como problema político central.",
    "Ambos usan el marco del CINAL (Ouviña y Thwaites Rey) y el concepto de RESTAURACIÓN CONSERVADORA para caracterizar la etapa actual.",
    "Ambos analizan la DISPUTA DEL SENTIDO del derecho a la educación y su desplazamiento desde el derecho social.",
    "Ambos señalan la PRIVATIZACIÓN Y MERCANTILIZACIÓN de la educación y el debilitamiento de lo público.",
    "Ambos muestran que las DERECHAS NO NIEGAN el derecho abiertamente: lo redefinen por vías jurídicas (S&X) o por instrumentos (G&K).",
    "Ambos son artículos académicos de 2024, con perspectiva crítica y vinculados al campo CLACSO de «Políticas educativas y derecho a la educación»."
  ],

  diferencias: [
    "ESCALA: S&X analizan la región (América Latina y el Caribe); G&K analizan Argentina (nivel nacional + CABA).",
    "NIVEL DE ANÁLISIS: S&X el DERECHO y su JURIDIFICACIÓN (marcos normativos, constituciones, leyes); G&K los INSTRUMENTOS concretos de política (programas, financiamiento, resoluciones CFE).",
    "NIVEL EDUCATIVO: S&X hablan del derecho en general (incluida educación superior); G&K se focalizan en la ESCUELA SECUNDARIA obligatoria.",
    "CONCEPTO EJE: S&X = «juridificación reactiva» y disputa «desde dentro»; G&K = «individuación» y «neosujeto».",
    "CASO PRIVILEGIADO: S&X = CHILE (construcción constitucional del derecho); G&K = CABA y su «escalado» al país.",
    "APORTE: S&X aportan el andamiaje CONCEPTUAL-EPISTEMOLÓGICO (cómo estudiar el derecho); G&K aportan la RECONSTRUCCIÓN EMPÍRICA de dos décadas de políticas (qué pasó y cómo).",
    "MODO DE EXPLICAR LA DERECHA: S&X la explican por la ALIANZA LIBERAL-CONSERVADORA y la dogmática jurídica (Brown, Vaggione); G&K por las CONDICIONES DE POSIBILIDAD construidas desde los ´80 por los instrumentos de política (Laval y Dardot, Ball, Merklen)."
  ],

  guia: [
    { tipo: "A", fuente: "Saforcada y Ximenes, págs. 17-25", pregunta: "Cuadro: las dos concepciones del derecho a la educación (qué igualdad supone / rol del Estado / cómo se realiza)", respuesta: "DERECHO INDIVIDUAL — Qué igualdad supone: IGUALDAD FORMAL (reconocimiento jurídico del derecho para todos y todas), expresada como IGUALDAD DE OPORTUNIDADES. Rol del Estado: PROPICIAR que existan oportunidades, por vía propia o de la iniciativa privada, en el marco de las libertades individuales. Cómo se realiza: mediante el ejercicio individual del derecho dentro de ese marco de libertades. || DERECHO SOCIAL — Qué igualdad supone: IGUALDAD EN EL ACCESO a una educación de CALIDAD A LO LARGO DE LA VIDA. Rol del Estado: el Estado como ÁMBITO DE LO COMÚN tiene la responsabilidad PRINCIPAL de garantizarlo. Cómo se realiza: mediante la EDUCACIÓN PÚBLICA, con realización efectiva (no solo reconocimiento jurídico)." },
    { tipo: "A", fuente: "Saforcada y Ximenes, p. 18", pregunta: "¿Qué es la «juridificación reactiva» y qué consecuencias tiene?", respuesta: "Es (Vaggione, 2020) la REINSCRIPCIÓN de los principios, normas y políticas del derecho a la educación impulsada por coaliciones neoconservadoras: una juridificación que no amplía derechos sino que los REENCUADRA en clave conservadora, con dos ejes transnacionales: la re-significación de la LIBERTAD y la PRIMACÍA DE LA FAMILIA (lo privado) en educación, ética y sexualidad; configura una nueva dogmática jurídica conservadora. CONSECUENCIAS: (1) fortalecimiento de la PRIVATIZACIÓN y la SEGREGACIÓN escolar; (2) expansión de la EDUCACIÓN EN EL HOGAR y del «con mis hijos no te metas»; (3) PERSECUCIÓN Y CONTROL del trabajo docente; y, en lo estructural, la renaturalización de la familia y de las desigualdades que RESTAURA el poder reformista del neoliberalismo educativo." },
    { tipo: "A", fuente: "Saforcada y Ximenes, p. 22-23", pregunta: "¿Qué significa que el derecho a la educación se dispute «desde dentro»? Dos ejemplos del texto.", respuesta: "SIGNIFICA que las derechas neoconservadoras no niegan el derecho desde afuera: disputan internamente su CONTENIDO político y legal y distorsionan ESTRATÉGICAMENTE la gramática de los derechos fundamentales, reinterpretándolos en un marco de desigualdades «naturales y necesarias». EJEMPLO 1: frente al derecho universal e inalienable de niños, niñas y jóvenes a la escolaridad, se plantea un derecho educativo NATURAL de los padres y tutores a dirigir la educación de sus hijos, incluso mediante la EDUCACIÓN EN EL HOGAR (homeschooling) (Cury, 2017). EJEMPLO 2: la IGUALDAD DE CONDICIONES de acceso (constitutiva del derecho en las constituciones del Estado Social) es reemplazada por la IGUALDAD DE OPORTUNIDADES, bajo la cual las desigualdades que produce el sistema no solo se aceptan sino que se VALORAN COMO MÉRITO (renaturalización)." },
    { tipo: "A", fuente: "Saforcada y Ximenes, p. 23", pregunta: "¿Qué pasa con la idea de igualdad cuando se la reemplaza por igualdad de oportunidades? (pág. 23)", respuesta: "PIERDE VIGENCIA la igualdad de condiciones de acceso — constitutiva del derecho a la educación en las Constituciones y la legislación del ESTADO SOCIAL — y es sustituida por un «renovado principio de igualdad de oportunidades» según el cual las desigualdades derivadas del sistema educativo NO SOLO DEBEN SER ACEPTADAS SINO TAMBIÉN VALORADAS COMO MÉRITO. Así, que un sistema supuestamente «meritocrático» discrimine de manera permanente y estructural a pobres, negros, mujeres, pueblos originarios, migrantes y población LGBTQIA+ «solo confirma la funcionalidad del sistema de jerarquías»: la igualdad se vacía y las jerarquías quedan legitimadas." },
    { tipo: "A", fuente: "Saforcada y Ximenes, p. 23", pregunta: "¿Por qué Chile es un caso de interés para las autoras y el autor?", respuesta: "Porque muestra el impacto de LARGO PLAZO de la definición constitucional del derecho: la Constitución de 1980 NO reconoce el derecho social a la educación y lo suplanta por la LIBERTAD DE ENSEÑANZA; eso fue un elemento central del MODELO DE MERCADO que privatizó la educación pública y generó SEGREGACIÓN durante 40 años. Esas dinámicas desembocaron en movilizaciones estudiantiles y en la gran movilización social de 2019, que reclamaba una nueva constitución que reconociera el derecho a la educación pública. El proceso constituyente naufragó por las acciones de la propia extrema derecha: sigue vigente la constitución pinochetista. Chile condensa, entonces, la disputa entre las dos concepciones del derecho en su versión más extrema." },
    { tipo: "B", fuente: "Gluz y Kesler, p. 1-2", pregunta: "¿Cuál es la hipótesis del artículo? ¿Qué entienden por «individuación»?", respuesta: "HIPÓTESIS: las dinámicas de INDIVIDUACIÓN de larga data (desde los años ´80) generaron las condiciones de posibilidad del avance de la derecha radicalizada, al cristalizar reglas, procedimientos y modos de intervención pública que vehiculizaron REPRESENTACIONES ESTIGMATIZANTES sobre los sectores más vulnerados y EROSIONARON LA LEGITIMIDAD de las políticas protectoras. INDIVIDUACIÓN: dinámicas por las que las políticas ACTIVAN a los sujetos (vía condicionalidades, rendimiento educativo, rendición de fondos), los RESPONSABILIZAN por sus resultados e INVISIBILIZAN los condicionantes políticos y económicos; configuran un «NEOSUJETO» (Laval y Dardot) con una sensibilidad social proclive a las derechas." },
    { tipo: "B", fuente: "Gluz y Kesler, p. 4-6", pregunta: "¿Por qué la Ciudad de Buenos Aires aparece como «semillero»?", respuesta: "Porque fue el ÁMBITO GEOGRÁFICO DE CONSOLIDACIÓN Y PROYECCIÓN de las nuevas derechas que llegaron al gobierno nacional: allí se esbozaron primero las políticas educativas de una derecha cada vez más radicalizada, que luego se escalaron al país POR ORIENTACIONES COMPARTIDAS y por el TRASLADO DE FUNCIONARIOS (Bullrich, Acuña). La CABA puede hacerlo por su relativa AUTONOMÍA de agenda y por las capacidades que concentra al ser capital y el DISTRITO MÁS RICO (centralidad en el juego federal). Desde 2007 el PRO reorganiza el Estado con lógica de NGP («régimen gerencial», «gerencias operativas»), incorpora personal del mundo empresarial y de fundaciones y jerarquiza la evaluación; después extiende su modelo a la Nación (2015-2019)." },
    { tipo: "B", fuente: "Gluz y Kesler, p. 7-9", pregunta: "¿Qué cambia entre la inclusión y la innovación en la Nueva Escuela Secundaria? Dos ejemplos.", respuesta: "CAMBIA EL FOCO: la inclusión (atender las desigualdades y acompañar trayectorias) deja de ser el objetivo central y es reemplazada por la INNOVACIÓN (creatividad, «habilidades del siglo XXI», adaptación a las demandas del mundo laboral). EJEMPLO 1 — LAS TUTORÍAS: nacidas como parte de las políticas de inclusión para soportar trayectorias, pasan a ser asignatura obligatoria de enfoque INDIVIDUAL («autonomía escolar»), con la metáfora de la escuela como «rally» y «cuestionarios de autoevaluación mensual»; se diluye la responsabilidad institucional. EJEMPLO 2 — LAS HORAS DE ACOMPAÑAMIENTO: en la Secundaria del Futuro (2017) se reasignan a espacios interareales para evitar la «fragmentación» de saberes. Otro ejemplo: el ACAP (2021) articula el último año con EMPRESAS (McDonald's, Banco Santander, Bolsa de Comercio) y «habilidades para la empleabilidad» en el «contexto VICA»." },
    { tipo: "B", fuente: "Gluz y Kesler, p. 9-10 y 12-13", pregunta: "¿Qué lugar ocupan la evaluación y la educación emocional en las políticas de calidad?", respuesta: "La EVALUACIÓN se JERARQUIZA (en CABA se crea una entidad descentralizada específica, vinculada a organismos internacionales; a nivel nacional, la «calidad centrada en los aprendizajes» organiza el PEN 2016-2021) y se vuelve el eje de las nuevas políticas focalizadas (Escuelas Faro, Asistiré) centradas en el RENDIMIENTO MEDIBLE. La EDUCACIÓN EMOCIONAL avanza como MECANISMO DE REGULACIÓN DE LA CUESTIÓN SOCIAL con una lógica EFICIENTISTA: se la vincula a la mejora del rendimiento en las evaluaciones estandarizadas (Otero, 2017) y se incorpora en la Jornada Extendida y los programas centrales (autonomía, autorregulación, trabajo en equipo, autoevaluación). Juntas construyen al estudiante como responsable de su propio éxito y fracaso (autoinversión y competencia constante)." },
    { tipo: "B", fuente: "Gluz y Kesler, p. 12-14", pregunta: "¿Qué diferencia hay entre el financiamiento universal y el selectivo y competitivo? Dos ejemplos y qué son los fondos rotatorios.", respuesta: "UNIVERSAL: los recursos llegan a TODAS las instituciones. Ejemplos previos: el PMI daba recursos a todas las secundarias para proyectos de acompañamiento de trayectorias y contratación de docentes; Conectar Igualdad asignaba NETBOOKS en forma universal con formación docente. SELECTIVO Y COMPETITIVO: los recursos van a UNAS POCAS instituciones seleccionadas bajo reglas de competencia. Ejemplos: el PMI pasa a financiar pocas escuelas según «Proyectos de Aprendizaje Integrado» (PAI) en el marco de la Secundaria Federal 2030; Conectar Igualdad es reemplazado por Aprender Conectados (aulas digitales móviles y robótica) con certámenes tipo «Docentes Innovadores» (premios y castigos). FONDOS ROTATORIOS: mecanismo de financiamiento de los POAI por el cual los recursos se asignan POR ETAPAS y sujetos a RENDICIÓN DE CUENTAS; quien no rinde pierde los desembolsos. En un contexto de ajuste y desigualdades federales, esto significó MAYOR DESFINANCIACIÓN y FRAGMENTACIÓN del sistema." },
    { tipo: "B", fuente: "Gluz y Kesler, p. 18", pregunta: "¿Qué son los Vouchers Educativos? ¿A quiénes están dirigidos, cómo se financian y por qué los autores hablan de un «impacto simbólico»?", respuesta: "QUÉ SON: programa del gobierno de LLA (Res. 61/2024) de financiamiento TEMPORARIO a familias con hijos en instituciones educativas de gestión privada. DIRIGIDOS A: familias con hijos en escuelas privadas CON SUBVENCIÓN MAYOR AL 75% y con ingresos que no superen los 7 SALARIOS MÍNIMOS. FINANCIAMIENTO: con fondos asignados a PROGRAMAS SOCIOEDUCATIVOS que antes destinaban recursos a la educación de gestión ESTATAL (art. 5): la escuela estatal queda sin recursos programáticos para atender las desigualdades. «IMPACTO SIMBÓLICO»: porque su efecto principal es instalar un IMAGINARIO de fortalecimiento de la capacidad «DE COMPRA» de las familias (y de degradación de la escuela pública), más que instaurar un mercado escolar neoclásico del «elector racional»; implica transferencia de ingresos del Estado al privado y mercantilización de la educación (CTERA)." }
  ],

  quiz: [
    { q: "«El derecho a la educación es, como caracterizara Norma Paviglianiti, una construcción histórica polémica.»", opciones: ["Saforcada y Ximenes", "Gluz y Kesler", "La cátedra (PPT)"], correcta: 0, expl: "Es la tesis de Saforcada y Ximenes (p. 21), recuperando a Paviglianiti: las dos concepciones del derecho conviven y se disputan desde el origen de los sistemas educativos.", fuente: "Saforcada y Ximenes, p. 21" },
    { q: "«Las dinámicas de individuación de larga data han generado las condiciones de posibilidad para estas avanzadas…»", opciones: ["Gluz y Kesler", "Saforcada y Ximenes", "La cátedra (PPT)"], correcta: 0, expl: "Es la HIPÓTESIS de Gluz y Kesler: la individuación (reglas y modos de intervención que estigmatizan y erosionan las políticas protectoras) creó las condiciones del avance de la derecha.", fuente: "Gluz y Kesler, p. 1-2" },
    { q: "«El conservadurismo constituye el sustrato ideológico del neoliberalismo en crisis.»", opciones: ["Wendy Brown, citada por Saforcada y Ximenes", "Laval y Dardot, citados por Gluz y Kesler", "La cátedra (PPT)"], correcta: 0, expl: "Wendy Brown (2019) explica la alianza liberal-conservadora: cuando el neoliberalismo entra en crisis, el conservadurismo le da un fundamento más consistente.", fuente: "Saforcada y Ximenes, p. 22" },
    { q: "«La CABA fue el ámbito geográfico de consolidación y proyección de las nuevas derechas que gobernaron recientemente a nivel nacional.»", opciones: ["Gluz y Kesler", "Saforcada y Ximenes", "La cátedra (PPT)"], correcta: 0, expl: "Es la idea del «semillero» de Gluz y Kesler: en la CABA se esbozaron primero las políticas que luego se escalaron a la Nación.", fuente: "Gluz y Kesler, p. 4" },
    { q: "«El derecho a la educación comienza a ser disputado “desde dentro”.»", opciones: ["Saforcada y Ximenes", "Gluz y Kesler", "La cátedra (PPT)"], correcta: 0, expl: "Saforcada y Ximenes (p. 22): el derecho natural de los padres y el mérito disputan internamente el contenido del derecho. La cátedra lo retoma en su diapositiva 4.", fuente: "Saforcada y Ximenes, p. 22" },
    { q: "Las desigualdades… «dejan de ser vistas como un problema público y pasan a ser aceptadas… como un objetivo social».", opciones: ["Saforcada y Ximenes (sobre el neoconservadurismo)", "Gluz y Kesler (sobre la NGP)", "Ninguna de las dos"], correcta: 0, expl: "Saforcada y Ximenes describen así la inversión de sentido del neoconservadurismo: las jerarquías se reafirman y estructuran la revisión de normas y políticas.", fuente: "Saforcada y Ximenes, p. 22" },
    { q: "«Se orienta más al impacto simbólico en términos de un imaginario de fortalecimiento de la capacidad “de compra”…»", opciones: ["Gluz y Kesler (sobre los vouchers)", "Saforcada y Ximenes (sobre la tecnología)", "La cátedra (PPT)"], correcta: 0, expl: "Gluz y Kesler (p. 18) sobre los Vouchers Educativos 2024: instalan el imaginario de compra más que un mercado escolar del «elector racional».", fuente: "Gluz y Kesler, p. 18" },
    { q: "«La individuación vía mercantilización y el control ideológico parecen ser el camino del “fusionismo” en el campo escolar.»", opciones: ["Gluz y Kesler", "Saforcada y Ximenes", "La cátedra (PPT)"], correcta: 0, expl: "Síntesis de Gluz y Kesler (p. 19) sobre el gobierno de LLA: mercantilización + control ideológico = fusionismo.", fuente: "Gluz y Kesler, p. 19" },
    { q: "«La ausencia del derecho social a la educación en la Constitución de 1980, suplantado por la noción de libertad de enseñanza…»", opciones: ["Saforcada y Ximenes (sobre Chile)", "Gluz y Kesler (sobre la CABA)", "La cátedra (PPT)"], correcta: 0, expl: "Saforcada y Ximenes (p. 23): la Constitución pinochetista habilitó 40 años de mercado y segregación; por eso Chile es el caso de interés.", fuente: "Saforcada y Ximenes, p. 23" },
    { q: "«Las desigualdades derivadas del sistema educativo no solo deben ser aceptadas, sino también valoradas como mérito.»", opciones: ["Saforcada y Ximenes (describiendo el nuevo principio)", "Gluz y Kesler (lo defendiendo)", "Ninguna de las dos"], correcta: 0, expl: "Saforcada y Ximenes (p. 23) DESCRIBEN críticamente ese principio de igualdad de oportunidades: es lo que critican, no lo que defienden.", fuente: "Saforcada y Ximenes, p. 23" },
    { q: "«Las protecciones sociales se significan como privilegios.»", opciones: ["Gluz y Kesler", "Saforcada y Ximenes", "La cátedra (PPT)"], correcta: 0, expl: "Cierre de Gluz y Kesler (p. 19-20): el sentido común instalado convierte en «privilegios» a las protecciones que construían igualdad.", fuente: "Gluz y Kesler, p. 19-20" },
    { q: "«¿Quién decide qué significa “derecho a la educación”?»", opciones: ["La cátedra (pregunta rectora del PPT)", "Gluz y Kesler", "Saforcada y Ximenes"], correcta: 0, expl: "Es la pregunta que abre el PPT de la Unidad 5 y articula todo el contenido: las dos concepciones, los ciclos y la disputa actual.", fuente: "PPT Unidad 5, diapositiva 1" },
    { q: "«El autocuidado y la autoinversión resultan las claves a partir de las cuales se establece el éxito y el fracaso…»", opciones: ["Díaz, citado por Gluz y Kesler (neosujeto)", "Vaggione, citado por Saforcada y Ximenes", "UNESCO, citada por Saforcada y Ximenes"], correcta: 0, expl: "Gluz y Kesler lo citan (p. 9) para describir la formación del «neosujeto de la competencia» en las políticas de empleabilidad (ACAP).", fuente: "Gluz y Kesler, p. 9" },
    { q: "La educación como «conjunto de habilidades, aptitudes, experiencias y conocimientos… imprescindibles para la economía de un país».", opciones: ["Plataforma de LLA, citada por Gluz y Kesler", "PEN Argentina Enseña y Aprende, citado por Gluz y Kesler", "Declaración Universal, citada por Saforcada y Ximenes"], correcta: 0, expl: "Es la definición de «capital humano» de la plataforma electoral de La Libertad Avanza (2023), citada por Gluz y Kesler (p. 17).", fuente: "Gluz y Kesler, p. 17" },
    { q: "«Las condiciones necesarias para mejorar la calidad de las trayectorias educativas exceden al radio de acción del sistema de educación formal.»", opciones: ["RCAE, citada por Gluz y Kesler (comunitarización)", "UNESCO, citada por Saforcada y Ximenes", "Ball, citado por Gluz y Kesler"], correcta: 0, expl: "Es la justificación de la Red Comunitaria de Apoyo Escolar (2018): traslada la responsabilidad a ONGs y fundaciones — comunitarización que critican Gluz y Kesler.", fuente: "Gluz y Kesler, p. 10" }
  ],

  normativa: [
    { nombre: "Declaración Universal de Derechos Humanos", detalle: "1948 — reconoce el derecho humano a la educación.", autor: "S&X" },
    { nombre: "Constitución de Chile de 1980", detalle: "Sin derecho social a la educación: «libertad de enseñanza» → modelo de mercado.", autor: "S&X" },
    { nombre: "Ley 898/GCBA/02", detalle: "2002 — CABA, primera jurisdicción con obligatoriedad del nivel secundario.", autor: "G&K" },
    { nombre: "Res. CFE 79/09", detalle: "Plan Nacional de Educación Obligatoria: «igualdad de todos al derecho a la educación».", autor: "G&K" },
    { nombre: "Decretos GCBA 684/09 y 335/11", detalle: "«Régimen gerencial» del PRO en CABA (NGP).", autor: "G&K" },
    { nombre: "Res. CFE 285/16", detalle: "PEN 2016-2021 «Argentina Enseña y Aprende»: «calidad centrada en los aprendizajes»; igualdad de oportunidades y derecho al aprendizaje.", autor: "G&K" },
    { nombre: "Res. CFE 330/17", detalle: "Secundaria Federal 2030 (replica la Secundaria del Futuro porteña).", autor: "G&K" },
    { nombre: "Res. 4440/2017 y Res. 2407/17", detalle: "Escuelas Faro y Asistiré: programas focalizados y a baja escala.", autor: "G&K" },
    { nombre: "Res. CFE 318/17", detalle: "«La escuela sale del aula»: menos de 100 escuelas; desactivada pronto.", autor: "G&K" },
    { nombre: "Decreto 310/20", detalle: "IFE: subsidio incondicional (pandemia) a 8,9 millones de personas.", autor: "G&K" },
    { nombre: "Res. 3958/GCBA/2021", detalle: "ACAP: aproximación al mundo del trabajo con empresas; «contexto VICA».", autor: "G&K" },
    { nombre: "DNU y Ley de Bases (2024)", detalle: "Reforma integral del Estado; habilita la privatización de Educ.ar.", autor: "G&K" },
    { nombre: "Res. 61/2024", detalle: "Vouchers Educativos: financiamiento a familias de escuelas privadas con fondos de programas socioeducativos estatales.", autor: "G&K" },
    { nombre: "PMI / PAI", detalle: "Plan de Mejora Institucional: de universal (todas las secundarias) a selectivo por «Proyectos de Aprendizaje Integrado».", autor: "G&K" },
    { nombre: "Conectar Igualdad → Aprender Conectados", detalle: "De netbooks universales y formación docente a aulas digitales móviles y robótica con competencia.", autor: "G&K" },
    { nombre: "POAI y fondos rotatorios", detalle: "Convenios por metas; recursos por etapas sujetos a rendición → desfinanciación y fragmentación.", autor: "G&K" },
    { nombre: "FONID", detalle: "Fondo de Incentivo Docente: reducción nominal del sueldo docente de entre 10% y 20% (2024).", autor: "G&K" },
    { nombre: "NES y Secundaria del Futuro", detalle: "Nueva Escuela Secundaria (2013) y Secundaria del Futuro (2017): de la inclusión a la innovación en CABA.", autor: "G&K" },
    { nombre: "ZAP y RCAE", detalle: "Zonas de Acción Prioritaria (socioeducativo, gestión anterior) y Red Comunitaria de Apoyo Escolar (ONGs, gestión PRO).", autor: "G&K" }
  ]
};

/* ================= RENDER ================= */

function chip(nombre) {
  const cls = CHIP_FUENTE[nombre] || "chip-cat";
  return `<span class="fuente-chip ${cls}">${nombre}</span>`;
}
function esc(s) { return s; } // el contenido es propio y confiable (sin datos de usuario)

function renderResumen() {
  document.getElementById('resumen-list').innerHTML = DATA.resumenExpres.map((t, i) =>
    `<div class="card"><p style="margin:0"><span class="numereda">${String(i + 1).padStart(2, '0')}</span> ${t}</p></div>`
  ).join('');
}

function renderTimeline() {
  document.getElementById('timeline').innerHTML = DATA.periodos.map(p => `
    <article class="epoca card ${p.clase}">
      <span class="anios">${p.anios}</span>
      <span class="fases-tag ${p.clase === 'expansion' ? 'tag-exp' : 'tag-ret'}">${p.clase === 'expansion' ? 'EXPANSIÓN' : 'RETRACCIÓN'}</span>
      <h4>${p.titulo}</h4>
      <p>${p.texto}</p>
      <ul class="hitos">${p.hitos.map(h => `<li>${h}</li>`).join('')}</ul>
      <p style="font-family:Verdana,sans-serif;font-size:0.7rem;margin-top:8px">Analizan: ${p.fuentes.map(chip).join(' ')} <em>(${p.ref})</em></p>
    </article>`).join('');
}

function renderTemas() {
  document.getElementById('temas-grid').innerHTML = DATA.temas.map(t => `
    <article class="card" data-buscar="${t.titulo} ${t.texto} ${t.puntos.join(' ')} ${t.cita.texto}">
      <h4>${t.titulo}</h4>
      <p>${t.texto}</p>
      <ul>${t.puntos.map(p => `<li>${p}</li>`).join('')}</ul>
      <p>${t.quien.map(chip).join(' ')}</p>
      <div class="cita">«${t.cita.texto}»<br><small style="font-style:normal;font-family:Verdana,sans-serif">— ${t.cita.ref}</small></div>
    </article>`).join('');
}

function renderAutores() {
  document.getElementById('autores-list').innerHTML = DATA.autores.map(a => `
    <article class="card" data-buscar="${a.nombre} ${a.obra} ${a.tesis} ${a.porTema.map(p => p.tema + ' ' + p.dice).join(' ')} ${a.conceptos.join(' ')}">
      <div class="autor-head"><h4>${a.nombre}</h4></div>
      <p class="autor-obra">${a.obra}</p>
      <p class="filia">${a.filia}</p>
      <span class="escala">🔎 ${a.escala}</span>
      <p><strong>Tesis:</strong> ${a.tesis}</p>
      <h5 style="margin:14px 0 4px;font-family:Verdana,sans-serif;font-size:0.75rem;text-transform:uppercase;color:var(--tinta-suave)">Qué dice sobre cada tema</h5>
      <table class="por-tema">${a.porTema.map(p => `<tr><th>${p.tema}</th><td>${p.dice}</td></tr>`).join('')}</table>
      <h5 style="margin:14px 0 4px;font-family:Verdana,sans-serif;font-size:0.75rem;text-transform:uppercase;color:var(--tinta-suave)">Conceptos clave</h5>
      <div class="conceptos">${a.conceptos.map(c => `<span class="concepto">${c}</span>`).join('')}</div>
      <h5 style="margin:14px 0 4px;font-family:Verdana,sans-serif;font-size:0.75rem;text-transform:uppercase;color:var(--tinta-suave)">Citas textuales para el coloquio</h5>
      ${a.citas.map(c => `<div class="cita">«${c.texto}»<br><small style="font-style:normal;font-family:Verdana,sans-serif">— ${a.nombre}, ${c.ref}</small></div>`).join('')}
    </article>`).join('');
}

function renderComparativa() {
  document.querySelector('#tablaComp tbody').innerHTML = DATA.comparativa.map(r => `
    <tr><th style="background:var(--fondo)">${r.tema}</th><td class="col-sx">${r.sx}</td><td class="col-gk">${r.gk}</td></tr>`).join('');
  document.getElementById('coincidencias').innerHTML = DATA.coincidencias.map(c => `<li>✅ ${c}</li>`).join('');
  document.getElementById('diferencias').innerHTML = DATA.diferencias.map(c => `<li>↔️ ${c}</li>`).join('');
}

function renderGuia() {
  document.getElementById('guia-list').innerHTML = DATA.guia.map(g => `
    <article class="card" data-buscar="${g.pregunta} ${g.respuesta}">
      <p>${chip('Guía')} ${chip(g.tipo === 'A' ? 'Saforcada y Ximenes' : 'Gluz y Kesler')} <small style="font-family:Verdana,sans-serif;color:var(--tinta-suave)">${g.fuente}</small></p>
      <h4>${g.pregunta}</h4>
      <p>${g.respuesta}</p>
    </article>`).join('');
}

let quizScore = 0, quizAnswered = 0;
function renderQuiz() {
  document.getElementById('quizTotal').textContent = DATA.quiz.length;
  document.getElementById('quiz-list').innerHTML = DATA.quiz.map((item, i) => `
    <article class="card quiz-item" data-idx="${i}" data-buscar="${item.q} ${item.expl}">
      <p><strong>Cita ${i + 1}:</strong> «${item.q}»</p>
      <div class="opciones">
        ${item.opciones.map((op, j) => `<button class="opcion" data-j="${j}">${String.fromCharCode(65 + j)}. ${op}</button>`).join('')}
      </div>
      <div class="feedback" hidden></div>
    </article>`).join('');

  document.getElementById('quiz-list').addEventListener('click', e => {
    const btn = e.target.closest('.opcion');
    if (!btn) return;
    const card = btn.closest('.quiz-item');
    if (card.dataset.done) return;
    card.dataset.done = "1";
    const item = DATA.quiz[+card.dataset.idx];
    const j = +btn.dataset.j;
    card.querySelectorAll('.opcion').forEach(b => {
      b.disabled = true;
      if (+b.dataset.j === item.correcta) b.classList.add('correcta');
    });
    if (j !== item.correcta) btn.classList.add('incorrecta');
    else quizScore++;
    quizAnswered++;
    const fb = card.querySelector('.feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (j === item.correcta ? 'ok' : 'mal');
    fb.innerHTML = (j === item.correcta ? '✅ ¡Correcto! ' : '❌ No era esa. ') + item.expl +
      `<span class="fb-fuente">Fuente: ${item.fuente}</span>`;
    document.getElementById('quizScore').textContent = `Puntaje: ${quizScore} / ${DATA.quiz.length}` + (quizAnswered === DATA.quiz.length ? (quizScore >= DATA.quiz.length * 0.7 ? ' — ¡Listo para el coloquio! 🎓' : ' — repasá las que fallaste 💪') : '');
  });

  document.getElementById('quizReset').addEventListener('click', () => {
    quizScore = 0; quizAnswered = 0;
    document.getElementById('quizScore').textContent = `Puntaje: 0 / ${DATA.quiz.length}`;
    renderQuiz();
  });
}

function renderNormativa() {
  document.querySelector('#tablaNorm tbody').innerHTML = DATA.normativa.map(n => `
    <tr><th style="background:var(--fondo)">${n.nombre}</th><td>${n.detalle}</td><td style="font-family:Verdana,sans-serif;font-size:0.72rem">${n.autor}</td></tr>`).join('');
}

/* ================= TABS / BÚSQUEDA ================= */

function setupTabs() {
  document.getElementById('tabs').addEventListener('click', e => {
    const btn = e.target.closest('button[data-tab]');
    if (!btn) return;
    document.querySelectorAll('#tabs button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupSearch() {
  const input = document.getElementById('buscador');
  const hint = document.getElementById('searchHint');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const secciones = ['resumen', 'timeline', 'temas', 'autores', 'comparativa', 'guia', 'quiz', 'normativa'];
    let total = 0;
    secciones.forEach(s => {
      document.getElementById('tab-' + s).querySelectorAll('[data-buscar]').forEach(el => {
        const match = !q || el.dataset.buscar.toLowerCase().includes(q);
        el.classList.toggle('hidden-by-search', !match);
        if (match && q) total++;
      });
    });
    document.getElementById('noResults').hidden = total > 0;
    hint.textContent = q ? `${total} resultado(s) para «${q}» — revisá cada pestaña, los bloques que no coinciden quedan ocultos.` : '';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderResumen();
  renderTimeline();
  renderTemas();
  renderAutores();
  renderComparativa();
  renderGuia();
  renderQuiz();
  renderNormativa();
  setupTabs();
  setupSearch();
});
