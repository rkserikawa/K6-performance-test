# cypress-automation-test
Projeto de automação de testes e2e e API's com integração a um CI/CD configurado para gerar relatórios de execução no Cypress Cloud e mochawesome-reporter.

## Arquitetura de Pastas
```
├───fixtures        -- Massa de testes para execução das requisições
├───reports         -- Pasta que contém report csv com detalhes da execução
└───scripts         -- Pasta com os scripts de testes
```

## Dependencias e versões

    k6 2.4.0
    
## Instalação

Passos da instalação:
- Instalar K6 pelo link https://dl.k6.io/msi/k6-latest-amd64.msi
- Clonar o projeto localmente

## Execução

- Acessar o cmd ou bash de preferência
- Acessar a pasta do projeto
- Executar o comando `k6 run scripts/api-testing-playground.js`
