
const appState = {
        currentView: 'global',
        data: {
            summary: {
                totalParticipantes: 328,
                hombres: 164,
                mujeres: 164,
                alumnosRE: 125,
                alumnosNRE: 203,
                realizanEstudio: 125,
                noRealizanEstudio: 203,
                realizanChicos: 67,
                realizanChicas: 58,
                noRealizanChicos: 97,
                noRealizanChicas: 106,
                familiasConvocadas: 125,
                progenitoresPotenciales: 240,
                familiasParticipantes: 108,
                familiasMadres: 91,
                familiasPadres: 17
            },
            global: [
                { Centro: 'IES Alagón', Localidad: 'Coria', Hombres: 17, Mujeres: 24, AlumnosRE: 12, AlumnosNRE: 28 },
                { Centro: 'IES Caurium', Localidad: 'Coria', Hombres: 19, Mujeres: 24, AlumnosRE: 19, AlumnosNRE: 23 },
                { Centro: 'IES Jálama', Localidad: 'Moraleja', Hombres: 27, Mujeres: 28, AlumnosRE: 16, AlumnosNRE: 38 },
                { Centro: 'IES Gabriel y Galán', Localidad: 'Montehermoso', Hombres: 49, Mujeres: 37, AlumnosRE: 37, AlumnosNRE: 48 },
                { Centro: 'IESO Valles de Gata', Localidad: 'Hoyos', Hombres: 13, Mujeres: 14, AlumnosRE: 6, AlumnosNRE: 22 },
                { Centro: 'IESO Cella Vinaria', Localidad: 'Ceclavín', Hombres: 12, Mujeres: 9, AlumnosRE: 10, AlumnosNRE: 12 },
                { Centro: 'IESO Val de Xálima', Localidad: 'Valverde del Fresno', Hombres: 13, Mujeres: 14, AlumnosRE: 8, AlumnosNRE: 19 },
                { Centro: 'IESO Vía Dalmacia', Localidad: 'Torrejoncillo', Hombres: 17, Mujeres: 13, AlumnosRE: 17, AlumnosNRE: 13 }
            ],
            previo: [
                {
                    nombre: 'a) Preguntas para segmentar el estudio por sexo y entorno rural o urbano.',
                    preguntas: [
                        {
                            pregunta: '1. Sexo',
                            opciones: [
                                { etiqueta: 'Hombres', valor: 67 },
                                { etiqueta: 'Mujeres', valor: 58 }
                            ]
                        },
                        {
                            pregunta: '2. Vivienda habitual',
                            opciones: [
                                { etiqueta: 'Entorno rural (< 10.000 hab.)', valor: 101 },
                                { etiqueta: 'Entorno urbano (> 10.000 hab.)', valor: 24 }
                            ]
                        }
                    ]
                },
                {
                    nombre: 'b) Estado de ánimo respecto a la utilización del teléfono móvil.',
                    preguntas: [
                        {
                            pregunta: '3. ¿Te sientes nervioso/a o inquieto/a cuando no puedes consultar tu móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 32 },
                                { etiqueta: 'No', valor: 93 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', si: 9, no: 58 },
                                    { etiqueta: 'Femenino', si: 23, no: 35 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', si: 23, no: 78 },
                                    { etiqueta: 'Urbano', si: 9, no: 15 }
                                ]
                            }
                        },
                        {
                            pregunta: '4. ¿Compruebas si tienes notificaciones nuevas en tu móvil para no perderte la actualidad social o de tu entorno?',
                            opciones: [
                                { etiqueta: 'Nunca', valor: 2 },
                                { etiqueta: 'Casi nunca', valor: 17 },
                                { etiqueta: 'A veces', valor: 54 },
                                { etiqueta: 'Casi siempre', valor: 36 },
                                { etiqueta: 'Siempre', valor: 16 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Nunca: 0, 'Casi nunca': 13, 'A veces': 33, 'Casi siempre': 16, Siempre: 5 },
                                    { etiqueta: 'Femenino', Nunca: 2, 'Casi nunca': 4, 'A veces': 21, 'Casi siempre': 20, Siempre: 11 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Nunca: 2, 'Casi nunca': 12, 'A veces': 45, 'Casi siempre': 29, Siempre: 13 },
                                    { etiqueta: 'Urbano', Nunca: 0, 'Casi nunca': 5, 'A veces': 9, 'Casi siempre': 7, Siempre: 3 }
                                ]
                            }
                        }
                    ]
                },
                {
                    nombre: 'c) Relaciones familiares',
                    preguntas: [
                        {
                            pregunta: '5. ¿Podrías interactuar más tiempo con tu familia si utilizaras menos el móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 103 },
                                { etiqueta: 'No', valor: 22 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 57, No: 10 },
                                    { etiqueta: 'Femenino', Sí: 46, No: 12 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 84, No: 17 },
                                    { etiqueta: 'Urbano', Sí: 19, No: 5 }
                                ]
                            }
                        },
                        {
                            pregunta: '6. ¿Te riñen tus padres por el uso excesivo del móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 64 },
                                { etiqueta: 'No', valor: 61 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 30, No: 37 },
                                    { etiqueta: 'Femenino', Sí: 34, No: 24 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 49, No: 52 },
                                    { etiqueta: 'Urbano', Sí: 15, No: 9 }
                                ]
                            }
                        },
                        {
                            pregunta: '7. ¿Tus padres controlan los contenidos a los que accedes desde tu móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 40 },
                                { etiqueta: 'No', valor: 85 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 20, No: 47 },
                                    { etiqueta: 'Femenino', Sí: 20, No: 38 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 32, No: 69 },
                                    { etiqueta: 'Urbano', Sí: 8, No: 16 }
                                ]
                            }
                        },
                        {
                            pregunta: '8. ¿Tus padres controlan el tiempo que utilizas el móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 39 },
                                { etiqueta: 'No', valor: 86 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 20, No: 47 },
                                    { etiqueta: 'Femenino', Sí: 19, No: 39 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 32, No: 69 },
                                    { etiqueta: 'Urbano', Sí: 7, No: 17 }
                                ]
                            }
                        }
                    ]
                },
                {
                    nombre: 'd) Salud',
                    preguntas: [
                        {
                            pregunta: '9. ¿Padeces molestias en los ojos?',
                            opciones: [
                                { etiqueta: 'Nunca', valor: 92 },
                                { etiqueta: 'A veces', valor: 29 },
                                { etiqueta: 'Sí, habitualmente', valor: 4 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Nunca: 52, 'A veces': 14, 'Sí, habitualmente': 1 },
                                    { etiqueta: 'Femenino', Nunca: 40, 'A veces': 15, 'Sí, habitualmente': 3 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Nunca: 78, 'A veces': 21, 'Sí, habitualmente': 2 },
                                    { etiqueta: 'Urbano', Nunca: 14, 'A veces': 8, 'Sí, habitualmente': 2 }
                                ]
                            }
                        },
                        {
                            pregunta: '10. ¿Padeces dolor o rigidez de cuello o espalda?',
                            opciones: [
                                { etiqueta: 'Nunca', valor: 70 },
                                { etiqueta: 'A veces', valor: 43 },
                                { etiqueta: 'Sí, habitualmente', valor: 12 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Nunca: 40, 'A veces': 23, 'Sí, habitualmente': 4 },
                                    { etiqueta: 'Femenino', Nunca: 30, 'A veces': 20, 'Sí, habitualmente': 8 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Nunca: 63, 'A veces': 32, 'Sí, habitualmente': 6 },
                                    { etiqueta: 'Urbano', Nunca: 7, 'A veces': 11, 'Sí, habitualmente': 6 }
                                ]
                            }
                        }
                    ]
                },
                {
                    nombre: 'e) Ciberacoso',
                    preguntas: [
                        {
                            pregunta: '11. ¿Te has sentido en alguna ocasión víctima de burlas, insultos,... a través de alguna red social (Whatsapp, Instagram, TikTok...)?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 9 },
                                { etiqueta: 'No', valor: 116 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 6, No: 61 },
                                    { etiqueta: 'Femenino', Sí: 3, No: 55 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 7, No: 84 },
                                    { etiqueta: 'Urbano', Sí: 2, No: 22 }
                                ]
                            }
                        },
                        {
                            pregunta: '12. ¿Te has burlado o has insultado a algún amigo/a o compañero/a de clase a través de redes sociales (Whatsapp, Instagram, TikTok...)?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 8 },
                                { etiqueta: 'No', valor: 117 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 5, No: 62 },
                                    { etiqueta: 'Femenino', Sí: 3, No: 55 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 5, No: 96 },
                                    { etiqueta: 'Urbano', Sí: 3, No: 21 }
                                ]
                            }
                        },
                        {
                            pregunta: '13. ¿Tienes conocimiento de burlas o insultos a algún amigo/a o compañero/a de clase a través de redes sociales (Whatsapp, Instagram, TikTok...)?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 22 },
                                { etiqueta: 'No', valor: 103 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 12, No: 55 },
                                    { etiqueta: 'Femenino', Sí: 10, No: 48 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 15, No: 86 },
                                    { etiqueta: 'Urbano', Sí: 7, No: 17 }
                                ]
                            }
                        },
                        {
                            pregunta: '14. ¿Han publicado en alguna ocasión fotos o vídeos tuyos sin tu consentimiento?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 23 },
                                { etiqueta: 'No', valor: 102 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 12, No: 55 },
                                    { etiqueta: 'Femenino', Sí: 11, No: 47 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 15, No: 86 },
                                    { etiqueta: 'Urbano', Sí: 8, No: 16 }
                                ]
                            }
                        }
                    ]
                },
                {
                    nombre: 'f) Acceso al móvil',
                    preguntas: [
                        {
                            pregunta: '15. Estima el número de horas que tienes a mano tu teléfono móvil.',
                            opciones: [
                                { etiqueta: '0 h - 6 h.', valor: 66 },
                                { etiqueta: '6 h - 12 h.', valor: 27 },
                                { etiqueta: '12 h - 18 h.', valor: 10 },
                                { etiqueta: '18 h - 24 h.', valor: 22 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', '0 h - 6 h.': 38, '6 h - 12 h.': 13, '12 h - 18 h.': 6, '18 h - 24 h.': 10 },
                                    { etiqueta: 'Femenino', '0 h - 6 h.': 28, '6 h - 12 h.': 14, '12 h - 18 h.': 4, '18 h - 24 h.': 12 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', '0 h - 6 h.': 61, '6 h - 12 h.': 18, '12 h - 18 h.': 7, '18 h - 24 h.': 15 },
                                    { etiqueta: 'Urbano', '0 h - 6 h.': 5, '6 h - 12 h.': 9, '12 h - 18 h.': 3, '18 h - 24 h.': 7 }
                                ]
                            }
                        },
                        {
                            pregunta: '16. ¿Tienes el móvil en tu habitación mientras duermes?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 100 },
                                { etiqueta: 'No', valor: 25 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 54, No: 13 },
                                    { etiqueta: 'Femenino', Sí: 46, No: 12 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 82, No: 19 },
                                    { etiqueta: 'Urbano', Sí: 18, No: 6 }
                                ]
                            }
                        },
                        {
                            pregunta: '17. ¿Te conectas con el móvil después de la medianoche (0:00 h.)?',
                            opciones: [
                                { etiqueta: 'Nunca', valor: 44 },
                                { etiqueta: 'A veces', valor: 59 },
                                { etiqueta: 'Sí, habitualmente', valor: 22 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Nunca: 25, 'A veces': 31, 'Sí, habitualmente': 11 },
                                    { etiqueta: 'Femenino', Nunca: 19, 'A veces': 28, 'Sí, habitualmente': 11 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Nunca: 37, 'A veces': 49, 'Sí, habitualmente': 15 },
                                    { etiqueta: 'Urbano', Nunca: 7, 'A veces': 10, 'Sí, habitualmente': 7 }
                                ]
                            }
                        },
                        {
                            pregunta: '18. ¿Utilizas normalmente el teléfono móvil durante las comidas?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 26 },
                                { etiqueta: 'No', valor: 99 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 15, No: 52 },
                                    { etiqueta: 'Femenino', Sí: 11, No: 47 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 17, No: 84 },
                                    { etiqueta: 'Urbano', Sí: 9, No: 15 }
                                ]
                            }
                        },
                        {
                            pregunta: '19. ¿Tienes el teléfono móvil a mano mientras realizas las tareas escolares?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 73 },
                                { etiqueta: 'No', valor: 52 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 43, No: 24 },
                                    { etiqueta: 'Femenino', Sí: 30, No: 28 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 59, No: 42 },
                                    { etiqueta: 'Urbano', Sí: 14, No: 10 }
                                ]
                            }
                        }
                    ]
                },
                {
                    nombre: 'g) Contenidos',
                    preguntas: [
                        {
                            pregunta: '20. Establece un orden de prioridad de las aplicaciones que más utilizas con tu móvil',
                            descripcion: 'Puntuación total ponderada. Se calcula sumando el producto de cada valoración (1 a 6) por el número de alumnos que la han asignado. Los valores más altos indican un uso más frecuente y prioritario.',
                            tipoGrafica: 'bar',
                            formatoEtiqueta: 'valor',
                            opciones: [
                                { etiqueta: 'Instagram', valor: 498 },
                                { etiqueta: 'Tiktok', valor: 498 },
                                { etiqueta: 'Whatsapp', valor: 476 },
                                { etiqueta: 'Youtube', valor: 437 },
                                { etiqueta: 'Otros', valor: 370 },
                                { etiqueta: 'Juegos', valor: 346 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Instagram: 257, Tiktok: 272, Whatsapp: 262, Youtube: 231, Otros: 194, Juegos: 189 },
                                    { etiqueta: 'Femenino', Instagram: 241, Tiktok: 224, Whatsapp: 214, Youtube: 206, Otros: 176, Juegos: 157 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Instagram: 382, Tiktok: 390, Whatsapp: 377, Youtube: 363, Otros: 303, Juegos: 306 },
                                    { etiqueta: 'Urbano', Instagram: 116, Tiktok: 108, Whatsapp: 99, Youtube: 74, Otros: 67, Juegos: 40 }
                                ]
                            }
                        },
                        {
                            pregunta: '21. ¿Juegas a videojuegos con tu móvil?',
                            opciones: [
                                { etiqueta: 'Nunca', valor: 21 },
                                { etiqueta: 'A veces', valor: 66 },
                                { etiqueta: 'Sí, habitualmente', valor: 38 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Nunca: 3, 'A veces': 33, 'Sí, habitualmente': 31 },
                                    { etiqueta: 'Femenino', Nunca: 18, 'A veces': 33, 'Sí, habitualmente': 7 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Nunca: 14, 'A veces': 55, 'Sí, habitualmente': 32 },
                                    { etiqueta: 'Urbano', Nunca: 7, 'A veces': 11, 'Sí, habitualmente': 6 }
                                ]
                            }
                        },
                        {
                            pregunta: '22. ¿Has recibido alguna vez en tu móvil contenido pornográfico y/o violento?',
                            opciones: [
                                { etiqueta: 'Nunca he recibido este contenido', valor: 95 },
                                { etiqueta: 'Contenido pornográfico', valor: 10 },
                                { etiqueta: 'Contenido violento', valor: 10 },
                                { etiqueta: 'Ambos (pornográfico y violento)', valor: 10 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', 'Nunca he recibido este contenido': 43, 'Contenido pornográfico': 9, 'Contenido violento': 7, 'Ambos (pornográfico y violento)': 8 },
                                    { etiqueta: 'Femenino', 'Nunca he recibido este contenido': 52, 'Contenido pornográfico': 1, 'Contenido violento': 3, 'Ambos (pornográfico y violento)': 2 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', 'Nunca he recibido este contenido': 75, 'Contenido pornográfico': 10, 'Contenido violento': 8, 'Ambos (pornográfico y violento)': 8 },
                                    { etiqueta: 'Urbano', 'Nunca he recibido este contenido': 20, 'Contenido pornográfico': 0, 'Contenido violento': 2, 'Ambos (pornográfico y violento)': 2 }
                                ]
                            }
                        }
                    ]
                },
                {
                    nombre: 'h) Tiempo de uso:',
                    preguntas: [
                        {
                            pregunta: '23. ¿Utilizas tu móvil más tiempo del que deberías?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 82 },
                                { etiqueta: 'No', valor: 43 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 40, No: 27 },
                                    { etiqueta: 'Femenino', Sí: 42, No: 16 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 65, No: 36 },
                                    { etiqueta: 'Urbano', Sí: 17, No: 7 }
                                ]
                            }
                        },
                        {
                            pregunta: '24. Media de uso semanal (Tiempo de uso / Salud digital)',
                            descripcion: 'Consulta a través de tu dispositivo móvil la media de uso de la última semana y anótala en el espacio reservado. (Iphone: "Tiempo de uso", Android: "Salud digital").\n\n' +
                                '• Tiempo medio diario total: 4 h 58 min\n' +
                                '• Masculino: 5 h 09 min | Femenino: 4 h 46 min\n' +
                                '• Entorno Rural: 4 h 54 min',
                            opciones: [
                                { etiqueta: 'De 0 a 2 horas', valor: 11 },
                                { etiqueta: 'De 2 a 4 horas', valor: 39 },
                                { etiqueta: 'De 4 a 6 horas', valor: 38 },
                                { etiqueta: 'De 6 a 8 horas', valor: 26 },
                                { etiqueta: 'Más de 10 horas', valor: 11 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', 'De 0 a 2 horas': 4, 'De 2 a 4 horas': 21, 'De 4 a 6 horas': 24, 'De 6 a 8 horas': 10, 'Más de 10 horas': 8 },
                                    { etiqueta: 'Femenino', 'De 0 a 2 horas': 7, 'De 2 a 4 horas': 18, 'De 4 a 6 horas': 14, 'De 6 a 8 horas': 16, 'Más de 10 horas': 3 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', 'De 0 a 2 horas': 8, 'De 2 a 4 horas': 36, 'De 4 a 6 horas': 30, 'De 6 a 8 horas': 17, 'Más de 10 horas': 10 },
                                    { etiqueta: 'Urbano', 'De 0 a 2 horas': 3, 'De 2 a 4 horas': 3, 'De 4 a 6 horas': 8, 'De 6 a 8 horas': 9, 'Más de 10 horas': 1 }
                                ]
                            }
                        }
                    ]
                }
            ],
            posterior: [
                {
                    nombre: 'Resultados de la Experiencia',
                    preguntas: [
                        {
                            pregunta: '1. ¿Has sentido algún tipo de inquietud al no poder utilizar el teléfono móvil en un día?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 38 },
                                { etiqueta: 'No', valor: 87 }
                            ]
                        },
                        {
                            pregunta: '2. ¿Te has aburrido al no poder utilizar el teléfono móvil durante un día?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 47 },
                                { etiqueta: 'No', valor: 78 }
                            ]
                        },
                        {
                            pregunta: '3. ¿Has disfrutado de tener más tiempo para otras cosas: lecturas, aficiones…?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 95 },
                                { etiqueta: 'No', valor: 30 }
                            ]
                        },
                        {
                            pregunta: '4. ¿Has conciliado mejor el sueño la última noche en comparación a como lo haces normalmente?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 59 },
                                { etiqueta: 'No', valor: 66 }
                            ]
                        },
                        {
                            pregunta: '5. ¿Has empleado más tiempo para estar con tu familia?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 80 },
                                { etiqueta: 'No', valor: 45 }
                            ]
                        },
                        {
                            pregunta: '6. ¿Has incrementado el ejercicio físico durante estas 24 horas?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 53 },
                                { etiqueta: 'No', valor: 72 }
                            ]
                        },
                        {
                            pregunta: '7. ¿En qué has invertido el tiempo que habitualmente dedicas al móvil? (Respuesta múltiple)',
                            tipoGrafica: 'bar',
                            opciones: [
                                { etiqueta: 'Más tiempo con amigos', valor: 22 },
                                { etiqueta: 'Más tiempo con familia', valor: 54 },
                                { etiqueta: 'Estudio', valor: 65 },
                                { etiqueta: 'Deporte', valor: 41 },
                                { etiqueta: 'Otros', valor: 51 }
                            ]
                        },
                        {
                            pregunta: '8. ¿Qué dispositivos/medios digitales alternativos has utilizado? (Respuesta múltiple)',
                            tipoGrafica: 'bar',
                            opciones: [
                                { etiqueta: 'Tablet', valor: 27 },
                                { etiqueta: 'Ordenador', valor: 47 },
                                { etiqueta: 'Móvil familiar y/o amigo', valor: 12 },
                                { etiqueta: 'TV', valor: 49 },
                                { etiqueta: 'Ninguno', valor: 24 }
                            ]
                        },
                        {
                            pregunta: '9. ¿Te has concentrado más a la hora de realizar tus tareas escolares?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 63 },
                                { etiqueta: 'No', valor: 62 }
                            ]
                        },
                        {
                            pregunta: '10. Después de esta experiencia ¿cuánto tiempo crees que podrías estar desconectado/a de tu móvil?',
                            opciones: [
                                { etiqueta: '0 h. necesito estar siempre conectado/a', valor: 3 },
                                { etiqueta: 'De 0 h a 6 horas como máximo', valor: 22 },
                                { etiqueta: 'De 6 a 12 h. como máximo', valor: 23 },
                                { etiqueta: 'De 12 h a 24 h. como máximo', valor: 14 },
                                { etiqueta: 'Más de un día', valor: 63 }
                            ]
                        }
                    ]
                }
            ],
            familia: [
                {
                    nombre: 'a) Datos generales y de segmentación de las familias.',
                    preguntas: [
                        {
                            pregunta: '1. La persona que ha participado en el estudio del ayuno de móvil es mi...',
                            opciones: [
                                { etiqueta: 'Hijo', valor: 56 },
                                { etiqueta: 'Hija', valor: 52 }
                            ]
                        },
                        {
                            pregunta: '2. El parentesco que tiene con el estudiante que realiza el estudio es:',
                            opciones: [
                                { etiqueta: 'Madre/tutora', valor: 91 },
                                { etiqueta: 'Padre/tutor', valor: 17 }
                            ]
                        },
                        {
                            pregunta: '3. Vivienda habitual.',
                            opciones: [
                                { etiqueta: 'Entorno rural (localidad menor de 10.000 habitantes)', valor: 81 },
                                { etiqueta: 'Entorno urbano (localidad mayor de 10.000 habitantes)', valor: 27 }
                            ]
                        },
                        {
                            pregunta: '4. ¿Has observado un comportamiento nervioso o inquieto en tu hijo/a cuando no puede consultar su móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 17 },
                                { etiqueta: 'No', valor: 91 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 9, No: 47 },
                                    { etiqueta: 'Femenino', Sí: 8, No: 44 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 10, No: 71 },
                                    { etiqueta: 'Urbano', Sí: 7, No: 20 }
                                ]
                            }
                        },
                        {
                            pregunta: '5. ¿Piensas que tu hijo/a podría interactuar más tiempo con la familia si utilizara menos el móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 90 },
                                { etiqueta: 'No', valor: 18 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 51, No: 5 },
                                    { etiqueta: 'Femenino', Sí: 39, No: 13 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 67, No: 14 },
                                    { etiqueta: 'Urbano', Sí: 23, No: 4 }
                                ]
                            }
                        },
                        {
                            pregunta: '6. ¿Riñes a tu hijo/a por un uso excesivo de su móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 74 },
                                { etiqueta: 'No', valor: 34 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 42, No: 14 },
                                    { etiqueta: 'Femenino', Sí: 32, No: 20 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 56, No: 25 },
                                    { etiqueta: 'Urbano', Sí: 18, No: 9 }
                                ]
                            }
                        },
                        {
                            pregunta: '7. ¿Ejerces algún tipo de control parental de los contenidos a los que accede tu hijo/a desde su móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 76 },
                                { etiqueta: 'No', valor: 32 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 40, No: 16 },
                                    { etiqueta: 'Femenino', Sí: 36, No: 16 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 55, No: 26 },
                                    { etiqueta: 'Urbano', Sí: 21, No: 6 }
                                ]
                            }
                        },
                        {
                            pregunta: '8. ¿Controlas de alguna manera el tiempo que está conectado tu hijo/a al móvil?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 83 },
                                { etiqueta: 'No', valor: 25 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 46, No: 10 },
                                    { etiqueta: 'Femenino', Sí: 37, No: 15 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 62, No: 19 },
                                    { etiqueta: 'Urbano', Sí: 21, No: 6 }
                                ]
                            }
                        },
                        {
                            pregunta: '9. ¿Padece tu hijo/a molestias en los ojos?',
                            opciones: [
                                { etiqueta: 'Nunca', valor: 81 },
                                { etiqueta: 'A veces', valor: 24 },
                                { etiqueta: 'Sí, habitualmente', valor: 3 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Nunca: 40, 'A veces': 13, 'Sí, habitualmente': 3 },
                                    { etiqueta: 'Femenino', Nunca: 41, 'A veces': 11, 'Sí, habitualmente': 0 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Nunca: 64, 'A veces': 15, 'Sí, habitualmente': 2 },
                                    { etiqueta: 'Urbano', Nunca: 17, 'A veces': 9, 'Sí, habitualmente': 1 }
                                ]
                            }
                        },
                        {
                            pregunta: '10. ¿Padece tu hijo/a molestias o dolor de cuello o espalda?',
                            opciones: [
                                { etiqueta: 'Nunca', valor: 52 },
                                { etiqueta: 'A veces', valor: 53 },
                                { etiqueta: 'Sí, habitualmente', valor: 3 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Nunca: 32, 'A veces': 22, 'Sí, habitualmente': 2 },
                                    { etiqueta: 'Femenino', Nunca: 20, 'A veces': 31, 'Sí, habitualmente': 1 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Nunca: 45, 'A veces': 35, 'Sí, habitualmente': 1 },
                                    { etiqueta: 'Urbano', Nunca: 7, 'A veces': 18, 'Sí, habitualmente': 2 }
                                ]
                            }
                        },
                        {
                            pregunta: '11. ¿Eres conocedor/a de algún tipo de burla o insulto hacia tu hijo/a por parte de amigos o compañeros a través de redes sociales?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 5 },
                                { etiqueta: 'No', valor: 103 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 0, No: 56 },
                                    { etiqueta: 'Femenino', Sí: 5, No: 47 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 3, No: 78 },
                                    { etiqueta: 'Urbano', Sí: 2, No: 25 }
                                ]
                            }
                        },
                        {
                            pregunta: '12. ¿Tu hijo/a utiliza su móvil más tiempo del que debería?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 72 },
                                { etiqueta: 'No', valor: 36 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 40, No: 16 },
                                    { etiqueta: 'Femenino', Sí: 32, No: 20 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 54, No: 27 },
                                    { etiqueta: 'Urbano', Sí: 18, No: 9 }
                                ]
                            }
                        },
                        {
                            pregunta: '13. ¿Piensas que tu hijo/a necesita tener su teléfono móvil en todo momento a mano?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 17 },
                                { etiqueta: 'No', valor: 91 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 11, No: 45 },
                                    { etiqueta: 'Femenino', Sí: 6, No: 46 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 15, No: 66 },
                                    { etiqueta: 'Urbano', Sí: 2, No: 25 }
                                ]
                            }
                        },
                        {
                            pregunta: '14. ¿Crees que tu hijo/a se conecta con el móvil después de medianoche?',
                            opciones: [
                                { etiqueta: 'Nunca', valor: 56 },
                                { etiqueta: 'A veces', valor: 52 },
                                { etiqueta: 'Sí, habitualmente', valor: 0 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Nunca: 27, 'A veces': 29, 'Sí, habitualmente': 0 },
                                    { etiqueta: 'Femenino', Nunca: 29, 'A veces': 23, 'Sí, habitualmente': 0 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Nunca: 41, 'A veces': 40, 'Sí, habitualmente': 0 },
                                    { etiqueta: 'Urbano', Nunca: 15, 'A veces': 12, 'Sí, habitualmente': 0 }
                                ]
                            }
                        },
                        {
                            pregunta: '15. ¿Realiza tu hijo/a las tareas escolares con el móvil a mano?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 47 },
                                { etiqueta: 'No', valor: 61 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 25, No: 31 },
                                    { etiqueta: 'Femenino', Sí: 22, No: 30 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 36, No: 45 },
                                    { etiqueta: 'Urbano', Sí: 11, No: 16 }
                                ]
                            }
                        },
                        {
                            pregunta: '16. ¿Utiliza tu hijo/a normalmente el teléfono móvil durante las comidas?',
                            opciones: [
                                { etiqueta: 'Sí', valor: 16 },
                                { etiqueta: 'No', valor: 92 }
                            ],
                            segmentacion: {
                                sexo: [
                                    { etiqueta: 'Masculino', Sí: 9, No: 47 },
                                    { etiqueta: 'Femenino', Sí: 7, No: 45 }
                                ],
                                entorno: [
                                    { etiqueta: 'Rural', Sí: 13, No: 68 },
                                    { etiqueta: 'Urbano', Sí: 3, No: 24 }
                                ]
                            }
                        }
                    ]



                }
            ],
            correlacion: [
                {
                    titulo: '1. Ansiedad / Inquietud al no poder consultar el móvil',
                    alumnos: { catIdx: 1, qIdx: 0 }, // P3: ¿Te sientes nervioso/a o inquieto/a...?
                    familias: { catIdx: 0, qIdx: 3 }  // P4: ¿Has observado un comportamiento nervioso...?
                },
                {
                    titulo: '2. Interacción familiar vs Uso del móvil',
                    alumnos: { catIdx: 2, qIdx: 0 }, // P5: ¿Podrías interactuar más tiempo con tu familia...?
                    familias: { catIdx: 0, qIdx: 4 }  // P5: ¿Piensas que tu hijo/a podría interactuar más...?
                },
                {
                    titulo: '3. Conflictos familiares (reñir) por uso excesivo',
                    alumnos: { catIdx: 2, qIdx: 1 }, // P6: ¿Te riñen tus padres...?
                    familias: { catIdx: 0, qIdx: 5 }  // P6: ¿Riñes a tu hijo/a...?
                },
                {
                    titulo: '4. Control parental de contenidos',
                    alumnos: { catIdx: 2, qIdx: 2 }, // P7: ¿Tus padres controlan los contenidos...?
                    familias: { catIdx: 0, qIdx: 6 }  // P7: ¿Ejerces algún tipo de control parental de contenidos...?
                },
                {
                    titulo: '5. Control parental de tiempo de conexión',
                    alumnos: { catIdx: 2, qIdx: 3 }, // P8: ¿Tus padres controlan el tiempo...?
                    familias: { catIdx: 0, qIdx: 7 }  // P8: ¿Controlas de alguna manera el tiempo...?
                },
                {
                    titulo: '6. Molestias en los ojos',
                    alumnos: { catIdx: 3, qIdx: 0 }, // P9: ¿Padeces molestias en los ojos?
                    familias: { catIdx: 0, qIdx: 8 }  // P9: ¿Padece tu hijo/a molestias en los ojos?
                },
                {
                    titulo: '7. Molestias en cuello o espalda',
                    alumnos: { catIdx: 3, qIdx: 1 }, // P10: ¿Padeces dolor o rigidez de cuello...?
                    familias: { catIdx: 0, qIdx: 9 }  // P10: ¿Padece tu hijo/a molestias o dolor de cuello...?
                },
                {
                    titulo: '8. Burlas o insultos en RRSS (cyberbullying)',
                    alumnos: { catIdx: 4, qIdx: 0 }, // P11: ¿Te has sentido... víctima de burlas...?
                    familias: { catIdx: 0, qIdx: 10 } // P11: ¿Eres conocedor/a de algún tipo de burla...?
                },
                {
                    titulo: '9. Conexión después de medianoche',
                    alumnos: { catIdx: 5, qIdx: 2 }, // P17: ¿Te conectas con el móvil después de la medianoche?
                    familias: { catIdx: 0, qIdx: 13 } // P14: ¿Crees que tu hijo/a se conecta con el móvil después de medianoche?
                },
                {
                    titulo: '10. Uso del móvil durante las comidas',
                    alumnos: { catIdx: 5, qIdx: 3 }, // P18: ¿Utilizas normalmente el teléfono móvil durante las comidas?
                    familias: { catIdx: 0, qIdx: 15 } // P16: ¿Utiliza tu hijo/a normalmente el móvil durante las comidas?
                },
                {
                    titulo: '11. Tareas escolares con el móvil a mano',
                    alumnos: { catIdx: 5, qIdx: 4 }, // P19: ¿Tienes el móvil a mano mientras realizas las tareas escolares?
                    familias: { catIdx: 0, qIdx: 14 } // P15: ¿Realiza tu hijo/a las tareas escolares con el móvil a mano?
                }
            ]
        }
    };

