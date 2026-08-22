# Testes Postman dos microsserviços

Esta coleção executa os testes das seções 4.3.60 e 4.3.61 com a pilha Docker completa.

## Preparação

No PowerShell, execute:

```powershell
cd C:\Users\jv070\Documents\ecm516\003_microsservicos
docker compose up -d --build
docker compose ps
```

Espere até os seis contêineres aparecerem como `healthy`.

## Importação no Postman

1. Abra o Postman e selecione **Import**.
2. Importe `ECM516-Docker.postman_collection.json`.
3. Abra a coleção **ECM516 - Validação Docker dos Microsserviços**.
4. Selecione **Run collection**.
5. Mantenha a ordem original das requisições e clique em **Run ECM516...**.

A coleção utiliza variáveis próprias. Não é necessário importar um ambiente. Os IDs do lembrete e das observações são capturados automaticamente durante a execução.

## Resultado esperado

Todos os testes devem ficar verdes. A execução verifica:

- os seis endpoints de saúde;
- a criação de um lembrete;
- uma observação classificada como `importante`;
- uma observação classificada como `comum`;
- as observações armazenadas pelo microsserviço de observações;
- a projeção agregada do microsserviço de consulta;
- os eventos registrados no barramento;
- os cinco serviços acompanhados pelo monitoramento.

É possível repetir a coleção sem reiniciar os contêineres. Os testes utilizam os IDs criados na execução atual e não pressupõem que o lembrete tenha ID `1`.

## Execução opcional pelo PowerShell

Também é possível executar a mesma coleção sem abrir o Postman:

```powershell
cd C:\Users\jv070\Documents\ecm516\003_microsservicos
npx --yes newman run postman\ECM516-Docker.postman_collection.json
```

O resumo final deve apresentar `13` requisições, `30` verificações e `0` falhas.

## Encerramento

Depois dos testes:

```powershell
docker compose down
```

Esse comando remove os contêineres e a rede temporária, mas mantém as imagens Docker.
