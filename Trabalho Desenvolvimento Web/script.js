/* ---Parte da Aba Mecânicos--- */
// Estilização do Hover, e Desistilização do Out
function lightUp(elemento){
    elemento.style.backgroundColor = 'blue';
    elemento.style.color = 'yellow';
    elemento.style.cursor = 'pointer';
    elemento.style.transition= 'background-color 0.5s ease';
}

function backToNormal(elemento){
    elemento.style.backgroundColor = 'aliceblue';
    elemento.style.color = 'black';
}

// Criando Função Útil
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

// Abrir Franklin
function franklinClinton(){
    closeTable();
    const main3 = document.getElementById('main3');

    const header = document.createElement('header');
    header.id = 'franklin-header';
    header.textContent = 'Franklin Clinton';

    const blockquote = document.createElement('blockquote');
    blockquote.id = 'franklin-desc';
    blockquote.innerHTML = `
        "E aí, mano! Bem-vindo à Premium Deluxe Motorsport! Eu sou o mecânico de plantão aqui, o Franklin. Se você precisa 
        tunar seu carro, fazer algum reparo ou apenas abastecer, me ligue e eu vou cuidar disso. Vamo agitar a bagaça!"
        <br><cite id="franklin-cite">- Franklin Clinton</cite>
    `;

    const tableFranklin = document.createElement('table');
    tableFranklin.id = 'tableFranklin'
    const tableHTML = `
        <thead>
            <tr>
                <th class='thFranklin'><button id="prevMonth" onclick="prevMonth()">&lt;</button></th>
                <th class='thFranklin' colspan="5" id="currentMonth"></th>
                <th class='thFranklin'><button id="nextMonth" onclick="nextMonth()">&gt;</button></th>
            </tr>
            <tr>
                <th class='thFranklin'>Domingo</th>
                <th class='thFranklin'>Segunda</th>
                <th class='thFranklin'>Terça</th>
                <th class='thFranklin'>Quarta</th>
                <th class='thFranklin'>Quinta</th>
                <th class='thFranklin'>Sexta</th>
                <th class='thFranklin'>Sábado</th>
            </tr>
        </thead>
        <tbody id="daysBody"></tbody>
    `;
    tableFranklin.innerHTML = tableHTML;

    const p = document.createElement('p');
    p.id = 'franklin-phone';
    p.textContent = 'Contato: (328) 555-0156';

    main3.appendChild(header);
    main3.appendChild(blockquote);
    main3.appendChild(tableFranklin);
    main3.appendChild(p);
    updateCalendar();

    const mainpageButton = document.createElement('table');
    mainpageButton.id = 'mainpage-button';

    const row1 = document.createElement('tr');
    const cell1 = document.createElement('td');
    const link1 = document.createElement('a');
    link1.href = 'mechanic.html';
    link1.className = 'menu-option';
    link1.textContent = 'Voltar';
    cell1.appendChild(link1);
    row1.appendChild(cell1);

    const row2 = document.createElement('tr');
    const cell2 = document.createElement('td');
    const link2 = document.createElement('a');
    link2.href = 'index.html';
    link2.className = 'menu-option';
    link2.textContent = 'Página Inicial';
    cell2.appendChild(link2);
    row2.appendChild(cell2);

    mainpageButton.appendChild(row1);
    mainpageButton.appendChild(row2);
    main3.appendChild(mainpageButton)
}

// Abrir Lamar
function lamarDavis(){
    closeTable();
    const main3 = document.getElementById('main3');

    const header = document.createElement('header');
    header.id = 'franklin-header';
    header.textContent = 'Lamar Davis';

    const blockquote = document.createElement('blockquote');
    blockquote.id = 'franklin-desc';
    blockquote.innerHTML = `
        "YO, qual é, cara? Este é o seu parça, homie, Lamar Davis. Eu dirijo este Premium Deluxe, sendo o operador mais motherf#%kin' brabo. 
        Se você tiver algum problema nas suas rodas, apenas me avise, jaé? Bola pra frente!"
        <br><cite id="franklin-cite">- Lamar Davis</cite>
    `;

    const tableFranklin = document.createElement('table');
    tableFranklin.id = 'tableFranklin'
    const tableHTML = `
        <thead>
            <tr>
                <th class='thFranklin'><button id="prevMonth" onclick="prevMonth()">&lt;</button></th>
                <th class='thFranklin' colspan="5" id="currentMonth"></th>
                <th class='thFranklin'><button id="nextMonth" onclick="nextMonth()">&gt;</button></th>
            </tr>
            <tr>
                <th class='thFranklin'>Domingo</th>
                <th class='thFranklin'>Segunda</th>
                <th class='thFranklin'>Terça</th>
                <th class='thFranklin'>Quarta</th>
                <th class='thFranklin'>Quinta</th>
                <th class='thFranklin'>Sexta</th>
                <th class='thFranklin'>Sábado</th>
            </tr>
        </thead>
        <tbody id="daysBody"></tbody>
    `;
    tableFranklin.innerHTML = tableHTML;

    const p = document.createElement('p');
    p.id = 'franklin-phone';
    p.textContent = 'Contato: (346) 555-0141';

    main3.appendChild(header);
    main3.appendChild(blockquote);
    main3.appendChild(tableFranklin);
    main3.appendChild(p);
    updateCalendar();

    const mainpageButton = document.createElement('table');
    mainpageButton.id = 'mainpage-button';

    const row1 = document.createElement('tr');
    const cell1 = document.createElement('td');
    const link1 = document.createElement('a');
    link1.href = 'mechanic.html';
    link1.className = 'menu-option';
    link1.textContent = 'Voltar';
    cell1.appendChild(link1);
    row1.appendChild(cell1);

    const row2 = document.createElement('tr');
    const cell2 = document.createElement('td');
    const link2 = document.createElement('a');
    link2.href = 'index.html';
    link2.className = 'menu-option';
    link2.textContent = 'Página Inicial';
    cell2.appendChild(link2);
    row2.appendChild(cell2);

    mainpageButton.appendChild(row1);
    mainpageButton.appendChild(row2);
    main3.appendChild(mainpageButton)
}


