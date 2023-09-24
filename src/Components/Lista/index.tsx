import { ITarefa } from "../../Types/ITarefa";
import Item from "./Item";
import styles from "./Lista.module.scss";

interface ListaProps {
	tarefas: ITarefa[];
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: ListaProps) {
	return (
		<aside className={styles.listaTarefas}>
			<h2>Estudos do dia:</h2>
			<ul>
				{tarefas.map(item => (
					<Item
						selecionaTarefa={selecionaTarefa}
						key={item.id}
						{...item}
					/>
				))}
			</ul>
		</aside>
	);
}

export default Lista;
