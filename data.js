let poses = [
    {name: "Tree", benefit: "balance", ability: "easy", symbol: "universe"},
    {name: "Pigeon", benefit: "flexibility", ability: "advanced", symbol: "confidence"},
    {name: "Mountain", benefit: "concentration", ability: "easy", symbol: "power"},
    {name: "Warrior", benefit: "circulation", ability: "intermediate", symbol: "strength"},
    {name: "Bridge", benefit: "opening", ability: "intermediate", symbol: "bond"},

]
// Returns all objects in the array
const getAll = () => {
    return poses;
}
// console.log(getAll());

const getItem = (url) => {
    // search the poses array
    return poses.find((pose) => {
        return pose.name === url;
    });
}

const addItem = (item) => {
    const newItem = getItem(item.name);
    let msg = '';
    if (newItem) {
        msg = item.name + ' pose already exists!'
        // console.log("item exists");
    } else {
        poses.push(item);
        msg = item.name + ' pose has been added!'
        // console.log("item added");
    }
    return { result: msg };
}

const deleteItem = (item) => {
    const newItem = getItem(item.name);
    let msg = '';
    if (newItem) {
        const index = poses.indexOf(newItem);
        item.slice(index, 1);
        msg = item.name + ' pose was deleted!'
        // console.log("item deleted");
        // console.log(poses);

    } else {
        msg = item.name + ' pose was not found!'
        // console.log("item not deleted");
    }
    return { result: msg };
}

// addItem({name: "TestingTesting", benefit: "123", ability: "123",symbol:"123" })
// deleteItem({name: "TestingTesting", benefit: "123", ability: "123",symbol:"123" })
// addItem({name: "Tree", benefit: "123", ability: "123",symbol:"123" })
// deleteItem({name: "Tree", benefit: "balance", ability: "easy",symbol:"universe" })
// console.log(poses);

export { getAll, getItem, addItem, deleteItem };
