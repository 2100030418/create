import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">ENTRAR</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Criar uma nova conta
        </button>
    </div>
  );
}

export default App;
