class Aluno{
  constructor(nome, sobrenome, nota1, nota2){
  this.primeiroNome = nome;
  this.segundoNome = sobrenome;
  this.primeiraNota = nota1;
  this.segundaNota = nota2;
  }
  nomeCompleto(){
	  return(this.primeiroNome + " " + this.segundoNome);
  }
  media(){
	  return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }
  situacao(){
	  if (this.media() > 6){
		  return 'Aprovado';
	  } else {
      return 'Reprovado';
    }
  }
}

function newAlunos(){
	var alunos = [
    new Aluno('Alfa', 'Beto', 1, 2),
		new Aluno('Tod', 'Bobeira', 3, 4),
	  new Aluno('Hugh', 'Jass', 5, 6),
		new Aluno('Mike', 'Oxlong', 7, 8),
		new Aluno('Tomas', 'Karado', 9, 10)
    ];
  for(var i=0; i<5; i++){
  alert(
    "Nome completo: " + alunos[i].nomeCompleto() + "\n" + 
		"Média: " + alunos[i].media() + "\n" + 
		"Situação: " + alunos[i].situacao()
  );
  }
}

newAlunos();