import './App.css'
import axios from 'axios'
import { useState, ChangeEvent, FormEvent } from 'react'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('Tudo ok');
 
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/post', {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setMensagem(response.config.data);
      })
      .catch((error) => {
        console.error(error);
        setMensagem('Erro ao fazer login');
      });
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <section>
        <form action="" className="loginContainer" onSubmit={handleLogin}>
          <label htmlFor="email" className="labelStyles">
            Digite seu email
          </label>
          <input type="text" onChange={handleEmail} />
          <label htmlFor="password" className="labelStyles">
            Digite sua senha
          </label>
          <input type="password" onChange={handlePassword} />
          <button type="submit">Login</button>
          <div>
          {mensagem !== "Tudo ok" ? (
        <p>{mensagem}</p>
      ) : (
        <p>Olá, mundo!</p>
      )}
          </div>
        </form>
      </section>
      
    </>
  );
}

export default App;