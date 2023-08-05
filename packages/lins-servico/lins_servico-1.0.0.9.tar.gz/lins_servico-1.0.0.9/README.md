# Pacote Serviço

Principais dependências:

![](https://img.shields.io/badge/Python-v3.0+-blue)

Pacote para criar serviço baseado em thread, executa um micro serviço por meio de threads.

## Projetos relacionados

- Sem dependência de outro projeto.

## Variáveis de Ambiente Necessárias

- Não se aplica.

## Como configurar o Pacote em Serviço

### Instalação

Comando:

```sh
pip install lins_servico
```

### Importação

- **Thread**: Classe que será usada para executar uma função em loop por um determinado tempo.
- **thread_loop**: Decorator responsável por encapsular a thread e executa-la em um contexto.

Código:

```python
from lins_servico.thread import Thread
from lins_servico.decorators import thread_loop
```

## Utilização

### 1) Criação da thread

#### Exemplo:

Código:

```python
thread01 = Thread(
    interval=5,
    execute=minha_funcao,
    param1='valor1', param2=222, param3='valor3', ..., param100='valor100'
)
```

#### Parâmetros:

A classe Thread possui 3 parâmetros, sendo ***interval*** e ***execute*** obrigatórios.

- interval (***inteiro***) [***obrigatório***] -> intervalo de tempo em segundos que você quer que seja executado a função.
- execute (***referência da função***) [***obrigatório***] -> nome da função (def) que você deseja executar, ***sem aspas***.
- \*args [***opcional***] -> parâmetros da função que se deseja executar, separados por vírgula.

Os parâmetros em ****args*** podem ter qualquer nome e ser de qualquer tipo de dado, porém devem ser nomeados. Além disso podem ter a quantidade de ***zero*** até o ***número desejado*** de parâmetros.

#### 2) Utilização no Programa Principal 

- O decorator ***@thread_loop(*** sleep_time ***)*** deve englobar a função (def) que irá encapsular as Thread(s) e no final retornar a(s) Thread(s) em uma lista.
  
- **Somente a(s) Thread(s) retornadas na lista vão ser executada(s).**

Exemplo:

```python
@thread_loop(1)
def executa_servico():

    thread01 = Thread(
        interval=5,
        execute=diga_uma_palavra,
        msg='ola'
    )

    thread02 = Thread(
        interval=3,
        execute=diga_um_numero,
        msg=123
    )

    return [thread01, thread02]


if __name__ == "__main__":
    executa_servico()
```

### 3) Tratamento de erros

- O Threads esta encapsulada com um ***try / except*** que faz o log do erro do tipo critical com o traceback completo, ela passa este erro para a camada do decorator ***thread_loop(sleep_time)*** que aguarda o próximo ciclo ***sleep_time*** para ser executado novamente, isto é, o serviço não vai parar, a menos que seja utilizado a sequência de teclas **CTRL+C**, neste caso o serviço irá finalizar a(s) Thread(s) em andamento e depois finalizar.
  
- Para finalizar o serviço **forçadamente**, basta utilizar a sequência de teclas **CTRL+C** duas vezes.

- Caso necessite tratar algum erro na funcao que a ***Thread*** chama ou qualquer outra funcao interna, bastar utilizar o comando ***try / except*** e gerar um raise com a classe de erro e a mensagem personalizada, se desejar. Este erro será capturado na camada da ***Thread*** e repassado para a camada do ***decorator***.

Exemplo:

```python
def divisao(a, b):
    try
        resultado = a / b
    except:
        raise Exception('Minha mensagem de erro personalizada.')
```

Neste caso se ***b*** for igual a zero, haverá uma except que será capturada tratada e repassada para as camadas superiores.