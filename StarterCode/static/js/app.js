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
        var idValue  = String(d3.select("#selDataset").node().value);
        console.log("runfilter", d3.select("#selDataset"))
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
       
        topSampleValues = theRow.sample_values.slice(0,10).reverse();
        topOTUIDs = theRow.otu_ids.slice(0,10).reverse();
        var otuString = "OTU ";
        var topStringOTUIDS = topOTUIDs.map(function(item){
            return otuString.concat(item.toString());
        })
        topOTULabels = theRow.otu_labels.slice(0,10).reverse();
        console.log(topSampleValues);
        console.log(topOTUIDs);
        console.log(topOTULabels);
        var trace1 = {
            y: topStringOTUIDS,
            x: topSampleValues,
            type: "bar",
            orientation: "h",
            text: topOTULabels
        }
        var graphData = [trace1];
        Plotly.newPlot("bar", graphData)
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