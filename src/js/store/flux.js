const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			vehicle: [],
			vehicles: [],
			planet: [],
			planets: [],
			character: [],
			characters: []
		},
		actions: {
			displayCharacters: () => {
				fetch('https://www.swapi.tech/api/people/')
					.then(response => response.json())
					.then(response => {
						console.log(response);
						setStore({ characters: response.results })
					})
					.catch(err => console.error(err));
			},
			displayPlanets: () => {
				fetch('https://www.swapi.tech/api/planets/')
					.then(response => response.json())
					.then(response => {
						setStore({ planets: response.results })
					})
					.catch(err => console.error(err));
			},
			displayVehicles: () => {
				fetch('https://www.swapi.tech/api/vehicles/')
					.then(response => response.json())
					.then(response => {
						setStore({ vehicles: response.results })
					})
					.catch(err => console.error(err));
			},
			getOneCharacter: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => response.json())
					.then(response => {
						setStore({ character: response.result.properties })
					})
					.catch(err => console.error(err));
			},
			getOnePlanet: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => response.json())
					.then(response => {
						setStore({ planet: response.result.properties })
					})
					.catch(err => console.error(err));
			},
			getOneVehicle: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(response => response.json())
					.then(response => {
						console.log(response.result.properties);
						setStore({ vehicle: response.result.properties })
					})
					.catch(err => console.error(err));
			},
			handleFavorite: (item) => {
				const store = getStore();
				if(store.favorites.includes(item)) {
					const allButRemoved = store.favorites.filter((e) => {
						return e != item;
						})
						setStore({ favorites: allButRemoved })
				} else {
					setStore({ favorites: [...store.favorites, item] })
					console.log(store.favorites)
				}

				// object instead of array try with target.value 
			},
			deleteFavorite: (oldFav) => {
				let store = getStore();
				const allButRemoved = store.favorites.filter((e) => {
				return e != oldFav;
				})
				setStore({ favorites: allButRemoved })
			},
			// addToFavorites: (fav) => {
			// 	let store = getStore();
			// 	if (!store.favorites.includes(fav)) {
			// 		setStore({ favorites: [...store.favorites, fav] })
			// 	}
			// }
		},
	}
};

export default getState;
