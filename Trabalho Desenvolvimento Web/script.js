/* ---Genéricos--- *//* ------------------------------------------------------------------------------------------------------*/
// Redirecionar Usuário
function redirectUser(redirectPage){
    window.location.href = redirectPage;
}
// Estilização do Hover
function lightUp(elemento){
    elemento.style.backgroundColor = 'blue';
    elemento.style.color = 'yellow';
    elemento.style.cursor = 'pointer';
    elemento.style.transition= 'background-color 0.5s ease';
}
// Desistilização do Out
function backToNormal(elemento){
    elemento.style.backgroundColor = 'aliceblue';
    elemento.style.color = 'black';
}

/* ~~Disparador de Som~~ */
function soundEffect(audioFile){
    const audio = new Audio(audioFile);
    audio.volume = 0.05;
    if (audioFile == 'touhouDeath.mp3') {
        audio.volume = 0.005
    }
    audio.play();
}

/* ~~Disparador de Som~~ */

/* ---Genéricos--- *//* ------------------------------------------------------------------------------------------------------*/
/* ---Parte da Aba Mecânicos--- *//* -----------------------------------------------------------------------------------------*/
// Apagar Tabela de Seleção
function closeTable(){
    const tabela = document.getElementById("mechanic-table");
    const mainPage = document.getElementById('mainpage-button');
    if (tabela) {
      tabela.remove();
    } else {
      alert("A tabela não existe.");
    }
    if (mainPage) {
      mainPage.remove();
    } else {
      alert("O botão não existe.");
    }
}

/* Abrir Tabela Franklin */
function franklinClinton(){
    closeTable();
    const mainFrame = document.getElementById('main');

    const header = document.createElement('header');
    header.id = 'mech-header';
    header.textContent = 'Franklin Clinton';

    const blockquote = document.createElement('blockquote');
    blockquote.id = 'mech-desc';
    blockquote.innerHTML = `
        "E aí, mano! Bem-vindo à Premium Deluxe Motorsport! Eu sou o mecânico de plantão aqui, o Franklin. Se você precisa 
        tunar seu carro, fazer algum reparo ou apenas abastecer, me ligue e eu vou cuidar disso. Vamo agitar a bagaça!"
        <br><cite id="franklin-cite">- Franklin Clinton</cite>
    `; //OBS: Uso do Acento Grave para Strings Multilineares

    const tableCalendar = document.createElement('table');
    tableCalendar.id = 'tableCalendar'
    const CalendarHTML = `
        <thead>
            <tr>
                <th class='thCalendar'><button id="prevMonth" onclick="prevMonth()">&lt;</button></th>
                <th class='thCalendar' colspan="5" id="currentMonth"></th>
                <th class='thCalendar'><button id="nextMonth" onclick="nextMonth()">&gt;</button></th>
            </tr>
            <tr>
                <th class='thCalendar'>Domingo</th>
                <th class='thCalendar'>Segunda</th>
                <th class='thCalendar'>Terça</th>
                <th class='thCalendar'>Quarta</th>
                <th class='thCalendar'>Quinta</th>
                <th class='thCalendar'>Sexta</th>
                <th class='thCalendar'>Sábado</th>
            </tr>
        </thead>
        <tbody id="daysBody"></tbody>
    `; //OBS: Uso do Acento Grave para Strings Multilineares
    tableCalendar.innerHTML = CalendarHTML;

    const p = document.createElement('p');
    p.id = 'mech-phone';
    p.textContent = 'Contato: (328) 555-0156';

    mainFrame.appendChild(header);
    mainFrame.appendChild(blockquote);
    mainFrame.appendChild(tableCalendar);
    mainFrame.appendChild(p);
    updateCalendar();

    // Botões de Volta
    const mainpageButton = document.createElement('table');
    mainpageButton.className = 'menu-table';

    mainFrame.appendChild(mainpageButton)

    // Voltar
    const rowBack = document.createElement('tr');
    
    const cellBack = document.createElement('td');
    cellBack.className = 'menu-option'
    cellBack.onclick = () => redirectUser('mechanic.html') // Função Arrow
    cellBack.onmouseover = () => lightUp(cellBack) // Função Arrow
    cellBack.onmouseout = () => backToNormal(cellBack) // Função Arrow
    
    const linkBack = document.createElement('a');
    linkBack.href = 'mechanic.html';
    linkBack.className = 'option-text';
    linkBack.textContent = 'Voltar';
    
    cellBack.appendChild(linkBack);
    rowBack.appendChild(cellBack);

    //Index
    const rowHome = document.createElement('tr');
    
    const cellHome = document.createElement('td');
    cellHome.className = 'menu-option'
    cellHome.onclick = () => redirectUser('index.html') // Função Arrow
    cellHome.onmouseover = () => lightUp(cellHome) // Função Arrow
    cellHome.onmouseout = () => backToNormal(cellHome) // Função Arrow

    const linkHome = document.createElement('a');
    linkHome.href = 'index.html';
    linkHome.className = 'option-text';
    linkHome.textContent = 'Página Inicial';
    cellHome.appendChild(linkHome);
    rowHome.appendChild(cellHome);

    //Adição de fato
    mainpageButton.appendChild(rowBack);
    mainpageButton.appendChild(rowHome);
}
/* Abrir Tabela Franklin */

