import toast from "react-hot-toast";

const getAppsData = () => {
    const storedData = localStorage.getItem('myApps');

    if (storedData) {
        const jsonData = JSON.parse(storedData);
        return jsonData;
    } else {
        return [];
    }
}

const storedAppsData = (id) => {
    const currentData = getAppsData();

    if (currentData) {
        if (currentData.includes(id)) {
            toast.error('This app is already installed!', {
                id: 'already-installed',
                style: {
                    borderRadius: '12px',
                    background: '#1e1e2e',
                    color: '#fff',
                    padding: '16px',
                },
            });
            return true;
        } else {
            currentData.push(id);
            const stringfyData = JSON.stringify(currentData);
            localStorage.setItem('myApps', stringfyData);
            return false;
        }
    } else {
        console.log("Invalid Id number");
        return false;
    }
}

const deleteStoredData = (id)=>{
    const storedData = getAppsData();

    if(storedData)
    {
        const filterData = storedData.filter((item) => item !== id);
        const stringfyData = JSON.stringify(filterData);

        localStorage.setItem('myApps', stringfyData);

        toast.success('This app is successfully uninstall', {
                id: 'uninstall',
                style: {
                    borderRadius: '12px',
                    background: '#1e1e2e',
                    color: '#fff',
                    padding: '16px',
                },
            });

    }
}

export { getAppsData, storedAppsData, deleteStoredData };