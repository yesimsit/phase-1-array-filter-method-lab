// Code your solution here
function findMatching(driversList,string){

    return driversList.filter((match) => match.toLowerCase() === string.toLowerCase());
}


function fuzzyMatch(driversList,string){
    return driversList.filter ((match) =>
    match.toLowerCase().indexOf(string.toLowerCase()) === 0
);
};



function matchName(driversList, driverName ){
    return driversList.filter((matched) => matched.name === driverName );
}