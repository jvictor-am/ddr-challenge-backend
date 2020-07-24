<h2 align="center">
  DDR - challenge - backend
</h2>

## :computer: / :iphone: About

Desafio backend proposto pela DDR. Mais informações podem ser verificadas [aqui](https://github.com/viniciuspsw/ddr-challenge).<br>
Brevemente, trata-se de um webservice com 2 endpoints para armazenar dados e 1 endpoint para listar "matchings". O serviço está configurado para realizar
tal procedimento de matching a cada 6 horas. Você pode encontrar uma pequena demonstração em vídeo dentra do arquivo [zip](.github).
## Built with:

- Typescript (^3.9.5)
- Node (v12.16.1)
- Yarn (1.22.4)
- Express (^4.17.1)
- mongoose (^5.9.25)
- node-schedule (^1.3.2)
- Docker (Container MongoDB)

## COmo instalar e rodar local :computer:</strong>:

<strong>1. Clonar o projeto e instalar as dependências:</strong>

```
$ git clone https://github.com/jvictor-am/ddr-challenge-backend.git
$ cd ddr-challenge-backend
$ yarn install
```

<strong>2. Criar container MongoDB</strong>

```
$ docker run --name ddrtech -p 27017:27017 -d -t mongo
```

<strong>3. Subir servidor</strong>

```
$ yarn dev
```


<strong>4. Você pode verificar as rotas e criar os schemas tenho a extensão REST Client no próprio VSCode (verifique o arquivo [api.rest](api.rest)), ou criar as rotas no postman, Insomnia.</strong>

<strong>5. Para verificar os dados no banco, você pode ter MongoDBCompassCommunity no seu computador.</strong>

<br>

---

[<p align="center">**João Victor**</p>](https://www.linkedin.com/in/jo%C3%A3o-victor-de-andrade-mesquita-848a09122/)

<h2 align="center">
  Thank You!
</h2>

