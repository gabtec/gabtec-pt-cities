# gabtec-pt-cities

Este projecto disponibiliza uma pequena api REST (escrita em nodejs/express) que permite listar os distritos, concelhos e códigos postais de Portugal.  
Trata-se de uma ferramenta que visa ajudar na construção de formulários.

## Porquê uma api e não uma bibliotec?

Pelo tamanho.  
A fonte das listagem é a disponibilizada em http://centraldedados.pt/codigos_postais/, e no caso do ficheiro de códigos postais pode ascender a mais de 20 MB, o que para ser incluido no bundle do código fonte de um frontend, terá um impacto significativo no seu tamanho.
Assim optou-se por esta api, que está pensada para ser usada como uma sub-api (ver "Como Usar")

## Modo de uso

É disponibilizada como um express middleware.  
[TODO] Pretendo disponibilizar também como um microserviço, num docker container.

```bash
$ npm install gabtec-pt-cities
```

```js
(...)
const ptCitiesApi = require('gabtec-pt-cities');

app.use(ptCitiesApi);
```

## API EndPoints

GET /api/v1/distritos  
 **devolve** Array com os nomes de todos os distritos de Portugal  
GET /api/v1/distritos/:cod  
 **devolve** O nome do distrito

GET /api/v1/concelhos?distrito=Lisboa  
 **devolve** Array com os nomes de todos os concelhos do distrito passado como parametro  
GET /api/v1/concelhos/:cod  
 **devolve** O nome do concelho

GET /api/v1/localidades/:codPostal  
 **param** O código postal, tem de estar no formado NNNN-NNN
**devolve** O nome da localidade associada ao código postal

GET /api/v1/codigos-postais/:localidade  
 **devolve** Um array com todos os códigos postais da localidade indicada

# Author

Gabriel Martins aka Gabtec

# References

http://centraldedados.pt/codigos_postais/
