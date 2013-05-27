# Usage

jQuery Menu Toggle is a simple jQuery plugin to toggle menus.

#### Menu Fade Toggle

```javascript
	$("document").ready(function(){
		$("#topmenu").menutoggle({
				handler: "#topmenu_toggle",
				effect: "fade",
				speed: 2000
		});
	});
```

#### Menu Slide Toggle

```javascript
	$("document").ready(function(){
		$("#topmenu").menutoggle({
				handler: "#topmenu_toggle",
				effect: "slide",
				speed: 2000
		});
	});
```

#### Menu Toggle without any effect

```javascript
	$("document").ready(function(){
		$("#topmenu").menutoggle({
				handler: "#topmenu_toggle",
				effect: "none",
				speed: 2000
		});
	});
```

Option 'effect' is not required.

[Download the latest release](https://github.com/Companjo/jquery-menutoggle/archive/master.zip).
