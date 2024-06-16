// Muito útil quando sua variável possui valores específicos

const permissoes = 'admin';

switch(permissoes) {
    case 'aluno':
        console.log('Você pode visualizar as aulas');
        break;
    case 'professor':
        console.log('Você pode alterar as aulas e criar exercícios');
        break;
    case 'admin':
        console.log('Você pode fazer tudo');
        break;
    default:
        console.log('Não reconheço seu acesso');
        break;
}