function carregarTarefas() {
  fetch('/tarefas')
    .then(response => response.json())
    .then(tarefas => {
      const listaTarefas = document.getElementById('lista-tarefas');
      listaTarefas.innerHTML = '';

      tarefas.forEach(tarefa => {
        const li = document.createElement('li');
        li.textContent = `${tarefa.nome} - ${tarefa.status ? 'Concluída' : 'Pendente'} (ID: ${tarefa.id})`;
        listaTarefas.appendChild(li);
      });
    });
}

document.getElementById('adicionar-tarefa').addEventListener('click', function() {
  const nomeTarefa = document.getElementById('nome-tarefa').value;

  if (!nomeTarefa) {
    alert('Por favor, insira um nome para a tarefa.');
    return;
  }

  fetch('/tarefas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome: nomeTarefa })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Tarefa adicionada com sucesso:', data);
    carregarTarefas();  
    document.getElementById('nome-tarefa').value = '';  
  })
  .catch(error => {
    console.error('Erro ao adicionar tarefa:', error);
  });
});

document.getElementById('atualizar-tarefa').addEventListener('click', function() {
  const idTarefa = document.getElementById('id-tarefa').value;
  const novoNome = document.getElementById('novo-nome').value;
  const novoStatus = document.getElementById('novo-status').checked;

  if (!idTarefa) {
    alert('Por favor, insira o ID da tarefa.');
    return;
  }

  fetch(`/tarefas/${idTarefa}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome: novoNome, status: novoStatus })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Tarefa atualizada com sucesso:', data);
    carregarTarefas();
    document.getElementById('id-tarefa').value = '';  
    document.getElementById('novo-nome').value = '';  
    document.getElementById('novo-status').checked = false; 
  })
  .catch(error => {
    console.error('Erro ao atualizar tarefa:', error);
  });
});

document.getElementById('excluir-tarefa').addEventListener('click', function() {
  const idTarefaExcluir = document.getElementById('id-tarefa-excluir').value;

  if (!idTarefaExcluir) {
    alert('Por favor, insira o ID da tarefa para excluir.');
    return;
  }

  fetch(`/tarefas/${idTarefaExcluir}`, {
    method: 'DELETE'
  })
  .then(() => {
    console.log('Tarefa excluída com sucesso');
    carregarTarefas(); 
    document.getElementById('id-tarefa-excluir').value = ''; 
  })
  .catch(error => {
    console.error('Erro ao excluir tarefa:', error);
  });
});

carregarTarefas();
