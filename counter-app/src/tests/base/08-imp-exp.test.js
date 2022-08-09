
import {getHeroeById} from '../../base/08-imp-exp'
import heroes from '../../data/heroes'
import {getHeroesByOwner} from '../../base/08-imp-exp'

describe("pruebas en funciones de Heroes", () =>{
    
    test("debe de retornar un heroe por id", () =>{

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData)


    })
    
    test("debe de retornar un undefined si Heroe no existe", () =>{

        const id = 6;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined)


    })

    test("debe de retornar un arreglo con los heroes de DC", () =>{

        const owner = "DC";
        const heroes = getHeroesByOwner(owner);
        const ownerData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(ownerData)


    })

    test("debe de retornar un arreglo con los heroes de Marvel", () =>{

        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2)


    })

 })  