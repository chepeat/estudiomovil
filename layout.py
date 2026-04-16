import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the beginning of the body up to <main>
body_start_pattern = re.compile(r'<body>\s*<header class="hero">[\s\S]*?</header>\s*<main class="container">', re.IGNORECASE)

new_header = """<body>
    <div class="app-container">
        <!-- BARRA LATERAL -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="icon">📱</div>
                <h2>Salud Digital</h2>
                <p>Estudio Extremadura 2025-2026</p>
            </div>
            <nav class="nav-menu">
                <a href="#resumen" class="nav-link active" data-target="resumen">Resumen ejecutivo</a>
                <a href="#introduccion" class="nav-link" data-target="introduccion">Introducción</a>
                <a href="#objetivos" class="nav-link" data-target="objetivos">Objetivos</a>
                <a href="#metodologia" class="nav-link" data-target="metodologia">Metodología</a>
                <a href="#resultados" class="nav-link" data-target="resultados">Resultados</a>
                <a href="#conclusiones" class="nav-link" data-target="conclusiones">Conclusiones</a>
                <a href="#propuestas" class="nav-link" data-target="propuestas">Propuestas de acción</a>
                <a href="#metodologia-cuestionarios" class="nav-link" data-target="anexos">Anexos y Autores</a>
            </nav>
        </aside>

        <!-- CONTENIDO PRINCIPAL -->
        <div class="main-wrapper">
            <header class="hero compact">
                <div class="hero-content">
                    <h1>Educación para la Salud Digital</h1>
                    <p class="subtitle">Estudio en adolescentes tras el ayuno del smartphone durante 24 horas</p>
                </div>
            </header>
            <main class="container content-area">
"""

html = body_start_pattern.sub(new_header, html)

# We need to wrap "autores", "metodologia-cuestionarios", "bibliografia" into "anexos" div
# Actually, the simplest Javascript logic is: hide all `section`, show the one matching data-target.
# For "anexos", we can group them or handle multiple targets.
# Let's wrap them in <div id="anexos" class="content-section">...</div>
# And replace <section id="..."> with <section id="..." class="content-section">

html = html.replace('<section id="resumen">', '<section id="resumen" class="content-section active">')
for s in ['introduccion', 'objetivos', 'metodologia', 'resultados', 'conclusiones', 'propuestas']:
    html = html.replace(f'<section id="{s}">', f'<section id="{s}" class="content-section" style="display: none;">')

# Wrap autores, metodologia-cuestionarios, bibliografia in an 'anexos' section
anexos_content = re.search(r'(<section id="metodologia-cuestionarios">.*?</section>.*?<section id="bibliografia">.*?</section>)', html, re.DOTALL)
autores_content = re.search(r'(<section id="autores">.*?</section>)', html, re.DOTALL)

if anexos_content and autores_content:
    html = html.replace(anexos_content.group(1), '')
    html = html.replace(autores_content.group(1), '')
    
    combined = f"""
        <section id="anexos" class="content-section" style="display: none;">
            {autores_content.group(1)}
            {anexos_content.group(1)}
        </section>
    """
    html = html.replace('<footer', combined + '\n            <footer')


# Close the app-container at the end
html = html.replace('</body>', '    </div>\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("index.html updated successfully!")