/* Abrir Tabela Lamar */
function lamarDavis(){
    closeTable();
    const mainFrame = document.getElementById('main');

    const header = document.createElement('header');
    header.id = 'mech-header';
    header.textContent = 'Lamar Davis';

    const blockquote = document.createElement('blockquote');
    blockquote.id = 'mech-desc';
    blockquote.innerHTML = `
        "YO, qual é, cara? Este é o seu parça, homie, Lamar Davis. Eu dirijo este Premium Deluxe, sendo o operador mais motherf#%kin' brabo. 
        Se você tiver algum problema nas suas rodas, apenas me avise, jaé? Bola pra frente!"
        <br><cite id="franklin-cite">- Lamar Davis</cite>
    `; //OBS: Uso do Acento Grave para Strings Multilineares

    const tableCalendar = document.createElement('table');
    tableCalendar.id = 'tableCalendar'
    const CalendarHTML = `
        <thead>
            <tr>
                <th class='thCalendar'><button id="prevMonth" onclick="prevMonth()">&lt;</button></th>
                <th class='thCalendar' colspan="5" id="currentMonth"></th>
                <th class='thCalendar'><button id="nextMonth" onclick="nextMonth()">&gt;</button></th>
            </tr>
            <tr>
                <th class='thCalendar'>Domingo</th>
                <th class='thCalendar'>Segunda</th>
                <th class='thCalendar'>Terça</th>
                <th class='thCalendar'>Quarta</th>
                <th class='thCalendar'>Quinta</th>
                <th class='thCalendar'>Sexta</th>
                <th class='thCalendar'>Sábado</th>
            </tr>
        </thead>
        <tbody id="daysBody"></tbody>
    `; //OBS: Uso do Acento Grave para Strings Multilineares
    tableCalendar.innerHTML = CalendarHTML;

    const p = document.createElement('p');
    p.id = 'mech-phone';
    p.textContent = 'Contato: (346) 555-0141';

    mainFrame.appendChild(header);
    mainFrame.appendChild(blockquote);
    mainFrame.appendChild(tableCalendar);
    mainFrame.appendChild(p);
    updateCalendar();

    // Botões de Volta
    const mainpageButton = document.createElement('table');
    mainpageButton.className = 'menu-table';

    mainFrame.appendChild(mainpageButton)

    // Voltar
    const rowBack = document.createElement('tr');
    
    const cellBack = document.createElement('td');
    cellBack.className = 'menu-option'
    cellBack.onclick = () => redirectUser('mechanic.html') // Função Arrow
    cellBack.onmouseover = () => lightUp(cellBack) // Função Arrow
    cellBack.onmouseout = () => backToNormal(cellBack) // Função Arrow
    
    const linkBack = document.createElement('a');
    linkBack.href = 'mechanic.html';
    linkBack.className = 'option-text';
    linkBack.textContent = 'Voltar';
    
    cellBack.appendChild(linkBack);
    rowBack.appendChild(cellBack);

    //Index
    const rowHome = document.createElement('tr');
    
    const cellHome = document.createElement('td');
    cellHome.className = 'menu-option'
    cellHome.onclick = () => redirectUser('index.html') // Função Arrow
    cellHome.onmouseover = () => lightUp(cellHome) // Função Arrow
    cellHome.onmouseout = () => backToNormal(cellHome) // Função Arrow

    const linkHome = document.createElement('a');
    linkHome.href = 'index.html';
    linkHome.className = 'option-text';
    linkHome.textContent = 'Página Inicial';
    cellHome.appendChild(linkHome);
    rowHome.appendChild(cellHome);

    //Adição de fato
    mainpageButton.appendChild(rowBack);
    mainpageButton.appendChild(rowHome);
}

