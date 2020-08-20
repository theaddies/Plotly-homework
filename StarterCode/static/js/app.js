sampleData = "../../samples.json"

//get subjectIDs so we can populate the pull down list.

d3.json(sampleData).then(function(data){

    console.log(this)
    var subjectIDs = data.names
    console.log(subjectIDs)
    updateIDList(subjectIDs);
    var selectedID = d3.select("#selDataset");
    selectedID.on("change", runFilter)
    var theRow = {}
    function runFilter(){
        var idValue  = String(selectedID.node().value);
        console.log("runfilter", selectedID)
        console.log("here", idValue)
        data.samples.forEach(function(name){
            if (name.id == idValue) {
                theRow = name
                console.log(name)
            }
        // console.log(otuIDs);
        // console.log(sampleValues);
        // console.log(otuLabels);
        })
        console.log(theRow)
        //var otuIDs = data.
    }























})



function updateIDList(subjectIDs){
    //d3.event.preventDefault();
    console.log(d3.select("#selDataset"))
    d3.select("#selDataset").selectAll("option").remove()
    d3.select('#ID').append("option").text("empty");
    subjectIDs.forEach(function(id){
        var row = d3.select("#selDataset");
        row.append("option").text(id);
    })
}