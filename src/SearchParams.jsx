import {useState, useEffect} from 'react';
import Pet from './Pet';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    // above is shorthand for this piece of code:
    // const locationHook = useState("");
    // const location = locationHook[0];
    // const setLocation = locationHook[1];
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const breeds = [];

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json();

        setPets(json.pets);
    }

    return(
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input 
                    id="location" 
                    value={location} 
                    placeholder="location"
                    onChange={(e) => setLocation(e.target.value)}
                     />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select 
                    id="animal" 
                    value={animal} 
                    placeholder="animal" 
                        onChange={(e) => {
                            setAnimal(e.target.value);
                        }
                    }
                    >
                        <option value=""></option>
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select 
                    id="breed" 
                    disabled={breeds.length === 0}
                    value={breed} 
                    placeholder="breed" 
                    onChange={(e) => setBreed(e.target.value)}
                    >
                        <option value=""></option>
                        {breeds.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>

                <button>Submit</button>
            </form>
            {pets.map(pet => (
                <Pet 
                    key={pet.id} 
                    name={pet.name} 
                    animal={pet.animal} 
                    breed={pet.breed} 
                />
            ))}
        </div>
    )
}

export default SearchParams;