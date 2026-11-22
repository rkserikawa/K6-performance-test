import { group, check, sleep } from 'k6';
import http from 'k6/http';
import { SharedArray } from 'k6/data';

const data = new SharedArray('Massa de testes de produtos', function() {
    return JSON.parse(open('../fixtures/produto-api.json')).produtos;    
});
const apiUrl = 'https://api.qaautomationlabs.com/v1';
const id = 1;

export const options = {
  scenarios: {
    get_product: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 2,
      exec: 'getProduct'
    },
    post_product: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 2,
      exec: 'postProduct',
      startTime: '10s'
    },
  }

};

export function getProduct () {
  let res = http.get(`${apiUrl}/products/${id}`);
  sleep(3);
  check(res, {
    'Verificando o retorno Status 200': (r) => r.status === 200,
    'Verificando o campo Name': (r) => r.json().data.name === data[0].name
  });
}

export function postProduct () {
  let res = http.post(`${apiUrl}/products`, data[5]);
  sleep(4)
  console.log(res.json());
check(res, {
    'Verificando o retorno Status 201': (r) => r.status === 201,
  });
}




