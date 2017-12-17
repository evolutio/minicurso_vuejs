### Obs:
- data é uma função.
  - https://br.vuejs.org/v2/guide/components.html#Opcao-data-Deve-Ser-uma-Funcao
- meuComponente/minhaProperty vira &lt;meu-componente minha-property="..."&gt;
  - https://br.vuejs.org/v2/guide/components.html#camelCase-vs-kebab-case


### Diretrizes:

- Organizar sua aplicação como uma árvore de componentes.
  - https://br.vuejs.org/v2/guide/index.html#Composicao-com-Componentes
- Dados descem (props), **eventos sobem**
  - https://br.vuejs.org/v2/guide/components.html#Usando-v-on-com-Eventos-Personalizados

### Perguntas:

- E se der "colisão" no nome de componentes? (Registro global vs. local)
  - https://br.vuejs.org/v2/guide/components.html#Registrando-Globalmente
- Eventos sobem... como faço pra jogar eventos pra cima?
  - https://br.vuejs.org/v2/guide/components.html#Eventos-Personalizados
- Posso chamar um método diretamente num componente filho?
  - https://br.vuejs.org/v2/guide/components.html#Referencias-a-Componentes-Filhos
- Posso passar um "templateUrl" pro meu componente?
  - https://br.vuejs.org/2015/10/28/why-no-template-url/
  - https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d
- Componentes tem um "ciclo de vida"? Posso criar "listeners" de inicialização/destruição de componentes?
  - https://br.vuejs.org/v2/guide/instance.html#Ciclo-de-Vida-da-Instancia
- Posso passar conteúdo html pra dentro de um componente?
  - https://br.vuejs.org/v2/guide/components.html#Distribuicao-de-Conteudo-com-Slots
- Posso fazer binding **bidirecional** de propriedades entre componentes?
  - https://br.vuejs.org/v2/guide/components.html#Componentes-Suportando-v-model
- Posso fazer um componente Recursivo? (tipo uma TreeView)
  - https://br.vuejs.org/v2/guide/components.html#Componentes-Recursivos
  - https://br.vuejs.org/v2/guide/components.html#Referencias-Circulares-Entre-Componentes
