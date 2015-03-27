


document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
	var iframe = null;
	var count = count();
	console.log(count)
	if(count < 50){
		console.log('APPLENDING')
		iframe = document.createElement('iframe');
		iframe.setAttribute('src', document.URL + '?asd');
		console.log('WHAT GIVES?')
		document.getElementById('wrapper').appendChild(iframe);
	}
	function count(){
		var count = 0;
		var obj = window;
		while(obj != window.top){
			count += 1;
			obj = obj.parent;
		}
		return count
		
	}
	if(iframe){
		c1 = Math.floor(Math.random() *255);
		c2 = Math.floor(Math.random() * 255);
		c3 = Math.floor(Math.random() * 255);
		document.body.style.background = "rgb("+c1 + ',' + c2 + ',' + c3 +")";
	setInterval(function(){

		iframe.style.opacity = .99;
		iframe.style.transform = "rotate(" + (Math.random() - .5)*360 + "deg)";
	}

		,2000);

	setInterval(function(){
		iframe.style.opacity = .99;
	}, 240

		)
	}

}