import { expect } from 'chai';
import { strict as assert } from 'assert';

function soma(num1: number, num2: number){
  return num1 + num2
}

describe('Função soma', () => {
  it('deve retornar a soma de dois números', () => {
    const resultado = soma(2, 3);
    assert.equal(resultado, 5)
    expect(true).to.be.true
  });
});