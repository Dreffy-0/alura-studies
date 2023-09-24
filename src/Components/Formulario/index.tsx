import React, { useState } from "react";
import Button from "../Button";
import styles from "./Formulario.module.scss";
import { ITarefa } from "../../Types/ITarefa";
import { v4 as uuidv4 } from "uuid";

interface FormularioProps {
	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTarefas }: FormularioProps) {
	const [tarefa, setTarefa] = useState("");
	const [tempo, setTempo] = useState("00:00");

	function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault();
		setTarefas(tarefasAntigas => [
			...tarefasAntigas,
			{
				tarefa,
				tempo,
				selecionado: false,
				completado: false,
				id: uuidv4(),
			},
		]);
		setTarefa("");
		setTempo("00:00");
	}
	return (
		<form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
			<div className={styles.inputContainer}>
				<label>Tarefa</label>
				<input
					type="text"
					name="tarefa"
					value={tarefa}
					onChange={evento => setTarefa(evento.target.value)}
					id="tarefa"
					placeholder="O que você quer estudar?"
					required
				/>
			</div>
			<div className={styles.inputContainer}>
				<label>Tempo</label>
				<input
					type="time"
					step="1"
					name="tempo"
					value={tempo}
					onChange={evento => setTempo(evento.target.value)}
					id="tempo"
					min="00:00:00"
					max="01:30:00"
					required
				/>
			</div>
			<Button type="submit">adicionar</Button>
		</form>
	);
}

export default Formulario;