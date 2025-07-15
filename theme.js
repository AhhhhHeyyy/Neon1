const themes = {
  default: {
    '--primary-color': '#8f5cff',
    '--secondary-color': '#3fd0ff',
    '--background-dark': '#181a2a',
    '--text-color': '#f6f6fa',
    '--accent-color': '#ffb3ff',
    '--card-bg': 'rgba(143, 92, 255, 0.13)',
    '--glow-color': 'rgba(143, 92, 255, 0.45)',
    '--select-font-color': '#bdbdff',
  },
  pink: {
    '--primary-color': '#ff4fa3',
    '--secondary-color': '#ffb3ff',
    '--background-dark': '#2a1830',
    '--text-color': '#fff0fa',
    '--accent-color': '#ffe0f7',
    '--card-bg': 'rgba(255, 79, 163, 0.13)',
    '--glow-color': 'rgba(255, 79, 163, 0.35)',
    '--select-font-color': '#bdbdff',
  },
  dark: {
    '--primary-color': '#22223b',
    '--secondary-color': '#4a4e69',
    '--background-dark': '#181826',
    '--text-color': '#e0e0e0',
    '--accent-color': '#9a8c98',
    '--card-bg': 'rgba(34, 34, 59, 0.18)',
    '--glow-color': 'rgba(74, 78, 105, 0.25)',
    '--select-font-color': '#bdbdff',
  },
  light: {
    '--primary-color': '#6c63ff',
    '--secondary-color': '#00b4d8',
    '--background-dark': '#f6f6fa',
    '--text-color': '#22223b',
    '--accent-color': '#ffb3ff',
    '--card-bg': 'rgba(108, 99, 255, 0.10)',
    '--glow-color': 'rgba(108, 99, 255, 0.18)',
    '--select-font-color': '#22223b',
  }
};

const root = document.documentElement;
const select = document.getElementById('theme-select');

select.addEventListener('change', e => {
  const theme = themes[e.target.value];
  for (const key in theme) {
    root.style.setProperty(key, theme[key]);
  }
  document.querySelector('.theme-switcher select').style.color = theme['--select-font-color'];
  if (e.target.value === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const theme = themes[select.value];
  document.querySelector('.theme-switcher select').style.color = theme['--select-font-color'];
  if (select.value === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}); 