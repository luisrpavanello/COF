# Índice de Aulas do Curso Online de Filosofia (COF)  

## Visão Geral  

Este projeto consiste em uma página web interativa que serve como índice completo para as aulas do Curso Online de Filosofia (COF) ministrado por Olavo de Carvalho. A ferramenta permite navegação intuitiva pelas aulas e acesso rápido aos materiais de referência utilizados em cada sessão.  

**🔗 Acesse o projeto em:** [https://luisrpavanello.github.io/COF/index.html](https://luisrpavanello.github.io/COF/index.html)  

## ✨ Funcionalidades Principais  

### Navegação Inteligente  
- **Tabela de Aulas Organizada**: Visualize todas as aulas em formato tabular com:  
  - Número da aula  
  - Data de realização  
  - Título provisório  
  - Duração  
  - Acesso rápido aos materiais  

### Sistema de Referência Bibliográfica  
- **Modal Interativo**:  
  - Acesso instantâneo à lista completa de livros mencionados  
  - Detalhes por obra:  
    - Título completo  
    - Autor(es)  
    - Timestamp exato da menção  
    - Citação contextual relevante  

### Infraestrutura  
- **Arquitetura Dinâmica**:  
  - Dados carregados via `data.json` para fácil atualização  
  - Design responsivo que se adapta a qualquer dispositivo  
  - Código modular para manutenção simplificada  

## 🛠️ Estrutura Técnica  

```
COF-Indice/  
├── index.html          # Estrutura principal da página  
├── script.js           # Lógica de interação e carregamento dinâmico  
├── data.json           # Banco de dados de referências bibliográficas  
└── README.md           # Documentação do projeto  
```  

## 🚀 Como Usar  

1. **Acesso Online**  
   - Basta visitar [https://luisrpavanello.github.io/COF/index.html](https://luisrpavanello.github.io/COF/index.html) para usar a versão hospedada.  

2. **Execução Local**  
   - Clone o repositório ou faça o download dos arquivos.  
   - Abra `index.html` em qualquer navegador moderno.  

3. **Interação**  
   - Clique em **"Ver livros"** em qualquer aula para abrir o modal com as referências bibliográficas.  
   - Feche o modal clicando em **"Fechar"** ou fora da área de conteúdo.  

## 🎨 Roadmap de Melhorias (Contribuições Bem-Vindas!)  

### Prioridades de Desenvolvimento  
- [ ] Sistema de busca/filtro por:  
  - Título de aula  
  - Autor de referência  
  - Período temporal  
- [ ] Integração com APIs de livrarias para:  
  - Links de compra direta  
  - Disponibilidade em bibliotecas  
- [ ] Exportação de listas de leitura em formatos variados (PDF, BibTeX).  

### Como Contribuir  
1. Faça um fork do projeto.  
2. Crie sua branch (`git checkout -b feature/nova-funcionalidade`).  
3. Commit suas mudanças (`git commit -m 'Adiciona recurso X'`).  
4. Push para a branch (`git push origin feature/nova-funcionalidade`).  
5. Abra um Pull Request.  

## 📌 Notas de Versão  

**v1.0.0** (Atual)  
- Lançamento inicial com funcionalidades básicas.  
- Suporte para múltiplas aulas.  
- Interface otimizada para desktop e mobile.  

**Próximas Atualizações**  
- Dark mode automático.  
- Marcadores de progresso de leitura.  
- Integração com sistemas de anotações.  

## 📧 Contato  

Para dúvidas, sugestões ou contribuições, entre em contato:  
✉️ **Luis R. Pavanello** – [luisrpavanello@gmail.com](mailto:luisrpavanello@gmail.com)  

---

*Projeto desenvolvido e mantido por Luis Pavanello – © 2023*