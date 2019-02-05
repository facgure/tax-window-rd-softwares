function load() {
	var mydata = JSON.parse(data);
	alert(mydata[0].app-name);
	alert(mydata[0].app-image-preview);
	alert(mydata[0].app-developer);
	alert(mydata[0].app-type);
	alert(mydata[0].app-description);
	alert(mydata[0].app-download-url);
	alert(mydata[0].app-comment);
}