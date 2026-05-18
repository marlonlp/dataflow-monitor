# DataFlow Monitor

Landing page estática de um produto fictício chamado **DataFlow Monitor**.

O projeto foi criado para servir como exemplo em um tutorial de blog sobre publicação de sites estáticos. A proposta é mostrar uma estrutura simples, organizada e fácil de explicar usando apenas HTML, CSS e JavaScript puro.

## Sobre o produto

O **DataFlow Monitor** não é uma ferramenta real. Ele representa uma plataforma fictícia para monitoramento de:

- pipelines de dados
- cargas ETL
- integrações entre sistemas
- jobs em cloud
- alertas de falhas operacionais

Toda a interface foi criada apenas para fins educacionais.

## Como abrir localmente

Como não existe backend nem etapa de build, basta abrir o arquivo `index.html` diretamente no navegador.

Passos simples:

1. Baixe ou copie os arquivos do projeto.
2. Entre na pasta do projeto.
3. Abra `index.html` com seu navegador.

Você também pode publicar os mesmos arquivos em qualquer serviço de hospedagem de site estático.

## Estrutura de arquivos

```text
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── README.md
└── README.md
```

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro

## Recursos implementados

- Header responsivo com navegação interna
- Menu mobile com botão hambúrguer
- Hero section com mockup visual de dashboard em HTML/CSS
- Seção de problemas
- Seção de recursos
- Seção "Como funciona"
- Seção de métricas com animação simples
- Seção de preços com destaque para plano recomendado
- FAQ com accordion em JavaScript puro
- Call to action final
- Footer com links fictícios

## Como customizar

### Textos

Os textos principais estão no arquivo `index.html`. Você pode trocar:

- nome do produto
- títulos
- descrições
- preços
- perguntas do FAQ
- chamadas para ação

### Cores e visual

As cores principais ficam no topo de `css/styles.css`, dentro de `:root`.

Exemplos de variáveis fáceis de alterar:

- `--bg`
- `--panel`
- `--text`
- `--primary`
- `--accent`

Também é possível ajustar:

- espaçamentos
- bordas arredondadas
- sombras
- gradientes

### Seções

Cada seção da página está separada por blocos claros no `index.html`. Isso facilita:

- remover seções
- duplicar blocos
- mudar a ordem do conteúdo
- adaptar o layout para outro tipo de produto

### JavaScript

O arquivo `js/main.js` contém apenas interações simples:

- abrir e fechar o menu mobile
- fechar o menu ao clicar em um link
- scroll suave para âncoras internas
- accordion do FAQ
- animação das métricas com `IntersectionObserver`

Se quiser, você pode remover a parte da animação das métricas sem afetar o restante do site.

## Observações importantes

- O projeto não usa backend.
- O projeto não usa frameworks.
- O projeto não depende de bibliotecas externas obrigatórias.
- O site foi pensado para funcionar apenas abrindo `index.html`.
- O dashboard exibido na hero é apenas um mockup visual.

## Licença de uso educacional

Você pode usar este exemplo como base para estudos, tutoriais e adaptações de layout.
