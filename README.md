# ⚕️ Projeto SAGE
Sistema de Acompanhamento e Gerenciamento de Equipamentos Hospitalares

## 🤝 Nossa Equipe
Somos um time apaixonado por tecnologia e inovação, trazendo expertise para transformar a gestão de equipamentos hospitalares. Nossa equipe é formada por quatro estudantes dedicados, cursando Análise e Desenvolvimento de Sistemas na renomada faculdade CESAR School, são eles:

- Diego Alves Xavier
- Hyngrid Souza e Silva
- Maria Gabriela Damásio Bezerra
- Pamela Teixeira Rodrigues

## 📝 Sobre o Projeto
O **Projeto SAGE** é uma solução inteligente para a **gestão de equipamentos clínicos** em ambientes hospitalares. Nosso objetivo é otimizar a manutenção e o monitoramento de equipamentos essenciais para o funcionamento da saúde, com uma interface intuitiva e poderosa.

**SAGE** não só facilita a criação e o fechamento de ordens de serviço, mas também oferece um painel visual interativo, alertas automáticos e relatórios detalhados. Isso ajuda gestores e equipes técnicas a tomarem decisões rápidas e assertivas. Com o **SAGE**, hospitais podem garantir que seus equipamentos estejam sempre operacionais, evitando falhas críticas e melhorando a eficiência no atendimento aos pacientes.

## 🔧 Funcionalidades Principais
**SAGE** oferece funcionalidades pensadas para garantir **eficiência, controle e segurança** no ambiente hospitalar:

- 🔐 **Autenticação Segura e Gestão de Acessos**: Login protegido com perfis de usuário (Gestor, Técnico, Administrador).
- 📊 **Dashboard Interativo**: Painel centralizado para monitoramento dos equipamentos e ordens de serviço, com indicadores visuais claros.
- 🛠️ **Gestão de Equipamentos**: Cadastro completo de equipamentos, com histórico de manutenções e condições em tempo real.
- 📋 **Gestão de Manutenções e O.S.**: Criação e fechamento de ordens de serviço de forma ágil e eficiente.

## 📋 Priorização do Backlog  
Utilizamos a metodologia MoSCoW para priorizar as funcionalidades de **SAGE**, garantindo que atendamos as necessidades mais urgentes desde o início do projeto:

### **Must Have**  
- 🔐 **Login e Perfis de Usuário**  
- 📊 **Dashboard com Status de O.S.**  
- 🛠️ **Cadastro e Consulta de Equipamentos**  
- 📋 **Abertura e Fechamento de O.S.**  
- ⏰ **Alertas de Manutenção Preventiva**  

### **Should Have**  
- 📄 **Controle de Contratos e Alertas de Vencimento**  
- 📦 **Gerenciamento de Estoque de Peças**  
- 📈 **Geração de Relatórios Personalizados**  

### **Could Have**  
- ⚠️ **Painel de Prioridades e Urgências**  
- ⏳ **Alertas de Atraso em O.S.**  

### **Won’t Have (por enquanto)**  
- 🌐 **Integração com Sistemas Externos de Gestão Hospitalar**  
- 🤖 **Inteligência Artificial para Previsão de Falhas**  

## 🧑‍💻 Histórias de Usuário

