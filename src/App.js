import React from 'react';


function App() {
  return (
    <div className="App">
      <form>
      <div>
        <h2>Formulario de cadastro</h2>
        </div><br/>

        <label>Nome Completo<input type="text"/></label>
        <label>CPF<input type="text"/></label>
        <label>E-mail<input type="text"/></label>

        <div>
          <h2>Endereço</h2>
          </div>
        
        <label>Cep<input type="text"/></label><br/>
        <label>Rua<input type="text"/></label><br/>
        <label>Numero<input type="text"/></label><br/>
        <label>Complemento<input type="text"/></label><br/>
        <label>Bairro<input type="text"/></label><br/>
        <label>Cidade<input type="text"/></label><br/>
        <label>Estado<input type="text"/></label><br/>
        <button type="subimit">Enviar</button><br/>
      </form>
    </div>
  );
}

export default App;
