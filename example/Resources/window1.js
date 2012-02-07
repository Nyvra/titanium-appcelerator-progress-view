Ti.include("modules/progress.view.js");

var progressView = new ProgressView();

progressView.show({
	text:"Error message",
	error:true
});

setTimeout(function() {
	progressView.hide();
}, 2000);

setTimeout(function() {
	progressView.show({
		text:"Loading..."
	});
}, 3000);

setTimeout(function() {
	progressView.change({
		text:"Success message!",
		success:true
	});
}, 5000);

setTimeout(function() {
	progressView.hide();
}, 7000);

setTimeout(function() {
	progressView.show({
		error:true
	});
}, 9000);

setTimeout(function() {
	progressView.change({
		text:"Powered by Nyvra Software",
		success:true
	});
}, 11000);

setTimeout(function() {
	progressView.change({
		text:"Powered by Nyvra Software"
	});
}, 13000);