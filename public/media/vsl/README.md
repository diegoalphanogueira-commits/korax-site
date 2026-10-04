# VSL da Korax

A landing V6 procura automaticamente estes arquivos:

- `public/media/vsl/korax-vsl.mp4` — principal, recomendado (H.264 + AAC)
- `public/media/vsl/korax-vsl.webm` — opcional, alternativa para navegadores compatíveis
- `public/media/vsl/korax-vsl-poster.webp` — capa leve mostrada enquanto o vídeo carrega

## Recomendações

- Formato: 16:9 horizontal
- MP4: H.264, áudio AAC
- Resolução: 1920x1080 ou 1280x720
- Use `faststart` / moov atom no início do arquivo para o vídeo começar sem precisar baixar inteiro
- Evite bitrate exagerado. Para uma VSL de página, prefira uma versão comprimida pensada para web.
- Poster em WebP, idealmente abaixo de ~200 KB

## Comportamento de autoplay

A landing tenta iniciar com áudio. Se o navegador bloquear autoplay com som, ela automaticamente inicia o vídeo mudo e mostra o botão `ATIVAR SOM`. Um toque ativa o áudio sem redirecionar o visitante.
