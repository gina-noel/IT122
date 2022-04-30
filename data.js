let poses = [
    {name: "Tree", benefit: "balance", ability: "easy", symbol: "universe"},
    {name: "Pigeon", benefit: "flexibility", ability: "advanced", symbol: "confidence"},
    {name: "Mountain", benefit: "concentration", ability: "easy", symbol: "power"},
    {name: "Warrior", benefit: "circulation", ability: "intermediate", symbol: "strength"},
    {name: "Bridge", benefit: "opening", ability: "intermediate", symbol: "bond"},

]
// Returns all objects in the posses array
const getAll = () => {
    return poses;
}
// console.log(getAll());
// Returns a specific pose or item in the poses array
const getItem = (pose) => {
    // search the poses array
    return poses.find((poseName) => {
        return poseName.name === pose;
    });
}

// Adds a pose to the poses array via the name field
const addItem = (pose) => {
    const newPose = getItem(pose.name);
    let msg = '';
    if (newPose) {
        msg = pose.name + ' pose already exists!'
        // console.log("item exists");
    } else {
        poses.push(pose);
        msg = pose.name + ' pose has been added!'
        // console.log("item added");
    }
    return { result: msg };
}

// first checks to see if the pose is already in the poses arrays.
// if the pose exists, it removes it from the poses array
const deleteItem = (pose) => {
    const newPose = getItem(pose.name);
    let msg = '';
    if (newPose) {
        const index = poses.indexOf(newPose);
        poses.splice(index, 1);
        msg = pose.name + ' pose was deleted!'
        // console.log("item deleted");
        // console.log(poses);

    } else {
        msg = pose.name + ' pose was not found!'
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
