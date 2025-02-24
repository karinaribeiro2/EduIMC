# 🎓 EduCalc: Faixa Etária & Média Escolar

## 📌 Descrição
**EduCalc** é uma aplicação web desenvolvida em **HTML, CSS e JavaScript** que permite:
- 📊 Identificar a **faixa etária** de uma pessoa com base na idade informada.
- 🏫 Calcular a **média ponderada** de um aluno com base em três notas e classificá-la segundo uma tabela de desempenho.

---

## 🎯 Funcionalidades
### 📍 1. Identificação da Faixa Etária
O usuário informa sua idade e recebe como resposta a categoria correspondente:
- 🧒 **0 a 14 anos** → Criança
- 🧑 **15 a 29 anos** → Jovem
- 🧔 **30 a 59 anos** → Adulto
- 👴 **60 anos ou mais** → Idoso

### 📍 2. Cálculo da Média Ponderada
O usuário insere três notas referentes a diferentes atividades acadêmicas:
- 🛠 **Atividade Prática** (peso 2)
- 📝 **Prova do Semestre** (peso 5)
- 📖 **Trabalho Teórico** (peso 3)

A média é calculada com a seguinte fórmula:
\[ \frac{(peso_1 \times nota_1) + (peso_2 \times nota_2) + (peso_3 \times nota_3)}{soma\_dos\_pesos} \]

A classificação da média é:
- 🟢 **9 a 10** → A
- 🔵 **8 a 9** → B
- 🟡 **7 a 8** → C
- 🟠 **6 a 7** → D
- 🔴 **5 a 6** → E
- ⚫ **0 a 5** → F

---

## 🛠 Tecnologias Utilizadas
- 🌐 **HTML** → Estrutura da interface
- 🎨 **CSS** → Estilização dos elementos
- 🚀 **JavaScript** → Lógica da aplicação

---

## 🚀 Como Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/EduCalc.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd EduCalc
   ```
3. Abra o arquivo **index.html** em um navegador.

---

## 📂 Estrutura do Projeto
```
EduCalc/
│-- index.html          # Interface principal
│-- faixa-etaria.js     # Script para cálculo da faixa etária
│-- media-ponderada.js  # Script para cálculo da média escolar
│-- style.css           # Estilos da aplicação
│-- README.md           # Documentação do projeto
```
---

## 📜 Licença
Este projeto foi desenvolvido para fins educacionais e pode ser utilizado livremente.

