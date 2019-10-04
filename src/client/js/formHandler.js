const handleSubmit = async (url = "") => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);  
    }
}

module.exports = handleSubmit;
