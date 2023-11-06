<script>
// @ts-nocheck

	import Button from "../../components/Button.svelte";
	import Input from "../../components/Input.svelte";
	import Modal from "../../components/Modal.svelte";

	/**
	 * @param {Event & { preventDefault: () => void, target: HTMLFormElement }} event - The form submit event.
	 */
	function onSubmitForm(event) {
		const formData = new FormData(event.target);
		const formValues = {};

		for (const [key, value] of formData.entries()) {
			formValues[key] = value;
		}

		console.log("Form values:", formValues);

	}
</script>

<div class="guest-actions-container">
	<div class="guest-actions-wrapper">
		<div class="cta-container">
			<Modal toggleButtonTitle="Adicionar Convidado">
				<div class="add-guest-form-container">
					<div class="add-guest-form-wrapper">
						<form class="add-guest-form" on:submit={onSubmitForm}>
							<div class="form-content-wrapper">
								<h2>Adicionar novo Convidado</h2>
								<div class="input-wrapper">
									<Input
										id="guestName"
										name="guestName"
										label="Nome do Convidado"
									/>
									<Input
										id="phoneNumber"
										name="phoneNumber"
										label="Número de Telefone"
									/>
									<Input
										id="totalPeople"
										name="totalPeople"
										label="Total de Pessoas"
										type="number"
										min="1"
									/>
									<Input
										id="isPriority"
										name="isPriority"
										label="É prioridade?"
										type="checkbox"
									/>
								</div>
								<div class="cta-wrapper">
									<Button maxWidth="160px" text="Cancelar" styleType="danger" />
									<Button
										maxWidth="160px"
										text="Confirmar"
										styleType="primary"
										type="submit"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Modal>
		</div>
	</div>
</div>

<style>
	.guest-actions-container {
		width: 100%;
	}
	.guest-actions-wrapper {
		padding: 1rem 0px;
		display: flex;
		justify-content: flex-end;
	}

	.add-guest-form-container {
		width: 100%;
		height: 100%;
	}

	.add-guest-form-wrapper {
		height: 100%;
		background-color: var(--white-color);
		border-radius: 15px;
	}

	.add-guest-form {
		height: 80vh;
		padding: 1rem;
		display: flex;
		flex-direction: column;
	}

	.form-content-wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.input-wrapper {
		width: 100%;
	}
	.cta-wrapper {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