/* Abrir Tabela Lamar */
/* ---Parte Aba Mecânicos--- *//* ------------------------------------------------------------------------------------------------------*/
/* ---Parte da Aba Premium--- *//* ------------------------------------------------------------------------------------------------------*/
/* ~~Abrir Cadastro Premium~~ */
function purchasePremium() {
    //Ligar Blur e Box Cadastro
    const premiumBox = document.getElementById('register-div');
    const backgroundBlur = document.getElementById('blur-bright');

    backgroundBlur.style.opacity = 0.85;
    backgroundBlur.style.zIndex = 4

    premiumBox.style.opacity = 1.0
    premiumBox.style.zIndex = 5.0

    //Ligar Form de Cadastro
    const registerDiv = document.getElementById('register-div');

    const closeButton = document.createElement('button');
    closeButton.onclick = function () { //Função Anônima para Fechar o Form de Cadastro
        const premiumBox = document.getElementById('register-div');
        const backgroundBlur = document.getElementById('blur-bright');
    
        backgroundBlur.style.opacity = '';
        backgroundBlur.style.zIndex = '';
    
        premiumBox.style.opacity = '';
        premiumBox.style.zIndex = '';
    
        const closeButton = document.getElementById('close-button');
        if (closeButton) {
            closeButton.onclick = null;
            closeButton.remove();
        }
    
        const warningDiv = document.getElementById('legal-war');
        if (warningDiv) {
            warningDiv.remove();
        }
    
        const legalDiv = document.getElementById('legal-prem');
        if (legalDiv) {
            legalDiv.remove();
        }
    
        const form = document.getElementById('register-form');
        if (form) {
            form.remove();
        }
    };
    closeButton.id = 'close-button';
    closeButton.textContent = 'X';

    const warningDiv = document.createElement('div');
    warningDiv.className = 'warning';
    warningDiv.id = 'legal-war';
    warningDiv.textContent = 'AVISO';

    const legalDiv = document.createElement('div');
    legalDiv.className = 'legal';
    legalDiv.id = 'legal-prem';
    legalDiv.innerHTML = `Ao entrar seus dados e apertar "Cadastrar", você estará concordando com os <a href="#">Termos Premium</a>. O número de celular registrado será automaticamente cobrado e você irá dispor dos benefícios premium depois de recebermos o pagamento (pode demorar até 2 dias). Para trocar o E-Mail ou senha de cadastro, favor entrar em contato com (611) 555-0120.`;

    const form = document.createElement('form');
    form.id = 'register-form';

    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'E-Mail: ';
    labelEmail.setAttribute('for', 'email');

    const inputEmail = document.createElement('input');
    inputEmail.type = 'text';
    inputEmail.id = 'reg-email';
    inputEmail.className = 'form-inp';
    inputEmail.name = 'email';
    inputEmail.required = true;

    const lineBreak1 = document.createElement('br');

    const labelPassword = document.createElement('label');
    labelPassword.textContent = 'Senha: ';
    labelPassword.setAttribute('for', 'senha');

    const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.id = 'reg-password';
    inputPassword.className = 'form-inp';
    inputPassword.name = 'senha';
    inputPassword.required = true;

    const lineBreak2 = document.createElement('br');

    const labelPhone = document.createElement('label');
    labelPhone.textContent = 'Celular: ';
    labelPhone.setAttribute('for', 'celular');

    const inputPhone = document.createElement('input');
    inputPhone.type = 'number';
    inputPhone.id = 'reg-phone';
    inputPhone.className = 'form-inp';
    inputPhone.name = 'celular';
    inputPhone.required = true;

    const lineBreak3 = document.createElement('br');

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.id = 'reg-sbmt';
    submitButton.textContent = 'Cadastrar';
    submitButton.onclick = registerAccount;

    registerDiv.appendChild(closeButton);
    registerDiv.appendChild(warningDiv);
    registerDiv.appendChild(legalDiv);
    registerDiv.appendChild(form);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(lineBreak1);
    form.appendChild(labelPassword);
    form.appendChild(inputPassword);
    form.appendChild(lineBreak2);
    form.appendChild(labelPhone);
    form.appendChild(inputPhone);
    form.appendChild(lineBreak3);
    form.appendChild(submitButton);

}