document.addEventListener('DOMContentLoaded', () => {

    // Navigation logic
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Ensure first section is visible by default
    const showSection = (id) => {
        if (!id) return;
        
        let targetSectionId = id;
        let subId = null;

        // Try to find the element
        const el = document.getElementById(id);
        if (el) {
            // If it's NOT a content-section, it might be a sub-point. Find its parent section.
            if (!el.classList.contains('content-section')) {
                const parent = el.closest('.content-section');
                if (parent) {
                    targetSectionId = parent.id;
                    subId = id;
                }
            }
        }

        const targetSection = document.getElementById(targetSectionId);
        if (!targetSection) {
            console.warn(`Section not found: ${targetSectionId}`);
            return;
        }

        // 1. Switch Sections
        sections.forEach(s => s.classList.remove('active'));
        targetSection.classList.add('active');

        // 2. Handle Scrolling
        if (subId) {
            setTimeout(() => {
                const subEl = document.getElementById(subId);
                if (subEl) subEl.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        } else {
            window.scrollTo({top: 0, behavior: 'instant'});
        }

        // 3. Update Sidebar (Main Links)
        navLinks.forEach(l => {
            if (l.getAttribute('data-target') === targetSectionId) {
                l.classList.add('active');
                // Auto-expand sub-menu if it's a sibling
                const subMenu = l.nextElementSibling;
                if (subMenu && subMenu.classList.contains('nav-sub-menu')) {
                    subMenu.classList.add('expanded');
                }
            } else {
                l.classList.remove('active');
                // Only collapse if we are not in a sub-point of this section
                const subMenu = l.nextElementSibling;
                if (subMenu && subMenu.classList.contains('nav-sub-menu')) {
                    subMenu.classList.remove('expanded');
                }
            }
        });

        // 4. Update Sidebar (Sub Links)
        document.querySelectorAll('.sub-nav-link').forEach(sl => {
            if (sl.getAttribute('data-scroll') === id) {
                sl.classList.add('active-scroll');
            } else {
                sl.classList.remove('active-scroll');
            }
        });

        // 5. Trigger Resize (for Chart.js)
        setTimeout(() => window.dispatchEvent(new Event('resize')), 200);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                e.preventDefault();
                window.location.hash = targetId;
            }
        });
    });

    // Sub-nav links handler
    document.querySelectorAll('.sub-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const scrollId = link.getAttribute('data-scroll');
            if (scrollId) {
                e.preventDefault();
                window.location.hash = scrollId;
            }
        });
    });

    // Handle hash changes
    window.addEventListener('hashchange', () => {
        const hashId = window.location.hash.substring(1) || 'inicio';
        showSection(hashId);
    });

    // Initialize first section
    const initialHash = window.location.hash.substring(1) || 'inicio';
    showSection(initialHash);

    // Chart.js Configuration
    if (typeof Chart !== 'undefined') {
        Chart.register(ChartDataLabels);
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.color = '#64748b';
        
        const colors = [
            '#6366f1', // primary
            '#0ea5e9', // secondary
            '#f43f5e', // accent
            '#10b981', // green
            '#f59e0b', // amber
            '#8b5cf6'  // violet
        ];

        function createChart(id, type, config) {
            const el = document.getElementById(id);
            if(!el) return;
            
            const isDark = el.closest('.chart-premium-dark');

            // Check if chart already exists to avoid issues on re-renders if we ever add them
            const existingChart = Chart.getChart(el);
            if (existingChart) existingChart.destroy();

            return new Chart(el.getContext('2d'), {
                type: type,
                data: config.data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: config.indexAxis || 'x',
                    layout: { padding: 20 },
                    plugins: {
                        legend: { 
                            display: config.showLegend === false ? false : true,
                            position: 'bottom',
                            labels: { 
                                usePointStyle: true, 
                                padding: 20,
                                color: isDark ? '#94a3b8' : '#64748b' 
                            }
                        },
                        datalabels: {
                            color: '#fff',
                            anchor: 'center',
                            align: 'center',
                            offset: 0,
                            font: { weight: 'bold', size: 11 },
                            formatter: config.formatter || ((val) => val + (config.stacked100 ? '%' : '')),
                            display: (context) => context.dataset.data[context.dataIndex] > 5 // Hide small values
                        },
                        tooltip: {
                            backgroundColor: '#0f172a',
                            padding: 12,
                            titleFont: { size: 14, weight: 'bold' },
                            bodyFont: { size: 13 }
                        }
                    },
                    scales: type === 'bar' ? {
                        y: { 
                            stacked: config.stacked || false,
                            beginAtZero: true, 
                            grid: { 
                                color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', 
                                drawBorder: false 
                            },
                            ticks: { 
                                color: isDark ? '#94a3b8' : '#64748b',
                                callback: function(value, index) {
                                    // If horizontal, Y is categorical (labels)
                                    if (config.indexAxis === 'y') {
                                        return config.data.labels ? config.data.labels[index] : value;
                                    }
                                    // If vertical, Y is value axis
                                    return value + (config.isPercent ? '%' : '');
                                }
                            }
                        },
                        x: { 
                            stacked: config.stacked || false,
                            max: config.stacked100 ? 100 : undefined,
                            grid: { display: false }, 
                            ticks: { 
                                color: isDark ? '#94a3b8' : '#64748b',
                                padding: 10,
                                callback: function(value, index) {
                                    // If horizontal, X is value axis
                                    if (config.indexAxis === 'y') {
                                        if (config.stacked100) return value + '%';
                                        return value + (config.isPercent ? '%' : '');
                                    }
                                    // If vertical, X is categorical (labels)
                                    if (config.data.labels) return config.data.labels[index];
                                    return value;
                                }
                            } 
                        }
                    } : {}
                }
            });
        }

        // Render specific interactive charts that we kept in index.html
        
        // 2. grafico_02_nerviosismo_correlacion
        createChart('grafico_02_nerviosismo_correlacion', 'bar', {
            isPercent: true,
            data: {
                labels: ['Sienten ansiedad al no tener el móvil'],
                datasets: [
                    { label: 'Alumnado', data: [25.6], backgroundColor: colors[0], borderRadius: 8 },
                    { label: 'Familias (perciben)', data: [15.7], backgroundColor: colors[3], borderRadius: 8 }
                ]
            },
            formatter: (v) => v + '%'
        });

        // 4. grafico_04_interaccion_familiar_correlacion
        createChart('grafico_04_interaccion_familiar_correlacion', 'bar', {
            isPercent: true,
            data: {
                labels: ['Interactuarían más con su familia sin móvil'],
                datasets: [
                    { label: 'Alumnado', data: [82.4], backgroundColor: colors[0], borderRadius: 8 },
                    { label: 'Familias (perciben)', data: [83.3], backgroundColor: colors[3], borderRadius: 8 }
                ]
            },
            formatter: (v) => v + '%'
        });

        // Distribución Tiempo de Uso (Question 24)
        createChart('inline_tiempo_distribucion', 'bar', {
            isPercent: true,
            data: {
                labels: ['< 2h', '2h-4h', '4h-6h', '6h-8h', '> 10h'],
                datasets: [{
                    label: 'Porcentaje (%)',
                    data: [16.8, 33.6, 19.2, 21.8, 8.8],
                    backgroundColor: ['#4ade80', '#5c60f5', '#ffcc00', '#ff0050', '#c2445b'],
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // Ocular discomfort correlation chart (sharp version)
        createChart('inline_correlacion_ojos', 'bar', {
            isPercent: true,
            data: {
                labels: ['Molestias Oculares'],
                datasets: [
                    { label: 'Alumnado', data: [26.4], backgroundColor: colors[0], borderRadius: 8 },
                    { label: 'Familias', data: [25.0], backgroundColor: colors[3], borderRadius: 8 }
                ]
            },
            formatter: (v) => v + '%'
        });

        // Neck and back pain global chart
        createChart('inline_dolor_cuello_global', 'bar', {
            data: {
                labels: ['Nunca', 'A veces', 'Sí, habitualmente'],
                datasets: [
                    { 
                        label: 'Cantidad de alumnos', 
                        data: [70, 43, 12], 
                        backgroundColor: [colors[0], colors[3], colors[2]],
                        borderRadius: 8 
                    }
                ]
            },
            formatter: (v) => v + ' (' + (v/125*100).toFixed(1) + '%)'
        });

        // Neck and back pain correlation chart
        createChart('inline_dolor_cuello_correlacion', 'bar', {
            isPercent: true,
            data: {
                labels: ['Dolor Cuello/Espalda'],
                datasets: [
                    { label: 'Alumnado', data: [44.0], backgroundColor: colors[0], borderRadius: 8 },
                    { label: 'Familias', data: [51.9], backgroundColor: colors[3], borderRadius: 8 }
                ]
            },
            formatter: (v) => v + '%'
        });

        // Neck and back pain sex segmentation (Incidencia A veces + Sí)
        createChart('inline_dolor_cuello_sexo_incidencia', 'bar', {
            isPercent: true,
            data: {
                labels: ['Alumnos', 'Familias'],
                datasets: [
                    { 
                        label: 'Masculino', 
                        data: [40.2, 42.9], 
                        backgroundColor: '#5c60f5', 
                        borderRadius: 8 
                    },
                    { 
                        label: 'Femenino', 
                        data: [48.3, 61.5], 
                        backgroundColor: '#c2445b', 
                        borderRadius: 8 
                    }
                ]
            },
            formatter: (v) => v + '%'
        });

        // --- SECTION 5.5 CIBERACOSO ---

        // Victimisation direct question
        createChart('inline_ciberacoso_victimas_directo', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { data: [9, 116], backgroundColor: ['#c2445b', '#5c60f5'], borderWidth: 0 }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Segmentation by Sex (Stacked 100%)
        createChart('inline_cib_sexo_stacked', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { label: 'Masculino', data: [67, 53], backgroundColor: '#5c60f5', borderRadius: 4, barThickness: 20 },
                    { label: 'Femenino', data: [33, 47], backgroundColor: '#c2445b', borderRadius: 4, barThickness: 20 }
                ]
            }
        });

        // Segmentation by Environment (Stacked 100%)
        createChart('inline_cib_entorno_stacked', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { label: 'Rural', data: [78, 79], backgroundColor: '#4ade80', borderRadius: 4, barThickness: 20 },
                    { label: 'Urbano', data: [22, 21], backgroundColor: '#f59e0b', borderRadius: 4, barThickness: 20 }
                ]
            }
        });

        // Comparativa General Brecha de Silencio
        createChart('inline_cib_brecha_comparativa', 'pie', {
            data: {
                labels: ['Alumnos', 'Familias'],
                datasets: [
                    { data: [7.2, 4.6], backgroundColor: ['#5c60f5', '#4ade80'], borderWidth: 0 }
                ]
            },
            formatter: (v) => v + '%'
        });

        // Aggression by Sex (Stacked 100%)
        createChart('inline_cib_agresion_sexo_stacked', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { label: 'Masculino', data: [67, 53], backgroundColor: '#5c60f5', borderRadius: 4, barThickness: 20 },
                    { label: 'Femenino', data: [33, 47], backgroundColor: '#c2445b', borderRadius: 4, barThickness: 20 }
                ]
            }
        });

        // Aggression by Environment (Stacked 100%)
        createChart('inline_cib_agresion_entorno_stacked', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { label: 'Rural', data: [63, 82], backgroundColor: '#4ade80', borderRadius: 4, barThickness: 20 },
                    { label: 'Urbano', data: [38, 18], backgroundColor: '#f59e0b', borderRadius: 4, barThickness: 20 }
                ]
            }
        });

        // Witnesses (Testigos) Question 13
        createChart('inline_ciberacoso_testigos_q13', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { data: [22, 103], backgroundColor: ['#5c60f5', '#4ade80'], borderWidth: 0 }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Digital Sovereignty Question 14
        createChart('inline_ciberacoso_soberania_q14', 'bar', {
            isPercent: true,
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { data: [18.4, 81.6], backgroundColor: ['#5c60f5', '#4ade80'], borderRadius: 6 }
                ]
            },
            formatter: (v) => v + '%'
        });

        // --- SECTION 5.6 ADAPTED CHARTS ---

        // Access to mobile at night (Question 16)
        createChart('inline_habitos_acceso_dormir', 'bar', {
            isPercent: true,
            showLegend: false,
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        data: [80, 20], 
                        backgroundColor: ['#5c60f5', '#4ade80'], 
                        borderRadius: 6,
                        barThickness: 120
                    }
                ]
            },
            formatter: (v) => v.toFixed(1) + '%'
        });

        // midnight connection (Question 17)
        createChart('inline_habitos_acceso_noche_global', 'doughnut', {
            data: {
                labels: ['Nunca', 'A veces', 'Sí, habitualmente'],
                datasets: [
                    { 
                        data: [44, 59, 22], 
                        backgroundColor: ['#4ade80', '#f59e0b', '#c2445b'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // midnight connection sex segmentation (Question 17)
        createChart('inline_habitos_acceso_noche_sexo_stacked', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Nunca', 'A veces', 'Sí, habitualmente'],
                datasets: [
                    { 
                        label: 'Masculino', 
                        data: [
                            (25/(25+19)*100).toFixed(0), 
                            (31/(31+28)*100).toFixed(0), 
                            (11/(11+11)*100).toFixed(0)
                        ], 
                        backgroundColor: colors[0] 
                    },
                    { 
                        label: 'Femenino', 
                        data: [
                            (19/(25+19)*100).toFixed(0), 
                            (28/(31+28)*100).toFixed(0), 
                            (11/(11+11)*100).toFixed(0)
                        ], 
                        backgroundColor: colors[2] 
                    }
                ]
            }
        });

        // midnight connection environment segmentation (Question 17)
        createChart('inline_habitos_acceso_noche_entorno_stacked', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Nunca', 'A veces', 'Sí, habitualmente'],
                datasets: [
                    { 
                        label: 'Rural', 
                        data: [
                            (37/(37+7)*100).toFixed(0), 
                            (49/(49+10)*100).toFixed(0), 
                            (15/(15+7)*100).toFixed(0)
                        ], 
                        backgroundColor: '#10b981' 
                    },
                    { 
                        label: 'Urbano', 
                        data: [
                            (7/(37+7)*100).toFixed(0), 
                            (10/(49+10)*100).toFixed(0), 
                            (7/(15+7)*100).toFixed(0)
                        ], 
                        backgroundColor: '#f59e0b' 
                    }
                ]
            }
        });

        // Sleep reconciliation (Question 4 Posterior)
        createChart('inline_habitos_acceso_sueno_conciliacion', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        data: [59, 66], 
                        backgroundColor: ['#5c60f5', '#c2445b'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Parental perception of midnight connection (Question 14 Familia)
        createChart('inline_habitos_acceso_medianoche_familias', 'doughnut', {
            data: {
                labels: ['Nunca', 'A veces', 'Sí, habitualmente'],
                datasets: [
                    { 
                        data: [56, 52, 0], 
                        backgroundColor: ['#4ade80', '#f59e0b', '#c2445b'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                if (total === 0 || value === 0) return '0%';
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Mobile use during meals (Question 18 Alumnos)
        createChart('inline_habitos_acceso_comidas_alumnos', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        data: [26, 99], 
                        backgroundColor: ['#c2445b', '#4ade80'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Mobile use during meals sex segmentation (Question 18)
        createChart('inline_habitos_acceso_comidas_sexo_stacked', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        label: 'Masculino', 
                        data: [
                            (15/(15+11)*100).toFixed(0), 
                            (52/(52+47)*100).toFixed(0)
                        ], 
                        backgroundColor: colors[0] 
                    },
                    { 
                        label: 'Femenino', 
                        data: [
                            (11/(15+11)*100).toFixed(0), 
                            (47/(52+47)*100).toFixed(0)
                        ], 
                        backgroundColor: colors[2] 
                    }
                ]
            }
        });

        // Mobile use during meals environment segmentation (Question 18)
        createChart('inline_habitos_acceso_comidas_entorno_stacked', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        label: 'Rural', 
                        data: [
                            (17/(17+9)*100).toFixed(0), 
                            (84/(84+15)*100).toFixed(0)
                        ], 
                        backgroundColor: '#10b981' 
                    },
                    { 
                        label: 'Urbano', 
                        data: [
                            (9/(17+9)*100).toFixed(0), 
                            (15/(84+15)*100).toFixed(0)
                        ], 
                        backgroundColor: '#f59e0b' 
                    }
                ]
            }
        });

        // Mobile use during meals family perception (Question 16 Familia)
        createChart('inline_habitos_acceso_comidas_familias', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        data: [16, 92], 
                        backgroundColor: ['#5c60f5', '#4ade80'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Mobile use during meals correlation (Alumnos vs Familias)
        createChart('inline_habitos_acceso_comidas_correlacion', 'bar', {
            isPercent: true,
            data: {
                labels: ['Alumnado', 'Familias'],
                datasets: [
                    { 
                        label: 'Uso del móvil en comidas', 
                        data: [20.8, 14.8], 
                        backgroundColor: [colors[0], colors[1]] 
                    }
                ]
            }
        });

        // Mobile use during homework (Question 19 Alumnos)
        createChart('inline_habitos_acceso_tareas_alumnos', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        data: [73, 52], 
                        backgroundColor: ['#c2445b', '#4ade80'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Mobile use during homework sex segmentation (Question 19)
        createChart('inline_habitos_acceso_tareas_sexo_stacked', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        label: 'Masculino', 
                        data: [
                            (43/(43+30)*100).toFixed(0), 
                            (24/(24+28)*100).toFixed(0)
                        ], 
                        backgroundColor: colors[0] 
                    },
                    { 
                        label: 'Femenino', 
                        data: [
                            (30/(43+30)*100).toFixed(0), 
                            (28/(24+28)*100).toFixed(0)
                        ], 
                        backgroundColor: colors[2] 
                    }
                ]
            }
        });

        // Mobile use during homework correlation (Alumnos vs Familias)
        createChart('inline_habitos_acceso_tareas_correlacion', 'bar', {
            isPercent: true,
            data: {
                labels: ['Alumnado', 'Familias'],
                datasets: [
                    { 
                        label: 'Móvil a mano en estudio', 
                        data: [58.4, 43.5], 
                        backgroundColor: [colors[0], colors[1]] 
                    }
                ]
            }
        });

        // Concentration after detox (Question 3 Posterior)
        createChart('inline_habitos_acceso_tareas_concentracion', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        data: [63, 62], 
                        backgroundColor: ['#5c60f5', '#c2445b'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });


        // Ranking Apps (Question 20)
        createChart('inline_contenidos_ranking_apps', 'bar', {
            indexAxis: 'y',
            data: {
                labels: ['Instagram', 'Tik-Tok', 'WhatsApp', 'YouTube', 'Otras', 'Juegos'],
                datasets: [{
                    label: 'Puntos',
                    data: [498, 496, 428, 255, 118, 85],
                    backgroundColor: ['#c2445b', '#ff0050', '#25d366', '#ff0000', '#94a3b8', '#5c60f5'],
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // Top Apps comparison by Sex (Instagram vs TikTok)
        createChart('inline_contenidos_top_sexo', 'bar', {
            data: {
                labels: ['TikTok', 'Instagram'],
                datasets: [
                    { label: 'Masculino', data: [272, 257], backgroundColor: colors[0], borderRadius: 4 },
                    { label: 'Femenino', data: [224, 241], backgroundColor: colors[2], borderRadius: 4 }
                ]
            }
        });

        // Substitutes Global (Question 1 Posterior)
        createChart('inline_contenidos_sustitutos_global', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        data: [95, 30], 
                        backgroundColor: ['#c2445b', '#4ade80'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Substitutes Detail (Question 2 Posterior)
        createChart('inline_contenidos_sustitutos_detalle', 'bar', {
            indexAxis: 'y',
            isPercent: true,
            data: {
                labels: ['PC/Portátil', 'Smart TV', 'Consola', 'Tablet', 'Otro móvil', 'Ninguno'],
                datasets: [{
                    label: 'Porcentaje (%)',
                    data: [52.0, 46.4, 27.2, 17.6, 9.6, 24.0],
                    backgroundColor: ['#5c60f5', '#c2445b', '#ffcc00', '#4ade80', '#ff0050', '#94a3b8'],
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // Videojuegos Alumnos Global (Question 21)
        createChart('inline_contenidos_videojuegos_alumnos', 'bar', {
            isPercent: true,
            data: {
                labels: ['Habitualmente', 'A veces', 'Nunca'],
                datasets: [{
                    label: 'Porcentaje (%)',
                    data: [30.4, 52.8, 16.8],
                    backgroundColor: ['#c2445b', '#ffcc00', '#4ade80'],
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // Videojuegos Frecuencia por Sexo (Stacked 100%)
        createChart('inline_contenidos_videojuegos_sexo_stacked_100', 'bar', {
            indexAxis: 'y',
            stacked: true,
            stacked100: true,
            data: {
                labels: ['Habitualmente', 'A veces', 'Nunca'],
                datasets: [
                    { label: 'Masculino', data: [31, 33, 3], backgroundColor: colors[0] },
                    { label: 'Femenino', data: [7, 33, 18], backgroundColor: colors[2] }
                ]
            }
        });

        // Composición de Jugadores Habituales (Pie Chart)
        createChart('inline_contenidos_videojuegos_habitual_composicion', 'doughnut', {
            data: {
                labels: ['Chicos', 'Chicas'],
                datasets: [{
                    data: [31, 7],
                    backgroundColor: [colors[0], colors[2]],
                    borderWidth: 0
                }]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(0) + '%';
            }
        });

        // Sustitutos (Question 8 Posterior)
        createChart('inline_contenidos_sustitutos', 'bar', {
            data: {
                labels: ['TV', 'PC', 'Tablet', 'Ninguno', 'Móvil Ajeno'],
                datasets: [{
                    label: 'Alumnos',
                    data: [49, 47, 27, 24, 12],
                    backgroundColor: '#4ade80',
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // --- SECTION 5.8 TIEMPO DE USO ---

        // Distribución Tiempo (Question 24)
        createChart('inline_tiempo_distribucion', 'bar', {
            isPercent: true,
            data: {
                labels: ['0-2h', '2-4h', '4-6h', '6-8h', '>10h'],
                datasets: [{
                    label: 'Porcentaje (%)',
                    data: [8.8, 31.2, 30.4, 20.8, 8.8],
                    backgroundColor: '#f59e0b',
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // Media de tiempo segmentada
        createChart('inline_tiempo_media_segmentos', 'bar', {
            isPercent: false,
            data: {
                labels: ['Global', 'Masculino', 'Femenino', 'Urbano', 'Rural'],
                datasets: [{
                    label: 'Minutos',
                    data: [298, 309, 286, 320, 294],
                    backgroundColor: [colors[1], colors[0], colors[2], colors[3], colors[4]],
                    borderRadius: 4
                }]
            },
            formatter: (v) => {
                const hours = Math.floor(v / 60);
                const minutes = v % 60;
                return `${hours}h ${minutes.toString().padStart(2, '0')}min`;
            },
            showLegend: false
        });

        // Contenidos Inapropiados Alumnos Global (Question 22)
        createChart('inline_contenidos_inapropiados_alumnos', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        data: [30, 95], 
                        backgroundColor: ['#c2445b', '#4ade80'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Contenidos Inapropiados Comparativa por Sexo
        createChart('inline_contenidos_inapropiados_sexo_comparativa', 'bar', {
            isPercent: true,
            data: {
                labels: ['Chicos', 'Chicas'],
                datasets: [{
                    label: 'Han recibido contenido (%)',
                    data: [35.8, 10.16],
                    backgroundColor: [colors[0], colors[2]],
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // Percepción Exceso Alumnos (Question 25)
        createChart('inline_tiempo_percepcion_exceso_alumnos', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [
                    { 
                        data: [82, 43], 
                        backgroundColor: ['#c2445b', '#4ade80'], 
                        borderWidth: 0 
                    }
                ]
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                return ((value / total) * 100).toFixed(1) + '%';
            }
        });

        // Percepción Exceso (Correlación Alumnos vs Familias)
        createChart('inline_tiempo_percepcion_exceso_correlacion', 'bar', {
            isPercent: true,
            data: {
                labels: ['Alumnado', 'Familias'],
                datasets: [{
                    label: '% Sí (Excesivo)',
                    data: [65.6, 66.7],
                    backgroundColor: [colors[0], colors[2]],
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // Percepción Exceso (Correlación)
        createChart('inline_tiempo_percepcion_exceso', 'bar', {
            data: {
                labels: ['Reconoce Uso Excesivo (%)'],
                datasets: [
                    { label: 'Alumnos', data: [65.6], backgroundColor: '#5c60f5', borderRadius: 4 },
                    { label: 'Familias', data: [66.7], backgroundColor: '#4ade80', borderRadius: 4 }
                ]
            },
            formatter: (v) => v + '%'
        });

        // --- SECTION 5.9 TRAS 24H SIN MÓVIL ---

        // Ayuno: Aburrimiento
        createChart('inline_ayuno_aburrimiento', 'doughnut', {
            data: {
                labels: ['Sí (Aburrimiento)', 'No'],
                datasets: [{
                    data: [37.6, 62.4],
                    backgroundColor: ['#c2445b', '#4ade80'],
                    borderWidth: 0
                }]
            },
            formatter: (v) => v + '%'
        });

        // Tiempo recuperado (Question 7 Posterior)
        createChart('inline_ayuno_tiempo_recuperado', 'bar', {
            isPercent: true,
            data: {
                labels: ['Estudio', 'Familia', 'Ocio/Aficiones', 'Deporte', 'Otros'],
                datasets: [{
                    label: 'Respuestas (%)',
                    data: [27.9, 23.2, 21.9, 17.6, 9.4],
                    backgroundColor: [colors[0], colors[1], colors[3], colors[4], colors[2]],
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // Ayuno: Más tiempo para otras actividades
        createChart('inline_ayuno_mas_tiempo', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [{
                    data: [76, 24],
                    backgroundColor: ['#4ade80', '#c2445b'],
                    borderWidth: 0
                }]
            },
            formatter: (v) => v + '%'
        });

        // Ayuno: Incremento ejercicio físico
        createChart('inline_ayuno_ejercicio', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [{
                    data: [42.4, 57.6],
                    backgroundColor: ['#4ade80', '#c2445b'],
                    borderWidth: 0
                }]
            },
            formatter: (v) => v + '%'
        });

        // Ayuno: Alternativas digitales
        createChart('inline_ayuno_alternativas', 'bar', {
            isPercent: true,
            data: {
                labels: ['Smart TV', 'Ordenador', 'Tablet', 'Ninguno', 'Otros'],
                datasets: [{
                    label: 'Respuestas (%)',
                    data: [30.8, 29.6, 17.0, 15.1, 7.5],
                    backgroundColor: [colors[0], colors[1], colors[2], colors[3], colors[4]],
                    borderRadius: 4
                }]
            },
            showLegend: false
        });

        // Ayuno: Mejora concentración
        createChart('inline_ayuno_concentracion', 'doughnut', {
            data: {
                labels: ['Sí', 'No'],
                datasets: [{
                    data: [50.4, 49.6],
                    backgroundColor: ['#4ade80', '#c2445b'],
                    borderWidth: 0
                }]
            },
            formatter: (v) => v + '%'
        });

        // Capacidad Futura (Question 10 Posterior)
        createChart('inline_ayuno_capacidad_futura', 'bar', {
            data: {
                labels: ['>1 día', '12-24h', '6-12h', '0-6h', '0h (Siempre)'],
                datasets: [{
                    label: 'Capacidad estimada (%)',
                    data: [50.4, 24, 14.4, 8.8, 2.4],
                    backgroundColor: ['#4ade80', '#60a5fa', '#fbbf24', '#f87171', '#c2445b'],
                    borderRadius: 4
                }]
            },
            isPercent: true,
            showLegend: false
        });

    }
});

// --- LÓGICA DE NAVEGACIÓN MÓVIL ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link, .sub-nav-link');

    if (mobileToggle && sidebar && overlay) {
        const toggleMenu = () => {
            mobileToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            // Prevenir scroll en el body cuando el menú está abierto
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        };

        const closeMenu = () => {
            mobileToggle.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        mobileToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);

        // Cerrar al hacer clic en cualquier enlace (solo en móvil)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    closeMenu();
                }
            });
        });
    }
});
