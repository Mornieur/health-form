export const bloodTypes = [
  'Selecionar',
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
  'Não sei informar.',
];
export const heartProblemStudent = [
  'Selecionar',
  'Não.',
  'Sim, faço acompanhamento.',
  'Sim, mas não faço acompanhamento.',
];
export const genericValuesTwo = [
  'Selecionar',
  'Não.',
  'Sim, faço acompanhamento.',
  'Sim, mas não faço acompanhamento.',
];

export const nutritionaldiet = [
  'Selecionar',
  'Dieta sem restrições.',
  'Vegetariana.',
  'Vegana.',
  'Sim, Dieta com restrições.',
];

export const genericValues = ['Selecionar', 'Sim.', 'Não.'];

export const calendarUpdate = [
  'Selecionar',
  'Atualizado.',
  'Desatualizado.',
  'Sem Informação.',
];

export const contactsKinship = [
  'Selecionar',
  'Pai.',
  'Mãe.',
  'Tio(a).',
  'Avô.',
  'Madrastra.',
  'Padrasto.',
  'Primo(a).',
  'Sobrinho(a).',
  'Irmã(o).',
  'Outros(familiares).',
  'Outros(conhecidos).',
];

//DADOS NUTRICIONAIS

export const InputsInitial = [
  {
    kind: 'select',
    label: 'O(a) paciente tem uma dieta nutricional regular?',
    id: 'diet',
    values: nutritionaldiet,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label: 'Em caso de dieta com restrições, especifique qual(ais):',
    id: 'restrictionDiet',
    placeholder: 'Digite Aqui',
    type: 'text',
  },

  {
    kind: 'select',
    label: 'Tem intolerância a lactose?',
    id: 'lactoseIntolerance',
    values: genericValues,
    placeholder:
      'Será necessário disponibilizar o laudo médico ao finalizar a ficha.',
    className: 'selectLactoseAndGluten',
  },

  {
    kind: 'select',
    label: 'Tem intolerância a glúten?',
    id: 'glutenIntolerance',
    values: genericValues,
    className: 'selectLactoseAndGluten',
    placeholder:
      'Será necessário disponibilizar o laudo médico ao finalizar a ficha.',
  },
  {
    kind: 'select',
    label: 'Tem diabetes? Se sim, faz acompanhamento?',
    id: 'diabetes',
    values: genericValuesTwo,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label:
      'Por favor, especifique: (Ex: Tem pré-disposição pelo lado materno).',
    id: 'diabetesSummary',
    placeholder: 'Digite aqui',
    type: 'text',
  },

  {
    kind: 'select',
    label: 'Tem obesidade? Se sim, faz acompanhamento?',
    id: 'obesity',
    values: genericValuesTwo,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label:
      'Compartilhe o histórico de progresso do(a) paciente, caso ele tenha tido obesidade:',
    id: 'obesityHistory',
    placeholder: 'Digite aqui',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label:
      'O(a) paciente já teve algum tipo de transtorno alimentar? Se sim, digite aqui:',
    id: 'eatingDisorder',
    placeholder: 'Nenhuma.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label:
      'Alergias alimentares? Se sim, digite qual(ais)? (Ex: Alergia a corante azul).',
    id: 'allergiesDiet',
    placeholder: 'Nenhuma.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label:
      'O(a) paciente realiza algum tipo de atividade física? Se sim, digite aqui:',
    id: 'physicalActivity',
    placeholder: 'Nenhuma.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label:
      'Digite aqui caso tenha outras informações consideradas relevantes a respeito da dieta do(a) paciente:',
    id: 'observationsDiet',
    placeholder: 'Não há informações.',
    type: 'text',
    className: 'test',
  },
];

//DADOS DE SAÚDE