/* ~~Abrir Cadastro Premium~~ */
/* ~~Interações PHP~~ */
//Registrar
function registerAccount() {
    const form = document.getElementById('register-form');

    if (form instanceof HTMLFormElement) {
        const formData = new FormData(form);
        fetch('PHP-register.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Verifica a resposta do servidor e exibe um alerta
            if (data === 'Sucesso') {
                alert('Cadastro bem-sucedido! Número de Celular Cobrado. Para desativar a Cobrança Automática, agendar Cancelamento de Plano em nossa Loja no último dia de Benefício.');
            } else {
                alert('Erro no cadastro: ' + data);
            }
        });
    } else {
        console.error('O elemento com ID "register-form" não é um formulário HTML válido.');
    }
    return false; // Isso evita que o formulário seja enviado normalmente
}
//Registrar
//Verificar
function verifyAccount() {
    const form = document.getElementById('login-form');

    if (form instanceof HTMLFormElement) {
        const formData = new FormData(form);

        fetch('PHP-verify.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                window.location.href = 'index-premium.html';
            } else {
                alert('Credenciais incorretas');
            }
        });
    }
}


//Verificar
/* ~~Interações PHP~~ */
/* ---Parte da Aba Premium--- *//* ------------------------------------------------------------------------------------------------------*/
/* ---Parte da Aba Carros--- *//* ------------------------------------------------------------------------------------------------------*/
/* ~~PARTE DO PHP + BOTAR OS VALORES~~ */ 
const tipoCarroSelect = document.getElementById('tipoCarroSelect');

function loadCarros(page, tipo_carro) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `PHP-cars.php?tipo=${tipo_carro}&page=${page}`, true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            const carros = response.carros;
            const totalPage = response.totalPage;

            preencherDivsDeCarros(carros);
            updatePageNumbers(page, totalPage);
        } else {
            handleRequestError('Erro ao recuperar dados do servidor.');
        }
    };

    xhr.onerror = function () {
        handleRequestError('Erro ao realizar a solicitação.');
    };

    xhr.send();
}

