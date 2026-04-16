import re
import json

# 1. Modify index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add libs if not exist
if 'chart.js' not in html:
    html = html.replace('</head>', '    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>\n    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2"></script>\n    <script src="script.js" defer></script>\n</head>')

# Replace imgs with canvas and extract their names
canvas_ids = []
def replacer(match):
    name = match.group(1)
    canvas_ids.append(name)
    return f'<canvas id="{name}" style="max-height: 350px; width: 100%;"></canvas>'

html = re.sub(r'<img src="assets/graficos/(grafico_\d+_[a-z0-9_]+)\.png"[^>]*>', replacer, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Re-write script.js based on extracted appState
with open('script.js', 'r', encoding='utf-8') as f:
    orig_js = f.read()

match = re.search(r'const\s+appState\s*=\s*(\{[\s\S]*?\n    \});', orig_js)
app_state_str = match.group(0)

new_script = f"""
{app_state_str}

document.addEventListener('DOMContentLoaded', () => {{
    Chart.register(ChartDataLabels);

    Chart.defaults.font.family = 'Outfit, sans-serif';
    Chart.defaults.color = '#475569';
    
    const colors = [
        'rgba(79, 70, 229, 0.85)', // primary (indigo-600)
        'rgba(14, 165, 233, 0.85)', // secondary (sky-500)
        'rgba(244, 63, 94, 0.85)',
        'rgba(16, 185, 129, 0.85)',
        'rgba(245, 158, 11, 0.85)',
        'rgba(139, 92, 246, 0.85)'
    ];

    function createChart(id, type, config) {{
        const el = document.getElementById(id);
        if(!el) return;
        return new Chart(el.getContext('2d'), {{
            type: type,
            data: config.data,
            options: {{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {{
                    legend: {{ position: type === 'bar' ? 'top' : 'right' }},
                    datalabels: {{
                        color: '#fff',
                        font: {{ weight: 'bold' }},
                        formatter: config.formatter || ((val) => val)
                    }}
                }},
                scales: type === 'bar' ? {{
                    y: {{ beginAtZero: true, grid: {{ color: 'rgba(0,0,0,0.05)' }} }},
                    x: {{ grid: {{ display: false }} }}
                }} : {{}}
            }}
        }});
    }}

    // Helper mappings
    const pd = appState.data;

    // 1. grafico_01_sexo_entorno (Pie Charts for Sex / Environment combined using two datasets or manually)
    // Actually we will render a Bar chart for Sexo & Entorno
    createChart('grafico_01_sexo_entorno', 'bar', {{
        data: {{
            labels: ['Masculino / Femenino', 'Rural / Urbano'],
            datasets: [
                {{ label: 'Grupo 1 (Masc / Rural)', data: [pd.previo[0].preguntas[0].opciones[0].valor, pd.previo[0].preguntas[1].opciones[0].valor], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Grupo 2 (Fem / Urbano)', data: [pd.previo[0].preguntas[0].opciones[1].valor, pd.previo[0].preguntas[1].opciones[1].valor], backgroundColor: colors[2], borderRadius: 4 }}
            ]
        }}
    }});

    // 2. grafico_02_nerviosismo_correlacion
    createChart('grafico_02_nerviosismo_correlacion', 'bar', {{
        data: {{
            labels: ['Sí sienten ansiedad/nerviosismo (%)'],
            datasets: [
                {{ label: 'Alumnos', data: [(32/125*100).toFixed(1)], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Familias (perciben)', data: [(17/108*100).toFixed(1)], backgroundColor: colors[3], borderRadius: 4 }}
            ]
        }},
        formatter: (v) => v + '%'
    }});

    // 3. grafico_03_notificaciones_sexo
    createChart('grafico_03_notificaciones_sexo', 'bar', {{
        data: {{
            labels: ['Nunca', 'Casi nunca', 'A veces', 'Casi siempre', 'Siempre'],
            datasets: [
                {{ label: 'Chicos', data: [0, 13, 33, 16, 5], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Chicas', data: [2, 4, 21, 20, 11], backgroundColor: colors[2], borderRadius: 4 }}
            ]
        }}
    }});

    // 4. grafico_04_interaccion_familiar_correlacion
    createChart('grafico_04_interaccion_familiar_correlacion', 'bar', {{
        data: {{
            labels: ['Sí interactuarían más (%)'],
            datasets: [
                {{ label: 'Alumnos', data: [(103/125*100).toFixed(1)], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Familias (perciben)', data: [(90/108*100).toFixed(1)], backgroundColor: colors[3], borderRadius: 4 }}
            ]
        }},
        formatter: (v) => v + '%'
    }});

    // 5. grafico_05_control_parental_correlacion
    createChart('grafico_05_control_parental_correlacion', 'bar', {{
        data: {{
            labels: ['Control Contenidos (Sí %)', 'Control Tiempo (Sí %)'],
            datasets: [
                {{ label: 'Alumnos (perciben control)', data: [(40/125*100).toFixed(1), (39/125*100).toFixed(1)], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Familias (ejercen control)', data: [(76/108*100).toFixed(1), (83/108*100).toFixed(1)], backgroundColor: colors[3], borderRadius: 4 }}
            ]
        }},
        formatter: (v) => v + '%'
    }});

    // 6. grafico_06_molestias_oculares_correlacion
    createChart('grafico_06_molestias_oculares_correlacion', 'bar', {{
        data: {{
            labels: ['Molestias Oculares (A veces + Habitualmente) (%)'],
            datasets: [
                {{ label: 'Alumnos', data: [((29+4)/125*100).toFixed(1)], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Familias', data: [((24+3)/108*100).toFixed(1)], backgroundColor: colors[3], borderRadius: 4 }}
            ]
        }},
        formatter: (v) => v + '%'
    }});

    // 7. grafico_07_dolor_cuello_espalda_correlacion
    createChart('grafico_07_dolor_cuello_espalda_correlacion', 'bar', {{
        data: {{
            labels: ['Molestias/Dolor (A veces + Habitualmente) (%)'],
            datasets: [
                {{ label: 'Alumnos', data: [((43+12)/125*100).toFixed(1)], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Familias', data: [((53+3)/108*100).toFixed(1)], backgroundColor: colors[3], borderRadius: 4 }}
            ]
        }},
        formatter: (v) => v + '%'
    }});

    // 8. grafico_08_ciberacoso_sexo
    createChart('grafico_08_ciberacoso_sexo', 'bar', {{
        data: {{
            labels: ['Víctima (Sí)', 'Agresor (Sí)', 'Testigo (Sí)'],
            datasets: [
                {{ label: 'Chicos', data: [6, 5, 12], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Chicas', data: [3, 3, 10], backgroundColor: colors[2], borderRadius: 4 }}
            ]
        }}
    }});

    // 9. grafico_09_fotos_sin_consentimiento
    createChart('grafico_09_fotos_sin_consentimiento', 'doughnut', {{
        data: {{
            labels: ['Sí', 'No'],
            datasets: [
                {{ data: [23, 102], backgroundColor: [colors[2], colors[3]], borderWidth: 0 }}
            ]
        }}
    }});
    
    // 10. grafico_10_contenidos_inapropiados_sexo
    createChart('grafico_10_contenidos_inapropiados_sexo', 'bar', {{
        data: {{
            labels: ['Nunca', 'Pornográfico', 'Violento', 'Ambos'],
            datasets: [
                {{ label: 'Chicos', data: [43, 9, 7, 8], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Chicas', data: [52, 1, 3, 2], backgroundColor: colors[2], borderRadius: 4 }}
            ]
        }}
    }});
    
    // 11. grafico_11_familias_ciberacoso
    createChart('grafico_11_familias_ciberacoso', 'doughnut', {{
        data: {{
            labels: ['Sí (Conocedor)', 'No (Desconoce)'],
            datasets: [
                {{ data: [5, 103], backgroundColor: [colors[0], colors[1]], borderWidth: 0 }}
            ]
        }}
    }});

    // 12. grafico_12_movil_habitacion_dormir
    createChart('grafico_12_movil_habitacion_dormir', 'doughnut', {{
        data: {{
            labels: ['Sí', 'No'],
            datasets: [
                {{ data: [100, 25], backgroundColor: [colors[2], colors[3]], borderWidth: 0 }}
            ]
        }}
    }});

    // 13. grafico_13_conexion_medianoche_correlacion
    createChart('grafico_13_conexion_medianoche_correlacion', 'bar', {{
        data: {{
            labels: ['A veces', 'Sí, habitualmente', 'Nunca'],
            datasets: [
                {{ label: 'Alumnos', data: [59, 22, 44], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Familias (perciben)', data: [52, 0, 56], backgroundColor: colors[3], borderRadius: 4 }}
            ]
        }}
    }});

    // 14. grafico_14_uso_comidas_entorno
    createChart('grafico_14_uso_comidas_entorno', 'doughnut', {{
        data: {{
            labels: ['Sí (Urbano)', 'No (Urbano)', 'Sí (Rural)', 'No (Rural)'],
            datasets: [
                {{ data: [9, 15, 17, 84], backgroundColor: colors, borderWidth: 0 }}
            ]
        }}
    }});

    // 15. grafico_15_movil_tareas_escolares_correlacion
    createChart('grafico_15_movil_tareas_escolares_correlacion', 'bar', {{
        data: {{
            labels: ['Sí lo tienen a mano (%)'],
            datasets: [
                {{ label: 'Alumnos', data: [(73/125*100).toFixed(1)], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Familias (perciben)', data: [(47/108*100).toFixed(1)], backgroundColor: colors[3], borderRadius: 4 }}
            ]
        }},
        formatter: (v) => v + '%'
    }});

    // 16. grafico_16_prioridad_aplicaciones_sexo
    createChart('grafico_16_prioridad_aplicaciones_sexo', 'bar', {{
        data: {{
            labels: ['Instagram', 'Tiktok', 'Whatsapp', 'Youtube', 'Otros', 'Juegos'],
            datasets: [
                {{ label: 'Chicos', data: [257, 272, 262, 231, 194, 189], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Chicas', data: [241, 224, 214, 206, 176, 157], backgroundColor: colors[2], borderRadius: 4 }}
            ]
        }}
    }});

    // 17. grafico_17_uso_videojuegos_sexo
    createChart('grafico_17_uso_videojuegos_sexo', 'bar', {{
        data: {{
            labels: ['Nunca', 'A veces', 'Sí, habitualmente'],
            datasets: [
                {{ label: 'Chicos', data: [3, 33, 31], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Chicas', data: [18, 33, 7], backgroundColor: colors[2], borderRadius: 4 }}
            ]
        }}
    }});

    // 18. grafico_18_dispositivos_alternativos
    createChart('grafico_18_dispositivos_alternativos', 'bar', {{
        data: {{
            labels: ['Tablet', 'Ordenador', 'Móvil familiar', 'TV', 'Ninguno'],
            datasets: [
                {{ label: 'Alumnos', data: [27, 47, 12, 49, 24], backgroundColor: colors[1], borderRadius: 4 }}
            ]
        }}
    }});

    // 19. grafico_19_distribucion_tiempo_uso
    createChart('grafico_19_distribucion_tiempo_uso', 'bar', {{
        data: {{
            labels: ['0-2h', '2-4h', '4-6h', '6-8h', '>10h'],
            datasets: [
                {{ label: 'Cantidad', data: [11, 39, 38, 26, 11], backgroundColor: colors[4], borderRadius: 4 }}
            ]
        }}
    }});

    // 20. grafico_20_tiempo_medio_sexo_entorno
    createChart('grafico_20_tiempo_medio_sexo_entorno', 'bar', {{
        data: {{
            labels: ['Masculino', 'Femenino', 'Rural', 'Urbano'],
            datasets: [
                {{ label: 'Horas', data: [5.15, 4.76, 4.90, 5.33], backgroundColor: colors[0], borderRadius: 4 }}
            ]
        }}
    }});

    // 21. grafico_21_percepcion_uso_excesivo_correlacion
    createChart('grafico_21_percepcion_uso_excesivo_correlacion', 'bar', {{
        data: {{
            labels: ['Sí sienten que usan el móvil en exceso (%)'],
            datasets: [
                {{ label: 'Alumnos', data: [(82/125*100).toFixed(1)], backgroundColor: colors[0], borderRadius: 4 }},
                {{ label: 'Familias', data: [(72/108*100).toFixed(1)], backgroundColor: colors[3], borderRadius: 4 }}
            ]
        }},
        formatter: (v) => v + '%'
    }});

    // 22. grafico_22_aburrimiento_ayuno
    createChart('grafico_22_aburrimiento_ayuno', 'doughnut', {{
        data: {{
            labels: ['Sí (Se aburren)', 'No (No se aburren)'],
            datasets: [
                {{ data: [47, 78], backgroundColor: [colors[2], colors[3]], borderWidth: 0 }}
            ]
        }}
    }});

    // 23. grafico_23_tiempo_libre_actividades
    createChart('grafico_23_tiempo_libre_actividades', 'bar', {{
        data: {{
            labels: ['Amigos', 'Familia', 'Estudio', 'Deporte', 'Otros'],
            datasets: [
                {{ label: 'Alumnos', data: [22, 54, 65, 41, 51], backgroundColor: colors[1], borderRadius: 4 }}
            ]
        }}
    }});

    // 24. grafico_24_mejora_sueno_ayuno
    createChart('grafico_24_mejora_sueno_ayuno', 'doughnut', {{
        data: {{
            labels: ['Sí (Concibieron mejor el sueño)', 'No'],
            datasets: [
                {{ data: [59, 66], backgroundColor: [colors[3], colors[0]], borderWidth: 0 }}
            ]
        }}
    }});

    // 25. grafico_25_tiempo_desconectados
    createChart('grafico_25_tiempo_desconectados', 'bar', {{
        data: {{
            labels: ['0h (Siempre conectado)', 'Hasta 6h', '6h a 12h', '12h a 24h', 'Más de 1 día'],
            datasets: [
                {{ label: 'Alumnos', data: [3, 22, 23, 14, 63], backgroundColor: colors[4], borderRadius: 4 }}
            ]
        }}
    }});

}});
"""

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_script)

print("HTML images replaced by canvas, config built in script.js successfully!")

