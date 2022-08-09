

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'osZtEqEP2rCkH5B69eL3GjGTfKdZSr0i';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

       return url;

    } catch (error) {
        // manejo del error
        return "no existe";
    }
    
    
    
}

 getImagen();