const allInputs = [
  {
    kind: 'select',
    label: 'Dados do calendário vacinal:',
    id: 'vaccinationCalendar',
    values: calendarUpdate,
    className: 'select',
  },
  {
    kind: 'select',
    label: 'Tipo sanguíneo:',
    id: 'bloodType',
    values: bloodTypes,
    className: 'select',
  },
  {
    keyId: 'checkAllergiesId',
    kind: 'checkbox',
    label: 'Alergias? Se sim, especifique qual(ais):',
    id: 'allergies',
    className: '',
    options: [
      {
        keyId: 'rinite',
        value: 'rinite',
        label: 'Rinite.',
      },
      {
        keyId: 'bronquite',
        value: 'bronquite',
        label: 'Bronquite.',
      },
      {
        keyId: 'na Pele',
        value: 'na pele',
        label: 'Na pele.',
      },
      {
        keyId: 'others',
        value: '',
        label: 'Outros.',
      },
    ],
  },
  {
    kind: 'select',
    label: 'Faz uso de medicação contínua?',
    id: 'continuousMedications',
    values: genericValues,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label: 'Por favor, digitar nome da medicação, horário e dosagem:',
    id: 'medicationTimeAndDosage',
    placeholder: 'Digite aqui',
    type: 'text',
  },

  {
    label: 'Caso o paciente já tenha tido alguma doença, digite aqui:',
    kind: 'checkbox',
    id: 'illness',
    className: '',
    options: [
      {
        keyId: 'catapora',
        value: 'catapora',
        label: 'Catapora.',
      },
      {
        keyId: 'meningite',
        value: 'meningite',
        label: 'Meningite.',
      },
      {
        keyId: 'hepatite',
        value: 'hepatite',
        label: 'Hepatite.',
      },
      {
        keyId: 'dengue',
        value: 'dengue',
        label: 'Dengue.',
      },
      {
        keyId: 'pneumonia',
        value: 'pneumonia',
        label: 'Pneumonia.',
      },
      {
        keyId: 'colesterol',
        value: 'colesterol',
        label: 'Colesterol.',
      },
      {
        keyId: 'hipertensao',
        value: 'hipertensao',
        label: 'Hipertensão.',
      },
      {
        keyId: 'questaoHepatica',
        value: 'questaoHepatica',
        label: 'Questão Hepática.',
      },
      {
        keyId: 'others',
        value: '',
        label: 'Outros.',
      },
    ],
  },
  {
    kind: 'complexInput',
    label: 'Já teve alguma fratura? Se sim, digite qual(ais):',
    id: 'fractures',
    placeholder: 'Não.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label: 'Já foi submetido a cirurgia? Se sim, digite qual(ais):',
    id: 'surgeries',
    placeholder: 'Não.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label: 'Já esteve internado? Se sim, digite o motivo:',
    id: 'hospitalizationSummary',
    placeholder: 'Não.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label: 'Tem alguma deficiência? Se sim, digite qual(ais):',
    id: 'deficiency',
    placeholder: 'Não.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label: 'Utiliza alguma prótese? Se sim, digite qual(ais):',
    id: 'prosthesis',
    placeholder: 'Não.',
    type: 'text',
  },
  {
    kind: 'select',
    label: 'Já teve algum desmaio e/ou convulsão? Se sim, faz acompanhamento?',
    id: 'faintingOrConvulsion',
    values: genericValuesTwo,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label:
      'Se SIM na resposta anterior, descreva o ocorrido (Ex: Desmaio no trem).',
    id: 'faintingOrConvulsionSummary',
    placeholder: 'Digite Aqui',
    type: 'text',
  },
  {
    kind: 'select',
    label: 'Tem ou teve algum problema no coração? Se sim, faz acompanhamento?',
    id: 'heartProblem',
    values: heartProblemStudent,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label: 'Tem problemas na coluna? Se sim, digite qual(ais)?:',
    id: 'spineProblemSummary',
    placeholder: 'Não.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label: 'Problemas no crescimento? Se sim, digite qual(ais):',
    id: 'growthProblems',
    placeholder: 'Nenhum.',
    type: 'text',
  },

  {
    keyId: 'checkSpecializedId',
    label: 'Faz algum tratamento especializado? Se sim, especifique qual(ais):',
    kind: 'checkbox',
    id: 'specializedTreatments',
    className: '',
    options: [
      {
        keyId: 'psicologo',
        value: 'psicologo',
        label: 'Psicólogo.',
      },
      {
        keyId: 'terapia ocupacional',
        value: 'terapia ocupacional',
        label: 'Terapia ocupacional.',
      },
      {
        keyId: 'fonoaudiologo',
        value: 'fonoaudiologo',
        label: 'Fonoaudiólogo.',
      },
      {
        keyId: 'psiquiatra',
        value: 'psiquiatra',
        label: 'Psiquiátra.',
      },
      {
        keyId: 'others',
        value: '',
        label: 'Outros.',
      },
    ],
  },
  {
    kind: 'complexInput',
    label: 'Tem ou teve quadro de ansiedade ou depressão? Se sim, especifique',
    id: 'anxietyDepression',
    placeholder: 'Não.',
    type: 'text',
  },
  {
    keyId: 'checkDifficultiesId',
    kind: 'checkbox',
    label:
      'Caso o(a) paciente tenha alguma dificuldade, selecione aqui qual(ais):',
    id: 'difficulties',
    className: '',
    options: [
      {
        keyId: 'enxergar',
        value: 'enxergar',
        label: 'Enxergar.',
      },
      {
        keyId: 'falar',
        value: 'falar',
        label: 'Falar.',
      },
      {
        keyId: 'ouvir',
        value: 'ouvir',
        label: 'Ouvir.',
      },
      {
        keyId: 'andar',
        value: 'andar',
        label: 'Andar.',
      },
      {
        keyId: 'movimentar braços e pernas',
        value: 'movimentar braços e pernas',
        label: 'Movimentar braços e pernas.',
      },
      {
        keyId: 'others',
        value: '',
        label: 'Outros.',
      },
    ],
  },
  {
    kind: 'complexInput',
    label:
      'O(a) paciente precisa de tratamento Educacional especializado? Se sim, digite o motivo:',
    id: 'educationalTreatmentSpecial',
    placeholder: 'Não.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label: 'Teve atraso no desenvolvimento? Se sim, digite qual(ais):',
    id: 'delayedDevelopmentSummary',
    placeholder: 'Não.',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label:
      'Indicar abaixo informações e observações consideradas relevantes pelos pais ou responsáveis a respeito do(a) paciente:',
    id: 'otherInformations',
    placeholder: 'Digite aqui',
    type: 'text',
  },
];