function preencherDivsDeCarros(carros) {
    for (let i = 0; i < 6; i++) {
        const divCarro = document.querySelector(`#car${i + 1}`);
        if (i < carros.length) {
            const carro = carros[i];
            if (divCarro) {
                const header = divCarro.querySelector('header');
                const img = divCarro.querySelector('img.cars-img');
                const carPrice = divCarro.querySelector('div.car-price');
                const carBuy = divCarro.querySelector('button.buy-car');    

                if (header) {
                    header.textContent = carro.nome;
                }

                if (img) {
                    img.src = carro.imagem;
                }

                if (carPrice) {
                    carPrice.textContent = formatToUSD(carro.preco);
                }

                if (carBuy) {
                    carBuy.style.display = '';
                }
            }
        } else {
            if (divCarro) {
                const header = divCarro.querySelector('header');
                const img = divCarro.querySelector('img.cars-img');
                const carPrice = divCarro.querySelector('div.car-price');
                const carBuy = divCarro.querySelector('button.buy-car');

                if (header) {
                    header.textContent = 'Ainda por Vir...';
                }

                if (img) {
                    img.src = 'null.png'; //
                    img.id = 'null-img'
                }

                if (carPrice) {
                    carPrice.textContent = '';
                }

                if (carBuy) {
                    carBuy.style.display = 'none';
                }
            }
        }
    }
}

function carboxPrev() {
    const tipo_carro = document.getElementById('tipoCarroSelect').value;
    const currentPage = parseInt(carlistNow.textContent); // Pega a página atual a partir do elemento HTML

    if (currentPage > 1) {
        const previousPage = currentPage - 1;
        loadCarros(previousPage, tipo_carro);
    }
}

function carboxNext() {
    const tipo_carro = document.getElementById('tipoCarroSelect').value;
    const currentPage = parseInt(carlistNow.textContent); // Pega a página atual a partir do elemento HTML
    const totalPage = parseInt(carlistTotal.textContent); // Pega a quantidade total de páginas a partir do elemento HTML

    if (currentPage < totalPage) {
        const nextPage = currentPage + 1;
        loadCarros(nextPage, tipo_carro);
    } else {
        alert('Erro: já está na última página');
    }
}

function updatePageNumbers(currentPage, totalPage) {
    if (carlistNow) {
        carlistNow.textContent = currentPage;
    }
    if (carlistTotal) {
        carlistTotal.textContent = totalPage;
    }
}

