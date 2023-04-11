// use local storage to manage cart data
const addToDb = id => {
    let featuredJob = getfeaturedJob();
    // add quantity
    const quantity = featuredJob[id];
    if (!quantity) {
        featuredJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        featuredJob[id] = newQuantity;
    }
    localStorage.setItem('featured-job', JSON.stringify(featuredJob));
}

const removeFromDb = id => {
    const featuredJob = getfeaturedJob();
    if (id in featuredJob) {
        delete featuredJob[id];
        localStorage.setItem('featured-job', JSON.stringify(featuredJob));
    }
}

const getfeaturedJob = () => {
    let featuredJob = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('featured-job');
    if (storedCart) {
        featuredJob = JSON.parse(storedCart);
    }
    return featuredJob;
}

const deletefeaturedJob = () => {
    localStorage.removeItem('featured-job');
}

export {
    addToDb,
    removeFromDb,
    getfeaturedJob,
    deletefeaturedJob
}
