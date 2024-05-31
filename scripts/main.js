function toggleMenu() {
    const sidebarMenu = document.getElementById('sidebar-menu');
    const menuButton = document.getElementById('menu-button');
    const sidebarAgendamento = document.getElementById('sidebar-agendamento');
    const agendamentoButton = document.getElementById('agendamento-button');
    const isMenuExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    const isAgendamentoExpanded = agendamentoButton.getAttribute('aria-expanded') === 'true';

    if (isMenuExpanded) {
        sidebarMenu.style.left = '-250px';
        menuButton.setAttribute('aria-expanded', 'false');
    } else {
        sidebarMenu.style.left = '0';
        menuButton.setAttribute('aria-expanded', 'true');
        // Close the agendamento menu if it is open
        if (isAgendamentoExpanded) {
            sidebarAgendamento.style.left = '-250px';
            agendamentoButton.setAttribute('aria-expanded', 'false');
        }
    }
}

function toggleAgendamento() {
    const sidebarAgendamento = document.getElementById('sidebar-agendamento');
    const agendamentoButton = document.getElementById('agendamento-button');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const menuButton = document.getElementById('menu-button');
    const isAgendamentoExpanded = agendamentoButton.getAttribute('aria-expanded') === 'true';
    const isMenuExpanded = menuButton.getAttribute('aria-expanded') === 'true';

    if (isAgendamentoExpanded) {
        sidebarAgendamento.style.left = '-250px';
        agendamentoButton.setAttribute('aria-expanded', 'false');
    } else {
        sidebarAgendamento.style.left = '0';
        agendamentoButton.setAttribute('aria-expanded', 'true');
        // Close the menu if it is open
        if (isMenuExpanded) {
            sidebarMenu.style.left = '-250px';
            menuButton.setAttribute('aria-expanded', 'false');
        }
    }
}