loadCarros(1, 'Tudo');
/* ~~PARTE DO PHP + BOTAR OS VALORES~~ */ 
/* ~~PARTE DA CORREÇÃO MONETÁRIA~~ */
// Seleciona todos os elementos HTML com a classe .car-price
function formatToUSD(value) {
    return Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

/* ~~PARTE DA CORREÇÃO MONETÁRIA~~ */
/* ~~PARTE DO MENU DE COMPRA~~ */
/* Preliminar */
function selectColor(cell) {
    const colorClass = cell.classList[0]; // Obtém a primeira classe da célula
    const color = window.getComputedStyle(cell).backgroundColor;
    document.getElementById('selectedColor').style.color = color;
    document.getElementById('selectedColor').textContent = colorClass;
    document.getElementById('selectedColor').value = colorClass;
}

/* Preliminar */
/*Criando o Menu*/
function comprarCarro(element) {
    const carroBox = element.closest(".cars-box");
            
    // Extrai os dados do carro
    const nomeCarro = carroBox.querySelector(".car-name").textContent;
    const precoCarro = carroBox.querySelector(".car-price").textContent;
            
    // Criar o elemento buy-main com os dados do carro
    const buyMainDiv = document.createElement("div");
    buyMainDiv.className = "buy-main";
    buyMainDiv.innerHTML = `
        <div class="buy-main">
        <div id="buy-mainOne">
        <div class="color-table">
        <div class="Branco" onclick="selectColor(this)"></div>
        <div class="Preto" onclick="selectColor(this)"></div>
        <div class="Vermelho" onclick="selectColor(this)"></div>
        <div class="Azul" onclick="selectColor(this)"></div>
        <div class="Verde" onclick="selectColor(this)"></div>
        <div class="Amarelo" onclick="selectColor(this)"></div>
        <div class="Natural" onclick="selectColor(this)"></div>
        <div class="Rosa" onclick="selectColor(this)"></div>
        </div>
        <header>Comprar <span id="id-carro" value="${nomeCarro}">${nomeCarro}</span></header>
        <p id="buy-warn">Depois de enviado o número de celular, este será automaticamente cobrado. Não aceitamos reembolso por erro do cliente. Caso o cliente não busque seu veículo em até 30 dias na Concessionária Sede, a venda será estornada e a Personal Deluxe Motorsport manterá 75% da quantia paga.</p>
        <form id="buy-form">
        <label for="buyCelular">Celular:</label>
        <input id="buyCelular" name="buyCelular">
        <button type="submit" id="buy-button" onclick='submitPurchase()'>Enviar</button><button href='cars.html' id='cancelBuyButton'>Cancelar</button>
        </form>
        </div>
        <div>Você escolheu como cor:<div id="selectedColor">Nenhuma Ainda! Caso não Escolha, virá a Cor de Fábrica.</div></div>
        <div>Preço do Pedido: <span id="preco-pedido" value="${precoCarro}">${precoCarro}</span></div>
    `;
            
    // Adicionar o elemento buy-main à div com o id 'purchasingCar-div'
    const purchasingCarDiv = document.getElementById("purchasingCar-div");
    purchasingCarDiv.innerHTML = "";
    purchasingCarDiv.appendChild(buyMainDiv);
    //Ligar Blur e Box Cadastro
    const backgroundBlur = document.getElementById('blur-bright');
    
    backgroundBlur.style.opacity = '0.85';
    backgroundBlur.style.zIndex = '4'
    
    purchasingCarDiv.style.zIndex = '5';
    purchasingCarDiv.style.position = "fixed";
}
/*Criando o Menu*/
/* ~~SEGUNDA PARTE DO PHP: ENVIAR DADO DE COMPRA~~ *//*AKA - PHP 2: O inimigo agora é outro*/
function submitPurchase() {
    const nomeCarro = document.getElementById('id-carro').getAttribute('value');
    const corCarro = document.getElementById('selectedColor').textContent;
    const precoCarro = document.getElementById('preco-pedido').getAttribute('value');
    const buyCelular = document.getElementById('buyCelular').value;

    const purchaseData = {
        nomeCarro,
        corCarro,
        precoCarro,
        buyCelular
    };

    fetch('PHP-purchase.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchaseData),
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Erro ao enviar a compra: ' + response.statusText);
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Exibe a mensagem de resposta
        if (data.details) {
            alert(data.details); // Exibe detalhes adicionais, se houver
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
}

/* ~~SEGUNDA PARTE DO PHP: ENVIAR DADO DE COMPRA~~ */
/* ~~PARTE DO MENU DE COMPRA~~ */
/* ---Parte da Aba Carros--- *//* ------------------------------------------------------------------------------------------------------*/
/* ---Parte de Funcionamento Genérico--- *//* ------------------------------------------------------------------------------------------------------*/
/* ~~Calendário~~ */
let currentDate = new Date(); // Cria um Objeto para a Data Atual
let currentYear = currentDate.getFullYear(); // Cria o Ano Atual
let currentMonth = currentDate.getMonth(); // Cria o Mês Atual

function updateCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1); //Cria o Primeiro Dia do Mês Atual
    const lastDay = new Date(currentYear, currentMonth + 1, 0); // Cria o Último Dia do Mês Atual (0 = Dia Anterior ao Primeiro)
    const currentMonthElement = document.getElementById('currentMonth'); //Mexendo com HTML
    const daysBody = document.getElementById("daysBody"); //Igualmente mexendo com HTML

    if (currentMonthElement) { //Se houver um Mês
        currentMonthElement.textContent = firstDay.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }); //Escreve em Formato "{Mês Longo} de {Ano}"
    }
    daysBody.innerHTML = ''; //Limpa os Dias do Mês

    function createDayCell(day) { //Cria a Função das Células do Calendário, com base em "day"
        //HTML básico, com conteúdo = "day" da função
        const cell = document.createElement("td");
        cell.textContent = day;
        cell.id='tdCalendar'

        const currentDate = new Date(currentYear, currentMonth, day);//Cria a const "currentDate", diferente do outro, com base no "day" da função
        if (currentDate < new Date()) { //Define os dias passados, ocupados, e livres
            cell.className = "past";
        } else if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            cell.className = "busy";
        } else {
            cell.className = "free";
        }

        onHoverDisp(cell); //Usa a Função para mostrar o 'Tooltip', que está mais à frente

        return cell; //Retorna a célula criada (fundamental para o 'for')
    }

    let currentRow = document.createElement("tr"); //Cria um 'tr' para a semana
    daysBody.appendChild(currentRow); //Adiciona o 'tr' das semanas

    for (let i = 0; i < firstDay.getDay(); i++) { //Adiciona células vazias para os dias passados
        currentRow.appendChild(document.createElement("td"));
    }

    for (let i = 1; i <= lastDay.getDate(); i++) { //Adiciona as células dos dias do mês
        const cell = createDayCell(i);
        currentRow.appendChild(cell);
        if (currentRow.childElementCount === 7) { //Separa as linhas dos dias da semana
            currentRow = document.createElement("tr");
            daysBody.appendChild(currentRow);
        }
    }
}

