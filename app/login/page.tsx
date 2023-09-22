'use client';

import Button from '@components/Button';
import Form from '@components/Form';
import TextField from '@components/TextField';
import { generateJSXMeshGradient } from 'meshgrad';

interface FieldValues {
	email: string;
	password: string;
}

export default function Page() {
	function onSubmit(values: FieldValues) {
		console.log(values);
	}

	return (
		<>
			<div
				style={generateJSXMeshGradient(6, '#0384FE', 1)}
				className="fixed w-screen h-screen opacity-5"
			></div>
			<div className="relative min-h-screen min-w-screen flex justify-center py-[20vh]">
				<div>
					<p className="font-light m-0 text-neutral-700">Welcome back,</p>
					<h1 className="m-0 font-bold">Sign in to Human.</h1>
					<Form
						options={{
							mode: 'onChange',
							delayError: 200,
							defaultValues: {
								email: '',
								password: '',
							},
						}}
						className="grid gap-6 mt-8"
						onSubmit={onSubmit}
					>
						{/* <Controller
							name="email"
							defaultValue=""
							control={control}
							rules={{ minLength: 10 }}
							render={({ field }) => (
								<>
									<TextField
										{...field}
										isRequired
										type="email"
										label="Email address"
										className="grid"
										errorMessage={
											errors.email?.message != null ? 'ok' : undefined
										}
										onChange={(v) => field.onChange(v)}
									/>
									{field.value}
								</>
							)}
						/> */}
						<TextField
							isRequired
							name="email"
							type="email"
							label="Email address"
							className="grid"
						/>
						<Button type="submit" className="w-fit">
							OK
						</Button>
					</Form>
				</div>
			</div>
		</>
	);
}
