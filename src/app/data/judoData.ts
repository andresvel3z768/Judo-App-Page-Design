export interface Technique {
  id: string;
  name: string;
  translation: string;
  category: 'NAGE-WAZA' | 'KATAME-WAZA';
  belt: string;
  videoUrl: string;
  description: string;
}

export interface Belt {
  id: string;
  name: string;
  color: string;
  order: number;
}

export interface TrainingSession {
  id: string;
  title: string;
  instructor: string;
  location: string;
  day: string;
  time: string;
  description: string;
  recommendations: string[];
}

export const belts: Belt[] = [
  { id: '1', name: 'Amarillo', color: '#FFD700', order: 2 },
  { id: '2', name: 'Naranja', color: '#FF8C00', order: 3 },
  { id: '3', name: 'Verde', color: '#228B22', order: 4 },
  { id: '4', name: 'Azul', color: '#1E90FF', order: 5 },
  { id: '5', name: 'Marrón', color: '#8B4513', order: 6 },
  { id: '6', name: 'Negro', color: '#000000', order: 7 },
];

export const techniques: Technique[] = [
  // Cinturón Amarillo - NAGE-WAZA
  { id: 't1', name: 'Uki-Goshi', translation: 'Cadera Flotante', category: 'NAGE-WAZA', belt: 'Amarillo', videoUrl: 'https://www.youtube.com/embed/bPKwtB4lyOQ?si=JVsHixOTGa6leUef', description: 'Se toma el kumi-kata tradicional, agarrando la solapa y manga del oponente. Se gira el cuerpo metiendo la cadera por debajo del centro de gravedad del adversario, mientras se mantiene el brazo alrededor de su cintura. Se jala con ambas manos hacia arriba y adelante, usando la cadera como punto de apoyo para levantarlo y proyectarlo sobre el hombro.' },
  { id: 't2', name: 'O-Goshi', translation: 'Gran Cadera', category: 'NAGE-WAZA', belt: 'Amarillo', videoUrl: 'https://www.youtube.com/embed/yhu1mfy2vJ4?si=g4JESOEOgbDIMSd6', description: 'Se agarra la solapa y manga del oponente con el kumi-kata. Se da un paso profundo con el pie derecho delante del oponente, girando el cuerpo y colocando la cadera justo debajo de la suya. Se pasa el brazo derecho alrededor de su cintura, abrazándolo fuertemente. Se flexionan las piernas y se proyecta jalando con los brazos mientras se extienden las piernas, usando la cadera como palanca.' },
  { id: 't3', name: 'Ippon-Seoi-Nage', translation: 'Lanzamiento por Encima del Hombro con Un Brazo', category: 'NAGE-WAZA', belt: 'Amarillo', videoUrl: 'https://www.youtube.com/embed/FQnOlCxo4oI?si=CxTO3LSVQYm_ns5W', description: 'Se toma el kumi-kata estándar. Se gira el cuerpo metiendo el brazo derecho por debajo del brazo del oponente, colocando el hombro en su axila. Se da un paso cruzado con el pie derecho delante de él, seguido del pie izquierdo. Se flexionan las rodillas bajando el centro de gravedad, se jala con el brazo izquierdo mientras se levanta con el hombro derecho para proyectarlo por encima.' },
  { id: 't4', name: 'De-ashi-harai', translation: 'Barrido del Pie Adelantado', category: 'NAGE-WAZA', belt: 'Amarillo', videoUrl: 'https://www.youtube.com/embed/4BUUvqxi_Kk?si=s7ZlcJp0lpjB1FO3', description: 'Se toma el kumi-kata en solapa y manga. Se espera el momento en que el oponente adelanta el pie derecho para dar un paso. Justo cuando su pie toca el suelo pero antes de que cargue el peso, se barre con la planta del pie en dirección del movimiento del oponente. Simultáneamente se jala con las manos hacia arriba y en la dirección del barrido para desequilibrarlo y proyectarlo.' },
  { id: 't5', name: 'O-uchi-gari', translation: 'Gran Cadera Interior', category: 'NAGE-WAZA', belt: 'Amarillo', videoUrl: 'https://www.youtube.com/embed/0itJFhV9pDQ?si=NxF78LJTKM7jJWWh', description: 'Se toma el kumi-kata en solapa y manga. Se espera el momento en que el oponente adelanta el pie derecho para dar un paso. Justo cuando su pie toca el suelo pero antes de que cargue el peso, se barre con la planta del pie en dirección del movimiento del oponente. Simultáneamente se jala con las manos hacia arriba y en la dirección del barrido para desequilibrarlo y proyectarlo.' },

  { id: 't6', name: 'De Ashi Barai', translation: 'Barrido del Pie Adelantado', category: 'NAGE-WAZA', belt: 'Amarillo', videoUrl: 'https://www.youtube.com/embed/gqY7O3qVbJw', description: 'Se toma el kumi-kata en solapa y manga. Se espera el momento en que el oponente adelanta el pie derecho para dar un paso. Justo cuando su pie toca el suelo pero antes de que cargue el peso, se barre con la planta del pie en dirección del movimiento del oponente. Simultáneamente se jala con las manos hacia arriba y en la dirección del barrido para desequilibrarlo y proyectarlo.' },
  { id: 't7', name: 'Hiza Guruma', translation: 'Rueda de Rodilla', category: 'NAGE-WAZA', belt: 'Amarillo', videoUrl: 'https://www.youtube.com/embed/7yVLYKVTxHs', description: 'Con el kumi-kata establecido, se jala al oponente hacia adelante y ligeramente hacia la derecha para desequilibrarlo. Se coloca la planta del pie derecho contra su rodilla derecha, actuando como bloqueo. Se continúa jalando con fuerza con ambas manos hacia arriba y en círculo, usando el pie como punto de apoyo. El oponente gira sobre su rodilla bloqueada y cae.' },
  { id: 't8', name: 'Sasae Tsurikomi Ashi', translation: 'Pie que Sostiene y Levanta', category: 'NAGE-WAZA', belt: 'Amarillo', videoUrl: 'https://www.youtube.com/embed/3yKZNx8KYiI', description: 'Se agarra la solapa y manga del oponente. Se le hace avanzar o se espera su movimiento adelante. Se bloquea su pie adelantado colocando la planta del propio pie contra su tobillo o pantorrilla. Al mismo tiempo se jala fuertemente con ambas manos hacia arriba y atrás, levantándolo mientras el pie bloquea su avance, causando la caída hacia atrás.' },
  
  // Cinturón Amarillo - KATAME-WAZA
  { id: 'n1', name: 'Hon Kesa Gatame', translation: 'Control en Bandolera', category: 'KATAME-WAZA', belt: 'Amarillo', videoUrl: 'https://www.youtube.com/embed/NDaQuJOFBYk?si=LsIG8VckgtZhxTGL', description: 'Con el oponente en el suelo boca arriba, se posiciona el cuerpo perpendicular al suyo, sentándose junto a su costado derecho. Se pasa el brazo derecho por debajo de su cuello, agarrando el cinturón o gi en la espalda. El brazo izquierdo controla su brazo derecho, manteniéndolo cerca del cuerpo. Las piernas se extienden con la derecha flexionada para mayor estabilidad, manteniendo el peso sobre el pecho del oponente.' },
  { id: 'n2', name: 'Yoko Shiho Gatame', translation: 'Control por Cuatro Lados Lateral', category: 'KATAME-WAZA', belt: 'Amarillo', videoUrl: 'https://youtu.be/TT7XJVSEQxA?si=VP1XcXTZSQD405vu', description: 'Se posiciona el cuerpo perpendicular al oponente que está boca arriba. Se pasa un brazo por debajo de su cuello y el otro por debajo de su pierna más cercana, entrelazando las manos si es posible. El pecho presiona firmemente contra el costado del oponente. Las piernas se extienden y separan ampliamente para crear una base estable, distribuyendo el peso sobre el oponente para inmovilizarlo.' },
  { id: 'n3', name: 'Kami Shiho Gatame', translation: 'Control por Cuatro Lados Superior', category: 'KATAME-WAZA', belt: 'Amarillo', videoUrl: 'https://youtu.be/HFuMjOv0WN8?si=8TSxHNQ_x9z-ULuA', description: 'Con el oponente boca arriba, se posiciona detrás de su cabeza mirando hacia sus pies. Se deslizan ambos brazos por debajo de sus hombros, agarrando el cinturón o gi a la altura de las caderas. El pecho presiona firmemente contra su cara y pecho. Las piernas se separan ampliamente y las rodillas presionan contra sus costados. Se mantiene el peso hacia adelante para evitar que se voltee.' },
  { id: 'n4', name: 'Kata Gatame', translation: 'Control del Hombro', category: 'KATAME-WAZA', belt: 'Amarillo', videoUrl: 'https://youtu.be/zQR3IOXxO_Q?si=5Tmp3llSpc09Lrc_', description: 'Se atrapa la cabeza del oponente junto con uno de sus brazos, encerrándolos juntos con ambos brazos propios. Se entrelaza las manos firmemente. Se presiona el hombro contra su cabeza mientras se mantiene el control del brazo atrapado. El cuerpo se posiciona perpendicular al oponente, con las piernas extendidas para estabilidad. Se puede aplicar presión adicional para estrangulamiento.' },
  
  // Cinturón Naranja - Tachi-waza
  { id: 't7', name: 'Okuri Ashi Barai', translation: 'Barrido de Pies Deslizante', category: 'NAGE-WAZA', belt: 'Naranja', videoUrl: 'https://www.youtube.com/embed/9QTWMmKN9sI', description: 'Se toma el kumi-kata estándar. Se fuerza al oponente a moverse lateralmente hacia su derecha. Cuando sus pies están juntos durante el desplazamiento lateral, se barre con la planta del pie el tobillo trasero contra el tobillo adelantado, juntándolos. Simultáneamente se jala con las manos en la dirección del movimiento lateral para completar el derribo.' },
  { id: 't8', name: 'Uchi Mata', translation: 'Muslo Interior', category: 'NAGE-WAZA', belt: 'Naranja', videoUrl: 'https://www.youtube.com/embed/5DyxqFdRhUw', description: 'Con el kumi-kata en solapa y manga, se desequilibra al oponente hacia adelante y a su esquina derecha. Se gira metiendo el pie derecho profundamente entre sus piernas. Se levanta la pierna derecha en forma de látigo hacia arriba, impactando con el muslo interno contra la parte interior del muslo del oponente. Se jala fuertemente con los brazos mientras se extiende la pierna de apoyo para proyectarlo por encima.' },
  { id: 't9', name: 'Harai Goshi', translation: 'Barrido de Cadera', category: 'NAGE-WAZA', belt: 'Naranja', videoUrl: 'https://www.youtube.com/embed/RDyC4eAGqYA', description: 'Se agarra la solapa y manga del oponente. Se gira el cuerpo metiendo la cadera debajo de la suya, similar a O Goshi. Sin embargo, la pierna derecha se extiende hacia atrás y se hace un barrido amplio con la parte posterior del muslo contra ambas piernas del oponente. Se jala con los brazos mientras se realiza el barrido para levantarlo y proyectarlo sobre la cadera.' },
  
  // Cinturón Naranja - Ne-waza
  { id: 'n5', name: 'Tate Shiho Gatame', translation: 'Control por Cuatro Lados Montado', category: 'KATAME-WAZA', belt: 'Naranja', videoUrl: 'https://www.youtube.com/embed/zYNNMW7QQKE', description: 'Se monta sobre el oponente que está boca arriba, posicionando el cuerpo longitudinalmente sobre el suyo. Se deslizan ambos brazos por debajo de sus hombros o se controlan sus brazos. Las rodillas se aprietan contra sus costados y los pies se enganchan por debajo de sus piernas si es posible. El pecho presiona contra el suyo, manteniendo el peso distribuido para inmovilizarlo completamente.' },
  { id: 'n6', name: 'Ushiro Kesa Gatame', translation: 'Control en Bandolera Invertido', category: 'KATAME-WAZA', belt: 'Naranja', videoUrl: 'https://www.youtube.com/embed/1rPGQEXEzQM', description: 'Se posiciona sentado junto al oponente mirando hacia su cabeza (dirección opuesta a Kesa Gatame tradicional). Se pasa el brazo por debajo de su cuello controlándolo. El otro brazo controla su brazo más cercano. Las caderas presionan firmemente contra su costado. Las piernas se extienden con una flexionada para estabilidad, manteniendo el peso sobre su pecho y hombro.' },
  
  // Cinturón Verde - Tachi-waza
  { id: 't10', name: 'Kosoto Gari', translation: 'Siega Menor Exterior', category: 'NAGE-WAZA', belt: 'Verde', videoUrl: 'https://www.youtube.com/embed/qpZzh4JdtFg', description: 'Con el kumi-kata establecido, se empuja al oponente hacia atrás cargando su peso en el pie derecho trasero. Se coloca el pie propio por fuera de su pie trasero. Se siega ese pie hacia adelante y afuera con la parte posterior de la pierna, como barriendo el piso. Simultáneamente se empuja con las manos hacia abajo y atrás sobre el pie segado para completar la proyección.' },
  { id: 't11', name: 'Kouchi Gari', translation: 'Siega Menor Interior', category: 'NAGE-WAZA', belt: 'Verde', videoUrl: 'https://www.youtube.com/embed/P2aJuT8z0L0', description: 'Se toma el kumi-kata en solapa y manga. Se empuja al oponente hacia atrás para que cargue el peso en su pie trasero derecho. Se mete el pie propio entre sus piernas y se siega su pie trasero desde adentro hacia atrás, usando la planta del pie o pantorrilla. Se empuja con las manos hacia abajo y atrás en el momento de la siega para derribarlo.' },
  { id: 't12', name: 'Osoto Gari', translation: 'Gran Siega Exterior', category: 'NAGE-WAZA', belt: 'Verde', videoUrl: 'https://www.youtube.com/embed/5H6rDYqPFwY', description: 'Con el kumi-kata estándar, se empuja fuertemente al oponente hacia atrás haciéndolo cargar el peso en su pierna trasera derecha. Se da un paso amplio con el pie derecho por fuera de su pie derecho. Se siega su pierna de apoyo con toda la pierna propia en un movimiento amplio de atrás hacia adelante. Se jala con los brazos hacia abajo y atrás para completar la proyección.' },
  
  // Cinturón Verde - Ne-waza
  { id: 'n7', name: 'Kuzure Kesa Gatame', translation: 'Control en Bandolera Variado', category: 'KATAME-WAZA', belt: 'Verde', videoUrl: 'https://www.youtube.com/embed/yjGgiBqAl7g', description: 'Similar al Hon Kesa Gatame pero con variaciones en el control de los brazos. Se posiciona perpendicular al oponente. Un brazo pasa por debajo del cuello pero el otro puede controlar el brazo del oponente por encima o por debajo de diferentes maneras. Se mantiene el peso sobre el pecho del oponente con las piernas extendidas para estabilidad. La flexibilidad en el control permite adaptarse a la defensa del oponente.' },
  { id: 'n8', name: 'Juji Gatame', translation: 'Control en Cruz', category: 'KATAME-WAZA', belt: 'Verde', videoUrl: 'https://www.youtube.com/embed/R0qfKkLtWWI', description: 'Se controla un brazo del oponente con ambas manos, sujetándolo firmemente. Se gira el cuerpo cayendo hacia atrás mientras se lleva el brazo controlado. Se colocan ambas piernas sobre el pecho y cuello del oponente, formando una cruz con su cuerpo. Se mantiene el brazo extendido con el pulgar hacia arriba, usando las caderas para aplicar presión sobre el codo en hiperextensión.' },
  
  // Cinturón Azul - Tachi-waza
  { id: 't13', name: 'Ouchi Gari', translation: 'Gran Siega Interior', category: 'NAGE-WAZA', belt: 'Azul', videoUrl: 'https://www.youtube.com/embed/D_NR_6Jtqr0', description: 'Se agarra la solapa y manga del oponente. Se le empuja hacia atrás para que cargue el peso en su pierna trasera. Se mete el pie propio profundamente entre sus piernas. Se realiza una gran siega con toda la pierna contra su pierna de apoyo desde adentro, barriendo hacia atrás y afuera. Se empuja con las manos hacia abajo y atrás para derribarlo sobre la pierna segada.' },
  { id: 't14', name: 'Tai Otoshi', translation: 'Derribo del Cuerpo', category: 'NAGE-WAZA', belt: 'Azul', videoUrl: 'https://www.youtube.com/embed/lBmZ1gBFGrI', description: 'Con el kumi-kata establecido, se jala al oponente hacia adelante haciéndolo avanzar. Se gira el cuerpo metiendo el pie derecho delante de sus pies sin hacer contacto con las piernas. Se extiende la pierna derecha como barrera delante de sus tobillos. Se jala fuertemente con ambos brazos en movimiento circular hacia abajo, haciendo que tropiece sobre la pierna extendida y caiga hacia adelante.' },
  { id: 't15', name: 'Tomoe Nage', translation: 'Lanzamiento en Círculo', category: 'NAGE-WAZA', belt: 'Azul', videoUrl: 'https://www.youtube.com/embed/DZrGmb0Qp5s', description: 'Se toma el kumi-kata controlando ambas solapas o cinturón. Se da un paso profundo con un pie entre las piernas del oponente. Se cae hacia atrás llevándolo, colocando el pie de la pierna que entró en su abdomen o cadera. Se jala fuertemente con los brazos mientras se empuja con el pie, usando el impulso para lanzarlo en un movimiento circular por encima de la cabeza.' },
  
  // Cinturón Azul - Ne-waza
  { id: 'n9', name: 'Ude Garami', translation: 'Atrapamiento del Brazo', category: 'KATAME-WAZA', belt: 'Azul', videoUrl: 'https://www.youtube.com/embed/UrC8ZGtNqp4', description: 'Se controla el brazo del oponente doblándolo en ángulo recto. Se pasa el propio brazo por debajo del suyo y se agarra la propia muñeca con la otra mano, formando una figura de cuatro. Se mantiene el codo del oponente presionado contra el suelo o el cuerpo. Se aplica presión rotando su antebrazo hacia arriba y atrás, creando una llave de hombro que puede forzar la sumisión.' },
  { id: 'n10', name: 'Sankaku Jime', translation: 'Estrangulamiento en Triángulo', category: 'KATAME-WAZA', belt: 'Azul', videoUrl: 'https://www.youtube.com/embed/YJTKwmBVtUA', description: 'Con el oponente entre las piernas, se atrapa su cuello y un brazo con las piernas. Se cruza una pierna sobre la otra por detrás del cuello del oponente, formando un triángulo. El brazo atrapado presiona contra un lado del cuello mientras la pierna presiona el otro lado. Se aprietan las piernas juntas y se jala la cabeza hacia abajo para aplicar el estrangulamiento.' },
  
  // Cinturón Marrón - Tachi-waza
  { id: 't16', name: 'Sumi Gaeshi', translation: 'Vuelco de Esquina', category: 'NAGE-WAZA', belt: 'Marrón', videoUrl: 'https://www.youtube.com/embed/FWNQQqqeHGU', description: 'Se agarra el kumi-kata en solapas o cinturón. Se cae hacia atrás en diagonal hacia la esquina, metiendo un pie en la cadera o parte interna del muslo del oponente. Al caer, se jala fuertemente con ambas manos y se empuja con el pie, usando el impulso para volcarlo en círculo sobre el hombro. El oponente es lanzado en diagonal sobre uno mismo.' },
  { id: 't17', name: 'Yoko Tomoe Nage', translation: 'Lanzamiento en Círculo Lateral', category: 'NAGE-WAZA', belt: 'Marrón', videoUrl: 'https://www.youtube.com/embed/g-DcGDIDGUY', description: 'Similar a Tomoe Nage pero ejecutado hacia el lateral. Se agarra la solapa y manga o cinturón. Se cae hacia el costado colocando el pie en la cadera o muslo interior del oponente. Se jala con los brazos en dirección circular lateral mientras se empuja con el pie, lanzándolo en un arco lateral sobre el cuerpo hacia el costado.' },
  { id: 't18', name: 'Kata Guruma', translation: 'Rueda del Hombro', category: 'NAGE-WAZA', belt: 'Marrón', videoUrl: 'https://www.youtube.com/embed/LbVKfr5LZIY', description: 'Se toma el kumi-kata y se desequilibra al oponente hacia adelante. Se flexionan profundamente las piernas metiéndose debajo de él. Se pasa un brazo entre sus piernas agarrando su muslo mientras el otro controla su gi. Se levanta al oponente sobre los hombros como en un levantamiento de bombero. Se gira el cuerpo y se proyecta dejándolo caer sobre el hombro hacia adelante.' },
  
  // Cinturón Marrón - Ne-waza
  { id: 'n11', name: 'Okuri Eri Jime', translation: 'Estrangulamiento Deslizante del Cuello', category: 'KATAME-WAZA', belt: 'Marrón', videoUrl: 'https://www.youtube.com/embed/WPXErhf98k0', description: 'Se posiciona detrás del oponente que está boca abajo o sentado. Se pasa un brazo alrededor de su cuello, agarrando profundamente su solapa del lado opuesto. La otra mano agarra su otra solapa a la altura del hombro. Se jala una mano hacia uno mismo mientras se empuja con la otra, creando un estrangulamiento de tijera contra las arterias del cuello.' },
  { id: 'n12', name: 'Hadaka Jime', translation: 'Estrangulamiento Desnudo', category: 'KATAME-WAZA', belt: 'Marrón', videoUrl: 'https://www.youtube.com/embed/8lbQwkkqCpA', description: 'Se posiciona detrás del oponente. Se rodea su cuello con un brazo, colocando el antebrazo contra su garganta y el bíceps contra un lado del cuello. La otra mano se coloca detrás de su cabeza o agarra el bíceps del brazo que estrangula. Se aprieta el brazo como una pinza mientras se empuja la cabeza hacia adelante con la otra mano, aplicando presión sobre las arterias carótidas.' },
  
  // Cinturón Negro - Tachi-waza
  { id: 't19', name: 'Ura Nage', translation: 'Lanzamiento hacia Atrás', category: 'NAGE-WAZA', belt: 'Negro', videoUrl: 'https://www.youtube.com/embed/dWXEGc5oW5s', description: 'Se agarra al oponente por la cintura o se controla con el kumi-kata. Cuando el oponente se inclina hacia adelante o intenta atacar, se abraza fuertemente su cintura o torso. Se arquea la espalda hacia atrás cayendo al suelo mientras se levanta al oponente con la fuerza de los brazos y cadera. Se proyecta hacia atrás sobre el propio cuerpo, lanzándolo en un arco sobre la cabeza.' },
  { id: 't20', name: 'Soto Makikomi', translation: 'Envolvimiento Exterior', category: 'NAGE-WAZA', belt: 'Negro', videoUrl: 'https://www.youtube.com/embed/oaB3sUdkVHY', description: 'Se toma el kumi-kata y se comienza como un Soto Gari o técnica exterior. Se envuelve el brazo del oponente con el propio, atrapándolo contra el cuerpo. Se gira violentamente continuando el movimiento mientras se cae al suelo, arrastrando al oponente en el giro. Se usa el propio peso cayendo y el brazo envuelto para proyectarlo con gran fuerza.' },
  { id: 't21', name: 'Uchi Makikomi', translation: 'Envolvimiento Interior', category: 'NAGE-WAZA', belt: 'Negro', videoUrl: 'https://www.youtube.com/embed/mNqZLlqvYPw', description: 'Se ejecuta como Uchi Mata pero envolviendo el brazo del oponente. Se gira metiendo el cuerpo y se atrapa su brazo con el propio, envolviéndolo. Se continúa el movimiento de Uchi Mata pero cayendo hacia adelante con el oponente, usando el peso del cuerpo y el brazo atrapado para arrastrarlo en la proyección con mayor potencia y control.' },

  // Cinturón Negro - Ne-waza
  { id: 'n13', name: 'Kata Ha Jime', translation: 'Estrangulamiento con Un Hombro', category: 'KATAME-WAZA', belt: 'Negro', videoUrl: 'https://www.youtube.com/embed/oAA-TQ8xCiM', description: 'Se posiciona detrás del oponente. Se pasa un brazo alrededor de su cuello agarrando su solapa del lado opuesto. La otra mano se coloca en la parte posterior de su cabeza o agarra su propio hombro. Se usa el hombro como punto de apoyo, presionando contra un lado del cuello mientras el brazo presiona el otro lado. Se aprieta jalando la solapa y empujando con el hombro.' },
  { id: 'n14', name: 'Nami Juji Jime', translation: 'Estrangulamiento en Cruz Normal', category: 'KATAME-WAZA', belt: 'Negro', videoUrl: 'https://www.youtube.com/embed/LDcNH3Ln5F8', description: 'Se posiciona sobre o cerca del oponente que está boca arriba. Se meten ambas manos dentro de su cuello, cruzándolas en forma de X. Ambos pulgares están hacia arriba, agarrando profundo en las solapas del lado opuesto cada mano. Se separan los codos hacia afuera mientras se jala hacia uno mismo, aplicando presión con los nudillos o antebrazos contra ambas arterias carótidas del cuello.' },
];