function nextMonth() {
    if (currentMonth === 11) { //Se for Dezembro
        currentYear++; //Adiciona 1 ao Ano do Calendário
        currentMonth = 0; //E bota o mês em Janeiro
    } else {
        currentMonth++; //Senão, apenas passa o mês do mesmo ano
    }
    updateCalendar();
}

function prevMonth() {
    if (currentMonth === 0) { //Se for Janeiro
        currentYear--; //Reduz 1 ao Ano do Calendário
        currentMonth = 11; //E bota o mês em Dezembro 
    } else {
        currentMonth--; //Senão, apenas regride o mês do mesmo ano
    }
    updateCalendar();
}

function onHoverDisp(cell) { //Função para o Tooltip
    cell.addEventListener("mouseenter", function () { //Ouve se o Mouse entrou, e define uma Função Anônima
        const currentDate = new Date(currentYear, currentMonth, parseInt(cell.textContent)); //Essa const está num escopo específico, e equivale ao dia específico do mês e ano da célula
        let tooltipText = "";

        //Compara o dia da célula com o dia atual
        if (currentDate < new Date()) {
            tooltipText = "Dia Passado!";
        } else if (currentDate.getDay() === 0 || currentDate.getDay() === 6) { //Checa se é Sábado ou Domingo
            tooltipText = "Dia Ocupado!";
        } else {
            tooltipText = "Dia Disponível!";
        }

        //Cria o elemento HTML dentro da célula
        const tooltip = document.createElement("span");
        tooltip.className = "tooltip";
        tooltip.textContent = tooltipText;
        cell.appendChild(tooltip);
    });

    cell.addEventListener("mouseleave", function () { //Ouve se o Mouse saiu, e define uma Função Anônima
        const tooltip = cell.querySelector(".tooltip"); //Usa o querySelector para encontrar, na célula, o elemento de classe Tooltip
        if (tooltip) { //Se houver (resposta true)
            cell.removeChild(tooltip); //Remove o Tooltip
        }
    });

    cell.addEventListener("click", function () { //Basicamente a mesma coisa que o de cima, mas para o clique do Mouse
        const currentDate = new Date(currentYear, currentMonth, parseInt(cell.textContent));
        let message = "";

        if (currentDate < new Date()) {
            message = "Dia Passado! Por favor, selecione um dia Livre!";
        } else if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            message = "Dia Ocupado! Por favor, me poupe pelo menos dos Sábados e Domingos!";
        } else {
            message = "Dia Disponível! Para marcar, por favor me contate!";
        }

        alert(message);
    });
}

