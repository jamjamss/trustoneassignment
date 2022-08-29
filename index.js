let wrapper = document.querySelector('.wrapper');
let form = wrapper.querySelectorAll('.form');
let submitInput = form[0].querySelector('input[type="submit"]');





function getDataForm(e) {

    e.preventDefault();

    
    

	Promise.all([
		fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227003%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson"),
		fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227019%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson"),
		fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227037%22+&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson"),
		fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227123%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson"),
		fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227139%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson"),
		fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227163%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson"),
		fetch("https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=CO_CODE+%3D+%2227053%22&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=COUNTY_PIN%2C+OWNER_NAME%2C+ANUMBER%2C+ST_NAME%2C+ST_POS_TYP%2C+ZIP%2C+CTU_NAME%2C+STATE_CODE%2C+ZIP%2C+CO_NAME%2C+SALE_VALUE&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson")
	  ]).then(responses =>
		Promise.all(responses.map(response => response.json()))
	  ).then(data =>
		console.log(data)
	  ).catch(err =>
		console.log(err)
	  );

    

}

document.addEventListener('DOMContentLoaded', function () {

    submitInput.addEventListener('click', getDataForm, false);

}, false);
