<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Capacidade no Cálculo para Python</title>
<style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; background: #f5f5f5; color: #111; }
    h1, h2, h3 { color: #0b3d91; }
    section { margin-bottom: 40px; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
    img { max-width: 100%; height: auto; margin: 10px 0; border: 1px solid #ccc; border-radius: 8px; cursor: pointer; transition: 0.3s; }
    img:hover { transform: scale(1.05); }
    a { color: #0b3d91; text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* Lightbox styles */
    #lightboxOverlay { display: none; position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.8); z-index: 999; }
    #lightboxOverlay img { position: absolute; max-width: 90%; max-height: 90%; top:50%; left:50%; transform: translate(-50%, -50%); border-radius: 10px; }
    #lightboxOverlay .closeBtn { position: absolute; top: 20px; right: 30px; font-size: 30px; color: #fff; cursor: pointer; }
</style>
</head>
<body>

<h1>Capacidade no Cálculo para Python</h1>
<p>Este artigo apresenta experimentações acadêmicas em Python, com cálculos numéricos, transformadas de Fourier, integração, derivadas e superposição de ondas. Resultados gráficos estão disponíveis abaixo.</p>

<section>
<h2>1. Sequência de Fibonacci</h2>
<p>Geração dos 10 primeiros números e soma incremental até atingir 88.</p>
<img src="https://github.com/tel36214287-star/Capacidade-no-calculo-para-Python/blob/main/Publicar/Plot.png" alt="Plot Fibonacci" onclick="openLightbox(this.src)">
</section>

<section>
<h2>2. Derivada Espacial via Fourier</h2>
<p>Derivada de função periódica usando FFT e comparação com derivada analítica.</p>
<img src="https://github.com/tel36214287-star/Capacidade-no-calculo-para-Python/blob/main/Publicar/Plot1.png" alt="Plot derivada Fourier" onclick="openLightbox(this.src)">
</section>

<section>
<h2>3. Simulação de Onda 1D via Fourier</h2>
<p>Propagação de pulso gaussiano com esquema de segunda ordem no tempo.</p>
<img src="https://github.com/tel36214287-star/Capacidade-no-calculo-para-Python/blob/main/Publicar/Plot2.png" alt="Plot onda 1D Fourier" onclick="openLightbox(this.src)">
</section>

<section>
<h2>4. Derivada Inversa (Integração Numérica)</h2>
<p>Integração cumulativa de um sinal para obter a derivada inversa.</p>
<img src="https://github.com/tel36214287-star/Capacidade-no-calculo-para-Python/blob/main/Publicar/Plot3.png" alt="Plot derivada inversa" onclick="openLightbox(this.src)">
</section>

<section>
<h2>5. Superposição de Ondas Senoidais</h2>
<p>Soma de múltiplas ondas com diferentes amplitudes, frequências e fases.</p>
</section>

<footer>
<p>Repositório completo e código-fonte disponível em <a href="https://github.com/tel36214287-star/Capacidade-no-calculo-para-Python" target="_blank">GitHub - Capacidade no Cálculo para Python</a>.</p>
</footer>

<!-- Lightbox Overlay -->
<div id="lightboxOverlay" onclick="closeLightbox()">
    <span class="closeBtn">&times;</span>
    <img id="lightboxImage" src="">
</div>

<script>
function openLightbox(src) {
    document.getElementById('lightboxOverlay').style.display = 'block';
    document.getElementById('lightboxImage').src = src;
}

function closeLightbox() {
    document.getElementById('lightboxOverlay').style.display = 'none';
}
</script>

</body>
</html>
