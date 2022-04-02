# Criando Apps Web com Angular e Redux

> As aulas foram organizadas dentro dos _commits_

- Apresentação

<details><summary>Instalação</summary>

<br>

```ps
npm install -g @angular/cli@8.3.5

ng --version
8.3.5
```

```ps
npm install -g ionic@5.4.1

ionic --version
5.4.1
```

```ps
ionic start eshop blank

cd eshop
npm install @ngrx/store --save
```

</details>

<details><summary>State Management, Redux, NgRx</summary>

<br>

Ciclo:

```
State (define) UI (dispara) ACTIONS (envia) REDUCERS (atualiza) STORES (contém) State...
```

https://ngrx.io/

</details>

<details><summary>Models</summary>

<br>

```ps
ng add @ngrx/store
```

```ps
npm install @ngrx/store@latest --legacy-peer-deps
ng g @ngrx/store:init
```

</details>

- Actions
- Reducers
- Configurando o Store

<details><summary>Data Service</summary>

<br>

Mockoon

\*.json

```json
{}[
	{
		"id": "1c0487fd-1e33-47ec-9541-f8de43d8abfe",
		"title": "GPS Automotivo Garmin Drive 51",
		"brand": "Garmin",
		"tag": "gps-automotivo-garmin-drive-51",
		"price": 809.1,
		"image": "https://baltademos.blob.core.windows.net/eshop/gps-automotivo-garmin-drive-51.jpg"
	},
	{
		"id": "f58448de-bb53-48fa-8347-70bad73f1ec4",
		"title": "Notebook Samsung Essentials E30",
		"brand": "Samsung",
		"tag": "notebook-samsung-essentials-e30",
		"price": 1709.99,
		"image": "https://baltademos.blob.core.windows.net/eshop/notebook-samsung-essentials-e30.jpg"
	},
	{
		"id": "0f8e8418-f3a3-4329-91c6-4548dc6af16b",
		"title": "Smartphone Apple iPhone Xr 128GB",
		"brand": "Apple",
		"tag": "smartphone-apple-iphone-xr-128gb",
		"price": 4949.1,
		"image": "https://baltademos.blob.core.windows.net/eshop/smartphone-apple-iphone-xr-128gb.jpg"
	},
	{
		"id": "9a0dc81e-0b76-427f-8f9e-7502c2bd1005",
		"title": "Smartphone Motorola One 64GB",
		"brand": "Motorola",
		"tag": "smartphone-motorola-one-64gb",
		"price": 999.0,
		"image": "https://baltademos.blob.core.windows.net/eshop/smartphone-motorola-one-64gb.jpg"
	},
	{
		"id": "58b3f5b6-55e8-4aa4-a352-a2e061b8aa6d",
		"title": "Smartphone Samsung Galaxy M20 64GB",
		"brand": "Samsung",
		"tag": "smartphone-samsung-galaxy-m20-64gb",
		"price": 1079.0,
		"image": "https://baltademos.blob.core.windows.net/eshop/smartphone-samsung-galaxy-m20-64gb.jpg"
	}
]
```

</details>

<br>

# Referência

[Carreira Desenvolvedor Frontend Angular - Balta.io](https://balta.io/carreiras/desenvolvedor-frontend-angular)
