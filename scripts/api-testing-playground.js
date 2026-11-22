import { group, check, sleep } from 'k6';
import http from 'k6/http';
import { SharedArray } from 'k6/data';

const data = new SharedArray('Massa de testes de produtos', function() {
    return JSON.parse(open('../fixtures/produto-api.json')).produtos;    
});
const apiUrl = 'https://api.qaautomationlabs.com/v1';
const id = 1;

export const options = {
  vus: 500,
  duration: '5m',
};

export default function () {
  group('Teste de carga para GET - /products', function () {
    let res = http.get(`${apiUrl}/products/${id}`);
    sleep(3);
    check(res, {
      'Verificando o retorno Status 200': (r) => r.status === 200,
      'Verificando o campo Name': (r) => r.json().data.name === data[0].name
    });
  });

}