/* ---Parte Aba Mecânicos--- */
/* ---Parte da Aba Premium--- */
// Abrir Cadastro Premium
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
    closeButton.onclick = function () {
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
    labelEmail.textContent = 'Email: ';
    labelEmail.setAttribute('for', 'email');

    const inputEmail = document.createElement('input');
    inputEmail.type = 'text';
    inputEmail.id = 'reg-email';
    inputEmail.className = 'form-inp';
    inputEmail.required = true;

    const lineBreak1 = document.createElement('br');

    const labelPassword = document.createElement('label');
    labelPassword.textContent = 'Senha: ';
    labelPassword.setAttribute('for', 'password');

    const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.id = 'reg-password';
    inputPassword.className = 'form-inp';
    inputPassword.required = true;

    const lineBreak2 = document.createElement('br');

    const labelPhone = document.createElement('label');
    labelPhone.textContent = 'Celular: ';
    labelPhone.setAttribute('for', 'phone');

    const inputPhone = document.createElement('input');
    inputPhone.type = 'number';
    inputPhone.id = 'reg-phone';
    inputPhone.className = 'form-inp';
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
// Realizar o Cadastro Premium (ativando função PHP)
function registerAccount(){
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const phone = document.getElementById('reg-phone').value;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);

    fetch('addmember.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from addmember.php here if needed
        console.log(data);
    })
    .catch(error => {
        // Handle any errors here
        console.error('Error:', error);
    });
}

/* ---Parte da Aba Premium--- */
/* ---Parte de Funcionamento Genérico--- */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

function updateCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const currentMonthElement = document.getElementById('currentMonth');
    const daysBody = document.getElementById("daysBody");

    if (currentMonthElement) {
        currentMonthElement.textContent = firstDay.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    }
    daysBody.innerHTML = '';

    function createDayCell(day) {
        const cell = document.createElement("td");
        cell.textContent = day;
        cell.id='tdFranklin'

        const currentDate = new Date(currentYear, currentMonth, day);
        if (currentDate < new Date()) {
            cell.className = "past";
        } else if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            cell.className = "busy";
        } else {
            cell.className = "free";
        }

        onHoverDisp(cell);

        return cell;
    }

    let dayCounter = 1;
    let currentRow = document.createElement("tr");
    daysBody.appendChild(currentRow);

    for (let i = 0; i < firstDay.getDay(); i++) {
        currentRow.appendChild(document.createElement("td"));
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        const cell = createDayCell(i);
        currentRow.appendChild(cell);
        if (currentRow.childElementCount === 7) {
            currentRow = document.createElement("tr");
            daysBody.appendChild(currentRow);
        }
    }
}

function nextMonth() {
    if (currentMonth === 11) {
        currentYear++;
        currentMonth = 0;
    } else {
        currentMonth++;
    }
    updateCalendar();
}

function prevMonth() {
    if (currentMonth === 0) {
        currentYear--;
        currentMonth = 11;
    } else {
        currentMonth--;
    }
    updateCalendar();
}

function onHoverDisp(cell) {
    cell.addEventListener("mouseenter", function () {
        const currentDate = new Date(currentYear, currentMonth, parseInt(cell.textContent));
        let tooltipText = "";

        if (currentDate < new Date()) {
            tooltipText = "Dia Ocupado!";
        } else if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            tooltipText = "Dia Ocupado!";
        } else {
            tooltipText = "Dia Disponível!";
        }

        const tooltip = document.createElement("span");
        tooltip.className = "tooltip";
        tooltip.textContent = tooltipText;
        cell.appendChild(tooltip);
    });

    cell.addEventListener("mouseleave", function () {
        const tooltip = cell.querySelector(".tooltip");
        if (tooltip) {
            cell.removeChild(tooltip);
        }
    });

    cell.addEventListener("click", function () {
        const currentDate = new Date(currentYear, currentMonth, parseInt(cell.textContent));
        let message = "";

        if (currentDate < new Date()) {
            message = "Dia Ocupado!";
        } else if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            message = "Dia Ocupado!";
        } else {
            message = "Dia Disponível!";
        }

        alert(message);
    });
}

/* ---Parte de Funcionamento Genérico--- */