export const trainingSessions: TrainingSession[] = [
  {
    id: 's1',
    title: 'Entrenamiento Básico',
    instructor: 'Sensei Carlos Rodríguez',
    location: 'Dojo Principal - ITM Campus',
    day: 'Lunes',
    time: '18:00 - 20:00',
    description: 'Entrenamiento enfocado en fundamentos y técnicas básicas de judo',
    recommendations: [
      'Recuerda llevar tu judogi limpio',
      'Lleva una botella de agua para hidratarte',
      'Llega 10 minutos antes para calentar',
      'No olvides cortarte las uñas de pies y manos'
    ]
  },
  {
    id: 's2',
    title: 'Técnicas Avanzadas',
    instructor: 'Sensei María González',
    location: 'Dojo Principal - ITM Campus',
    day: 'Miércoles',
    time: '19:00 - 21:00',
    description: 'Entrenamiento de técnicas avanzadas y randori (práctica libre)',
    recommendations: [
      'Recuerda llevar tu judogi limpio',
      'Lleva una botella de agua para hidratarte',
      'Trae una toalla pequeña',
      'Recomendado para cinturones azules en adelante'
    ]
  },
  {
    id: 's3',
    title: 'Ne-waza Especializado',
    instructor: 'Sensei Pedro Martínez',
    location: 'Sala de Tatami 2 - ITM Campus',
    day: 'Viernes',
    time: '17:30 - 19:30',
    description: 'Sesión especializada en técnicas de suelo (ne-waza)',
    recommendations: [
      'Recuerda llevar tu judogi limpio',
      'Lleva algo para tomar e hidratarte',
      'Ideal para perfeccionar técnicas de suelo',
      'Trae protector bucal si lo tienes'
    ]
  },
  {
    id: 's4',
    title: 'Entrenamiento para Competencia',
    instructor: 'Sensei Carlos Rodríguez',
    location: 'Dojo Principal - ITM Campus',
    day: 'Sábado',
    time: '09:00 - 12:00',
    description: 'Entrenamiento intensivo para preparación de competencias',
    recommendations: [
      'Recuerda llevar tu judogi limpio',
      'Lleva agua y snacks energéticos',
      'Desayuna ligero antes de venir',
      'Solo para estudiantes que participarán en competencias'
    ]
  },
  {
    id: 's5',
    title: 'Clase para Principiantes',
    instructor: 'Sensei María González',
    location: 'Sala de Tatami 2 - ITM Campus',
    day: 'Martes',
    time: '18:00 - 19:30',
    description: 'Clase introductoria para nuevos estudiantes y cinturones blancos/amarillos',
    recommendations: [
      'Recuerda llevar tu judogi limpio',
      'Lleva una botella de agua para hidratarte',
      'No tengas miedo de preguntar',
      'Aprenderás las caídas básicas y primeras técnicas'
    ]
  }
];