[Screencast](https://drive.google.com/file/d/1slR2k941rDWS85niRgqrt9ieG7XNEMER/view) • [Link do Site](https://projeto-sage-pearl.vercel.app/) • [Screencast do Site](https://drive.google.com/file/d/1nTCamR7R80cCrwoSBWqHsUmMBSnFT2WJ/view?usp=sharing)

<details>
<summary><strong>1. Autenticação e Definição de Perfil</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
Oi, PO! Para a história "Autenticação e Definição de Perfil", temos um requisito claro de login e senha. Para a recuperação de senha, qual fluxo você imagina? O usuário vai receber um link por e-mail para resetar a senha ou ele vai responder a perguntas de segurança?  
**Product Owner:**  
Boa pergunta! Acredito que a recuperação de senha deva ser via e-mail, com um link temporário para redefinir a senha. Em relação aos perfis, precisamos garantir que o sistema mostre opções de menu diferentes dependendo do perfil. No caso de "Gestor", por exemplo, ele deverá ter acesso a relatórios e dashboards, mas "Técnicos" só verão informações relevantes para manutenção.

**História do Usuário:**  
Como usuário do sistema, quero fazer login de forma segura e escolher meu perfil, para acessar funcionalidades específicas ao meu papel.

**Critérios de Aceitação:**
- O sistema deve permitir login e senha.
- Deve haver opção de recuperação de senha.
- O sistema adapta a interface conforme o perfil do usuário (Gestor, Técnico, Administrador).

**Time Stamp:** 00:52-01:06  
**Figma Time Stamp:** 02:48-03:38

**Implementação no protótipo:**  
![image](https://github.com/user-attachments/assets/97d60a62-5d38-4bce-9f1c-30e13ffabd94)

**Time Stamp Site:** 00:00-00:30

**Implementação no site:**  
![image](https://github.com/user-attachments/assets/bdb0cadc-7da3-4914-855a-87686af44a48)

</details>

---

<details>
<summary><strong>2. Visualização de Dashboard</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
PO, sobre o painel do gestor, o que você imagina quando fala sobre indicadores visuais de criticidade? Você tem algum modelo ou exemplo de visualização?  
**Product Owner:**  
Quero algo bem visual, tipo semáforo: verde, amarelo e vermelho para indicar o status dos equipamentos e das ordens de serviço. E, sobre filtros, podemos ter opções por período (diário, semanal, mensal) e também por tipo de manutenção, como preventiva ou corretiva.

**História do Usuário:**  
Como gestor hospitalar, quero ver um painel de controle com status dos equipamentos e ordens de serviço, para tomar decisões rápidas.

**Critérios de Aceitação:**
- Exibir status dos equipamentos e O.S. abertas.
- Incluir indicadores visuais de criticidade.
- Permitir filtros por período e tipo de manutenção.

**Time Stamp:** 01:06-01:15  
**Figma Time Stamp:** 03:38-04:16; 04:47-05:50; 06:18-06:48

**Implementação no protótipo:**  
![image](https://github.com/user-attachments/assets/0d4e5bf6-8137-47f0-94e6-a58c182367e3)
![image](https://github.com/user-attachments/assets/363e0d90-8e49-40a6-b8c6-050b4cd0203e)
![image](https://github.com/user-attachments/assets/8381bd9f-2dc8-4cbc-94f5-61d5b7d0f2db)

**Time Stamp Site:** 00:30-01:42; 02:20-01:42; 04:18-05:13

**Implementação no site:**  
![Captura de tela 2025-06-03 175530](https://github.com/user-attachments/assets/8de39b83-cc7a-4ba8-af22-6d1eaa394132)
![Captura de tela 2025-06-03 175605](https://github.com/user-attachments/assets/fbb1c4a8-8d7c-42fc-80ff-cec5edcffa5b)
![Captura de tela 2025-06-03 175638](https://github.com/user-attachments/assets/ae6f0eda-5b56-42aa-83e1-93bc0c6ec72d)

</details>

---

<details>
<summary><strong>3. Consulta de Equipamento</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
Para a consulta de equipamentos, a busca pode ser feita pelo nome, código ou categoria, mas em relação ao histórico de manutenção, você quer ver também o que foi feito nos últimos meses ou o histórico completo?  
**Product Owner:**  
O histórico precisa ser completo, incluindo todas as manutenções anteriores, para que o técnico possa identificar padrões de falha. E a exibição do status atual do equipamento deve ser visível no topo da tela para facilitar o acesso rápido.

**História do Usuário:**  
Como técnico de manutenção, quero consultar um equipamento pelo código ou nome, para ver seu histórico de manutenção.

**Critérios de Aceitação:**
- Permitir busca por nome, código ou categoria.
- Mostrar status atual do equipamento.
- Listar histórico completo de manutenções.

**Time Stamp:** 01:15-01:22  
**Time Stamp Site:** 03:10-03:24

**Implementação no site:**  
![image](https://github.com/user-attachments/assets/4fe66c1a-cf25-4fd0-9532-145c2abb5e39)

</details>

---

<details>
<summary><strong>4. Abertura de Ordem de Serviço (O.S.)</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
Para abrir uma O.S., o técnico deve selecionar o equipamento e relatar o problema. Quando falamos sobre a prioridade, você acha que a opção de "Baixa, Média e Alta" é suficiente ou devemos adicionar alguma outra prioridade, como "Urgente"?  
**Product Owner:**  
Acho que "Baixa, Média e Alta" são suficientes, mas precisamos ter flexibilidade para alterar a prioridade depois, caso a situação mude. Atribuir o técnico responsável também é crucial, por isso precisamos garantir que ele seja notificado assim que a O.S. for criada.

**História do Usuário:**  
Como técnico de manutenção, quero abrir uma O.S. rapidamente, para garantir que os equipamentos sejam reparados sem atrasos.

**Critérios de Aceitação:**
- Selecionar equipamento e relatar problema.
- Definir prioridade da O.S. (Baixa, Média, Alta).
- Atribuir técnico responsável.

**Time Stamp:**  01:23-01:30  
**Figma Time Stamp:** 04:16-04:46; 06:48-07:48  
**Implementação no protótipo:**  
![image](https://github.com/user-attachments/assets/bc4c5267-3046-4ce4-9c66-3bf91961e82a)
![image](https://github.com/user-attachments/assets/544e939c-1ba4-4dcd-ad8a-5984a27a3494)

**Time Stamp Site:**  00:51-01:15

**Implementação no site:**  
![image](https://github.com/user-attachments/assets/7fe4b4ad-3403-4b20-bc17-f3c814719dcb)
![image](https://github.com/user-attachments/assets/90b5f998-1aed-479e-93a2-4e9ad8e574b7)

</details>

---

<details>
<summary><strong>5. Fechamento de Ordem de Serviço com Relatório</strong></summary>
  
**Conversa com o P.O:**  
**Desenvolvedor:**  
Ao fechar uma O.S., você mencionou que o técnico pode adicionar descrição da manutenção. Devemos também permitir que o técnico adicione fotos do que foi feito ou da peça substituída?  
**Product Owner:**  
Sim, seria interessante adicionar fotos, especialmente para casos de peças danificadas ou problemas recorrentes. Isso ajudaria a documentar melhor e a tornar o histórico mais rico.

**História do Usuário:**  
Como técnico de manutenção, quero registrar detalhes da O.S. ao encerrá-la, para manter um histórico completo das intervenções.

**Critérios de Aceitação:**
- O técnico pode adicionar descrição da manutenção realizada.
- Registrar peças substituídas e tempo gasto.
- Gerar relatório automático da intervenção.

**Time Stamp:**  01:30-01:38  
**Figma Time Stamp:** 07:48-08:35

**Implementação no protótipo:**  
![image](https://github.com/user-attachments/assets/130016b9-d43e-438f-8dd9-d730f8a31b4e)

**Time Stamp Site:** 01:42-02:04

**Implementação no site:**  
![image](https://github.com/user-attachments/assets/a0296876-dc16-46b6-ae8a-eaa33cd01228)
![image](https://github.com/user-attachments/assets/fc0b3a2d-5a99-4d74-a494-9da0b29f2903)

</details>

---

<details>
<summary><strong>6. Controle de Contratos</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
Quando falamos sobre monitoramento de contratos, você imagina que o sistema deve enviar alertas para os contratos próximos do vencimento, mas com que antecedência você gostaria desses alertas? Uma semana? 30 dias?  
**Product Owner:**  
Idealmente, alertas com 30 dias de antecedência. Isso daria tempo suficiente para a equipe verificar a renovação. E sim, os documentos contratuais devem ser anexados ao contrato para fácil acesso.

**História do Usuário:**  
Como gestor hospitalar, quero monitorar contratos com fornecedores, para garantir conformidade e evitar problemas operacionais.

**Critérios de Aceitação:**
- Permitir cadastro e visualização dos contratos.
- Gerar alertas para contratos próximos ao vencimento.
- Anexar documentos contratuais.

**Time Stamp:**  01:38-01:46  
**Figma Time Stamp:** 02:47-03:10; 05:50-06:17; 5:13-5:58 (Screencast Site)

**Implementação no protótipo:**  
![image](https://github.com/user-attachments/assets/c66db552-bb0a-4b94-af8e-4729e3b53d7b)

**Time Stamp Site:** 03:32-04:05

**Implementação no site:**  
![image](https://github.com/user-attachments/assets/30abd462-add7-421e-98ca-5d2f27726108)
![image](https://github.com/user-attachments/assets/9dc7e546-973a-4b4a-ae57-1309557caae5)

</details>

---

<details>
<summary><strong>7. Alertas Automáticos de Manutenção</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
Em relação aos alertas de manutenção, você gostaria de configurar o tipo de notificação (e-mail, SMS, ou dentro do sistema)? E sobre a falha recorrente, seria interessante que o sistema enviasse uma notificação automaticamente quando detectar o mesmo erro mais de uma vez em um curto período?  
**Product Owner:**  
Sim, por favor! E-mails são uma boa forma de notificação, mas dentro do sistema também precisa haver uma área de alertas visíveis. E sim, sobre a falha recorrente, se um erro aparecer mais de 3 vezes no mês, o sistema deve enviar uma notificação automática.

**História do Usuário:**  
Como administrador da clínica, quero receber alertas sobre manutenções programadas, para garantir que os equipamentos estejam sempre operacionais.

**Critérios de Aceitação:**
- Alertas automáticos para manutenções preventivas.
- Notificações sobre falhas recorrentes.
- Opção de configurar preferências para receber alertas.

**Time Stamp:**  01:46-01:56  
**Time Stamp Site:** Alertas Automáticos de Manutenção: 02:44-02:47

**Implementação no site:**  
![image](https://github.com/user-attachments/assets/30bcbbdd-0f0a-4b1c-bbd6-5530381afe9d)

</details>

---

<details>
<summary><strong>8. Geração de Relatórios Personalizados</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
Na geração de relatórios, além de tempo médio de resposta e custo de manutenção, você gostaria de incluir mais algum indicador específico? Como, por exemplo, o custo total por equipamento ou por tipo de manutenção?  
**Product Owner:**  
Sim, incluir o custo total por equipamento seria ótimo, mas também precisamos considerar a possibilidade de gerar relatórios específicos para diferentes períodos. Como gestor, eu adoraria poder personalizar o período de análise e ver esses dados de forma mais granular.

**História do Usuário:**  
Como gestor hospitalar ou administrador, quero gerar relatórios sobre status dos equipamentos e O.S., para analisar métricas de desempenho.

**Critérios de Aceitação:**
- Permitir filtros personalizados para gerar relatórios.
- Mostrar tempo médio de resposta e custo de manutenção.
- Possibilidade de exportação em PDF e Excel.

**Time Stamp:**  01:56-02:04  
**Time Stamp Site:** 02:04-02:20

**Implementação no site:**  
![image](https://github.com/user-attachments/assets/08e4ce85-8f88-4bb4-8f2f-f8ab49ec3501)

</details>

---

<details>
<summary><strong>9. Gerenciamento de Estoque de Peças</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
Para o gerenciamento de estoque de peças, você gostaria de integrar o sistema com o fornecedor para que a reposição de peças seja feita automaticamente quando o estoque atingir um valor mínimo?  
**Product Owner:**  
Isso seria ótimo! Integrar com os fornecedores permitiria um fluxo mais ágil de reposição, mas se isso não for viável agora, pelo menos um alerta de estoque baixo seria necessário, para que a equipe tome ação manual.

**História do Usuário:**  
Como técnico de manutenção, quero ter controle sobre as peças disponíveis no estoque, para evitar atrasos na manutenção por falta de insumos.

**Critérios de Aceitação:**
- Permitir cadastro e controle de estoque de peças.
- Notificar sobre itens com estoque baixo.
- Registrar histórico de uso de peças em manutenções.

**Time Stamp:**   02:04-02:13

</details>

---

<details>
<summary><strong>10. Cadastro e Classificação de Equipamentos</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
No cadastro de novos equipamentos, você gostaria de incluir alguma informação adicional, como a data de aquisição ou o fabricante? E para a classificação dos equipamentos, deveríamos ter algum campo de "última manutenção"?  
**Product Owner:**  
Sim, a data de aquisição e o fabricante são essenciais. E a última manutenção também deve ser visível, pois ajuda na análise da condição do equipamento. A classificação por criticidade vai depender do impacto no hospital, então, é bom que isso seja algo que o gestor possa definir.

**História do Usuário:**  
Como administrador da clínica, quero cadastrar novos equipamentos no sistema, para controlar seu ciclo de vida e manutenções.

**Critérios de Aceitação:**
- Permitir cadastro de novos equipamentos com detalhes técnicos.
- Classificar equipamentos por tipo, localização e marca.
- Vincular equipamentos a contratos de manutenção.

**Time Stamp Site:** 03:24-03:32

**Implementação no site:**  
![image](https://github.com/user-attachments/assets/4c91e1f3-847a-402b-a699-545eb537cbf3)

</details>

---

<details>
<summary><strong>11. Alerta de Atraso em O.S.</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
Você mencionou um painel destacando as O.S. urgentes. Como o sistema deve lidar com mudanças de prioridade? Se, por exemplo, uma O.S. "Média" se tornar urgente, como devemos mostrar isso para os técnicos?  
**Product Owner:**  
A prioridade precisa ser editável em tempo real, e quando algo for alterado, a O.S. deve subir automaticamente para o topo do painel, com uma cor diferente para destacar a urgência.

**História do Usuário:**  
Como gestor hospitalar, quero visualizar um painel que prioriza as O.S. mais urgentes, para direcionar esforços rapidamente para as demandas críticas.

**Critérios de Aceitação:**
- Criar um painel destacando O.S. urgentes.
- Permitir reordenação de prioridades em tempo real.
- Integrar com alertas automáticos para notificação de emergências.

**Time Stamp:**   02:22-02:29  
**Time Stamp Site:** 01:27-01:42

**Implementação no site:**  
![image](https://github.com/user-attachments/assets/d663cd98-0cc3-45ba-93d4-b506d8e4c7bb)

</details>

---

<details>
<summary><strong>12. Histórico de Intervenções Técnicas</strong></summary>

**Conversa com o P.O:**  
**Desenvolvedor:**  
Quando falamos sobre o histórico de intervenções, você imagina que ele deve incluir apenas as manutenções ou também detalhes sobre as falhas encontradas durante a inspeção?  
**Product Owner:**  
O histórico deve incluir tanto as manutenções realizadas quanto as falhas encontradas. Seria bom também que, ao clicar em uma intervenção, o técnico possa ver informações detalhadas sobre o problema identificado.

**História do Usuário:**  
Como técnico de manutenção, quero acessar um histórico detalhado de todas as intervenções já realizadas em um equipamento, para analisar padrões e prever falhas futuras.

**Critérios de Aceitação:**
- Exibir histórico cronológico das intervenções técnicas.
- Permitir filtros por tipo de falha ou componente trocado.
- Gerar insights sobre padrões de falha recorrentes.

**Time Stamp:**   02:29-02:37

</details>

## 🎨 Prototipagem e Design  
Para uma visão mais imersiva do projeto, confira nossos protótipos e veja como **SAGE** vai revolucionar a gestão de equipamentos hospitalares:

- **Protótipos Lo-Fi** disponíveis no [Figma](https://www.figma.com/proto/fNpzjR1EqV8dfAkAnqauC4/SAGE?node-id=16-283&p=f&t=MnvjLIMUqd6eujuW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1)
- **Screencast** para explicar e visualizar o protótipo em desenvolvimento [Link do Screencast](https://drive.google.com/file/d/1slR2k941rDWS85niRgqrt9ieG7XNEMER/view), [Screencast do Site](https://drive.google.com/file/d/1nTCamR7R80cCrwoSBWqHsUmMBSnFT2WJ/view?usp=sharing)
- **Implementação** para visualizar as funcionalidades implementadas. Instruções de acesso: Clique no link, realize o login e explore o sistema! [Link do Site](https://projeto-sage-pearl.vercel.app/fechar-os/ma4etlgiukpoi)
  # Instruções para Acessar o Site

1. **Abra seu Navegador de Internet:**
   - Se você ainda não tiver um navegador aberto, abra um dos seguintes navegadores no seu computador ou dispositivo:
     - **Google Chrome**
     - **Mozilla Firefox**
     - **Microsoft Edge**
     - **Safari** (para Mac)

2. **Digite o Endereço do Site:**
   - Na barra de endereços do navegador (onde normalmente aparece "www" ou o link do site), digite o **URL** completo do site. Exemplo:
     - `https://projeto-sage-pearl.vercel.app`
   
3. **Acesse o Site:**
   - Após digitar o URL, pressione a tecla **Enter** ou **Return** no teclado.
   - O navegador irá carregá-lo automaticamente para a página inicial do site.

4. **Login:**
   - Você será redirecionado para uma página de autenticação.
   - Insira **seu e-mail** e **senha** cadastrados no site.

5. **Navegue pelo Site:**
   - Utilize o menu de navegação (geralmente no topo ou na lateral da página) para acessar diferentes áreas do site.

6. **Verifique a Conexão:**
   - Se a página não carregar, verifique sua conexão com a internet.
   - Se o site estiver fora do ar, você pode tentar acessá-lo mais tarde.

---

## 💡 Dicas Adicionais

- **Verifique o URL**: Certifique-se de que o endereço digitado está correto para evitar erros ao acessar o site.


## 📸 Capturas de Tela e Backlog (Trello)  
Acompanhe nosso progresso diretamente nas ferramentas de gestão de projetos:

- **Quadro e Backlog (Trello)**  
  - **Sprint 1**:
  ![sprint 1](https://github.com/user-attachments/assets/2a748d86-6a82-4d64-989b-53a576fe3ef8)
- **Sprints 2 e 3**:
  ![sprint 2](https://github.com/user-attachments/assets/1bc1c86d-0896-4bbe-a784-ce63bc10679a)
  - **Sprints 4, 5 e 6**:
  ![image](https://github.com/user-attachments/assets/e832b5d5-150e-44c4-af57-f48125c1905c)



## 📚 Sketches e Storyboards  
Acompanhe o desenvolvimento do projeto com os sketches e storyboards das funcionalidades em andamento: [Figma](https://www.figma.com/proto/fNpzjR1EqV8dfAkAnqauC4/SAGE?node-id=16-283&p=f&t=MnvjLIMUqd6eujuW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1), [Link do Screencast](https://drive.google.com/file/d/1slR2k941rDWS85niRgqrt9ieG7XNEMER/view), [Link do Site](https://projeto-sage-pearl.vercel.app/fechar-os/ma4etlgiukpoi), [Screencast do Site](https://drive.google.com/file/d/1nTCamR7R80cCrwoSBWqHsUmMBSnFT2WJ/view?usp=sharing)
  
- **História 1**: Autenticação e Definição de Perfil (MINUTAGEM: 00:52-01:06; 02:48-03:38)  
- **História 2**: Visualização de Dashboard (MINUTAGEM: 01:06-01:15; 03:38-04:16; 04:47-05:50; 06:18-06:48)  
- **História 4**: Abertura de Ordem de Serviço (MINUTAGEM: 01:23-01:30; 04:16-04:46; 06:48-07:48)    
- **História 5**: Fechamento de Ordem de Serviço com Relatório (MINUTAGEM: 01:30-01:38; 07:48-08:35)
- **História 6**: Controle de Contratos (MINUTAGEM: 01:38-01:46; 05:50-06:17)

  **Figma**

- **HU 1 (Autenticação e Definição de Perfil)**: 02:48-03:38  
- **HU 2 (Visualização de Dashboard)**: 03:38-04:16; 04:47-05:50; 06:18-06:48  
- **HU 4 (Abertura de Ordem de Serviço (O.S.))**: 04:16-04:46; 06:48-07:48  
- **HU 5 (Fechamento de Ordem de Serviço com Relatório)**: 07:48-08:35  
- **HU 6 (Controle de Contratos)**: 05:50-06:17

**Screencast Site Final**

- **Login (Autenticação e Definição de Perfil):** 00:00-00:30
- **Dashboard Eng Clínico (Visualização de Dashboard):** 00:30-01:42
- **Abrir O.S (Abertura de Ordem de Serviço (O.S.)):** 00:51-01:15
- **Alerta de Atraso em O.S.:** 01:27-01:42
- **Fechar O.S (Fechamento de Ordem de Serviço com Relatório):** 01:42-02:04
- **Geração de Relatórios Personalizados:** 02:04-02:20
- **Dashboard Aux Administrativo (Visualização de Dashboard):** 02:20-01:42
- **Alerta de Vencimento de Contratos:** 02:40-02:44
- **Alertas Automáticos de Manutenção:** 02:44-02:47
- **Cadastro de Contratos:** 02:47-03:10
- **Consulta de Equipamentos (Inventário):** 03:10-03:24
- **Cadastro e Classificação de Equipamentos:** 03:24-03:32
- **Controle de Contratos:** 03:32-04:05
- **Serviços Agendados:** 04:05-04:18
- **Dashboard Agente Externo (Visualização de Dashboard):** 04:18-05:13
- **FIGMA - HU 6 (Tela Inventário):** 05:13-05:58


## 🎥 Screencasts 
Assista ao vídeo do protótipo para ver como o sistema funciona e entender como ele pode beneficiar a gestão de equipamentos hospitalares:

- [Screencast do Protótipo](https://drive.google.com/file/d/1slR2k941rDWS85niRgqrt9ieG7XNEMER/view)
- [Screencast do Site](https://drive.google.com/file/d/1nTCamR7R80cCrwoSBWqHsUmMBSnFT2WJ/view?usp=sharing)

### 1. TIME STAMP

- **INTRODUÇÃO**: 00:00-00:51  
- **HU 1 (Autenticação e Definição de Perfil)**: 00:52-01:06  
- **HU 2 (Visualização de Dashboard)**: 01:06-01:15  
- **HU 3 (Consulta de Equipamento)**: 01:15-01:22  
- **HU 4 (Abertura de Ordem de Serviço (O.S.))**: 01:23-01:30  
- **HU 5 (Fechamento de Ordem de Serviço com Relatório)**: 01:30-01:38  
- **HU 6 (Controle de Contratos)**: 01:38-01:46  
- **HU 7 (Alertas Automáticos de Manutenção)**: 01:46-01:56  
- **HU 8 (Geração de Relatórios Personalizados)**: 01:56-02:04  
- **HU 9 (Gerenciamento de Estoque de Peças)**: 02:04-02:13  
- **HU 10 (Cadastro e Classificação de Equipamentos)**: 02:13-02:22  
- **HU 11 (Painel de Prioridades e Urgências)**: 02:22-02:29  
- **HU 12 (Histórico de Intervenções Técnicas)**: 02:29-02:37  
- **Encerramento HU’s**: 02:38-02:48  

**Figma**

- **HU 1 (Autenticação e Definição de Perfil)**: 02:48-03:38  
- **HU 2 (Visualização de Dashboard)**: 03:38-04:16; 04:47-05:50; 06:18-06:48  
- **HU 4 (Abertura de Ordem de Serviço (O.S.))**: 04:16-04:46; 06:48-07:48  
- **HU 5 (Fechamento de Ordem de Serviço com Relatório)**: 07:48-08:35  
- **HU 6 (Controle de Contratos)**: 05:50-06:17

**Screencast Site Final**

- **Login (Autenticação e Definição de Perfil):** 00:00-00:30
- **Dashboard Eng Clínico (Visualização de Dashboard):** 00:30-01:42
- **Abrir O.S (Abertura de Ordem de Serviço (O.S.)):** 00:51-01:15
- **Alerta de Atraso em O.S.:** 01:27-01:42
- **Fechar O.S (Fechamento de Ordem de Serviço com Relatório):** 01:42-02:04
- **Geração de Relatórios Personalizados:** 02:04-02:20
- **Dashboard Aux Administrativo (Visualização de Dashboard):** 02:20-01:42
- **Alerta de Vencimento de Contratos:** 02:40-02:44
- **Alertas Automáticos de Manutenção:** 02:44-02:47
- **Cadastro de Contratos:** 02:47-03:10
- **Consulta de Equipamentos (Inventário):** 03:10-03:24
- **Cadastro e Classificação de Equipamentos:** 03:24-03:32
- **Controle de Contratos:** 03:32-04:05
- **Serviços Agendados:** 04:05-04:18
- **Dashboard Agente Externo (Visualização de Dashboard):** 04:18-05:13
- **FIGMA - HU 6 (Tela Inventário):** 05:13-05:58

## Diagrama de Atividades

Acesse o nosso diagrama de atividade do Projeto SAGE através deste [link](https://www.canva.com/design/DAGl3NLtZCU/LMaEQjuhNSR8kIqoEzb_eQ/edit).

![image](https://github.com/user-attachments/assets/3d72fe5d-e5f4-4e7b-b939-8d0d95f5f594)
![image](https://github.com/user-attachments/assets/70da10b8-d124-4968-8569-c7d345167118)
![image](https://github.com/user-attachments/assets/6d402aff-1602-43cb-95f6-3e87a7a4e65c)



## 📋 Relatório de Programação em Pares

### ✅ Funcionalidades Implementadas

- **Autenticação com login (e-mail/senha)**
- **Visualização de Dashboard** (engenheiro clínico, auxiliar administrativo e agente externo)
- **Abertura de Ordem de Serviço (O.S.)**
- **Fechamento de O.S.**
- **Cadastro e Controle de Contratos**
- **Alertas de Vencimento de Contratos**
- **Alertas de Atraso em O.S.**
- **Cadastro e Classificação de Equipamentos**
- **Inventário de Equipamentos**
- **Melhorias de UI/UX**

---

### 🎯 Objetivo da Programação em Pares

A **Programação em Pares** (ou *Pair Programming*) é uma técnica de desenvolvimento ágil em que duas pessoas trabalham juntas na mesma tarefa, promovendo:

- Colaboração contínua
- Revisão imediata do código
- Melhoria na qualidade técnica e organizacional

No projeto desenvolvido com **React**, essa abordagem foi utilizada para:

- Aplicar boas práticas como separação de responsabilidades e componentes reutilizáveis
- Reduzir bugs e inconsistências de fluxo
- Garantir decisões técnicas mais sólidas e embasadas

---

### ⚙️ Aplicação da Programação em Pares

| **Funcionalidade**                     | **Foco da Programação em Pares**                                                                                                                              |
|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Login com e-mail/senha**             | Definição de rotas com `React Router`, validação de formulários, e revisão de UX para autenticação segura.                                                    |
| **Dashboard do Engenheiro**            | Uso de componentes reutilizáveis, filtros dinâmicos e cards informativos. O navegador sugeriu melhorias na organização visual.                               |
| **Abertura de O.S.**                   | Formulários com estados controlados, clareza no fluxo e regras de preenchimento. Sugestões de usabilidade aplicadas em tempo real.                           |
| **Fechamento de O.S.**                 | Campos múltiplos (peças, tempo, descrição), validação e melhorias visuais para facilitar o preenchimento.                                                     |
| **Cadastro de Contratos**              | Integração com backend e validações. Navegador contribuiu com lógica de consistência e clareza no preenchimento.                                              |
| **Alertas de Vencimento de Contratos** | Notificações baseadas em datas e regras de negócio. O navegador acompanhou testes e ajustou mensagens para melhor compreensão.                               |
| **Alertas de Atraso em O.S.**          | Regras para detectar ordens fora do prazo, exibindo alertas visuais. Testes conduzidos em conjunto para evitar falsos positivos.                            |
| **Cadastro e Classificação de Equipamentos** | Estrutura de categorias, atributos técnicos e filtros. A arquitetura foi definida e validada em dupla.                                                  |
| **Inventário de Equipamentos**         | Visualização consolidada com filtros por tipo/status. Discussões técnicas sobre hierarquia de dados e UX aplicadas no momento do desenvolvimento.            |
| **Melhorias de UI/UX**                 | Padrões visuais, responsividade e feedbacks foram revisados em tempo real durante sessões de pareamento.                                                    |

---

### ✅ Benefícios Observados

- **Código mais limpo e seguro**: validações e revisões contínuas reduziram bugs.
- **Aprendizado técnico mútuo**: ambas as partes evoluíram em React, hooks, gerenciamento de estado e boas práticas de design.
- **Menos retrabalho**: decisões e ajustes foram feitos em tempo real, reduzindo erros de interpretação de requisitos.
- **Foco no backlog**: o pareamento ajudou a manter a entrega alinhada com o que era mais importante para o cliente.

---

### 🚧 Desafios Enfrentados

- **Sincronização de agendas**: ajustes foram necessários para garantir tempo conjunto de qualidade.
- **Fadiga mental**: sessões prolongadas exigiram pausas e planejamento para manter a produtividade.
- **Consenso técnico**: algumas decisões exigiram debates para alinhar expectativas e escolhas arquiteturais.

---

### 📈 Considerações Finais

A prática da **programação em pares** foi essencial para a entrega eficiente, segura e alinhada aos objetivos do projeto. A técnica garantiu:

- Maior colaboração
- Redução de erros
- Melhor entendimento do domínio do cliente

Com a expansão do escopo para **contratos, alertas e controle de equipamentos**, o pareamento continuou sendo fundamental para manter qualidade, desempenho e usabilidade em todas as entregas.


![image](https://github.com/user-attachments/assets/c8aba428-507a-42d6-bff1-dc2b8aef72ad)
![image](https://github.com/user-attachments/assets/6990909c-8381-4490-8442-0f588cf80e02)

## Bug Tracker

**1. Erro na Rota de Abrir OS:**
![erro404](https://github.com/user-attachments/assets/3d8be60a-eb0f-4667-afec-cb6b375caf0c)

- Descrição: Ao acessar a URL https://projeto-sage-pearl.vercel.app/abrir-os resultou em erro 404, ou seja, é uma rota inexistente dentro do projeto.
- Causa: Descobrimos que, em ambientes como o Vercel, quando o usuário atualiza a página manualmente ou acessa diretamente uma rota específica, o servidor tenta buscar um arquivo físico correspondente à URL, o servidor responde com 404.
- Solução: Adicionamos um arquivo vercel.json na raiz do projeto:
  <pre> ```json { "rewrites": [ { "source": "/(.*)", "destination": "/" } ] } ``` </pre>
  Com isso, todas as requisições desconhecidas são redirecionadas para o index.html, permitindo que o React Router tome o controle e renderize corretamente a rota solicitada

**2. Caminho Mal Definido na Rota**
![erro-rota](https://github.com/user-attachments/assets/93bb54e1-f183-4904-a95b-ea2ef22099db)

- Descrição: Durante o processo de desenvolvimento, o terminal exibia uma mensagem de erro indicando falha ao compilar o projeto. O erro estava relacionado à tentativa de acessar uma rota não definida.
- Causa: Identificamos que o erro estava sendo causado por uma importação malformada em um dos arquivos .js. O caminho informado não havia sido definido no arquivo de rotas. 
- Solução: Foi feita uma revisão nas declarações de import e o caminho do arquivo foi corrigido para refletir a nova estrutura de diretórios. Após o ajuste, o projeto compilou normalmente sem erros.

**3. Problema com Assets Estáticos Não Carregando**
- Descrição: Imagens e arquivos estáticos armazenados na pasta public não estavam sendo exibidos corretamente após o build em produção.
- Causa: As referências aos assets usavam caminhos relativos, como ./img/logo.png, o que funcionava em desenvolvimento mas falhava no build do Vite, pois as URLs eram resolvidas de modo diferente.
- Solução: Substituímos os caminhos relativos por absolutos baseados na pasta /public, como /logo.png, e revisamos a documentação do Vite sobre assets estáticos para garantir compatibilidade.

**4. Inclusão Incorreta do CSS com Import Absoluto**
- Descrição: O site não carregava os estilos personalizados após o build, aparecendo sem formatação, embora o CSS estivesse correto em ambiente local.
- Causa: O arquivo CSS foi importado utilizando o caminho absoluto do sistema (C:/projeto/src/styles.css), o que só funciona localmente. Em produção, resultava em erro de importação.
- Solução: Corrigimos a importação para ser relativa ao projeto: import './styles.css';, garantindo que o Vite resolvesse corretamente o caminho nos builds para produção e desenvolvimento.

**5. Formulários Não Resetam Após Envio**
- Descrição: Após envio de dados em um formulário, os campos permaneciam preenchidos, levando o usuário a acreditar que não havia enviado corretamente.
- Causa: Esquecemos de resetar o estado dos campos controlados no método de submit.
- Solução: Ao final da função de envio, adicionamos comandos para setar os estados dos campos de volta ao valor inicial, limpando o formulário automaticamente após submissão.

---

**Transforme a gestão de manutenção hospitalar com o SAGE** — mais controle, mais eficiência, mais segurança para você e sua equipe. Se você está interessado em saber mais ou contribuir para o desenvolvimento deste projeto inovador, não hesite em entrar em contato!

---
