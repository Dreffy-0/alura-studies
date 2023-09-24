import Button from "../Button";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../Common/Utils/time";
import { ITarefa } from "../../Types/ITarefa";
import { useEffect, useState } from "react";

interface CronometroProps {
	selecionado?: ITarefa;
	finalizarTarefa: () => void;
}

function Cronometro({ selecionado, finalizarTarefa }: CronometroProps) {
	const [tempo, setTempo] = useState<number>();

	useEffect(() => {
		if (selecionado?.tempo) {
			setTempo(tempoParaSegundos(selecionado.tempo));
		}
	}, [selecionado]);

	function regressiva(contador: number = 0) {
		setTimeout(() => {
			if (contador > 0) {
				setTempo(contador - 1);
				return regressiva(contador - 1);
			}
			finalizarTarefa();
		}, 1000);
	}

	return (
		<div className={styles.cronometro}>
			<p className={styles.titulo}>
				Escolha um card e inicie o cronômetro
			</p>
			<div className={styles.relogioWrapper}>
				<Relogio tempo={tempo} />
			</div>
			<Button onClick={() => regressiva(tempo)}>Começar!</Button>
		</div>
	);
}

export default Cronometro;
