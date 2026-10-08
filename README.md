<div align="center">

# João Guilherme — Portfólio

Portfólio pessoal construído com HTML, CSS e JavaScript puros, sem frameworks e sem build.

[**Acessar o site →**](https://jgdomingos.github.io/portfolio/)

</div>

---

## Sobre

Este repositório contém o código-fonte do meu portfólio pessoal de desenvolvedor: quem eu sou, o que já construí, onde trabalhei e estudei, e como entrar em contato. É intencionalmente livre de dependências, rquivos estáticos servidos diretamente pelo GitHub Pages.

## Funcionalidades

- **Totalmente responsivo** — menu mobile com hambúrguer, espaçamento fluido via `clamp()`, grids que colapsam em telas pequenas
- **Seletor de idioma PT/EN** — todo o texto fica em `assets/translations/*.json`, é trocado em tempo real (sem recarregar a página) e a preferência fica salva no navegador
- **Páginas dedicadas** para [Educação](./educations.html) e [Experiência](./experiences.html), cada uma com seu próprio hero e links diretos a partir da página inicial (ex: `experiences.html#paramount`), com scroll suave centralizado na seção
- **Visualizador de certificados** — carrossel de imagens por curso, com modal de visualização dos PDFs originais
- **Formulário de contato** — abre o cliente de e-mail do visitante já preenchido via `mailto:` (sem back-end)
- **Animações ao rolar a página** (AOS) e botão de voltar ao topo
- **Página 404 personalizada**, mantendo a identidade visual do site
- **Pronto para SEO** — meta description, tags Open Graph, JSON-LD `schema.org/Person`, `sitemap.xml` e `robots.txt`
- **Fundo escuro com grade animada**, estética inspirada em terminal com a fonte JetBrains Mono
- Acessibilidade: link "Skip to content", `aria-label`s nos ícones, foco gerenciado no modal de certificados, suporte a `prefers-reduced-motion`

## Tecnologias

- HTML5 / CSS3 (custom properties, Grid, Flexbox)
- JavaScript puro (sem framework, sem bundler)
- [AOS](https://michalsnik.github.io/aos/) para animações de scroll
- [Font Awesome](https://fontawesome.com/) para os ícones
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- Hospedado no [GitHub Pages](https://pages.github.com/)

## Estrutura do projeto

```
portfolio/
├── index.html                  # Página inicial (hero, sobre mim, skills, projetos, experiência, educação, contato)
├── educations.html             # Página de detalhes de educação (uma section por curso)
├── experiences.html            # Página de detalhes de experiência (uma section por empresa)
├── 404.html                    # Página de erro personalizada
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/
│   │   ├── variables.css       # Tokens de design (cores, fontes, bordas)
│   │   ├── commom.css          # Estilos base compartilhados (reset, nav, footer, grade de fundo)
│   │   ├── style.css           # Estilos da página inicial
│   │   ├── educations.css      # Estilos da página de educação
│   │   ├── experiences.css     # Estilos da página de experiência
│   │   └── 404.css             # Estilos da página de erro
│   ├── js/
│   │   └── script.js           # Menu mobile, i18n, carrosséis, modal de certificados, scroll suave, formulário
│   ├── translations/
│   │   ├── pt.json
│   │   └── en.json
│   ├── docs/
│   │   ├── Joao Guilherme Silva Domingos.pdf   # Currículo
│   │   └── Certificates/       # Certificados originais em PDF, por curso
│   └── images/                 # Fotos, logos, certificados (imagem), ícones de tecnologias
```

## Rodando localmente

Sem build e sem dependências, basta servir a pasta de forma estática:

```bash
git clone https://github.com/jgdomingos/portfolio.git
cd portfolio
python3 -m http.server 8000
# depois abra http://localhost:8000
```

(Abrir o `index.html` direto do sistema de arquivos também funciona, mas um servidor local evita problemas de CORS nas chamadas `fetch()` usadas para carregar os arquivos de tradução.)

## Deploy

O site é publicado via **GitHub Pages**, servindo diretamente da raiz da branch `master`. Qualquer push para a `master` entra no ar em [jgdomingos.github.io/portfolio](https://jgdomingos.github.io/portfolio/) em poucos minutos.

## Próximos passos

- [ ] Adicionar os certificados que faltam (UMC e Fluency Academy ainda estão com placeholder)
- [ ] Trocar o formulário de contato por um back-end de verdade (ex: Formspree ou Web3Forms), em vez de `mailto:`
- [ ] Adicionar mais projetos conforme forem concluídos
- [ ] Criar uma imagem própria para Open Graph (hoje o preview de compartilhamento usa a foto de perfil)

## Contato

- E-mail: [jgsdomingoss@gmail.com](mailto:jgsdomingoss@gmail.com)
- LinkedIn: [jgsdomingos](https://www.linkedin.com/in/jgsdomingos/)
- GitHub: [@jgdomingos](https://github.com/jgdomingos)

## Licença

Distribuído sob a licença MIT — veja [LICENSE](./LICENSE) para mais detalhes.