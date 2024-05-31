function toggleMenu() {
    const sidebarMenu = document.getElementById('sidebar-menu');
    const menuButton = document.getElementById('menu-button');
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        sidebarMenu.style.left = '-250px';
        menuButton.setAttribute('aria-expanded', 'false');
    } else {
        sidebarMenu.style.left = '0';
        menuButton.setAttribute('aria-expanded', 'true');
    }
}

function toggleAgendamento() {
    const sidebarAgendamento = document.getElementById('sidebar-agendamento');
    const agendamentoButton = document.getElementById('agendamento-button');
    const isExpanded = agendamentoButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        sidebarAgendamento.style.left = '-250px';
        agendamentoButton.setAttribute('aria-expanded', 'false');
    } else {
        sidebarAgendamento.style.left = '0';
        agendamentoButton.setAttribute('aria-expanded', 'true');
    }
}
