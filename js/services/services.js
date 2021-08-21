const postData = async function (url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: data
    });
    console.log(res);
    const newData = await res.json();
    console.log(newData);
    return newData;
};

const getResourse = async function (url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
};

export {
    postData,
    getResourse
};