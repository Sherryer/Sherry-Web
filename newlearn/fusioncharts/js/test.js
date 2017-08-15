/**
 * fusioncharst xml
 * @example finishLesson(1);
 * @param {Number} test
 */
function finishLesson(lesson) {
	var name = [],chart ={};
	var fu = document.getElementsByClassName("fu");
	var val = fu[0].attributes[2].value;
	var div = document.createElement("div");
	div.innerHTML = val;
	var str = div.getElementsByTagName("chart")[0].attributes;
	for(var i = 0; i < str.length; i++) {
		name.push(str[i].name);
	}
    for (var index = 0; index < name.length; index++) {
        chart[name[index]]=str[index].value;
    }
	var ageGroupChart = new FusionCharts({
					type: 'column2d',
					renderAt: 'chart',
					width: '300',
					height: '300',
					dataFormat: 'json',
					dataSource: {
						"chart": chart,
						"data": [{
							"label": "Teenage",
							"value": "1250400"
						}, {
							"label": "Adult",
							"value": "1463300"
						}, {
							"label": "Mid-age",
							"value": "1050700"
						}, {
							"label": "Senior",
							"value": "491000"
						}]
					}
				}).render();
}
window.onload = finishLesson;