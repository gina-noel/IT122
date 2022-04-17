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
//
// const getItem = (name) => {
//     // search the poses array
//     return poses.find((pose) => {
//         return pose.name === name;
//     });
// }
// console.log(getItem("Tree"));

export { getAll, getItem };
