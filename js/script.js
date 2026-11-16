const categoria = document.getElementById('categoria');
const saudeHumana = document.getElementById('saude-humana');
const saudeAnimal = document.getElementById('saude-animal');

categoria.addEventListener('change', function () {
  if (categoria.value === 'humana') {
    saudeHumana.style.display = '';
    saudeAnimal.style.display = 'none';
  } else if (categoria.value === 'animal') {
    saudeHumana.style.display = 'none';
    saudeAnimal.style.display = '';
  } else {
    saudeHumana.style.display = '';
    saudeAnimal.style.display = '';
  }
});