//CONVÊNIO

export const allInputsConv = [
  //DADOS DE ENCAMINHAMENTO HOSPITALAR
  {
    keyId: 'checkhospitalAuthorizationId',
    kind: 'select',
    label:
      'Em caso de emergência, o paciente está autorizado a encaminhá-lo a um hospital?',
    id: 'hospitalAuthorization',
    values: genericValues,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label: 'Sim - Qual? Informe o nome e endereço do hospital:',
    id: 'hospital',
    placeholder: 'Digite aqui',
    type: 'text',
  },

  {
    kind: 'select',
    label: 'Tem Convênio?',
    id: 'healthInsurance',
    values: genericValues,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label: 'Convênio - Nº da inscrição:',
    id: 'heathInsuranceNumber',
    placeholder: 'Digite aqui',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label: 'Convênio - Nome e Plano',
    id: 'healthInsuranceName',
    placeholder: 'Digite aqui',
    type: 'text',
  },
  {
    kind: 'complexInput',
    label: 'Convênio - Titular:',
    id: 'healthInsuranceHolder',
    placeholder: 'Digite aqui',
    type: 'text',
  },
];

//CONTATOS

export const allInputsPhones = [
  {
    kind: 'complexInput',
    label: 'Contato 1 - Nome:',
    id: 'contactNameOne',
    placeholder: 'Digite aqui:',
    type: 'text',
  },
  {
    kind: 'select',
    label: 'Contato 1 - Parentesco:',
    id: 'contactKinshipOne',
    values: contactsKinship,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label: 'Contato 1 - Telefone:',
    id: 'contactPhoneOne',
    placeholder: 'Digite aqui:',
    type: 'text',
    maxLength: 14,
  },
  {
    kind: 'complexInput',
    label: 'Contato 2 - Nome:',
    id: 'contactNameTwo',
    placeholder: 'Digite aqui:',
    type: 'text',
  },
  {
    kind: 'select',
    label: 'Contato 2 - Parentesco:',
    id: 'contactKinshipTwo',
    values: contactsKinship,
    className: 'select',
  },
  {
    kind: 'complexInput',
    label: 'Contato 2 - Telefone:',
    id: 'contactPhoneTwo',
    placeholder: 'Digite aqui:',
    type: 'text',
  },
  {
    kind: 'title',
    tag: 'h3',
    content:
      'Declaro que as informações aqui preenchidas são verdadeiras, sob a pena de lei e de incorrer em todas as medidas jurídicas cabíveis.',
  },
];

export default allInputs;
