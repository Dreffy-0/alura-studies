# Alura Studies - Meu primeiro Projeto typescript

Esse projeto foi criado usando CRA ([Create React App](https://github.com/facebook/create-react-app)) e foi o meu primeiro projeto criado desde o início com typescript.

## :heavy_check_mark: Técnicas e tecnologias utilizadas

- React
- Sass
- CSS modules
- React Hooks
- TypeScript

## Como acessar o projeto?

Caso deseje apenas visualizar de forma rapida, aqui está o link do [deploy na Vercel](https://), caso queira executar localmente no seu dispositivo, aqui está um passo-a-passo:

### Abra o terminal da sua preferência

### Clone o projeto do repositorio para seu dispositivo `git clone https://github.com/Dreffy-0/alura-studies.git`

#### *Também é possivel baixar o repositorio diretamente do github, nesse caso o projeto vem dentro de um arquivo .zip*

### Entre na pasta do projeto `cd /alura-studies`

### Instale as dependencias do projeto `npm install` ou `yarn install`(caso utilize o yarn)

### Inicie o servidor local `npm start` ou `yarn start`

## Saiba Mais

Voce pode aprender mais sobre o create-react-app acessando a [documentação Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para saber mais do React, acesse [documentação React](https://reactjs.org/).

<!--
Documentação pessoal
?	syntax class components React

TODO: Criando o botao:
*	interface ButtonProps {
*		children?: React.ReactNode;
*		type?: "button" | "submit" | "reset" | undefined;
*		onClick?: () => void;
*	}

*	class Button extends React.Component<ButtonProps> {
*		render() {
*			const { type = "button", onClick } = this.props;
*			return (
*				<button onClick={onClick} type={type} className={styles.botao}>
*					{this.props.children}
*				</button>
*			);
*		}
*	}

TODO: Criando o formulario:

*	class Formulario extends React.Component<{
*		setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
*	}> {
*		state = {
*			tarefa: "",
*			tempo: "00:00",
*		};

*		adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
*			evento.preventDefault();
*			this.props.setTarefas(tarefasAntigas => [
*				...tarefasAntigas,
*				{
*					...this.state,
*					selecionado: false,
*					completado: false,
*					id: uuidv4(),
*				},
*			]);
*			this.setState({
*				tarefa: "",
*				tempo: "00:00",
*			});
*		}

*		render(): React.ReactNode {
*			return (
*				<form
*					className={styles.novaTarefa}
*					onSubmit={this.adicionarTarefa.bind(this)}
*				>
*					<div className={styles.inputContainer}>
*						<label>Tarefa</label>
*						<input
*							type="text"
*							name="tarefa"
*							value={this.state.tarefa}
*							onChange={evento =>
*								this.setState({
*									...this.state,
*									tarefa: evento.target.value,
*								})
*							}
*							id="tarefa"
*							placeholder="O que você quer estudar?"
*							required
*						/>
*					</div>
*					<div className={styles.inputContainer}>
*						<label>Tempo</label>
*						<input
*							type="time"
*							step="1"
*							name="tempo"
*							value={this.state.tempo}
*							onChange={evento =>
*								this.setState({
*									...this.state,
*									tempo: evento.target.value,
*								})
*							}
*							id="tempo"
*							min="00:00:00"
*							max="01:30:00"
*							required
*						/>
*					</div>
*					<Button type="submit">adicionar</Button>
*				</form>
*			);
*		}
*	}

 -->
