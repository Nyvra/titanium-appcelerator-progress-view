<h1>Progress View</h1>
<p>This is an progress view, to show some status of your application. You can set <strong>loading</strong>, <strong>success</strong> and <strong>error</strong> status.</p>
<p>With just three lines, you can show and hide you progress view from your application.</p>
<p><img src="http://img18.imageshack.us/img18/7756/progressview.png"></p>
<h1>Usage</h1>
<p>It's very simple to use this component. You have just to include the <i>modules</i> folder in your project and include the file <b>progress.view.js</b> in your Titanium project file.</p>
<p><b>See this example:</b></p>
<pre>Ti.include("modules/progress.view.js");

var progressView = new ProgressView();

progressView.show({
	text:"Error message"
});

setTimeout(function() {
	progressView.hide();
}, 2000);</pre>
<h2>Window</h2>
<p>If you are using an external window (url:...) you have not to set the window. The API will take the currentWindow to add the ProgressView. But, if you aren't using an external window you have to set the window when you instance a new ProgressView, like this example:</p>
<pre>Ti.include("modules/progress.view.js");

var win = Ti.UI.createWindow({
	title: "Progress View"
});

var progressView = new ProgressView({
	window: win
});</pre>
<h2>Text Label</h2>
<p>You can set a text to your progress view. The view will resize if needed. If you wanna change the text, you have just to use the method <b>setTextLabel</b> with the text.</p>
<h2>Change properties</h2>
<p>If you wanna change the text or the image of your progress view, you have not to hide and show another progress view. For this, you have to use the method <b>change</b> with the properties you want, like you created.</p>
<h2>Images</h2>
<p>I made two images in this project: <b>success</b> and <b>error</b>. To use them, you have to set the property with a BOOLEAN value. See the examples:</p>
<pre>Ti.include("modules/progress.view.js");

var progressView = new ProgressView();

progressView.show({
	text:"Error message",
	error:true
});

setTimeout(function() {
	progressView.change({
		success:true
	});
}, 2000);

setTimeout(function() {
	progressView.hide();
}, 4000);</pre>
<h1>Credits</h1>
<p>This project was based in the <a href="https://github.com/samvermette/SVProgressHUD" target="_blank">SVProgressHUD</a> from <a href="http://twitter.com/samvermette" target="_blank">@samvermette.</a></p>
<p>The images was made by <a href="http://twitter.com/glyphish" target="_blank">@glyphish</a></p>
