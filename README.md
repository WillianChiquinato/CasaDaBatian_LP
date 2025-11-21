# 🍱 Casa Tabatiam - Landing Page

Landing page moderna e elegante para o restaurante japonês Casa Tabatiam, localizado no Mercado Público.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite&logoColor=white)

## ✨ Características

- **7 Seções Completas**: Header, Hero, Cardápio com Vídeo, Galeria de Pratos, Instagram Feed, Localização e Footer
- **Design Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- **Vídeos em Background**: Seções Hero e Cardápio com vídeos de fundo cinematográficos
- **Carrossel Instagram**: Feed de posts do Instagram com navegação suave
- **Mapa Integrado**: Google Maps mostrando a localização no Mercado Público
- **Paleta de Cores**: Preto, Branco e Vermelho (#dc2626) para uma identidade visual marcante
- **Animações Suaves**: Transições e efeitos hover em todos os elementos interativos

## 🎨 Paleta de Cores

- **Vermelho Principal**: `#dc2626` - Cor principal de destaque
- **Preto**: `#000000` / `#0a0a0a` - Backgrounds principais
- **Branco**: `#ffffff` - Textos e elementos de destaque
- **Cinza**: `#1a1a1a` / `#333333` - Backgrounds secundários

## 📦 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.vue          # Menu de navegação fixo
│   ├── Hero.vue            # Seção principal com vídeo e logo
│   ├── MenuVideo.vue       # Cardápio com vídeo de fundo
│   ├── DishGallery.vue     # Galeria de pratos com descrições
│   ├── Instagram.vue       # Carrossel de posts do Instagram
│   ├── Location.vue        # Mapa e informações de contato
│   └── Footer.vue          # Rodapé com horários e links
├── App.vue                 # Componente principal
├── main.ts                 # Entry point
└── style.css               # Estilos globais

public/
├── images/                 # Imagens dos pratos e Instagram
└── videos/                 # Vídeos de background
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd RestauranteJapones
```

2. Instale as dependências:
```bash
npm install
```

3. **Importante**: Adicione as imagens e vídeos nas pastas corretas:
   - Consulte o arquivo `ASSETS-README.md` para instruções detalhadas
   - Coloque imagens em `public/images/`
   - Coloque vídeos em `public/videos/`

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

5. Abra o navegador em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

### Preview da Build

```bash
npm run preview
```

## 📋 Assets Necessários

### Vídeos (2)
- `hero-bg.mp4` - Vídeo de fundo da página inicial
- `menu-bg.mp4` - Vídeo de fundo da seção cardápio

### Imagens (15)
- `logo.png` - Logo do restaurante
- 8 fotos de pratos (sashimi, hot-roll, combinado, temaki, yakisoba, uramaki, nigiri, gunkan)
- 6 posts do Instagram (formato quadrado)

**Veja o arquivo `ASSETS-README.md` para especificações detalhadas!**

## 🎯 Seções da Landing Page

### 1. **Header**
Menu de navegação fixo com links para todas as seções

### 2. **Hero (Home)**
Vídeo em background com logo centralizado e call-to-action

### 3. **Cardápio com Vídeo**
Apresentação das categorias do cardápio com vídeo de fundo

### 4. **Galeria de Pratos**
Grid de 8 pratos especiais com fotos, descrições e preços

### 5. **Instagram Feed**
Carrossel com 6 posts recentes do Instagram com navegação

### 6. **Localização**
Google Maps integrado + informações de contato e horários

### 7. **Footer**
Horários de funcionamento, links rápidos, redes sociais e informações de contato

## 🛠️ Tecnologias Utilizadas

- **Vue 3** - Framework JavaScript progressivo
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Build tool rápida e moderna
- **CSS3** - Estilização com animações e efeitos

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

## 🎨 Referências de Design

O projeto foi inspirado nos seguintes sites:
- **Sushi Hiroshi**: Estrutura e Hero section
- **AHY Prime Sushi**: Carrossel Instagram e Maps
- **Yuku Sushi**: Layout Instagram feed

## 📄 Licença

Este projeto é privado e proprietário da Casa Tabatiam.

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ para a Casa Tabatiam

---

**Status**: ✅ Pronto para produção (adicione os assets)