/* ~~Calendário~~ */
/* ---Parte de Funcionamento Genérico--- */
/* ---BAGULHOS PREMIUM--- */
/* ~~PARTE DO PHP + BOTAR OS VALORES~~ */ 
const tipoCarroSelectPremium = document.getElementById('tipoCarroSelect');

function loadCarrosPremium(page, tipo_carro) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `PHP-cars.php?tipo=${tipo_carro}&page=${page}`, true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            const carros = response.carros;
            const totalPage = response.totalPage;

            preencherDivsDeCarrosPremium(carros);
            updatePageNumbersPremium(page, totalPage);
        } else {
            handleRequestError('Erro ao recuperar dados do servidor.');
        }
    };

    xhr.onerror = function () {
        handleRequestError('Erro ao realizar a solicitação.');
    };

    xhr.send();
}

function preencherDivsDeCarrosPremium(carros) {
    for (let i = 0; i < 6; i++) {
        const divCarro = document.querySelector(`#car${i + 1}`);
        if (i < carros.length) {
            const carro = carros[i];
            if (divCarro) {
                const header = divCarro.querySelector('header');
                const img = divCarro.querySelector('img.cars-img');
                const carPrice = divCarro.querySelector('div.car-price');
                const carBuy = divCarro.querySelector('button.buy-car');    

                if (header) {
                    header.textContent = carro.nome;
                }

                if (img) {
                    img.src = carro.imagem;
                }

                if (carPrice) {
                    carPrice.textContent = formatToUSD(carro.preco - (5*carro.preco)/100);
                }

                if (carBuy) {
                    carBuy.style.display = '';
                }
            }
        } else {
            if (divCarro) {
                const header = divCarro.querySelector('header');
                const img = divCarro.querySelector('img.cars-img');
                const carPrice = divCarro.querySelector('div.car-price');
                const carBuy = divCarro.querySelector('button.buy-car');

                if (header) {
                    header.textContent = 'Ainda por Vir...';
                }

                if (img) {
                    img.src = 'null.png'; //
                    img.id = 'null-img'
                }

                if (carPrice) {
                    carPrice.textContent = '';
                }

                if (carBuy) {
                    carBuy.style.display = 'none';
                }
            }
        }
    }
}

function carboxPrevPremium() {
    const tipo_carro = document.getElementById('tipoCarroSelectPremium').value;
    const currentPage = parseInt(carlistNow.textContent); // Pega a página atual a partir do elemento HTML

    if (currentPage > 1) {
        const previousPage = currentPage - 1;
        loadCarrosPremium(previousPage, tipo_carro);
    }
}

function carboxNextPremium() {
    const tipo_carro = document.getElementById('tipoCarroSelectPremium').value;
    const currentPage = parseInt(carlistNow.textContent); // Pega a página atual a partir do elemento HTML
    const totalPage = parseInt(carlistTotal.textContent); // Pega a quantidade total de páginas a partir do elemento HTML

    if (currentPage < totalPage) {
        const nextPage = currentPage + 1;
        loadCarrosPremium(nextPage, tipo_carro);
    } else {
        alert('Erro: já está na última página');
    }
}

function updatePageNumbersPremium(currentPage, totalPage) {
    if (carlistNow) {
        carlistNow.textContent = currentPage;
    }
    if (carlistTotal) {
        carlistTotal.textContent = totalPage;
    }
}

loadCarrosPremium(1, 'Tudo');
/* ~~PARTE DO PHP + BOTAR OS VALORES~~ */ 